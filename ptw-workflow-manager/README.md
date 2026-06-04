# PTW Workflow Manager

Mobile-first Permit-to-Work workflow app for field operations. It supports role-based dashboards, OTP-style login, PTW raising, approval, supervisor checklist capture, audit coordination, and report export.

## Open the app

Run a static server from this folder, then open the URL on desktop or Android:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Then open `http://127.0.0.1:4173/index.html`.

The app is also installable as a PWA when hosted over HTTPS.

## Demo access

- Super Admin: `0752600002`
- Initial Super Admin password: `Raje@0207`
- Raiser: `0752600101`
- Approver: `0752600102`
- One at Risk Supervisor: `0752600103`
- Audit Team: `0752600104`

OTP codes are shown on screen in this local demo. In production, connect the same login step to an SMS OTP provider.

## Included workflow

- Mobile-number-only login with one role per mobile number
- Preconfigured Super Admin with forced first-login password change
- SHA-256 password hashing for the local demo credential store
- Role-based dashboards for raiser, approver, supervisor, auditor, admin, and super admin
- PTW request creation with Site ID, activity type, supervisor assignment, scope, and planned start
- Approval or rejection with remarks and timeline logging
- Activity-based checklist with Yes/No, remarks, camera capture, timestamp, and GPS
- Remote/physical audit decision flow with WhatsApp coordination link and evidence upload
- Non-editable audit log history
- PDF print report and CSV summary export for Excel
- Offline-ready PWA cache and local storage queue foundation

## Production notes

This version runs fully in the browser for rapid field validation. For a live deployment, attach a cloud backend for SMS OTP, encrypted user storage, immutable audit logs, file storage, sync conflict handling, admin recovery, backups, and enterprise reporting.
