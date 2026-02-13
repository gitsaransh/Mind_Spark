# 🎨 Enso Studio Splash Screen - Reusable Template

**Created:** Feb 7, 2026  
**Use:** Add to any project to show Enso Studio branding

---

## 📦 **What's Included:**

1. **HTML Structure** - Copy-paste ready
2. **CSS Styles** - Complete styling + animations
3. **JavaScript** - Auto-remove after 3 seconds
4. **Customization Guide** - Easy modifications

---

## 🚀 **Quick Setup (3 Steps):**

### **Step 1: Add CSS**

Create `css/enso-splash.css` or add to your existing CSS:

```css
/* ============================================
   ENSO STUDIO SPLASH SCREEN
   ============================================ */

.splash-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0a0a0a;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    animation: splashFadeOut 0.5s ease-out 2.5s forwards;
}

.splash-logo-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    animation: splashFadeIn 0.8s ease-out;
}

.splash-logo {
    width: 80px;
    height: 80px;
    border: 3px solid #00d9ff;
    border-right: 3px solid transparent;
    border-radius: 50%;
    position: relative;
    animation: logoSpinClockwise 2s linear infinite;
}

.splash-logo::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    height: 60%;
    border: 2px solid #00d9ff;
    border-right: 2px solid transparent;
    border-radius: 50%;
    opacity: 0.6;
    animation: logoSpinCounterClockwise 2s linear infinite;
}

.splash-tagline {
    font-size: 0.875rem;
    color: #00d9ff;
    letter-spacing: 0.05em;
    text-align: center;
    animation: textFadeIn 1s ease-out 0.6s both;
}

/* Animations */
@keyframes splashFadeIn {
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes splashFadeOut {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
        visibility: hidden;
    }
}

@keyframes logoSpinClockwise {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

@keyframes logoSpinCounterClockwise {
    from {
        transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
        transform: translate(-50%, -50%) rotate(-360deg);
    }
}

@keyframes textFadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Mobile Responsive */
@media (max-width: 768px) {
    .splash-logo {
        width: 60px;
        height: 60px;
    }
    
    .splash-tagline {
        font-size: 0.75rem;
    }
}
```

---

### **Step 2: Add HTML**

Add this right after `<body>` tag in your `index.html`:

```html
<!-- Enso Studio Splash Screen -->
<div id="splash-screen" class="splash-screen">
  <div class="splash-logo-container">
    <div class="splash-logo"></div>
    <div class="splash-tagline">Developed by ENSO Studio</div>
  </div>
</div>
```

---

### **Step 3: Add JavaScript**

Add this to your main JavaScript file (or create `js/splash.js`):

```javascript
// Remove Enso Studio splash screen after animation
setTimeout(() => {
    const splash = document.getElementById('splash-screen');
    if (splash) {
        splash.remove();
    }
}, 3000); // 3 seconds total (2.5s display + 0.5s fade out)
```

**Or if you have an init function:**

```javascript
function init() {
    // Remove splash screen
    setTimeout(() => {
        const splash = document.getElementById('splash-screen');
        if (splash) {
            splash.remove();
        }
    }, 3000);
    
    // Your other initialization code...
}
```

---

## 🎨 **Customization Options:**

### **Change Duration:**

```javascript
// Shorter (2 seconds)
setTimeout(() => { /* ... */ }, 2000);

// Longer (5 seconds)
setTimeout(() => { /* ... */ }, 5000);
```

### **Change Colors:**

```css
/* Cyan to Purple */
border: 3px solid #9333ea;
color: #9333ea;

/* Cyan to Green */
border: 3px solid #10b981;
color: #10b981;

/* Cyan to Orange */
border: 3px solid #f97316;
color: #f97316;
```

### **Change Size:**

```css
/* Larger Logo */
.splash-logo {
    width: 120px;
    height: 120px;
    border: 4px solid #00d9ff;
}

/* Smaller Logo */
.splash-logo {
    width: 60px;
    height: 60px;
    border: 2px solid #00d9ff;
}
```

### **Change Spin Speed:**

```css
/* Faster (1 second per rotation) */
animation: logoSpinClockwise 1s linear infinite;

/* Slower (4 seconds per rotation) */
animation: logoSpinClockwise 4s linear infinite;

/* No spinning */
animation: none;
```

### **Change Background:**

