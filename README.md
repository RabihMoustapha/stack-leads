# 🚀 Leads Tracker Chrome Extension

A lightweight, efficient Chrome extension built using **Manifest V3** and vanilla JavaScript. **Leads Tracker** allows you to quickly save text inputs or instantly capture the URL of your current active browser tab, keeping your saved links persistent using the browser's `localStorage`.

---

## ✨ Features

* **Quick Input Saving:** Type or paste any lead or note and save it instantly.
* **One-Click Tab Saver:** Automatically grab and save the URL of your current active browser tab with a single click.
* **Persistent Storage:** Utilizes browser `localStorage` so your saved leads remain intact even after closing the browser.
* **Bulk Deletion:** Clear all saved leads easily with the **Delete All** button.
* **Clean UI:** Styled with a modern, minimalist interface and intuitive color palette.

---

## 🛠️ Tech Stack

* **HTML5** & **CSS3** (Popup UI & Styling)
* **JavaScript (ES6+)** (Core logic & Chrome API integration)
* **Chrome Extensions API** (Manifest V3, `tabs` permission)

---

## 📁 Project Structure

```text
Chrome Extension/
├── icon.png
├── index.html
├── manifest.json
├── scripts.js
└── styles.css
```

---

## ⚙️ Installation & Setup
Follow these steps to load and test the extension locally in Google Chrome:
* Clone or Download this repository to your local machine.
* Open Google Chrome and navigate to chrome://extensions/.
* Enable Developer mode by toggling the switch in the top-right corner.
* Click the Load unpacked button in the top-left corner.
* Select the Chrome Extension folder containing your project files.
* The Leads Tracker extension icon will now appear in your Chrome toolbar!
 
---

## 💡 Usage
* Click on the Leads Tracker icon in your Chrome toolbar to open the extension popup.
* To save custom text/URLs: Type into the input box and click Save Input.
* To save your current tab: Click Save Tab to instantly record the current page's URL.
* To access links: Click on any saved item in the list to open it in a new tab.
* To clear data: Click Delete All to wipe all saved leads from local storage.

 ---

 ## 📄 License
 This project is open-source and available under the ** MIT License **.
