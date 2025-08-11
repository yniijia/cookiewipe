# 🍪 CookieWipe Chrome Extension

<div align="center">
  <img src="images/icon128.png" alt="CookieWipe Logo" width="128" height="128">
</div>

CookieWipe is a simple yet powerful Chrome extension that allows users to instantly clear cookies, cache, browsing history, and DNS cache with just one click, enhancing privacy and browsing experience. ✨

## ✅ Features

- **🔄 Single-Click Cookie Clearing**: Automatically clears cookies for the current site upon opening
- **🧹 Multiple Data Types**: Cookies, Cache, History, DNS cache (fallback), Local Storage, IndexedDB, Cache Storage, Service Workers
- **🎨 Beautiful, Minimal UI**: Premium design with smooth animations
- **👁️ Visual Feedback**: Clear success/error states with visual indicators
- **📱 Responsive Design**: Optimized for different screen sizes and orientations
- **♿ Accessibility Support**: Designed with WCAG guidelines in mind

## 💫 Design Philosophy

The UI design embraces a clean, minimal aesthetic with a focus on:

- **✨ Simplicity**: Distraction-free interface that focuses on core functionality
- **🌈 Calming Colors**: Soft blue palette that creates a sense of peace and clarity
- **🎭 Smooth Animations**: Subtle motion design that enhances the user experience
- **🧠 Intuitive Interactions**: Clear, consistent UI patterns that users understand immediately
- **👓 Accessibility**: High contrast text and interactive elements that work for all users

## 📥 Installation

1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" (toggle in the top-right corner)
4. Click "Load unpacked" and select the extension directory
5. The CookieWipe extension icon should now appear in your browser toolbar! 🎉

## 🚀 Usage

1. Click the CookieWipe icon in your browser toolbar to open the popup
2. Cookies for the current site will be automatically cleared 🍪✨
3. Select additional data types to clear (Cache, History, DNS Cache, Local Storage, IndexedDB, Cache Storage, Service Workers)
4. Click the "Clear Selected Data" button (or "Clear All Data" when all are selected)
5. View the status message for confirmation of successful clearing

### Supported data types

- Cookies (per current site)
- Cache (global)
- History (global)
- DNS cache (fallback via clearing browser cache)
- Local Storage (per current site)
- IndexedDB (per current site)
- Cache Storage (per current site)
- Service Workers (per current site)

Note: Cache and History are cleared globally by Chrome’s API. Cookies, Local Storage, IndexedDB, Cache Storage, and Service Workers are cleared for the active site only.

## 🔮 Future Enhancements

- 🌗 Dark mode support (already included in CSS via media queries)
- 🔒 Site exclusion list for trusted websites
- ⏰ Scheduled automatic clearing
- 📊 Detailed statistics about cleared data
- 🎨 Custom animation themes

## 👏 Credits

Originally created by [Tony Fiston](https://github.com/yniijia).

Designed and developed with a focus on clean, minimal UI/UX principles that promote digital wellbeing.

*"One click, zero crumbs."* 🍪

Version 2.03.0 💙