# CookieWipe Chrome Extension v2.02.25

*Instantly clear cookies, cache, history, and DNS cache from the current webpage with one click*

## What CookieWipe Does

CookieWipe helps users quickly remove browser data from the webpage they're currently viewing. With a single click on the extension icon, cookies are instantly cleared for the current site. Additionally, users can choose to clear browser cache, history, and DNS cache through the extension's intuitive interface.

## Features

- **One-click cookie clearing**: Just click the extension icon and cookies are instantly cleared for the current site.
- **Advanced data clearing options**: Optionally clear browser cache, browsing history, and DNS cache.
- **Visual confirmation**: Clear success messages showing what was cleaned and how many items were removed.
- **Animated cookie icon**: A friendly cookie that crumbles when data is cleared.
- **Elegant blue design**: Clean, modern interface with a beautiful blue color scheme.
- **Responsive UI**: Interactive checkboxes with visual feedback and dynamic button text.

## Installation

### From Chrome Web Store (Coming Soon)
1. Visit the Chrome Web Store page for CookieWipe
2. Click "Add to Chrome"
3. Confirm the installation

### Manual Installation (Developer Mode)
1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" (toggle in the top-right corner)
4. Click "Load unpacked" and select the CookieWipe folder
5. The extension should now appear in your Chrome toolbar

## How to Use

1. **Basic Usage:**
   - Click the CookieWipe extension icon in your browser toolbar
   - Cookies for the current website will be instantly cleared
   - You'll see a confirmation message showing how many cookies were removed

2. **Advanced Options:**
   - Click the CookieWipe extension icon
   - Select which data types you want to clear (Cookies, Cache, History, DNS Cache)
   - Click the "Clear Selected Items" button
   - You'll see confirmation messages for each data type that was cleared

## Privacy

CookieWipe operates entirely on your local machine. It:
- Does NOT collect any user data
- Does NOT send any information to external servers
- Does NOT require any special permissions beyond what's needed to clear browser data

## Development

### Project Structure
- `manifest.json`: Extension configuration
- `popup.html`: The extension popup UI
- `popup.js`: JavaScript for functionality
- `styles.css`: Styling for the popup
- `images/`: Icon files and UI elements
  - `icon16.png`, `icon48.png`, `icon128.png`: Extension icons
  - `popup_cookie.png`: Custom cookie image for the popup

## License

MIT License

## Credits

Created by Tony Fiston

*"One click, zero crumbs."* 