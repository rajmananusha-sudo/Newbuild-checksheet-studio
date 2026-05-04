# Civil Checksheet Studio

This is a local browser app for filling civil audit check sheets, attaching evidence photos, editing saved drafts, importing more check sheet templates, and producing a print-ready PDF report.

## Open the app

Open `index.html` in a browser.

For mobile field use, host this folder on a static website service such as GitHub Pages, Netlify, Vercel, or your company web server. The site is ready to run from normal HTTPS hosting.

## What is included

- Seeded template from `C1 & C2 Civil Check Sheet-A R1.xlsx`
- Editable site and audit details
- Status, remarks, and actual values on checklist rows
- Separate photographic documentation points from the workbook
- Up to 4 photos per photographic documentation point
- Saved reports that can be reopened and edited
- Excel, CSV, or JSON template import
- Browser print export for PDF output
- Mobile install support through `manifest.webmanifest` and `sw.js`

## Notes

The current version stores data in the browser on this computer. For real multi-user login, shared cloud storage, approvals, and central report access, the next step is adding a backend database and file storage.
