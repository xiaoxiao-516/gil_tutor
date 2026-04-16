

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Deploy to GitHub Pages

  1. Push this project to a GitHub repository.
  2. Make sure the default branch is `main`, or update `.github/workflows/deploy-pages.yml` to match your branch.
  3. In GitHub, open `Settings` → `Pages` and set `Source` to `GitHub Actions`.
  4. Push to `main` to trigger deployment automatically.

  Notes:

  - The app uses hash-based routing so shared GitHub Pages links work without server-side rewrites.
  - Static asset paths are configured for Pages-friendly relative builds.
  
