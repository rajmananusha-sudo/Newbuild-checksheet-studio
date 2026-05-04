(function () {
  const STORAGE_KEY = "civil-checksheet-studio-v1";
  const PHOTO_LIMIT = 4;
  const STATUS_OPTIONS = ["Pending", "OK", "Not OK", "N/A"];

  const defaultTemplate = {
    id: "tpl-c2-civil-stage-audit-r1",
    name: "Civil Installation (C-2) Stage Audit Check Sheet",
    revision: "R1",
    source: "C1 & C2 Civil Check Sheet-A R1.xlsx",
    siteFields: [
      { id: "site_id_name", label: "Site ID / Name", type: "text", required: true },
      { id: "country", label: "Country", type: "text" },
      { id: "tower_height", label: "Tower Height", type: "text" },
      { id: "foundation_design", label: "Foundation Design / Drawing Ref", type: "text" },
      { id: "build_partner", label: "Build Partner (TSP)", type: "text" },
      { id: "audit_engineer", label: "Audit Engineer", type: "text", required: true },
      { id: "audit_date", label: "Audit Date", type: "date", required: true },
      { id: "supervisor", label: "Supervisor / Site Contact", type: "text" },
      { id: "weather", label: "Weather", type: "text" }
    ],
    sections: [
      {
        id: "site-planning",
        title: "1. Site Planning & Preliminary Checks",
        description: "Verification of site design, safety parameters, and administrative approvals.",
        items: [
          {
            id: "1.1",
            item: "Design Compliance",
            criteria:
              "Foundation design matches the SBC report (e.g., Value 20) and Wind Zone (e.g., 140 KMPH).",
            inputLabel: "Remarks"
          },
          {
            id: "1.2",
            item: "Approved Layout",
            criteria: "Planning approved drawing and site layout are available on-site.",
            inputLabel: "Remarks"
          },
          {
            id: "1.3",
            item: "Site Elevation",
            criteria:
              "Site level is above the Natural Ground Level (NGL) or road level per recommendation.",
            inputLabel: "Remarks"
          },
          {
            id: "1.4",
            item: "Safety Clearance",
            criteria: "No High Tension (HT) lines are passing near the tower area.",
            inputLabel: "Remarks"
          },
          {
            id: "1.5",
            item: "Weather Readiness",
            criteria: "Casting is not being performed during rain or poor weather conditions.",
            inputLabel: "Remarks"
          }
        ]
      },
      {
        id: "material-quality",
        title: "2. Material Quality Assurance",
        description: "Verification of raw material specifications and visual integrity.",
        items: [
          {
            id: "2.1",
            item: "Steel Specifications",
            criteria: "Approved Make: ; Grade: Fe550 (or approved equivalent).",
            inputLabel: "Remarks"
          },
          {
            id: "2.2",
            item: "Cement Grade",
            criteria: "Approved Make; Grade: OPC (53); Check manufacturing date and quantity.",
            inputLabel: "Remarks"
          },
          {
            id: "2.3",
            item: "Aggregates (Stone)",
            criteria:
              "Coarse aggregates are free from impurities; size/shape are visually verified.",
            inputLabel: "Remarks"
          },
          {
            id: "2.4",
            item: "Aggregates (Sand)",
            criteria: "Fine aggregates are free from impurities (visual check).",
            inputLabel: "Remarks"
          },
          {
            id: "2.5",
            item: "Water Quality",
            criteria:
              "Water is free from injurious amounts of oils, acids, or organic matter.",
            inputLabel: "Remarks"
          }
        ]
      },
      {
        id: "structural-framework",
        title: "3. Structural Framework (Reinforcement & Shuttering)",
        description: 'Ensuring the steel "skeleton" and molds are structurally sound.',
        items: [
          {
            id: "3.1",
            item: "Reinforcement Detail",
            criteria:
              "Steel size, numbers, placement, and spacing must be as per the Bar Bending Schedule (BBS) in the drawing.",
            inputLabel: "Remarks"
          },
          {
            id: "3.2",
            item: "Stirrups/Rings",
            criteria:
              "Steel size, numbers, placement, and spacing must be as per the Bar Bending Schedule (BBS) in the drawing.",
            inputLabel: "Remarks"
          },
          {
            id: "3.3",
            item: "Shuttering Quality",
            criteria: "Steel plates utilized; tightened, straight, and properly aligned.",
            inputLabel: "Remarks"
          },
          {
            id: "3.4",
            item: "Release Agent",
            criteria: "Shuttering oil applied uniformly to all internal surfaces.",
            inputLabel: "Remarks"
          },
          {
            id: "3.5",
            item: "Clear Cover",
            criteria:
              "Precast cover blocks used; clear cover maintained between steel and shuttering.",
            inputLabel: "Remarks"
          }
        ]
      },
      {
        id: "civil-geometry",
        title: "4. Civil Geometry & Earthwork",
        description: "Audit of precise measurements and column positioning.",
        items: [
          {
            id: "4.1",
            item: "Base Preparation",
            criteria: "PCC thickness and base treatment (e.g., sand bed/rubble) per drawing.",
            inputLabel: "Actual Value"
          },
          {
            id: "4.2",
            item: "Column Distance (A)",
            criteria: "Center-to-center distance of column position (Side A).",
            inputLabel: "Actual Value"
          },
          {
            id: "4.3",
            item: "Column Distance (B)",
            criteria: "Center-to-center distance of column position (Side B).",
            inputLabel: "Actual Value"
          },
          {
            id: "4.4",
            item: "Column Distance (C)",
            criteria: "Center-to-center distance of column position (Side C).",
            inputLabel: "Actual Value"
          }
        ]
      },
      {
        id: "concrete-casting",
        title: "5. Concrete Casting & Quality Control",
        description: "Technical execution of the RCC phase and final finishing.",
        items: [
          {
            id: "5.1",
            item: "Concrete Grade",
            criteria: "Mix Grade M20; Ratio 1:1.5:3.",
            inputLabel: "Remarks"
          },
          {
            id: "5.2",
            item: "Workability (Slump)",
            criteria:
              "Consistently achieved value (e.g., 80mm) at start, middle, and end of casting.",
            inputLabel: "Remarks"
          },
          {
            id: "5.3",
            item: "Water-Cement Ratio",
            criteria:
              "Liters of water per bag of cement used to achieve slump (e.g., 30L).",
            inputLabel: "Remarks"
          },
          {
            id: "5.4",
            item: "Mechanical Mixing",
            criteria:
              "Mechanical mixture machine and vibrator used during the entire process.",
            inputLabel: "Remarks"
          },
          {
            id: "5.5",
            item: "Pouring Technique",
            criteria:
              "Concrete not dropped from a height >1.5m; no aggregate segregation observed.",
            inputLabel: "Remarks"
          }
        ]
      },
      {
        id: "post-concreting",
        title: "6. Post Concreting & Foundation Finish",
        description: "Technical execution of the RCC phase and final finishing.",
        items: [
          {
            id: "6.1",
            item: "Concrete Pouring",
            criteria:
              "Concrete pouring is carried out strictly as per the approved drawing and specification requirements.",
            inputLabel: "Remarks"
          },
          {
            id: "6.2",
            item: "No Voids",
            criteria:
              "During concreting, the vibrator is used adequately to ensure proper compaction and to prevent voids or segregation of concrete.",
            inputLabel: "Remarks"
          },
          {
            id: "6.3",
            item: "No Bleeding",
            criteria:
              "No visible water film, laitance, or surface bleeding is observed during or after pouring, ensuring uniformity and strength of the concrete.",
            inputLabel: "Remarks"
          },
          {
            id: "6.4",
            item: "Final Finish",
            criteria: "Foundation finished with a natural smooth surface post-completion.",
            inputLabel: "Remarks"
          },
          {
            id: "6.5",
            item: "Curing",
            criteria:
              "Curing initiated immediately after final setting; curing maintained continuously for a minimum of 14 days (or as per specification) using approved methods such as ponding, wet hessian cloth, or curing compound.",
            inputLabel: "Remarks"
          }
        ]
      }
    ],
    photoRequirements: [
      {
        id: "photo-site-readiness-team",
        title: "Site Readiness & Team",
        requirement:
          'Photograph 1. An "in-time" selfie of the audit engineer with the mixture machine and supervisor to verify the start of the audit at the scheduled time.',
        limit: PHOTO_LIMIT
      },
      {
        id: "photo-civil-measurements",
        title: "Civil Measurements",
        requirement:
          "Photographs 2 & 3. Use a measuring tape to show the center-to-center distance of columns/templates and the depth of the column for casting.",
        limit: PHOTO_LIMIT
      },
      {
        id: "photo-material-compliance",
        title: "Material Compliance",
        requirement:
          "Photographs 4 & 5. Clear close-ups of the cement bags (showing make, grade, and mfg date) and the total quantity of material available on-site.",
        limit: PHOTO_LIMIT
      },
      {
        id: "photo-steel-reinforcement",
        title: "Steel Reinforcement",
        requirement:
          "Photographs 6 & 7. Visual evidence of the stirrup diameter, center-to-center distance, and the number of steel rods in the column legs.",
        limit: PHOTO_LIMIT
      },
      {
        id: "photo-workability-test",
        title: "Workability Test",
        requirement:
          "Photograph 8. The slump cone and tamping rod with a tape measure showing the slump value (e.g., 80mm) to verify mix consistency.",
        limit: PHOTO_LIMIT
      },
      {
        id: "photo-shuttering-cover",
        title: "Shuttering & Cover",
        requirement:
          "Photographs 9 & 10. Visual confirmation of shuttering alignment, tightness, oil application, and precast blocks maintaining clear cover.",
        limit: PHOTO_LIMIT
      },
      {
        id: "photo-casting-execution",
        title: "Casting Execution",
        requirement:
          "Photograph 11. Action shot of the concrete being poured via chute and the application of a mechanical vibrator.",
        limit: PHOTO_LIMIT
      },
      {
        id: "photo-final-structural-finish",
        title: "Final Structural Finish",
        requirement:
          'Photograph 12. An "out-time" selfie of the audit engineer with the completed, smooth-finished foundation background.',
        limit: PHOTO_LIMIT
      }
    ]
  };

  let state = loadState();
  let activeTab = "fill";
  let editingTemplateId = null;

  const els = {};

  document.addEventListener("DOMContentLoaded", () => {
    cacheElements();
    bindShellEvents();
    registerServiceWorker();
    if (!state.activeSubmissionId || !state.submissions.some((s) => s.id === state.activeSubmissionId)) {
      const firstTemplate = state.templates[0]?.id || defaultTemplate.id;
      createSubmission(firstTemplate);
    }
    render();
  });

  function cacheElements() {
    els.navButtons = Array.from(document.querySelectorAll(".nav-button"));
    els.views = Array.from(document.querySelectorAll(".view"));
    els.templateSelect = document.getElementById("template-select");
    els.newAuditBtn = document.getElementById("new-audit-btn");
    els.saveDraftBtn = document.getElementById("save-draft-btn");
    els.exportPdfBtn = document.getElementById("export-pdf-btn");
    els.auditMeta = document.getElementById("audit-meta");
    els.auditSummary = document.getElementById("audit-summary");
    els.checklistSections = document.getElementById("checklist-sections");
    els.sidebarReportName = document.getElementById("sidebar-report-name");
    els.sidebarMetrics = document.getElementById("sidebar-metrics");
    els.templateFile = document.getElementById("template-file");
    els.importTemplateBtn = document.getElementById("import-template-btn");
    els.blankTemplateBtn = document.getElementById("blank-template-btn");
    els.templateList = document.getElementById("template-list");
    els.templateEditor = document.getElementById("template-editor");
    els.templateJson = document.getElementById("template-json");
    els.closeTemplateEditor = document.getElementById("close-template-editor");
    els.formatTemplateJson = document.getElementById("format-template-json");
    els.saveTemplateJson = document.getElementById("save-template-json");
    els.reportSearch = document.getElementById("report-search");
    els.reportsList = document.getElementById("reports-list");
    els.printRoot = document.getElementById("print-root");
  }

  function bindShellEvents() {
    els.navButtons.forEach((button) => {
      button.addEventListener("click", () => {
        activeTab = button.dataset.tab;
        render();
      });
    });

    els.templateSelect.addEventListener("change", () => {
      createSubmission(els.templateSelect.value);
      renderFill();
      renderSidebar();
    });

    els.newAuditBtn.addEventListener("click", () => {
      createSubmission(els.templateSelect.value || state.templates[0].id);
      renderFill();
      renderSidebar();
    });

    els.saveDraftBtn.addEventListener("click", () => {
      persistActiveSubmission();
      toast("Draft saved in this browser.");
    });

    els.exportPdfBtn.addEventListener("click", () => {
      persistActiveSubmission();
      const submission = getActiveSubmission();
      if (!submission) return;
      renderPrintReport(submission);
      setTimeout(() => window.print(), 100);
    });

    els.importTemplateBtn.addEventListener("click", () => els.templateFile.click());
    els.templateFile.addEventListener("change", async (event) => {
      const file = event.target.files?.[0];
      if (!file) return;
      try {
        const template = await importTemplateFile(file);
        state.templates.push(normalizeTemplate(template));
        saveState();
        activeTab = "templates";
        render();
        toast("Template imported.");
      } catch (error) {
        alert(error.message || "Could not import this template.");
      } finally {
        els.templateFile.value = "";
      }
    });

    els.blankTemplateBtn.addEventListener("click", () => {
      const name = prompt("Template name", "New Civil Checksheet");
      if (!name) return;
      const template = normalizeTemplate({
        id: uid("tpl"),
        name,
        revision: "Draft",
        siteFields: defaultTemplate.siteFields,
        sections: [
          {
            id: "section-1",
            title: "1. New Section",
            description: "",
            items: [
              {
                id: "1.1",
                item: "New checkpoint",
                criteria: "Define the requirement or acceptance criteria.",
                inputLabel: "Remarks"
              }
            ]
          }
        ],
        photoRequirements: []
      });
      state.templates.push(template);
      saveState();
      openTemplateEditor(template.id);
      render();
    });

    els.closeTemplateEditor.addEventListener("click", () => {
      editingTemplateId = null;
      els.templateEditor.classList.add("hidden");
    });

    els.formatTemplateJson.addEventListener("click", () => {
      try {
        els.templateJson.value = JSON.stringify(JSON.parse(els.templateJson.value), null, 2);
      } catch {
        alert("The JSON is not valid yet.");
      }
    });

    els.saveTemplateJson.addEventListener("click", () => {
      if (!editingTemplateId) return;
      try {
        const next = normalizeTemplate(JSON.parse(els.templateJson.value));
        next.id = editingTemplateId;
        const index = state.templates.findIndex((template) => template.id === editingTemplateId);
        state.templates[index] = next;
        saveState();
        renderTemplates();
        toast("Template saved.");
      } catch (error) {
        alert(error.message || "Template JSON could not be saved.");
      }
    });

    els.reportSearch.addEventListener("input", renderReports);
  }

  function loadState() {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      const storedTemplates = Array.isArray(stored.templates) ? stored.templates : [];
      const builtInTemplates = getBuiltInTemplates();
      const builtInIds = new Set(builtInTemplates.map((template) => template.id));
      const customTemplates = storedTemplates.filter((template) => !builtInIds.has(template.id));
      return {
        templates: [...builtInTemplates, ...customTemplates],
        submissions: Array.isArray(stored.submissions) ? stored.submissions : [],
        activeSubmissionId: stored.activeSubmissionId || null
      };
    } catch {
      return { templates: getBuiltInTemplates(), submissions: [], activeSubmissionId: null };
    }
  }

  function getBuiltInTemplates() {
    const externalTemplates =
      Array.isArray(window.CHECKSHEET_TEMPLATES) && window.CHECKSHEET_TEMPLATES.length
        ? window.CHECKSHEET_TEMPLATES
        : [defaultTemplate];
    return externalTemplates.map((template) => normalizeTemplate(template));
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function render() {
    els.navButtons.forEach((button) => button.classList.toggle("active", button.dataset.tab === activeTab));
    els.views.forEach((view) => view.classList.toggle("active", view.id === `view-${activeTab}`));

    if (activeTab === "fill") renderFill();
    if (activeTab === "templates") renderTemplates();
    if (activeTab === "reports") renderReports();
    renderSidebar();
    refreshIcons();
  }

  function renderFill() {
    const submission = getActiveSubmission() || createSubmission(state.templates[0].id);
    ensureSubmissionShape(submission);
    const template = submission.templateSnapshot;

    els.templateSelect.innerHTML = state.templates
      .map(
        (templateOption) =>
          `<option value="${escapeAttr(templateOption.id)}" ${
            templateOption.id === submission.templateId ? "selected" : ""
          }>${escapeHtml(templateOption.name)}</option>`
      )
      .join("");

    els.auditMeta.innerHTML = template.siteFields
      .map((field) => renderMetaField(field, submission.meta[field.id] || ""))
      .join("");

    els.auditMeta.querySelectorAll("[data-meta]").forEach((input) => {
      input.addEventListener("input", () => {
        submission.meta[input.dataset.meta] = input.value;
        updateSubmissionTitle(submission);
        persistActiveSubmission(false);
        renderSidebar();
      });
    });

    els.auditSummary.innerHTML = renderSummary(submission);
    els.checklistSections.innerHTML = [
      ...template.sections.map((section) => renderSection(section, submission)),
      renderPhotoDocumentation(template, submission)
    ].join("");

    bindChecklistEvents(submission);
    refreshIcons();
  }

  function renderMetaField(field, value) {
    const type = field.type || "text";
    const required = field.required ? "required" : "";
    return `
      <div class="field-control">
        <label for="meta-${escapeAttr(field.id)}">${escapeHtml(field.label)}${
          field.required ? " *" : ""
        }</label>
        <input id="meta-${escapeAttr(field.id)}" data-meta="${escapeAttr(field.id)}" type="${escapeAttr(
          type
        )}" value="${escapeAttr(value)}" ${required} />
      </div>
    `;
  }

  function renderSummary(submission) {
    const stats = getStats(submission);
    return [
      ["Total", stats.total],
      ["OK", stats.ok],
      ["Not OK", stats.notOk],
      ["Pending", stats.pending],
      ["Photos", stats.photos]
    ]
      .map(
        ([label, value]) => `
          <div class="summary-item">
            <strong>${value}</strong>
            <span>${label}</span>
          </div>
        `
      )
      .join("");
  }

  function renderSection(section, submission) {
    return `
      <section class="section-block">
        <div class="section-title">
          <div>
            <h3>${escapeHtml(section.title)}</h3>
            ${section.description ? `<p>${escapeHtml(section.description)}</p>` : ""}
          </div>
          <span class="tag">${section.items.length} checkpoints</span>
        </div>
        <div class="checkpoint-list">
          ${section.items.map((item) => renderCheckpoint(section, item, submission)).join("")}
        </div>
      </section>
    `;
  }

  function renderCheckpoint(section, item, submission) {
    const response = getItemResponse(submission, item.id);
    const fieldLabel = item.inputLabel || "Remarks";
    return `
      <article class="checkpoint" data-section-id="${escapeAttr(section.id)}" data-item-id="${escapeAttr(
        item.id
      )}">
        <div class="checkpoint-main">
          <div class="checkpoint-kicker">
            <span class="checkpoint-id">${escapeHtml(item.id)}</span>
            ${statusPill(response.status)}
          </div>
          <h4>${escapeHtml(item.item)}</h4>
          <p class="checkpoint-criteria">${escapeHtml(item.criteria)}</p>
        </div>
        <div class="checkpoint-control">
          <label>Status</label>
          <select data-response-field="status">
            ${STATUS_OPTIONS.map(
              (option) =>
                `<option value="${option}" ${response.status === option ? "selected" : ""}>${option}</option>`
            ).join("")}
          </select>
          <label>${escapeHtml(fieldLabel)}</label>
          <textarea data-response-field="remarks" placeholder="${escapeAttr(fieldLabel)}">${escapeHtml(
            response.remarks || ""
          )}</textarea>
        </div>
      </article>
    `;
  }

  function renderPhotoDocumentation(template, submission) {
    if (!template.photoRequirements?.length) return "";
    return `
      <section class="section-block">
        <div class="section-title">
          <div>
            <h3>Photographic Documentation</h3>
            <p>Each mentioned point accepts up to ${PHOTO_LIMIT} photos with captions.</p>
          </div>
          <span class="tag">${template.photoRequirements.length} photo points</span>
        </div>
        <div class="photo-requirements">
          ${template.photoRequirements.map((requirement) => {
            const evidence = getPhotoEvidence(submission, requirement.id);
            return `
              <div class="photo-requirement" data-photo-id="${escapeAttr(requirement.id)}">
                <h4>${escapeHtml(requirement.title)}</h4>
                <p class="checkpoint-criteria">${escapeHtml(requirement.requirement)}</p>
                ${renderPhotoUploader("requirement", requirement.id, evidence.photos || [])}
              </div>
            `;
          }).join("")}
        </div>
      </section>
    `;
  }

  function renderPhotoUploader(scope, id, photos) {
    const remaining = Math.max(0, PHOTO_LIMIT - photos.length);
    return `
      <div class="photo-uploader" data-photo-scope="${escapeAttr(scope)}" data-photo-key="${escapeAttr(id)}">
        <label class="photo-label">Photos (${photos.length}/${PHOTO_LIMIT})</label>
        <label class="photo-drop">
          <i data-lucide="camera"></i>
          ${remaining ? `Add up to ${remaining} photo${remaining === 1 ? "" : "s"}` : "Photo limit reached"}
          <input type="file" data-photo-input hidden accept="image/*" capture="environment" multiple ${
            remaining ? "" : "disabled"
          } />
        </label>
        <div class="photo-grid">
          ${photos
            .map(
              (photo, index) => `
                <div class="photo-tile">
                  <img src="${escapeAttr(photo.src)}" alt="${escapeAttr(photo.caption || photo.name || "Evidence photo")}" />
                  <input data-caption-index="${index}" value="${escapeAttr(photo.caption || "")}" placeholder="Caption" />
                  <div class="photo-toolbar">
                    <span title="${escapeAttr(photo.name || "Photo")}">${escapeHtml(photo.name || "Photo")}</span>
                    <button type="button" data-remove-photo="${index}" title="Remove photo">&times;</button>
                  </div>
                </div>
              `
            )
            .join("")}
        </div>
      </div>
    `;
  }

  function bindChecklistEvents(submission) {
    els.checklistSections.querySelectorAll("[data-response-field]").forEach((input) => {
      input.addEventListener("input", () => {
        const checkpoint = input.closest("[data-item-id]");
        const response = getItemResponse(submission, checkpoint.dataset.itemId);
        response[input.dataset.responseField] = input.value;
        persistActiveSubmission(false);
        renderSidebar();
      });
    });

    els.checklistSections.querySelectorAll("[data-photo-input]").forEach((input) => {
      input.addEventListener("change", async () => {
        const uploader = input.closest("[data-photo-scope]");
        await addPhotos(submission, uploader.dataset.photoScope, uploader.dataset.photoKey, input.files);
        persistActiveSubmission(false);
        renderFill();
      });
    });

    els.checklistSections.querySelectorAll("[data-remove-photo]").forEach((button) => {
      button.addEventListener("click", () => {
        const uploader = button.closest("[data-photo-scope]");
        const photos = getPhotos(submission, uploader.dataset.photoScope, uploader.dataset.photoKey);
        photos.splice(Number(button.dataset.removePhoto), 1);
        persistActiveSubmission(false);
        renderFill();
      });
    });

    els.checklistSections.querySelectorAll("[data-caption-index]").forEach((input) => {
      input.addEventListener("input", () => {
        const uploader = input.closest("[data-photo-scope]");
        const photos = getPhotos(submission, uploader.dataset.photoScope, uploader.dataset.photoKey);
        const photo = photos[Number(input.dataset.captionIndex)];
        if (photo) photo.caption = input.value;
        persistActiveSubmission(false);
      });
    });
  }

  function renderTemplates() {
    els.templateList.innerHTML = state.templates
      .map((template) => {
        const stats = getTemplateStats(template);
        return `
          <article class="template-item">
            <div>
              <h3>${escapeHtml(template.name)}</h3>
              <p class="muted">${escapeHtml(template.source || "Manual template")}</p>
              <div class="tag-row">
                <span class="tag">${stats.sections} sections</span>
                <span class="tag">${stats.items} checkpoints</span>
                <span class="tag">${stats.photos} photo points</span>
                ${template.revision ? `<span class="tag">${escapeHtml(template.revision)}</span>` : ""}
              </div>
            </div>
            <div class="row-actions">
              <button class="ghost-button" type="button" data-template-action="edit" data-template-id="${escapeAttr(
                template.id
              )}">
                <i data-lucide="pencil"></i>
                Edit
              </button>
              <button class="secondary-button" type="button" data-template-action="copy" data-template-id="${escapeAttr(
                template.id
              )}">
                <i data-lucide="copy"></i>
                Copy
              </button>
              <button class="ghost-button" type="button" data-template-action="download" data-template-id="${escapeAttr(
                template.id
              )}">
                <i data-lucide="download"></i>
                JSON
              </button>
              ${
                template.id === defaultTemplate.id
                  ? ""
                  : `<button class="danger-button" type="button" data-template-action="delete" data-template-id="${escapeAttr(
                      template.id
                    )}"><i data-lucide="trash-2"></i>Delete</button>`
              }
            </div>
          </article>
        `;
      })
      .join("");

    els.templateList.querySelectorAll("[data-template-action]").forEach((button) => {
      button.addEventListener("click", () => handleTemplateAction(button.dataset.templateAction, button.dataset.templateId));
    });

    refreshIcons();
  }

  function handleTemplateAction(action, templateId) {
    const template = state.templates.find((item) => item.id === templateId);
    if (!template) return;

    if (action === "edit") openTemplateEditor(templateId);
    if (action === "copy") {
      const copy = normalizeTemplate({
        ...deepClone(template),
        id: uid("tpl"),
        name: `${template.name} Copy`,
        source: "Duplicated in app"
      });
      state.templates.push(copy);
      saveState();
      renderTemplates();
    }
    if (action === "download") downloadJson(template, `${slugify(template.name)}.json`);
    if (action === "delete") {
      const used = state.submissions.some((submission) => submission.templateId === templateId);
      const message = used
        ? "This template has saved audits. Delete the template anyway? Existing saved audits keep their snapshot."
        : "Delete this template?";
      if (!confirm(message)) return;
      state.templates = state.templates.filter((item) => item.id !== templateId);
      saveState();
      renderTemplates();
    }
  }

  function openTemplateEditor(templateId) {
    const template = state.templates.find((item) => item.id === templateId);
    if (!template) return;
    editingTemplateId = templateId;
    els.templateJson.value = JSON.stringify(template, null, 2);
    els.templateEditor.classList.remove("hidden");
    els.templateJson.focus();
  }

  function renderReports() {
    const query = (els.reportSearch.value || "").trim().toLowerCase();
    const reports = [...state.submissions]
      .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
      .filter((submission) => {
        const haystack = [
          submission.title,
          submission.templateSnapshot?.name,
          ...Object.values(submission.meta || {})
        ]
          .join(" ")
          .toLowerCase();
        return !query || haystack.includes(query);
      });

    if (!reports.length) {
      els.reportsList.innerHTML = `<div class="empty-state">No saved reports found.</div>`;
      return;
    }

    els.reportsList.innerHTML = reports
      .map((submission) => {
        const stats = getStats(submission);
        return `
          <article class="report-item">
            <div>
              <h3>${escapeHtml(submission.title || "Untitled audit")}</h3>
              <p class="muted">${escapeHtml(submission.templateSnapshot?.name || "Template")} · Updated ${formatDateTime(
                submission.updatedAt
              )}</p>
              <div class="tag-row">
                <span class="tag">${stats.ok}/${stats.total} OK</span>
                <span class="tag">${stats.notOk} Not OK</span>
                <span class="tag">${stats.pending} Pending</span>
                <span class="tag">${stats.photos} Photos</span>
              </div>
            </div>
            <div class="row-actions">
              <button class="secondary-button" type="button" data-report-action="edit" data-report-id="${escapeAttr(
                submission.id
              )}"><i data-lucide="pencil"></i>Edit</button>
              <button class="ghost-button" type="button" data-report-action="pdf" data-report-id="${escapeAttr(
                submission.id
              )}"><i data-lucide="file-down"></i>PDF</button>
              <button class="ghost-button" type="button" data-report-action="copy" data-report-id="${escapeAttr(
                submission.id
              )}"><i data-lucide="copy"></i>Copy</button>
              <button class="danger-button" type="button" data-report-action="delete" data-report-id="${escapeAttr(
                submission.id
              )}"><i data-lucide="trash-2"></i>Delete</button>
            </div>
          </article>
        `;
      })
      .join("");

    els.reportsList.querySelectorAll("[data-report-action]").forEach((button) => {
      button.addEventListener("click", () => handleReportAction(button.dataset.reportAction, button.dataset.reportId));
    });
    refreshIcons();
  }

  function handleReportAction(action, reportId) {
    const submission = state.submissions.find((item) => item.id === reportId);
    if (!submission) return;

    if (action === "edit") {
      state.activeSubmissionId = reportId;
      saveState();
      activeTab = "fill";
      render();
    }
    if (action === "pdf") {
      renderPrintReport(submission);
      setTimeout(() => window.print(), 100);
    }
    if (action === "copy") {
      const copy = deepClone(submission);
      copy.id = uid("audit");
      copy.title = `${submission.title || "Audit"} Copy`;
      copy.createdAt = new Date().toISOString();
      copy.updatedAt = copy.createdAt;
      state.submissions.push(copy);
      state.activeSubmissionId = copy.id;
      saveState();
      activeTab = "fill";
      render();
    }
    if (action === "delete") {
      if (!confirm("Delete this saved report?")) return;
      state.submissions = state.submissions.filter((item) => item.id !== reportId);
      if (state.activeSubmissionId === reportId) state.activeSubmissionId = state.submissions[0]?.id || null;
      saveState();
      renderReports();
      renderSidebar();
    }
  }

  function createSubmission(templateId) {
    const template = state.templates.find((item) => item.id === templateId) || state.templates[0] || defaultTemplate;
    const now = new Date().toISOString();
    const submission = {
      id: uid("audit"),
      templateId: template.id,
      templateSnapshot: deepClone(template),
      title: `New ${template.name}`,
      createdAt: now,
      updatedAt: now,
      meta: {},
      itemResponses: {},
      photoEvidence: {}
    };
    ensureSubmissionShape(submission);
    state.submissions.push(submission);
    state.activeSubmissionId = submission.id;
    saveState();
    return submission;
  }

  function ensureSubmissionShape(submission) {
    const template = submission.templateSnapshot || state.templates.find((item) => item.id === submission.templateId) || defaultTemplate;
    submission.templateSnapshot = normalizeTemplate(template);
    submission.meta ||= {};
    submission.itemResponses ||= {};
    submission.photoEvidence ||= {};

    submission.templateSnapshot.siteFields.forEach((field) => {
      if (field.type === "date" && !submission.meta[field.id]) {
        submission.meta[field.id] = new Date().toISOString().slice(0, 10);
      } else if (submission.meta[field.id] == null) {
        submission.meta[field.id] = "";
      }
    });

    submission.templateSnapshot.sections.forEach((section) => {
      section.items.forEach((item) => {
        if (!submission.itemResponses[item.id]) {
          submission.itemResponses[item.id] = {
            status: "Pending",
            remarks: "",
            photos: []
          };
        }
      });
    });

    submission.templateSnapshot.photoRequirements.forEach((requirement) => {
      if (!submission.photoEvidence[requirement.id]) {
        submission.photoEvidence[requirement.id] = { photos: [] };
      }
    });
  }

  function getActiveSubmission() {
    return state.submissions.find((submission) => submission.id === state.activeSubmissionId) || null;
  }

  function getItemResponse(submission, itemId) {
    submission.itemResponses[itemId] ||= { status: "Pending", remarks: "", photos: [] };
    return submission.itemResponses[itemId];
  }

  function getPhotoEvidence(submission, requirementId) {
    submission.photoEvidence[requirementId] ||= { photos: [] };
    return submission.photoEvidence[requirementId];
  }

  function getPhotos(submission, scope, key) {
    if (scope === "item") return getItemResponse(submission, key).photos;
    return getPhotoEvidence(submission, key).photos;
  }

  async function addPhotos(submission, scope, key, files) {
    const photos = getPhotos(submission, scope, key);
    const available = PHOTO_LIMIT - photos.length;
    if (available <= 0) return;
    const selected = Array.from(files).slice(0, available);
    for (const file of selected) {
      photos.push(await fileToPhoto(file));
    }
    if (files.length > available) {
      alert(`Only ${PHOTO_LIMIT} photos are allowed for this point.`);
    }
  }

  function fileToPhoto(file) {
    return new Promise((resolve, reject) => {
      if (!file.type.startsWith("image/")) {
        reject(new Error("Only image files can be uploaded."));
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        const image = new Image();
        image.onload = () => {
          const maxEdge = 1000;
          const scale = Math.min(1, maxEdge / Math.max(image.width, image.height));
          const canvas = document.createElement("canvas");
          canvas.width = Math.max(1, Math.round(image.width * scale));
          canvas.height = Math.max(1, Math.round(image.height * scale));
          const context = canvas.getContext("2d");
          context.drawImage(image, 0, 0, canvas.width, canvas.height);
          resolve({
            src: canvas.toDataURL("image/jpeg", 0.68),
            name: file.name,
            caption: "",
            capturedAt: new Date().toISOString()
          });
        };
        image.onerror = () => reject(new Error("Could not read the image."));
        image.src = reader.result;
      };
      reader.onerror = () => reject(new Error("Could not read the file."));
      reader.readAsDataURL(file);
    });
  }

  function persistActiveSubmission(showToast = false) {
    const submission = getActiveSubmission();
    if (!submission) return;
    submission.updatedAt = new Date().toISOString();
    updateSubmissionTitle(submission);
    saveState();
    if (showToast) toast("Draft saved in this browser.");
  }

  function updateSubmissionTitle(submission) {
    const meta = submission.meta || {};
    const siteField = submission.templateSnapshot.siteFields.find((field) => /site/i.test(field.label));
    const site = siteField ? meta[siteField.id] : "";
    const engineer = meta.audit_engineer || meta.auditor || "";
    const fallback = submission.templateSnapshot.name;
    submission.title = [site, engineer].filter(Boolean).join(" - ") || fallback;
  }

  function getStats(submission) {
    ensureSubmissionShape(submission);
    const responses = Object.values(submission.itemResponses || {});
    const total = submission.templateSnapshot.sections.reduce((sum, section) => sum + section.items.length, 0);
    const ok = responses.filter((response) => response.status === "OK").length;
    const notOk = responses.filter((response) => response.status === "Not OK").length;
    const na = responses.filter((response) => response.status === "N/A").length;
    const pending = Math.max(0, total - ok - notOk - na);
    const reqPhotos = Object.values(submission.photoEvidence || {}).reduce(
      (sum, evidence) => sum + (evidence.photos?.length || 0),
      0
    );
    return { total, ok, notOk, na, pending, photos: reqPhotos };
  }

  function getTemplateStats(template) {
    return {
      sections: template.sections?.length || 0,
      items: (template.sections || []).reduce((sum, section) => sum + (section.items?.length || 0), 0),
      photos: template.photoRequirements?.length || 0
    };
  }

  function renderSidebar() {
    const submission = getActiveSubmission();
    if (!submission) return;
    const stats = getStats(submission);
    els.sidebarReportName.textContent = submission.title || "New audit";
    els.sidebarMetrics.innerHTML = [
      ["OK", stats.ok],
      ["Not OK", stats.notOk],
      ["Pending", stats.pending],
      ["Photos", stats.photos]
    ]
      .map(
        ([label, value]) => `
          <div class="metric">
            <strong>${value}</strong>
            <span>${label}</span>
          </div>
        `
      )
      .join("");
  }

  async function importTemplateFile(file) {
    const extension = file.name.split(".").pop().toLowerCase();
    if (extension === "json") {
      const text = await file.text();
      return JSON.parse(text);
    }
    if (!window.XLSX) {
      throw new Error("Excel import library is still loading. Try again in a few seconds.");
    }
    const buffer = await file.arrayBuffer();
    const workbook = window.XLSX.read(buffer, { type: "array" });
    const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
    const rows = window.XLSX.utils.sheet_to_json(firstSheet, { header: 1, defval: "" });
    return parseRowsToTemplate(rows, file.name);
  }

  function parseRowsToTemplate(rows, sourceName) {
    const cleanedRows = rows.map((row) => row.map((cell) => String(cell ?? "").trim()));
    const firstTextRow = cleanedRows.find((row) => row.some(Boolean)) || [];
    const name = firstTextRow[0] || sourceName.replace(/\.(xlsx|xls|csv)$/i, "");
    const siteFields = [];
    const sections = [];
    const photoRequirements = [];

    for (let i = 1; i < cleanedRows.length; i += 1) {
      const first = cleanedRows[i][0] || "";
      if (!first) continue;
      if (isSectionTitle(first) || isPhotoPlaceholder(first)) break;
      const label = first.split(":")[0].replace(/_+/g, "").trim();
      if (label && !siteFields.some((field) => field.label === label)) {
        siteFields.push({ id: slugify(label), label, type: "text" });
      }
    }

    let index = 0;
    while (index < cleanedRows.length) {
      const row = cleanedRows[index];
      const first = row[0] || "";

      if (isPhotoPlaceholder(first)) {
        const title = first.replace(/^\[?Photo Placeholder\s*\d*\s*:?\s*/i, "").replace(/\]?$/, "").trim();
        const requirementRow = cleanedRows[index + 1]?.[0] || "";
        photoRequirements.push({
          id: slugify(`photo-${title || photoRequirements.length + 1}`),
          title: title || `Photo Point ${photoRequirements.length + 1}`,
          requirement: requirementRow.replace(/^Requirement:\s*/i, "").trim(),
          limit: PHOTO_LIMIT
        });
        index += 2;
        continue;
      }

      if (isSectionTitle(first) && !/photographic documentation/i.test(first)) {
        const section = {
          id: slugify(first),
          title: first,
          description: "",
          items: []
        };
        const maybeDescription = cleanedRows[index + 1]?.[0] || "";
        const headerIndex = findHeaderRow(cleanedRows, index + 1);
        if (maybeDescription && headerIndex !== index + 1 && !isSectionTitle(maybeDescription)) {
          section.description = maybeDescription;
        }
        const headerRow = cleanedRows[headerIndex] || [];
        const inputLabel = headerRow[4] || "Remarks";
        let cursor = headerIndex + 1;
        while (cursor < cleanedRows.length) {
          const itemRow = cleanedRows[cursor];
          const itemId = itemRow[0] || "";
          const itemName = itemRow[1] || "";
          if (!itemId && !itemName) {
            cursor += 1;
            continue;
          }
          if (isSectionTitle(itemId) || isPhotoPlaceholder(itemId) || /^-{3,}/.test(itemId)) break;
          if (itemName) {
            section.items.push({
              id: itemId || `${sections.length + 1}.${section.items.length + 1}`,
              item: itemName,
              criteria: itemRow[2] || "",
              inputLabel
            });
          }
          cursor += 1;
        }
        if (section.items.length) sections.push(section);
        index = cursor;
        continue;
      }

      index += 1;
    }

    if (!sections.length) {
      throw new Error("No checklist rows were found. The sheet needs ID, checkpoint, criteria, status, and remarks columns.");
    }

    return normalizeTemplate({
      id: uid("tpl"),
      name,
      revision: "Imported",
      source: sourceName,
      siteFields: siteFields.length ? siteFields : defaultTemplate.siteFields,
      sections,
      photoRequirements
    });
  }

  function findHeaderRow(rows, start) {
    for (let index = start; index < Math.min(rows.length, start + 5); index += 1) {
      const row = rows[index].map((cell) => cell.toLowerCase());
      if (row.includes("id") && row.some((cell) => cell.includes("checkpoint"))) return index;
    }
    return start;
  }

  function isSectionTitle(value) {
    return /^\d+\.\s+\S/.test(value);
  }

  function isPhotoPlaceholder(value) {
    return /^\[?Photo Placeholder/i.test(value);
  }

  function normalizeTemplate(template) {
    if (!template.name) throw new Error("Template name is required.");
    const normalized = deepClone(template);
    normalized.id ||= uid("tpl");
    normalized.siteFields = (normalized.siteFields?.length ? normalized.siteFields : defaultTemplate.siteFields).map(
      (field) => ({
        id: field.id || slugify(field.label),
        label: field.label,
        type: field.type || "text",
        required: Boolean(field.required)
      })
    );
    normalized.sections = (normalized.sections || []).map((section, sectionIndex) => ({
      id: section.id || slugify(section.title || `section-${sectionIndex + 1}`),
      title: section.title || `Section ${sectionIndex + 1}`,
      description: section.description || "",
      items: (section.items || []).map((item, itemIndex) => ({
        id: String(item.id || `${sectionIndex + 1}.${itemIndex + 1}`),
        item: item.item || item.name || `Checkpoint ${itemIndex + 1}`,
        criteria: item.criteria || item.requirement || "",
        inputLabel: item.inputLabel || "Remarks"
      }))
    }));
    normalized.photoRequirements = (normalized.photoRequirements || []).map((requirement, index) => ({
      id: requirement.id || slugify(requirement.title || `photo-${index + 1}`),
      title: requirement.title || `Photo Point ${index + 1}`,
      requirement: requirement.requirement || "",
      limit: PHOTO_LIMIT
    }));
    return normalized;
  }

  function renderPrintReport(submission) {
    ensureSubmissionShape(submission);
    const template = submission.templateSnapshot;
    const stats = getStats(submission);
    const metaRows = template.siteFields
      .map((field) => `<div><strong>${escapeHtml(field.label)}:</strong> ${escapeHtml(submission.meta[field.id] || "-")}</div>`)
      .join("");
    const sectionHtml = template.sections
      .map((section) => {
        const rows = section.items
          .map((item) => {
            const response = getItemResponse(submission, item.id);
            return `
              <tr>
                <td>${escapeHtml(item.id)}</td>
                <td><strong>${escapeHtml(item.item)}</strong><br />${escapeHtml(item.criteria)}</td>
                <td>${escapeHtml(response.status || "Pending")}</td>
                <td>${escapeHtml(response.remarks || "-")}</td>
              </tr>
            `;
          })
          .join("");
        return `
          <section class="print-section">
            <h2>${escapeHtml(section.title)}</h2>
            ${section.description ? `<p>${escapeHtml(section.description)}</p>` : ""}
            <table class="print-table">
              <thead>
                <tr><th>ID</th><th>Checkpoint / Requirement</th><th>Status</th><th>Remarks / Actual Value</th></tr>
              </thead>
              <tbody>${rows}</tbody>
            </table>
          </section>
        `;
      })
      .join("");

    const photoSection = template.photoRequirements?.length
      ? `
        <section class="print-section">
          <h2>Photographic Documentation</h2>
          ${template.photoRequirements
            .map((requirement) => {
              const evidence = getPhotoEvidence(submission, requirement.id);
              const photos = (evidence.photos || [])
                .map(
                  (photo) => `
                    <div class="print-photo">
                      <img src="${escapeAttr(photo.src)}" alt="${escapeAttr(photo.caption || photo.name || "Evidence")}" />
                      <p>${escapeHtml(photo.caption || photo.name || "Evidence photo")}</p>
                    </div>
                  `
                )
                .join("");
              return `
                <div class="print-section">
                  <h2>${escapeHtml(requirement.title)}</h2>
                  <p>${escapeHtml(requirement.requirement)}</p>
                  <div class="print-photos">${photos || "<p>No photos attached.</p>"}</div>
                </div>
              `;
            })
            .join("")}
        </section>
      `
      : "";

    els.printRoot.innerHTML = `
      <div class="print-cover">
        <h1>${escapeHtml(template.name)}</h1>
        <div class="print-meta">
          ${metaRows}
          <div><strong>Report Generated:</strong> ${escapeHtml(formatDateTime(new Date().toISOString()))}</div>
          <div><strong>Draft Last Updated:</strong> ${escapeHtml(formatDateTime(submission.updatedAt))}</div>
        </div>
      </div>
      <div class="print-summary">
        <div><strong>Total</strong><br />${stats.total}</div>
        <div><strong>OK</strong><br />${stats.ok}</div>
        <div><strong>Not OK</strong><br />${stats.notOk}</div>
        <div><strong>Pending</strong><br />${stats.pending}</div>
        <div><strong>Photos</strong><br />${stats.photos}</div>
      </div>
      ${sectionHtml}
      ${photoSection}
    `;
  }

  function statusPill(status) {
    const className =
      status === "OK"
        ? "status-ok"
        : status === "Not OK"
          ? "status-not-ok"
          : status === "N/A"
            ? "status-na"
            : "status-pending";
    return `<span class="status-pill ${className}">${escapeHtml(status || "Pending")}</span>`;
  }

  function formatDateTime(value) {
    if (!value) return "-";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return value;
    return new Intl.DateTimeFormat(undefined, {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    }).format(date);
  }

  function refreshIcons() {
    if (window.lucide) window.lucide.createIcons();
  }

  function registerServiceWorker() {
    if (!("serviceWorker" in navigator)) return;
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("sw.js").catch(() => {});
    });
  }

  function toast(message) {
    const oldToast = document.querySelector(".toast");
    if (oldToast) oldToast.remove();
    const element = document.createElement("div");
    element.className = "toast";
    element.textContent = message;
    Object.assign(element.style, {
      position: "fixed",
      right: "18px",
      bottom: "18px",
      padding: "12px 14px",
      background: "#17202a",
      color: "#fff",
      borderRadius: "8px",
      boxShadow: "0 10px 30px rgba(15,23,42,.18)",
      zIndex: 1000
    });
    document.body.appendChild(element);
    setTimeout(() => element.remove(), 2200);
  }

  function downloadJson(value, filename) {
    const blob = new Blob([JSON.stringify(value, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  }

  function uid(prefix) {
    const random = window.crypto?.randomUUID ? window.crypto.randomUUID() : `${Date.now()}-${Math.random()}`;
    return `${prefix}-${random}`;
  }

  function slugify(value) {
    return String(value || "item")
      .trim()
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 72);
  }

  function deepClone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function escapeAttr(value) {
    return escapeHtml(value);
  }
})();
