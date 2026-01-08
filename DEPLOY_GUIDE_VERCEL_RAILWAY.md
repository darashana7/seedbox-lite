# 🚀 Deployment Guide: SeedBox Lite

This guide explains how to deploy your configured SeedBox Lite with **Vercel (Frontend)** and **Railway (Backend)**.

## 📦 Prerequisites
1. A [GitHub Account](https://github.com/)
2. A [Vercel Account](https://vercel.com/)
3. A [Railway Account](https://railway.app/)

---

## Step 1: Push to GitHub
Since you cloned this from another user, you need to push it to *your* GitHub to deploy.

1. Create a new **Empty Repository** on GitHub (e.g., named `my-seedbox`).
2. Run these commands in your `d:\torrent` terminal:
   ```powershell
   # Remove the original git link
   rm .git -r -force
   
   # Initialize your new git
   git init
   git add .
   git commit -m "Ready for deployment"
   
   # Link to your new repo (replace URL with yours)
   git remote add origin https://github.com/YOUR_USERNAME/my-seedbox.git
   git branch -M main
   git push -u origin main
   ```

---

## Step 2: Deploy Backend (Railway)
1. Go to [Railway Dashboard](https://railway.app/dashboard).
2. Click **"New Project"** -> **"Deploy from GitHub repo"**.
3. Select your `my-seedbox` repository.
4. **Important Configuration**:
   - Go to **Settings** -> **General**.
   - Scroll down to **Root Directory** and set it to `/server`.
   - This ensures Railway installs the backend dependencies, not the root ones.
5. **Variables**:
   - Go to the **Variables** tab.
   - Add `ACCESS_PASSWORD` = `your_secure_password`
   - Add `FRONTEND_URL` = `https://your-vercel-app.vercel.app` (Update this later).
6. Railway will now deploy the server successfully.
6. Once deployed, Railway will give you a domain (e.g., `seedbox-production.up.railway.app`). **Copy this URL.**

---

## Step 3: Deploy Frontend (Vercel)
1. Go to [Vercel Dashboard](https://vercel.com/dashboard).
2. Click **"Add New..."** -> **"Project"**.
3. Import your `my-seedbox` repository.
4. **Project Settings**:
   - **Framework Preset**: Vite
   - **Root Directory**: Click "Edit" and select `client`.
5. **Environment Variables**:
   - Add `VITE_API_BASE_URL` = `https://seedbox-production.up.railway.app` (Paste the Railway URL from Step 2).
6. Click **Deploy**.

---

## Step 4: Final Connection
1. Once Vercel finishes, you'll get your site URL (e.g., `https://my-seedbox.vercel.app`).
2. Go back to **Railway** -> **Variables**.
3. Update `FRONTEND_URL` to match your new Vercel URL.
4. Railway will restart automatically.

**🎉 You are now live!**
