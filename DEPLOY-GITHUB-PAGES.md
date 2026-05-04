# Deploy Civil Checksheet Studio To GitHub Pages

Use this when you need a public mobile link that works from any network.

## Fast GitHub Website Method

1. Sign in to GitHub with your account.
2. Create a new public repository named `civil-checksheet-studio`.
3. Upload these files from this folder:
   - `index.html`
   - `styles.css`
   - `app.js`
   - `manifest.webmanifest`
   - `sw.js`
   - `icon.svg`
   - `.nojekyll`
   - `README.md`
4. Open the repository **Settings**.
5. Go to **Pages**.
6. Under **Build and deployment**, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
7. Save.
8. Wait one to three minutes.
9. GitHub will show the live URL. It will look like:
   `https://YOUR-GITHUB-USERNAME.github.io/civil-checksheet-studio/`

## Notes

- This version works as an online mobile web app after hosting.
- Photo upload is only in the Photographic Documentation section.
- Checklist rows only have status and remarks or actual value.
- Drafts are stored in the browser used by each field user.
- Multi-user login, central storage, and shared reports require a backend database and file storage.
