(function () {
  const STORAGE_KEY = "ptw-workflow-manager-v1";
  const SUPER_ADMIN_MOBILE = "0752600002";
  const SUPER_ADMIN_PASSWORD = "Raje@0207";
  const SESSION_KEY = "ptw-session-v1";

  const roles = {
    super_admin: "Super Admin",
    admin: "Admin",
    raiser: "PTW Raiser",
    approver: "PTW Approver",
    supervisor: "One at Risk",
    auditor: "PTW Audit Team"
  };

  const activityTypes = ["Work at Height", "Electrical Work", "Excavation", "Material Handling"];
  const ptwStatuses = [
    "Raised",
    "Rejected",
    "Approved",
    "Checklist Submitted",
    "Audit Required",
    "Audit Rejected",
    "Final Approved"
  ];

  const checklistLibrary = {
    "Work at Height": [
      "Full body harness inspected and worn",
      "Lifeline or anchor point available",
      "Ladder/scaffold certified and stable",
      "Exclusion zone barricaded below work area"
    ],
    "Electrical Work": [
      "Isolation and lockout/tagout completed",
      "Voltage absence confirmed",
      "Insulated tools and PPE available",
      "Emergency response kit accessible"
    ],
    Excavation: [
      "Underground utilities identified",
      "Excavation edge protected",
      "Access and egress ladder available",
      "Spoil kept away from trench edge"
    ],
    "Material Handling": [
      "Load weight verified",
      "Lifting gear inspected",
      "Banksman assigned",
      "Route clear of obstruction"
    ]
  };

  const seedUsers = [
    { id: "u-admin-1", name: "Operations Admin", mobile: "0752600100", role: "admin", active: true },
    { id: "u-raiser-1", name: "Project Coordinator", mobile: "0752600101", role: "raiser", active: true },
    { id: "u-approver-1", name: "Project Manager", mobile: "0752600102", role: "approver", active: true },
    { id: "u-supervisor-1", name: "Site Supervisor", mobile: "0752600103", role: "supervisor", active: true },
    { id: "u-auditor-1", name: "ESH Head", mobile: "0752600104", role: "auditor", active: true }
  ];

  const state = loadState();
  let session = loadSession();
  let pendingOtp = null;
  let selectedTab = "dashboard";
  let selectedPtwId = state.ptws[0]?.id || null;

  const app = document.querySelector("#app");

  function defaultState() {
    return {
      users: seedUsers,
      ptws: [],
      auditLog: [],
      checklists: checklistLibrary,
      settings: {
        deviceBinding: true,
        otpForCriticalActions: true,
        smsNotifications: true,
        whatsappAlerts: true,
        lowNetworkMode: true,
        locale: "English"
      },
      admin: {
        mobile: SUPER_ADMIN_MOBILE,
        passwordHash: "",
        firstLogin: true,
        active: true
      }
    };
  }

  function loadState() {
    const saved = localStorage.getItem(STORAGE_KEY);
    const parsed = saved ? JSON.parse(saved) : defaultState();
    return { ...defaultState(), ...parsed };
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function loadSession() {
    const saved = sessionStorage.getItem(SESSION_KEY);
    return saved ? JSON.parse(saved) : null;
  }

  function saveSession() {
    if (session) sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
    else sessionStorage.removeItem(SESSION_KEY);
  }

  async function hashText(value) {
    const data = new TextEncoder().encode(value);
    const digest = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(digest))
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");
  }

  async function ensureAdminHash() {
    if (!state.admin.passwordHash) {
      state.admin.passwordHash = await hashText(SUPER_ADMIN_PASSWORD);
      saveState();
    }
  }

  function uid(prefix) {
    return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
  }

  function nowStamp() {
    return new Date().toISOString();
  }

  function prettyDate(value) {
    if (!value) return "-";
    return new Date(value).toLocaleString([], { dateStyle: "medium", timeStyle: "short" });
  }

  function currentUser() {
    if (!session) return null;
    if (session.role === "super_admin") {
      return { id: "super-admin", name: "Super Admin", mobile: SUPER_ADMIN_MOBILE, role: "super_admin", active: true };
    }
    return state.users.find((user) => user.id === session.userId) || null;
  }

  function logAction(action, details = {}) {
    const user = currentUser();
    state.auditLog.unshift({
      id: uid("log"),
      at: nowStamp(),
      action,
      actor: user ? `${user.name} (${roles[user.role]})` : "System",
      details
    });
    saveState();
  }

  function requireCriticalOtp(actionName) {
    if (!state.settings.otpForCriticalActions) return true;
    const code = String(Math.floor(100000 + Math.random() * 900000));
    const entered = window.prompt(`Critical action OTP for ${actionName}: ${code}`);
    const passed = entered === code;
    logAction(passed ? "CRITICAL_OTP_VERIFIED" : "CRITICAL_OTP_FAILED", { actionName });
    return passed;
  }

  function toast(message) {
    const existing = document.querySelector(".toast");
    if (existing) existing.remove();
    const node = document.createElement("div");
    node.className = "toast";
    node.textContent = message;
    document.body.appendChild(node);
    setTimeout(() => node.remove(), 2600);
  }

  function syncIcon() {
    if (window.lucide) window.lucide.createIcons();
  }

  function render() {
    const user = currentUser();
    if (!user) {
      renderLogin();
      syncIcon();
      return;
    }
    if (user.role === "super_admin" && state.admin.firstLogin) {
      renderPasswordChange();
      syncIcon();
      return;
    }
    renderShell(user);
    syncIcon();
  }

  function renderLogin() {
    app.className = "auth-page";
    app.innerHTML = `
      <main class="auth-card">
        <div class="brand-lockup compact">
          <div class="brand-mark">PTW</div>
          <div>
            <h1>Permit to Work Manager</h1>
            <p>Mobile-first workflow, evidence, approval, and audit tracking.</p>
          </div>
        </div>
        <form id="login-form" class="auth-form">
          <label>
            <span>Mobile number</span>
            <input id="login-mobile" inputmode="tel" autocomplete="tel" placeholder="0752600101" required />
          </label>
          <label id="password-field" class="hidden">
            <span>Super Admin password</span>
            <input id="login-password" type="password" autocomplete="current-password" />
          </label>
          <button class="primary-button full" type="submit">Send OTP</button>
        </form>
        <form id="otp-form" class="auth-form hidden">
          <div class="notice">
            <strong>Demo OTP</strong>
            <span id="otp-preview"></span>
          </div>
          <label>
            <span>Enter OTP</span>
            <input id="otp-code" inputmode="numeric" maxlength="6" required />
          </label>
          <button class="primary-button full" type="submit">Verify and continue</button>
        </form>
        <div class="demo-users">
          <span>Demo mobiles</span>
          <button type="button" data-mobile="0752600002">Super Admin</button>
          <button type="button" data-mobile="0752600101">Raiser</button>
          <button type="button" data-mobile="0752600102">Approver</button>
          <button type="button" data-mobile="0752600103">Supervisor</button>
          <button type="button" data-mobile="0752600104">Auditor</button>
        </div>
      </main>
    `;

    const mobileInput = document.querySelector("#login-mobile");
    const passwordField = document.querySelector("#password-field");
    mobileInput.addEventListener("input", () => {
      passwordField.classList.toggle("hidden", mobileInput.value.trim() !== SUPER_ADMIN_MOBILE);
    });

    document.querySelectorAll("[data-mobile]").forEach((button) => {
      button.addEventListener("click", () => {
        mobileInput.value = button.dataset.mobile;
        passwordField.classList.toggle("hidden", mobileInput.value !== SUPER_ADMIN_MOBILE);
        document.querySelector("#login-password")?.focus();
      });
    });

    document.querySelector("#login-form").addEventListener("submit", onLoginSubmit);
    document.querySelector("#otp-form").addEventListener("submit", onOtpSubmit);
  }

  async function onLoginSubmit(event) {
    event.preventDefault();
    const mobile = document.querySelector("#login-mobile").value.trim();
    const password = document.querySelector("#login-password").value;
    await ensureAdminHash();

    let user;
    if (mobile === SUPER_ADMIN_MOBILE) {
      if (!state.admin.active) return toast("Super Admin account is deactivated.");
      if ((await hashText(password)) !== state.admin.passwordHash) return toast("Invalid Super Admin password.");
      user = { id: "super-admin", role: "super_admin", mobile };
    } else {
      user = state.users.find((item) => item.mobile === mobile && item.active);
      if (!user) return toast("No active user is mapped to this mobile number.");
    }

    const activeRoleConflict = sessionStorage.getItem(`active-mobile-${mobile}`);
    if (activeRoleConflict && activeRoleConflict !== user.role) {
      return toast("This mobile number already has an active role session.");
    }

    pendingOtp = {
      code: String(Math.floor(100000 + Math.random() * 900000)),
      user,
      mobile,
      expiresAt: Date.now() + 5 * 60 * 1000
    };
    document.querySelector("#otp-preview").textContent = pendingOtp.code;
    document.querySelector("#otp-form").classList.remove("hidden");
    toast("OTP generated for this demo session.");
  }

  function onOtpSubmit(event) {
    event.preventDefault();
    if (!pendingOtp || Date.now() > pendingOtp.expiresAt) return toast("OTP expired. Please request a new code.");
    if (document.querySelector("#otp-code").value.trim() !== pendingOtp.code) return toast("Invalid OTP.");

    session = {
      userId: pendingOtp.user.id,
      role: pendingOtp.user.role,
      mobile: pendingOtp.mobile,
      deviceId: getDeviceId(),
      loginAt: nowStamp()
    };
    sessionStorage.setItem(`active-mobile-${pendingOtp.mobile}`, pendingOtp.user.role);
    pendingOtp = null;
    saveSession();
    logAction("LOGIN", { mobile: session.mobile, role: roles[session.role] });
    render();
  }

  function getDeviceId() {
    const key = "ptw-device-id";
    let id = localStorage.getItem(key);
    if (!id) {
      id = uid("device");
      localStorage.setItem(key, id);
    }
    return id;
  }

  function renderPasswordChange() {
    app.className = "auth-page";
    app.innerHTML = `
      <main class="auth-card">
        <div class="brand-lockup compact">
          <div class="brand-mark">SA</div>
          <div>
            <h1>Change Super Admin Password</h1>
            <p>First login requires a new password before system access is enabled.</p>
          </div>
        </div>
        <form id="change-password-form" class="auth-form">
          <label>
            <span>New password</span>
            <input id="new-password" type="password" minlength="8" required />
          </label>
          <label>
            <span>Confirm password</span>
            <input id="confirm-password" type="password" minlength="8" required />
          </label>
          <button class="primary-button full" type="submit">Save password</button>
        </form>
      </main>
    `;
    document.querySelector("#change-password-form").addEventListener("submit", async (event) => {
      event.preventDefault();
      const next = document.querySelector("#new-password").value;
      const confirm = document.querySelector("#confirm-password").value;
      if (next !== confirm) return toast("Passwords do not match.");
      state.admin.passwordHash = await hashText(next);
      state.admin.firstLogin = false;
      logAction("SUPER_ADMIN_PASSWORD_CHANGED");
      saveState();
      toast("Password changed.");
      render();
    });
  }

  function renderShell(user) {
    app.className = "app-shell";
    const availableTabs = getTabsForRole(user.role);
    if (!availableTabs.some((tab) => tab.id === selectedTab)) selectedTab = availableTabs[0].id;
    app.innerHTML = `
      <header class="topbar">
        <div class="brand-lockup">
          <div class="brand-mark">PTW</div>
          <div>
            <h1>PTW Workflow Manager</h1>
            <p>${roles[user.role]} · ${user.mobile}</p>
          </div>
        </div>
        <div class="topbar-actions">
          <button class="ghost-button" id="sync-btn" type="button"><i data-lucide="refresh-cw"></i> Sync</button>
          <button class="ghost-button" id="logout-btn" type="button"><i data-lucide="log-out"></i> Logout</button>
        </div>
      </header>
      <main class="layout">
        <aside class="sidebar">
          <nav class="nav-stack">
            ${availableTabs
              .map(
                (tab) => `
                  <button class="nav-button ${selectedTab === tab.id ? "active" : ""}" data-tab="${tab.id}" type="button">
                    <i data-lucide="${tab.icon}"></i>${tab.label}
                  </button>`
              )
              .join("")}
          </nav>
          ${renderSidebar(user)}
        </aside>
        <section class="workspace">${renderCurrentView(user)}</section>
      </main>
    `;
    bindShell(user);
  }

  function getTabsForRole(role) {
    const base = [{ id: "dashboard", label: "Dashboard", icon: "layout-dashboard" }];
    const byRole = {
      super_admin: [
        { id: "users", label: "Users", icon: "users" },
        { id: "workflow", label: "Workflow", icon: "workflow" },
        { id: "reports", label: "Reports", icon: "file-spreadsheet" },
        { id: "auditLog", label: "Audit Logs", icon: "shield-check" }
      ],
      admin: [
        { id: "users", label: "Users", icon: "users" },
        { id: "workflow", label: "Workflow", icon: "workflow" },
        { id: "reports", label: "Reports", icon: "file-spreadsheet" }
      ],
      raiser: [{ id: "raise", label: "Raise PTW", icon: "file-plus-2" }, { id: "reports", label: "Reports", icon: "folder-open" }],
      approver: [{ id: "approvals", label: "Approvals", icon: "badge-check" }, { id: "reports", label: "Reports", icon: "folder-open" }],
      supervisor: [{ id: "checklist", label: "Checklist", icon: "clipboard-check" }, { id: "reports", label: "Reports", icon: "folder-open" }],
      auditor: [{ id: "audits", label: "Audits", icon: "video" }, { id: "reports", label: "Reports", icon: "folder-open" }]
    };
    return base.concat(byRole[role] || []);
  }

  function renderSidebar(user) {
    const counts = ptwStatuses.map((status) => ({
      status,
      count: visiblePtws(user).filter((ptw) => ptw.status === status).length
    }));
    return `
      <section class="sidebar-panel">
        <span class="eyebrow">Current role</span>
        <h2>${roles[user.role]}</h2>
        <div class="metric-grid">
          ${counts
            .filter((item) => item.count)
            .map((item) => `<div><strong>${item.count}</strong><span>${item.status}</span></div>`)
            .join("") || `<div><strong>0</strong><span>No active PTWs</span></div>`}
        </div>
      </section>
    `;
  }

  function bindShell(user) {
    document.querySelectorAll("[data-tab]").forEach((button) => {
      button.addEventListener("click", () => {
        selectedTab = button.dataset.tab;
        render();
      });
    });
    document.querySelector("#logout-btn").addEventListener("click", () => {
      logAction("LOGOUT", { mobile: session.mobile });
      sessionStorage.removeItem(`active-mobile-${session.mobile}`);
      session = null;
      saveSession();
      render();
    });
    document.querySelector("#sync-btn").addEventListener("click", () => {
      logAction("OFFLINE_SYNC_SIMULATED", { lowNetworkMode: state.settings.lowNetworkMode });
      toast("Offline queue synced locally. Backend API can attach here.");
    });
    bindView(user);
  }

  function renderCurrentView(user) {
    const views = {
      dashboard: renderDashboard,
      raise: renderRaise,
      approvals: renderApprovals,
      checklist: renderChecklist,
      audits: renderAudits,
      users: renderUsers,
      workflow: renderWorkflow,
      reports: renderReports,
      auditLog: renderAuditLog
    };
    return (views[selectedTab] || renderDashboard)(user);
  }

  function visiblePtws(user) {
    if (["super_admin", "admin", "auditor", "approver"].includes(user.role)) return state.ptws;
    if (user.role === "raiser") return state.ptws.filter((ptw) => ptw.raiserId === user.id);
    if (user.role === "supervisor") return state.ptws.filter((ptw) => ptw.supervisorId === user.id);
    return [];
  }

  function renderDashboard(user) {
    const ptws = visiblePtws(user);
    return `
      <div class="workspace-heading">
        <div>
          <span class="eyebrow">Live operations</span>
          <h2>${roles[user.role]} Dashboard</h2>
        </div>
        <label class="search-box"><i data-lucide="search"></i><input id="global-search" type="search" placeholder="Search site, activity, status" /></label>
      </div>
      ${renderStatusCards(ptws)}
      <section class="panel">
        <div class="panel-heading">
          <div><h3>Permit queue</h3><p>Real-time PTW stage tracking with evidence and audit state.</p></div>
        </div>
        <div id="ptw-list" class="ptw-list">${renderPtwRows(ptws)}</div>
      </section>
    `;
  }

  function renderStatusCards(ptws) {
    const cards = [
      ["Pending", ptws.filter((ptw) => ["Raised", "Approved", "Audit Required"].includes(ptw.status)).length, "clock"],
      ["Approved", ptws.filter((ptw) => ptw.status === "Final Approved").length, "check-circle"],
      ["Rejected", ptws.filter((ptw) => ptw.status.includes("Rejected")).length, "x-circle"],
      ["Evidence", ptws.reduce((sum, ptw) => sum + evidenceCount(ptw), 0), "camera"]
    ];
    return `<section class="summary-strip">${cards
      .map(
        ([label, value, icon]) => `
        <article class="summary-card">
          <i data-lucide="${icon}"></i>
          <div><strong>${value}</strong><span>${label}</span></div>
        </article>`
      )
      .join("")}</section>`;
  }

  function renderPtwRows(ptws) {
    if (!ptws.length) return `<div class="empty-state">No PTWs available for this role yet.</div>`;
    return ptws
      .map(
        (ptw) => `
        <article class="ptw-row" data-ptw-id="${ptw.id}">
          <div>
            <strong>${ptw.siteId}</strong>
            <span>${ptw.activityType} · ${ptw.status}</span>
          </div>
          <div>
            <span>${prettyDate(ptw.createdAt)}</span>
            <span>${getUserName(ptw.supervisorId)} assigned</span>
          </div>
        </article>`
      )
      .join("");
  }

  function evidenceCount(ptw) {
    const checklist = ptw.checklist?.items?.reduce((sum, item) => sum + (item.photos?.length || 0), 0) || 0;
    return checklist + (ptw.audit?.evidence?.length || 0);
  }

  function getUserName(id) {
    return state.users.find((user) => user.id === id)?.name || "Unassigned";
  }

  function renderRaise(user) {
    const supervisors = state.users.filter((item) => item.role === "supervisor" && item.active);
    return `
      <div class="workspace-heading">
        <div><span class="eyebrow">PTW Raiser</span><h2>Create PTW request</h2></div>
      </div>
      <section class="panel">
        <form id="raise-form" class="field-grid">
          <label><span>Site ID</span><input name="siteId" required placeholder="UG-KLA-001" /></label>
          <label><span>Activity type</span><select name="activityType" required>${activityTypes.map((type) => `<option>${type}</option>`).join("")}</select></label>
          <label><span>One at Risk Supervisor</span><select name="supervisorId" required>${supervisors.map((item) => `<option value="${item.id}">${item.name} · ${item.mobile}</option>`).join("")}</select></label>
          <label><span>Work location / scope</span><textarea name="scope" required placeholder="Describe the task and work area"></textarea></label>
          <label><span>Planned start</span><input name="plannedStart" type="datetime-local" required /></label>
          <label><span>Approver group</span><select name="approverGroup"><option>Project Manager</option><option>Deployment Head</option><option>NB Head</option><option>ESH Head</option></select></label>
          <button class="primary-button form-end" type="submit"><i data-lucide="send"></i> Submit PTW</button>
        </form>
      </section>
      <section class="panel"><div class="panel-heading"><div><h3>Your raised PTWs</h3></div></div><div class="ptw-list">${renderPtwRows(visiblePtws(user))}</div></section>
    `;
  }

  function renderApprovals() {
    const items = state.ptws.filter((ptw) => ptw.status === "Raised");
    return renderActionQueue("Approval queue", "Review submitted PTWs before site checklist capture.", items, "approval");
  }

  function renderChecklist(user) {
    const items = visiblePtws(user).filter((ptw) => ["Approved", "Checklist Submitted"].includes(ptw.status));
    return renderActionQueue("Supervisor checklist", "Camera-only evidence capture requires timestamp and GPS tagging.", items, "checklist");
  }

  function renderAudits() {
    const items = state.ptws.filter((ptw) => ["Checklist Submitted", "Audit Required"].includes(ptw.status));
    return renderActionQueue("Audit queue", "Remote or physical audits with WhatsApp coordination and evidence upload.", items, "audit");
  }

  function renderActionQueue(title, description, items, mode) {
    const selected = items.find((ptw) => ptw.id === selectedPtwId) || items[0];
    selectedPtwId = selected?.id || null;
    return `
      <div class="workspace-heading">
        <div><span class="eyebrow">Workflow</span><h2>${title}</h2><p>${description}</p></div>
      </div>
      <div class="split-workspace">
        <section class="panel queue-panel"><div class="ptw-list">${renderPtwRows(items)}</div></section>
        <section class="panel detail-panel">${selected ? renderPtwDetail(selected, mode) : `<div class="empty-state">No PTWs need action.</div>`}</section>
      </div>
    `;
  }

  function renderPtwDetail(ptw, mode) {
    const actions = {
      approval: renderApprovalControls,
      checklist: renderChecklistControls,
      audit: renderAuditControls
    };
    return `
      <div class="panel-heading">
        <div><h3>${ptw.siteId}</h3><p>${ptw.activityType} · ${ptw.status}</p></div>
        <button class="secondary-button" data-print="${ptw.id}" type="button"><i data-lucide="file-down"></i> PDF</button>
      </div>
      <div class="detail-grid">
        <div><span>Scope</span><strong>${ptw.scope}</strong></div>
        <div><span>Raiser</span><strong>${getUserName(ptw.raiserId)}</strong></div>
        <div><span>Supervisor</span><strong>${getUserName(ptw.supervisorId)}</strong></div>
        <div><span>Created</span><strong>${prettyDate(ptw.createdAt)}</strong></div>
      </div>
      ${(actions[mode] || (() => ""))(ptw)}
      ${renderTimeline(ptw)}
    `;
  }

  function renderApprovalControls(ptw) {
    return `
      <form id="approval-form" data-id="${ptw.id}" class="stack-form">
        <label><span>Remarks / conditions</span><textarea name="remarks" placeholder="Add permit conditions or rejection reason"></textarea></label>
        <div class="inline-actions">
          <button class="primary-button" name="decision" value="approve" type="submit"><i data-lucide="check"></i> Approve</button>
          <button class="danger-button" name="decision" value="reject" type="submit"><i data-lucide="x"></i> Reject</button>
        </div>
      </form>
    `;
  }

  function renderChecklistControls(ptw) {
    const items = ptw.checklist?.items || state.checklists[ptw.activityType].map((label) => ({ id: uid("check"), label, answer: "", remarks: "", photos: [] }));
    return `
      <form id="checklist-form" data-id="${ptw.id}" class="checklist-form">
        ${items
          .map(
            (item, index) => `
          <article class="check-item">
            <div><strong>${index + 1}. ${item.label}</strong><span>${item.photos?.length || 0} image(s)</span></div>
            <select name="answer-${index}" required><option value="">Yes/No</option><option ${item.answer === "Yes" ? "selected" : ""}>Yes</option><option ${item.answer === "No" ? "selected" : ""}>No</option></select>
            <textarea name="remarks-${index}" placeholder="Remarks">${item.remarks || ""}</textarea>
            <input name="photo-${index}" type="file" accept="image/*" capture="environment" required />
          </article>`
          )
          .join("")}
        <label class="declaration"><input name="declaration" type="checkbox" required /> I declare the activity is compliant before work starts.</label>
        <button class="primary-button" type="submit"><i data-lucide="map-pin"></i> Submit with GPS</button>
      </form>
    `;
  }

  function renderAuditControls(ptw) {
    return `
      <form id="audit-form" data-id="${ptw.id}" class="stack-form">
        <label><span>Audit type</span><select name="type"><option>Remote</option><option>Physical</option></select></label>
        <label><span>Remarks</span><textarea name="remarks" placeholder="Audit findings, conditions, or reason"></textarea></label>
        <label><span>Evidence photos/videos/screenshots</span><input name="evidence" type="file" accept="image/*,video/*" capture="environment" multiple /></label>
        <div class="inline-actions">
          <a class="secondary-button" href="https://wa.me/?text=PTW%20audit%20coordination%20for%20${encodeURIComponent(ptw.siteId)}" target="_blank" rel="noreferrer"><i data-lucide="message-circle"></i> WhatsApp</a>
          <button class="primary-button" name="decision" value="approve" type="submit"><i data-lucide="check"></i> Final approve</button>
          <button class="danger-button" name="decision" value="reject" type="submit"><i data-lucide="x"></i> Reject audit</button>
        </div>
      </form>
    `;
  }

  function renderTimeline(ptw) {
    return `
      <section class="timeline">
        <h4>Time logs</h4>
        ${ptw.timeline
          .map((item) => `<div><span>${prettyDate(item.at)}</span><strong>${item.stage}</strong><em>${item.by || ""}</em></div>`)
          .join("")}
      </section>
    `;
  }

  function renderUsers() {
    return `
      <div class="workspace-heading">
        <div><span class="eyebrow">Access control</span><h2>User and role management</h2></div>
      </div>
      <section class="panel">
        <form id="user-form" class="field-grid">
          <label><span>Name</span><input name="name" required /></label>
          <label><span>Mobile number</span><input name="mobile" inputmode="tel" required /></label>
          <label><span>Role</span><select name="role">${Object.entries(roles).filter(([id]) => id !== "super_admin").map(([id, label]) => `<option value="${id}">${label}</option>`).join("")}</select></label>
          <button class="primary-button form-end" type="submit"><i data-lucide="user-plus"></i> Add user</button>
        </form>
      </section>
      <section class="panel"><div class="user-list">${state.users.map(renderUserRow).join("")}</div></section>
    `;
  }

  function renderUserRow(user) {
    return `
      <article class="user-row">
        <div><strong>${user.name}</strong><span>${user.mobile} · ${roles[user.role]}</span></div>
        <button class="${user.active ? "danger-button" : "secondary-button"}" data-toggle-user="${user.id}" type="button">${user.active ? "Deactivate" : "Activate"}</button>
      </article>
    `;
  }

  function renderWorkflow() {
    return `
      <div class="workspace-heading">
        <div><span class="eyebrow">Configuration</span><h2>Workflow, checklist, and security controls</h2></div>
      </div>
      <section class="panel settings-grid">
        ${Object.entries(state.settings)
          .map(([key, value]) => `
          <label class="setting-row">
            <span>${labelize(key)}</span>
            ${typeof value === "boolean" ? `<input type="checkbox" data-setting="${key}" ${value ? "checked" : ""} />` : `<input data-setting="${key}" value="${value}" />`}
          </label>`)
          .join("")}
      </section>
      <section class="panel">
        <div class="panel-heading"><div><h3>Activity checklist templates</h3><p>Each item requires Yes/No, remarks, and image capture.</p></div></div>
        <div class="template-list">
          ${activityTypes.map((type) => `<article><strong>${type}</strong><span>${state.checklists[type].join(" · ")}</span></article>`).join("")}
        </div>
      </section>
    `;
  }

  function renderReports(user) {
    const ptws = visiblePtws(user);
    return `
      <div class="workspace-heading">
        <div><span class="eyebrow">Documentation</span><h2>Reports</h2></div>
        <button class="secondary-button" id="export-csv" type="button"><i data-lucide="file-spreadsheet"></i> Excel summary</button>
      </div>
      ${renderStatusCards(ptws)}
      <section class="panel"><div class="ptw-list">${renderPtwRows(ptws)}</div></section>
    `;
  }

  function renderAuditLog() {
    return `
      <div class="workspace-heading"><div><span class="eyebrow">Security</span><h2>Non-editable audit logs</h2></div></div>
      <section class="panel log-list">
        ${state.auditLog.map((log) => `<article><strong>${log.action}</strong><span>${log.actor} · ${prettyDate(log.at)}</span><code>${JSON.stringify(log.details)}</code></article>`).join("")}
      </section>
    `;
  }

  function labelize(key) {
    return key.replace(/([A-Z])/g, " $1").replace(/^./, (char) => char.toUpperCase());
  }

  function bindView(user) {
    document.querySelector("#global-search")?.addEventListener("input", (event) => filterRows(event.target.value));
    document.querySelectorAll(".ptw-row").forEach((row) => {
      row.addEventListener("click", () => {
        selectedPtwId = row.dataset.ptwId;
        if (["dashboard", "reports"].includes(selectedTab)) selectedTab = getPrimaryActionTab(user.role);
        render();
      });
    });
    document.querySelector("#raise-form")?.addEventListener("submit", onRaiseSubmit);
    document.querySelector("#approval-form")?.addEventListener("submit", onApprovalSubmit);
    document.querySelector("#checklist-form")?.addEventListener("submit", onChecklistSubmit);
    document.querySelector("#audit-form")?.addEventListener("submit", onAuditSubmit);
    document.querySelector("#user-form")?.addEventListener("submit", onUserSubmit);
    document.querySelector("#export-csv")?.addEventListener("click", exportCsv);
    document.querySelectorAll("[data-print]").forEach((button) => button.addEventListener("click", () => printPtw(button.dataset.print)));
    document.querySelectorAll("[data-toggle-user]").forEach((button) => button.addEventListener("click", () => toggleUser(button.dataset.toggleUser)));
    document.querySelectorAll("[data-setting]").forEach((input) => {
      input.addEventListener("change", () => {
        if (!requireCriticalOtp(`update ${labelize(input.dataset.setting)}`)) {
          render();
          return;
        }
        state.settings[input.dataset.setting] = input.type === "checkbox" ? input.checked : input.value;
        logAction("SETTING_UPDATED", { setting: input.dataset.setting, value: state.settings[input.dataset.setting] });
        saveState();
      });
    });
  }

  function getPrimaryActionTab(role) {
    return { raiser: "raise", approver: "approvals", supervisor: "checklist", auditor: "audits" }[role] || "reports";
  }

  function filterRows(term) {
    const query = term.toLowerCase();
    document.querySelectorAll(".ptw-row").forEach((row) => {
      row.classList.toggle("hidden", !row.textContent.toLowerCase().includes(query));
    });
  }

  function onRaiseSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const user = currentUser();
    const ptw = {
      id: uid("ptw"),
      siteId: form.get("siteId"),
      activityType: form.get("activityType"),
      supervisorId: form.get("supervisorId"),
      approverGroup: form.get("approverGroup"),
      scope: form.get("scope"),
      plannedStart: form.get("plannedStart"),
      raiserId: user.id,
      status: "Raised",
      createdAt: nowStamp(),
      approval: null,
      checklist: null,
      audit: null,
      timeline: [{ stage: "PTW Raised", at: nowStamp(), by: user.name }]
    };
    state.ptws.unshift(ptw);
    selectedPtwId = ptw.id;
    logAction("PTW_RAISED", { siteId: ptw.siteId, activityType: ptw.activityType });
    saveState();
    toast("PTW submitted to approver.");
    render();
  }

  function onApprovalSubmit(event) {
    event.preventDefault();
    const submitter = event.submitter.value;
    const ptw = state.ptws.find((item) => item.id === event.target.dataset.id);
    const user = currentUser();
    ptw.status = submitter === "approve" ? "Approved" : "Rejected";
    ptw.approval = { decision: submitter, remarks: new FormData(event.target).get("remarks"), by: user.name, at: nowStamp() };
    ptw.timeline.push({ stage: submitter === "approve" ? "Approver Approved" : "Approver Rejected", at: nowStamp(), by: user.name });
    logAction("PTW_APPROVAL_DECISION", { siteId: ptw.siteId, decision: submitter });
    saveState();
    toast(`PTW ${submitter === "approve" ? "approved" : "rejected"}.`);
    render();
  }

  async function onChecklistSubmit(event) {
    event.preventDefault();
    const ptw = state.ptws.find((item) => item.id === event.target.dataset.id);
    const user = currentUser();
    const baseItems = state.checklists[ptw.activityType];
    const form = new FormData(event.target);
    const position = await getPosition();
    const items = [];
    for (let index = 0; index < baseItems.length; index += 1) {
      const file = form.get(`photo-${index}`);
      items.push({
        id: uid("check"),
        label: baseItems[index],
        answer: form.get(`answer-${index}`),
        remarks: form.get(`remarks-${index}`),
        photos: file && file.size ? [await compressImage(file)] : [],
        capturedAt: nowStamp(),
        gps: position
      });
    }
    ptw.status = "Checklist Submitted";
    ptw.checklist = { declaration: true, submittedBy: user.name, submittedAt: nowStamp(), gps: position, items };
    ptw.timeline.push({ stage: "Checklist Submitted", at: nowStamp(), by: user.name });
    logAction("CHECKLIST_SUBMITTED", { siteId: ptw.siteId, gps: position });
    saveState();
    toast("Checklist submitted with timestamp and GPS.");
    render();
  }

  async function onAuditSubmit(event) {
    event.preventDefault();
    const ptw = state.ptws.find((item) => item.id === event.target.dataset.id);
    const form = new FormData(event.target);
    const user = currentUser();
    const files = form.getAll("evidence").filter((file) => file.size);
    const evidence = [];
    for (const file of files) evidence.push(file.type.startsWith("image/") ? await compressImage(file) : { name: file.name, type: file.type, size: file.size });
    const decision = event.submitter.value;
    ptw.status = decision === "approve" ? "Final Approved" : "Audit Rejected";
    ptw.audit = { type: form.get("type"), remarks: form.get("remarks"), decision, evidence, at: nowStamp(), by: user.name };
    ptw.timeline.push({ stage: decision === "approve" ? "Final Approval" : "Audit Rejected", at: nowStamp(), by: user.name });
    logAction("AUDIT_DECISION", { siteId: ptw.siteId, decision, evidence: evidence.length });
    saveState();
    toast("Audit decision saved.");
    render();
  }

  function onUserSubmit(event) {
    event.preventDefault();
    if (!requireCriticalOtp("create user")) return;
    const form = new FormData(event.target);
    const mobile = form.get("mobile").trim();
    if (mobile === SUPER_ADMIN_MOBILE || state.users.some((user) => user.mobile === mobile)) return toast("That mobile number is already mapped.");
    const user = { id: uid("user"), name: form.get("name"), mobile, role: form.get("role"), active: true };
    state.users.push(user);
    logAction("USER_CREATED", { mobile: user.mobile, role: roles[user.role] });
    saveState();
    toast("User added.");
    render();
  }

  function toggleUser(id) {
    if (!requireCriticalOtp("change user status")) return;
    const user = state.users.find((item) => item.id === id);
    user.active = !user.active;
    logAction(user.active ? "USER_ACTIVATED" : "USER_DEACTIVATED", { mobile: user.mobile });
    saveState();
    render();
  }

  function getPosition() {
    return new Promise((resolve) => {
      if (!navigator.geolocation) return resolve({ latitude: "Unavailable", longitude: "Unavailable" });
      navigator.geolocation.getCurrentPosition(
        (pos) => resolve({ latitude: pos.coords.latitude.toFixed(6), longitude: pos.coords.longitude.toFixed(6) }),
        () => resolve({ latitude: "Permission denied", longitude: "Permission denied" }),
        { enableHighAccuracy: true, timeout: 8000, maximumAge: 0 }
      );
    });
  }

  function compressImage(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => {
        const img = new Image();
        img.onload = () => {
          const max = 1280;
          const ratio = Math.min(1, max / Math.max(img.width, img.height));
          const canvas = document.createElement("canvas");
          canvas.width = Math.round(img.width * ratio);
          canvas.height = Math.round(img.height * ratio);
          canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
          resolve({
            name: file.name,
            type: "image/jpeg",
            capturedAt: nowStamp(),
            dataUrl: canvas.toDataURL("image/jpeg", 0.74),
            originalWidth: img.width,
            originalHeight: img.height
          });
        };
        img.src = reader.result;
      };
      reader.readAsDataURL(file);
    });
  }

  function exportCsv() {
    const rows = [
      ["Site ID", "Activity Type", "Status", "Raiser", "Supervisor", "Created", "Evidence Count"],
      ...state.ptws.map((ptw) => [ptw.siteId, ptw.activityType, ptw.status, getUserName(ptw.raiserId), getUserName(ptw.supervisorId), ptw.createdAt, evidenceCount(ptw)])
    ];
    const csv = rows.map((row) => row.map((value) => `"${String(value).replaceAll('"', '""')}"`).join(",")).join("\n");
    download(`ptw-summary-${new Date().toISOString().slice(0, 10)}.csv`, csv, "text/csv");
    logAction("EXCEL_SUMMARY_EXPORTED", { rows: rows.length - 1 });
  }

  function download(name, content, type) {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = name;
    link.click();
    URL.revokeObjectURL(url);
  }

  function printPtw(id) {
    const ptw = state.ptws.find((item) => item.id === id);
    const root = document.querySelector("#print-root");
    root.innerHTML = `
      <article class="print-report">
        <h1>PTW PDF Report</h1>
        <p><strong>Site ID:</strong> ${ptw.siteId}</p>
        <p><strong>Activity Type:</strong> ${ptw.activityType}</p>
        <p><strong>Status:</strong> ${ptw.status}</p>
        <p><strong>GPS:</strong> ${ptw.checklist?.gps ? `${ptw.checklist.gps.latitude}, ${ptw.checklist.gps.longitude}` : "-"}</p>
        <h2>Approval Logs</h2>
        ${renderTimeline(ptw)}
        <h2>Checklist Data</h2>
        ${(ptw.checklist?.items || []).map((item) => `<p><strong>${item.label}</strong>: ${item.answer} · ${item.remarks || ""}</p>${(item.photos || []).map((photo) => `<img src="${photo.dataUrl}" />`).join("")}`).join("")}
        <h2>Audit</h2>
        <p>${ptw.audit?.decision || "Pending"} ${ptw.audit?.remarks || ""}</p>
      </article>
    `;
    logAction("PTW_PDF_PRINTED", { siteId: ptw.siteId });
    window.print();
  }

  ensureAdminHash().then(render);
})();
