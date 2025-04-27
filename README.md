# CookieWipe Chrome Extension v2.02.25

*Instantly clear cookies from the current webpage with one click*

## What CookieWipe Does

CookieWipe helps users quickly remove all cookies from the webpage they're currently viewing. With a single click on the extension icon, users can instantly clear tracking cookies and reset their browsing session on that page.

## Features

- **One-click cookie clearing**: Just click the extension icon and cookies are instantly cleared.
- **Current-page only**: Clears cookies only for the active webpage, not the entire browser.
- **Visual confirmation**: Simple popup message confirming success and showing how many cookies were removed.
- **Animated cookie icon**: A friendly cookie that crumbles automatically.
- **Elegant blue design**: Clean, modern interface with customizable options.
- **Advanced clearing options**: Optionally clear cache, browsing history, and DNS cache.

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

1. Visit any webpage
2. Click the CookieWipe extension icon in your browser toolbar
3. All cookies for the current website will be instantly cleared
4. You'll see a confirmation message showing how many cookies were removed

## Privacy

CookieWipe operates entirely on your local machine. It:
- Does NOT collect any user data
- Does NOT send any information to external servers
- Does NOT require any special permissions beyond what's needed to clear cookies

## Development

### Project Structure
- `manifest.json`: Extension configuration
- `popup.html`: The extension popup UI
- `popup.js`: JavaScript for cookie clearing functionality
- `styles.css`: Styling for the popup
- `images/`: Icon files and UI elements
  - `icon16.png`, `icon48.png`, `icon128.png`: Extension icons
  - `popup_cookie.png`: Custom cookie image for the popup

## License

MIT License

## Credits

Created by Tony Fiston

*"One click, zero crumbs."* 