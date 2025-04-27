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
- `promo/`: Promotional images for the Chrome Web Store
  - `promo_banner.jpg`: Large promotional banner (1280x800)
  - `promo_tile.jpg`: Small promotional tile (440x280)
- `fix_icons.py`: Python script to generate high-quality PNG icons
- `create_popup_cookie.py`: Python script to generate the popup cookie image
- `create_promo_banner.py`: Python script to generate promotional images
- `generate_icons.py`: Python script to generate PNG icons
- `generate_icon_variants.py`: Python script to generate multiple icon variants
- `apply_icon_variant.py`: Helper script to apply a selected icon variant
- `icon_variants/`: Directory containing all icon variants
- `icon_preview.html`: HTML page to preview and select icon variants

### Icon Customization

The extension comes with 62 different icon variants in various styles and color schemes:

- **Color Schemes**: Classic Green, Midnight Blue, Royal Purple, Elegant Gold, Rose Gold, Teal Accent, Dark Mode, Silver Premium
- **Styles**: Classic, Flat, Gradient, Outlined, Minimalist, Glossy, Broken, Abstract

To preview and select an icon variant:

1. Open `icon_preview.html` in your browser
2. Browse through the available icon variants
3. Note the number of your preferred variant
4. Run the helper script with your chosen variant number:
   ```
   python3 apply_icon_variant.py [variant_number]
   ```
   For example: `python3 apply_icon_variant.py 30`
5. The script will generate the selected icon in all required sizes (16px, 48px, 128px)

### Image Generation
The extension images are generated using the Python Pillow library. To regenerate the images:

1. Make sure you have Python and Pillow installed:
   ```
   pip install Pillow
   ```

2. Run the image generation scripts:
   ```
   python3 fix_icons.py              # Generate extension icons
   python3 create_popup_cookie.py    # Generate popup cookie image
   python3 create_promo_banner.py    # Generate promotional images
   ```

This will create:
- PNG icons in the `images/` directory with sizes 16x16, 48x48, and 128x128 pixels
- A custom cookie image for the popup UI
- Promotional images for the Chrome Web Store in the `promo/` directory

## Testing

See `test_extension.md` for detailed instructions on how to test the extension.

## License

MIT License

## Credits

Created by Tony Fiston

*"One click, zero crumbs."* 