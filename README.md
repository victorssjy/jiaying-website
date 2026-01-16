# Jiaying He - Composer Website

Personal website for contemporary music composer Jiaying He.

---

## 📁 Project Structure

```
jiaying-website/
├── public/
│   ├── images/
│   │   ├── profile.jpg          ← Your profile photo
│   │   ├── background.jpg       ← Homepage background (optional)
│   │   ├── concert-1.jpg        ← Concert photo 1
│   │   ├── concert-2.jpg        ← Concert photo 2
│   │   └── concert-3.jpg        ← Concert photo 3
│   ├── files/
│   │   └── CV_Jiaying_He.pdf    ← Your CV
│   └── favicon.svg
├── src/
│   ├── App.jsx                  ← Main application
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## 🚀 DEPLOYMENT GUIDE

### Step 1: Prepare Your Files

1. **Create the folders** inside `public/`:
   ```
   public/images/
   public/files/
   ```

2. **Add your images** (rename them exactly as shown):
   - `public/images/profile.jpg` - Your professional headshot
   - `public/images/concert-1.jpg` - WDR concert photo
   - `public/images/concert-2.jpg` - Bergische Symphoniker photo
   - `public/images/concert-3.jpg` - Oberhausen concert photo
   - `public/images/background.jpg` - (Optional) Custom background

3. **Add your CV**:
   - `public/files/CV_Jiaying_He.pdf`

---

### Step 2: Create GitHub Repository

1. **Go to GitHub**: https://github.com

2. **Create account** (if you don't have one)

3. **Create new repository**:
   - Click green "New" button (top left)
   - Repository name: `jiaying-website`
   - Keep it **Public**
   - Do NOT initialize with README
   - Click "Create repository"

4. **Upload files** (easiest method - drag & drop):
   - On the empty repo page, click "uploading an existing file"
   - Drag the entire project folder contents
   - Commit message: "Initial commit"
   - Click "Commit changes"

**Alternative: Using Terminal (Mac)**
```bash
cd /path/to/jiaying-website
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/jiaying-website.git
git push -u origin main
```

---

### Step 3: Deploy on Vercel

1. **Go to Vercel**: https://vercel.com

2. **Sign up with GitHub** (click "Continue with GitHub")

3. **Import project**:
   - Click "Add New..." → "Project"
   - Select your `jiaying-website` repository
   - Click "Import"

4. **Configure project**:
   - Framework Preset: **Vite** (should auto-detect)
   - Root Directory: `./` (leave default)
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Click "Deploy"

5. **Wait 1-2 minutes** - Your site is now live at:
   ```
   https://jiaying-website.vercel.app
   ```

---

### Step 4: Connect Your Domain (hejiaying-composer.de)

#### On Vercel:

1. Go to your project dashboard on Vercel
2. Click "Settings" → "Domains"
3. Enter: `hejiaying-composer.de`
4. Click "Add"
5. Vercel will show you DNS records to configure

#### On Your Domain Provider:

You need to add these DNS records (exact values from Vercel):

| Type | Name | Value |
|------|------|-------|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

**Common Domain Providers:**
- **Namecheap**: Domain List → Manage → Advanced DNS
- **GoDaddy**: My Products → DNS → Manage Zones
- **IONOS/1&1**: Domains → DNS Settings
- **Strato**: Domain → DNS Settings

#### Steps:
1. Login to your domain provider
2. Find DNS settings / DNS management
3. Delete existing A records for @ (if any)
4. Add new A record: `@` → `76.76.21.21`
5. Add CNAME record: `www` → `cname.vercel-dns.com`
6. Save changes
7. Wait 5-30 minutes for DNS propagation

#### Verify on Vercel:
- Go back to Vercel → Settings → Domains
- Status should change from "Pending" to "Valid Configuration"
- SSL certificate is automatically issued

---

## 🔄 HOW TO UPDATE CONTENT (Every 6 Months)

### Method A: Edit on GitHub (Easiest)

1. Go to https://github.com/YOUR_USERNAME/jiaying-website
2. Navigate to `src/App.jsx`
3. Click the pencil icon (Edit)
4. Make your changes
5. Scroll down, write commit message: "Update calendar 2026"
6. Click "Commit changes"
7. **Vercel automatically rebuilds** (live in ~1 minute)

### Method B: Edit Locally

```bash
# Clone (first time only)
git clone https://github.com/YOUR_USERNAME/jiaying-website.git
cd jiaying-website

# Make changes to src/App.jsx

# Push changes
git add .
git commit -m "Update events"
git push
```

---

## 📝 COMMON UPDATES

### Add New Concert Event

In `src/App.jsx`, find `EVENTS_DATA` and add to `upcoming` or `archive`:

```javascript
{ 
  id: 26,  // increment ID
  date: "2026-06-15", 
  city: "Vienna, Austria", 
  venue: "Musikverein", 
  title: "New Work Title", 
  ensemble: "Vienna Philharmonic", 
  description: "World Premiere" 
},
```

### Add New Score

Find `SCORES_DATA` and add:

```javascript
{ 
  id: 24,  // increment ID
  title: "New Composition", 
  year: 2026, 
  instrumentation: "Orchestra", 
  duration: "10'", 
  pdfUrl: null  // or "/files/scores/new-score.pdf" if uploading
},
```

### Add New Concert Photo

1. Upload image to `public/images/concert-4.jpg`
2. In `App.jsx`, find `CONCERT_PHOTOS` and add:

```javascript
{ 
  id: 4, 
  url: "/images/concert-4.jpg", 
  caption: "Event Name, City 2026" 
},
```

### Update CV

1. Replace `public/files/CV_Jiaying_He.pdf` with new version
2. Push to GitHub

---

## 🛠 LOCAL DEVELOPMENT

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📋 CHECKLIST BEFORE GOING LIVE

- [ ] Profile photo added (`public/images/profile.jpg`)
- [ ] CV added (`public/files/CV_Jiaying_He.pdf`)
- [ ] Concert photos added (`public/images/concert-*.jpg`)
- [ ] Background image added (or using default)
- [ ] All event dates are correct
- [ ] All score information is accurate
- [ ] Contact email is correct
- [ ] Social media links work
- [ ] Domain DNS configured
- [ ] SSL certificate active (green lock in browser)

---

## 🆘 TROUBLESHOOTING

**Images not showing?**
- Check file names match exactly (case-sensitive)
- Ensure files are in `public/` folder, not `src/`

**Build failed on Vercel?**
- Check Vercel build logs for error messages
- Most common: missing dependency or syntax error

**Domain not working?**
- DNS changes can take up to 48 hours
- Verify DNS records on https://dnschecker.org

**Need help?**
- Vercel Docs: https://vercel.com/docs
- Vite Docs: https://vitejs.dev

---

## 📄 License

© 2025 Jiaying He. All rights reserved.
