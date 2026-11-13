# Clear Morning
A custom New Tab page for Chrome/Edge focused on a clean UI and fast lookup. This is a fetched copy from the original repo https://github.com/SaltyAom/clear-morning by SaltyAom.

Main features:
- Search suggestions
- Shortcuts and quick commands
- Video background
- Weather, rain forecast, and UV index

## Install (Chrome/Edge - Developer mode)
1. Clone the repo to your machine
2. Open the extensions page:
   - Chrome: chrome://extensions
   - Edge: edge://extensions
3. Enable Developer mode
4. Click Load unpacked
5. Select the repo root folder (the folder that contains manifest.json)

## Search bar
To use the in-page search bar, press TAB or reload once.

The default search is Google, but you can prefix a command to switch engines.
Syntax: <command> <query>

Example:
```
yt blue archive
```

### Supported commands
- `yt` - Search on YouTube
- `gh` - Open a GitHub link directly
- `ask` - Search on Perplexity
- `gpt` - Start a new ChatGPT conversation
- `cl` - Start a new Claude conversation
- `<number>` - Open a pinned tab by index

## Shortcut
Same as commands but without a space. Use for quick navigation.

Example:
```
:8000
```

### Supported shortcuts
- `:` - http://localhost:<query>
- `//` - https://<query>

## Customization
This is a single HTML file, so you can customize it however you like.

## Search hint
Search hint is a reverse proxy for Google search suggestions.
Default: https://search.saltyaom.com/hint. You can self-host your own.

Source for search hint: https://github.com/saltyaom/ghint
