
# 🔐 JUET Captcha Autofiller Chrome Extension

A lightweight Chrome extension that automatically extracts and fills the CAPTCHA on the [JUET Webkiosk Login Page](https://webkiosk.juet.ac.in/), making the login process faster and smoother.

---

## 🚀 Features

- Extracts CAPTCHA text using the `.noselect` class
- Autofills the CAPTCHA input field (`txtcap`)
- Shows a smooth toast-style popup after autofill
- Uses the [DM Sans](https://fonts.google.com/specimen/DM+Sans) Google Font
- Works automatically on page load

---

## 📦 How to Install (Manual Method)

1. **Download or clone this repository:**

   ```bash
   git clone https://github.com/your-username/juet-captcha-autofiller.git
   ```

2. **Open Chrome and go to:**  
   `chrome://extensions/`

3. **Enable Developer Mode** (top-right corner)

4. **Click “Load unpacked”** and select the extension folder

5. **Visit** [https://webkiosk.juet.ac.in/](https://webkiosk.juet.ac.in/)  
   The CAPTCHA will autofill, and a toast popup will confirm it.

---

## 🗂️ Folder Structure

```
juet-captcha-autofiller/
├── manifest.json       # Chrome extension config
├── content.js          # Script for CAPTCHA extraction and popup
└── README.md           # You're reading it
```

---

## 🙌 Credits

- Font: [DM Sans](https://fonts.google.com/specimen/DM+Sans)  
- Developed with ❤️ to help JUET students skip repetitive typing.