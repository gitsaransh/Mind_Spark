# 📝 Create MindSpark Feedback Form

**Status:** ⏳ Pending - You need to create the form  
**Time:** 5 minutes  
**Priority:** HIGH

---

## 🎯 **Quick Steps:**

### **1. Create Google Form**
1. Go to: https://forms.google.com
2. Click **"+ Blank"** to create new form
3. Title: **"MindSpark Feedback"**

### **2. Add These Questions:**

**Question 1:** What do you think of MindSpark?
- Type: Paragraph
- Required: Yes

**Question 2:** Which features do you use most?
- Type: Checkboxes
- Options:
  - Daily Challenge
  - Practice Mode
  - Timed Mode
  - Relaxed Mode
  - Hint System
  - Badge Collection

**Question 3:** What would you like to see improved?
- Type: Paragraph
- Required: No

**Question 4:** How likely are you to recommend MindSpark? (1-10)
- Type: Linear scale (1-10)
- Required: Yes

**Question 5:** Your email (optional, for follow-up)
- Type: Short answer
- Required: No

### **3. Get the Form Link**
1. Click **"Send"** button (top right)
2. Click the **link icon** 🔗
3. Check **"Shorten URL"**
4. Copy the link (looks like: `https://forms.gle/ABC123xyz`)

### **4. Update the Code**
Replace in `www/js/app.js` line 173:
```javascript
const feedbackUrl = "https://forms.gle/YOUR_FORM_ID_HERE";
```

With your actual form URL:
```javascript
const feedbackUrl = "https://forms.gle/ABC123xyz";
```

### **5. Deploy**
```bash
git add www/js/app.js
git commit -m "feat: add Google Form feedback URL"
git push origin main
```

Netlify will auto-deploy in 30 seconds!

---

## 📊 **Form Settings (Recommended):**

- ✅ **Collect email addresses:** OFF (unless you want it)
- ✅ **Limit to 1 response:** OFF (allow multiple feedback)
- ✅ **Edit after submit:** ON (let users update)
- ✅ **See summary charts:** ON (view analytics)

---

## 🎨 **Optional: Customize Form**

1. Click **palette icon** (top right) to change theme
2. Choose MindSpark colors:
   - Header color: Dark blue (#1a202c)
   - Background: Light gray

---

## ✅ **After Creating:**

1. Test the form yourself
2. Update the URL in code
3. Commit and push
4. Test the feedback button in the app

---

**Current Status:** ✅ **COMPLETE** - Form integrated in app  
**Form URL:** https://docs.google.com/forms/d/e/1FAIpQLSfz_hVMhh6DpfE4kgxl1S4s8OLO-TF-evJLecwVjMXbYm7jZg/viewform  

**The feedback loop is ready!** 📝
