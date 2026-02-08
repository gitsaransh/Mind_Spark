// Remove Enso Studio splash screen after animation
setTimeout(() => {
    const splash = document.getElementById('splash-screen');
    if (splash) {
        splash.remove();
    }
}, 3000); // 3 seconds total (2.5s display + 0.5s fade out)
