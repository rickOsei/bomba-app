# Assets Folder

This folder contains all the static assets for the Bomba application.

## Folder Structure

```
src/assets/
├── images/          # Image files (PNG, JPG, SVG, etc.)
├── icons/           # Icon files (SVG, PNG)
├── logos/           # Logo files (SVG, PNG)
├── fonts/           # Font files (WOFF2, TTF, etc.)
├── data/            # Data files (JSON, TS constants)
├── index.ts         # Main exports file
└── README.md        # This file
```

## Usage

### Importing Assets

```typescript
// Import from specific category
import { images } from "@/assets/images";
import { icons } from "@/assets/icons";
import { logos } from "@/assets/logos";

// Import from main assets file
import { images, icons, logos } from "@/assets";
```

### Adding New Assets

1. **Images**: Place image files in `src/assets/images/` and update `src/assets/images/index.ts`
2. **Icons**: Place icon files in `src/assets/icons/` and update `src/assets/icons/index.ts`
3. **Logos**: Place logo files in `src/assets/logos/` and update `src/assets/logos/index.ts`
4. **Fonts**: Place font files in `src/assets/fonts/` and update `src/assets/fonts/index.ts`
5. **Data**: Place data files in `src/assets/data/` and update `src/assets/data/index.ts`

### Example Asset Addition

```typescript
// In src/assets/images/index.ts
export { default as heroImage } from "./hero-image.jpg";
export { default as logo } from "./logo.png";

// In your component
import { heroImage, logo } from "@/assets/images";
```

## Best Practices

- Use descriptive file names
- Optimize images for web (compress, use appropriate formats)
- Use SVG for icons and logos when possible
- Keep file sizes reasonable
- Use TypeScript for better type safety
- Document any special requirements or usage notes