```css
/* Gradient Background */
background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);

/* Solid Color */
background: #000000;

/* Dark Blue */
background: #0f172a;
```

### **Add Project Name:**

```html
<div class="splash-logo-container">
  <div class="splash-logo"></div>
  <div class="splash-project-name">Your Project Name</div>
  <div class="splash-tagline">Developed by ENSO Studio</div>
</div>
```

```css
.splash-project-name {
    font-size: 1.5rem;
    font-weight: 700;
    color: #ffffff;
    letter-spacing: 0.1em;
    animation: textFadeIn 1s ease-out 0.4s both;
}
```

---

## 📱 **Framework-Specific Integration:**

### **React/Next.js:**

```jsx
// components/EnsoSplash.jsx
import { useEffect } from 'react';
import './enso-splash.css';

export default function EnsoSplash() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const splash = document.getElementById('splash-screen');
      if (splash) splash.remove();
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="splash-screen" className="splash-screen">
      <div className="splash-logo-container">
        <div className="splash-logo"></div>
        <div className="splash-tagline">Developed by ENSO Studio</div>
      </div>
    </div>
  );
}
```

### **Vue.js:**

```vue
<!-- components/EnsoSplash.vue -->
<template>
  <div id="splash-screen" class="splash-screen">
    <div class="splash-logo-container">
      <div class="splash-logo"></div>
      <div class="splash-tagline">Developed by ENSO Studio</div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      const splash = document.getElementById('splash-screen');
      if (splash) splash.remove();
    }, 3000);
  }
}
</script>

<style src="./enso-splash.css"></style>
```

### **Vanilla JS (Module):**

```javascript
// enso-splash.js
export function initEnsoSplash(duration = 3000) {
  setTimeout(() => {
    const splash = document.getElementById('splash-screen');
    if (splash) {
      splash.remove();
    }
  }, duration);
}

// Usage:
import { initEnsoSplash } from './enso-splash.js';
initEnsoSplash(); // Default 3 seconds
// or
initEnsoSplash(5000); // Custom 5 seconds
```

---

## 🎯 **Brand Colors:**

```css
/* Enso Studio Official Colors */
--enso-cyan: #00d9ff;
--enso-dark: #0a0a0a;
--enso-white: #ffffff;
```

---

## 📦 **Complete Package:**

All files are in your MindSpark project:
- **CSS:** `www/css/splash.css`
- **HTML:** `www/index.html` (lines 41-47)
- **JS:** `www/js/app.js` (lines 9-15)

---

## 🚀 **Quick Copy-Paste:**

### **For New Project:**

1. Copy `www/css/splash.css` → Your project
2. Copy HTML snippet → Your `index.html`
3. Copy JS snippet → Your main JS file
4. Done! ✅

---

## 💡 **Pro Tips:**

1. **Keep it short:** 2-3 seconds is ideal
2. **Match your brand:** Change colors to match project
3. **Mobile first:** Test on mobile devices
4. **Performance:** Pure CSS, no images = fast!
5. **Accessibility:** Consider adding skip button for users

---

## 🎨 **Design Variations:**

### **Minimal (No Animation):**
```css
.splash-logo {
    animation: none;
}
.splash-logo::before {
    animation: none;
}
```

### **Pulsing Effect:**
```css
@keyframes logoPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}
.splash-logo {
    animation: logoPulse 1.5s ease-in-out infinite;
}
```

### **Glow Effect:**
```css
.splash-logo {
    box-shadow: 0 0 20px rgba(0, 217, 255, 0.5);
}
```

---

## 📊 **Performance:**

- **File Size:** ~2KB (CSS only)
- **Load Time:** Instant
- **Dependencies:** None
- **Browser Support:** All modern browsers
- **Mobile:** Fully responsive

---

## ✅ **Checklist for New Project:**

- [ ] Copy CSS file
- [ ] Add HTML to index
- [ ] Add JS removal code
- [ ] Test on desktop
- [ ] Test on mobile
- [ ] Adjust duration if needed
- [ ] Customize colors (optional)
- [ ] Deploy!

---

## 🔗 **Resources:**

- **Original Project:** MindSpark
- **Location:** `c:\Users\Saransh\OneDrive\Documents\Mind_Spark\www\`
- **Live Demo:** https://mindspark-app.netlify.app

---

**Ready to use in any project!** 🎨✨

**Enso Studio - Quietly shipping focused digital products.** 🚀
