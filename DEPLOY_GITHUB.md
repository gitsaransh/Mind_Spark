# 🚀 Deploy MindSpark to GitHub Pages (FREE)

Since Netlify is out of credits, let's deploy to **GitHub Pages**. It's completely free and unlimited for public repositories.

## 📥 **Step 1: Install Deployment Tool**
Run this command in your terminal:
```bash
npm install gh-pages --save-dev
```

## ⚙️ **Step 2: Update `package.json`**
Add these lines to your `package.json` file inside the `"scripts"` section:
```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "deploy": "gh-pages -d www"
}
```

## 🚀 **Step 3: Deploy**
Run this command:
```bash
npm run deploy
```

## 🔗 **Step 4: Configure GitHub**
1.  Go to your GitHub repository: **https://github.com/gitsaransh/Mind_Spark**
2.  Click **Settings** > **Pages** (left menu).
3.  Under **Build and deployment**, confirm:
    *   **Source:** Deploy from a branch
    *   **Branch:** `gh-pages` / `/(root)`
4.  Click **Save** (if needed).

## ✅ **Done!**
Your Privacy Policy will be live at:
**https://gitsaransh.github.io/Mind_Spark/privacy_policy.html**

---

### Why this is better:
*   **Free Forever:** No credit limits.
*   **Fast:** Served directly from GitHub.
*   **Secure:** SSL (https) included automatically.
