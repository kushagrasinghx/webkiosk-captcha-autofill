window.addEventListener("load", () => {
    const captchaElement = document.querySelector("font.noselect");
    const captchaInput = document.getElementById("txtcap");
  
    if (captchaElement && captchaInput) {
      const captchaText = captchaElement.textContent.trim();
      captchaInput.value = captchaText;
  
      loadGoogleFont(); // Load DM Sans font
      showToast(`✅ Captcha Autofilled: ${captchaText}`);
      console.log(`Autofilled CAPTCHA: ${captchaText}`);
    } else {
      console.warn("CAPTCHA element or input field not found.");
    }
  });
  
  function loadGoogleFont() {
    const existingLink = document.getElementById("dm-sans-font");
    if (existingLink) return;
  
    const link = document.createElement("link");
    link.id = "dm-sans-font";
    link.href = "https://fonts.googleapis.com/css2?family=DM+Sans&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }
  
  function showToast(message) {
    const toast = document.createElement("div");
    toast.textContent = message;
    toast.style.position = "fixed";
    toast.style.bottom = "20px";
    toast.style.right = "20px";
    toast.style.padding = "12px 20px";
    toast.style.backgroundColor = "#333";
    toast.style.color = "#fff";
    toast.style.borderRadius = "6px";
    toast.style.fontSize = "14px";
    toast.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
    toast.style.zIndex = "9999";
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.5s ease";
    toast.style.fontFamily = "'DM Sans', sans-serif";
  
    document.body.appendChild(toast);
  
    requestAnimationFrame(() => {
      toast.style.opacity = "1";
    });
  
    setTimeout(() => {
      toast.style.opacity = "0";
      setTimeout(() => {
        toast.remove();
      }, 500);
    }, 10000);
  }
  