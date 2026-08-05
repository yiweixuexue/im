# Hosting this site on GitHub Pages

This repository includes a GitHub Actions workflow that builds and publishes the site automatically whenever `main` is updated.

## One-time setup

1. Open the repository at `https://github.com/yiweixuexue/chuweiwo`.
2. Select **Settings** → **Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Open the **Actions** tab and select **Deploy to GitHub Pages**.
5. If no run has started, choose **Run workflow** → **Run workflow**.
6. Wait for the workflow to finish. The site will be available at:
   `https://imartisan.me/`

Future pushes to `main` will update the live site automatically.

## Contact form activation

The first real form submission triggers an activation email from FormSubmit to `yiweixuexue@gmail.com`. Open that message and confirm the form once. Submissions made after confirmation will be delivered to that inbox.

## Local GitHub Pages build

Run `npm run build:github`. The generated static site is written to the ignored `out` directory.

The production site is built at the domain root for `imartisan.me`. The development preview is available under `/dev`.
