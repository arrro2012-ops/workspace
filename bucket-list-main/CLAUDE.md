# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

나의 버킷 리스트 - A vanilla JavaScript bucket list web application for tracking life goals. No build process, no framework dependencies.

## Running the Application

```bash
# Option 1: Open directly in browser
open index.html

# Option 2: Python simple server
python -m http.server 8000
# Then visit http://localhost:8000
```

No tests, linting, or build commands exist - this is a static HTML/CSS/JS project.

## Architecture

### Two-Layer Design
- **Data Layer** (`js/storage.js`): `BucketStorage` object handles all LocalStorage operations
- **UI Layer** (`js/app.js`): `BucketListApp` class manages DOM manipulation, events, and rendering

### Data Flow
1. User action triggers event handler in `BucketListApp`
2. Handler calls appropriate `BucketStorage` method
3. `BucketStorage` updates LocalStorage and returns result
4. `BucketListApp.render()` refreshes the UI

### Global Instance
- `app` is a global `BucketListApp` instance created on DOMContentLoaded
- Inline `onclick` handlers reference `app` methods (e.g., `onclick="app.handleToggle('${item.id}')"`)

### Data Structure
```javascript
{
  id: string,           // timestamp-based unique ID
  title: string,        // bucket list item text
  completed: boolean,
  createdAt: string,    // ISO date
  completedAt: string | null
}
```

## Key Implementation Details

- **XSS Prevention**: `escapeHtml()` method in app.js sanitizes user input before rendering
- **Styling**: Tailwind CSS via CDN + custom animations in `css/styles.css`
- **Filters**: 'all', 'active', 'completed' - managed via `currentFilter` property
- **New items**: Added to front of array via `unshift()` for newest-first display
