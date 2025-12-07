# Image Optimization Guide

This document provides instructions for optimizing images in the project to improve LCP (Largest Contentful Paint) and overall performance.

## Current Issues

The following images are significantly oversized and need compression:

### Critical Priority (>1.5MB each)
- `public/gallery/family_gallery_1.png` - 2.4MB → target <300KB
- `public/gallery/family_gallery_3.png` - 2.7MB → target <300KB
- `public/gallery/school_gallery_1.png` - 2.2MB → target <300KB
- `public/gallery/school_gallery_2.png` - 2.1MB → target <300KB
- `public/gallery/private_gallery_3.png` - 1.7MB → target <300KB
- `public/gallery/family_gallery_2.png` - 1.5MB → target <300KB

### Medium Priority (>500KB each)
- `public/gallery/teaching_gallery_1.png` - 798KB → target <200KB

## Recommended Optimization Methods

### Option 1: Online Tools (Easiest)
Use online image compression tools:
- **TinyPNG** - https://tinypng.com/ (PNG/JPEG compression)
- **Squoosh** - https://squoosh.app/ (Advanced compression with preview)
- **Compressor.io** - https://compressor.io/

**Steps:**
1. Upload images to the tool
2. Download compressed versions
3. Replace originals in `public/gallery/`

### Option 2: Command Line (Recommended for batch processing)

Install imagemagick (macOS):
```bash
brew install imagemagick
```

Optimize PNG files:
```bash
# Convert to optimized JPG (best compression for photos)
cd public/gallery
magick family_gallery_1.png -quality 85 -strip family_gallery_1.jpg

# Or optimize PNG (smaller reduction but keeps transparency)
magick family_gallery_1.png -strip -quality 75 family_gallery_1_optimized.png
```

Batch optimize all large PNGs:
```bash
cd public/gallery
for file in family_gallery_1.png family_gallery_2.png family_gallery_3.png school_gallery_1.png school_gallery_2.png private_gallery_3.png; do
  magick "$file" -quality 85 -strip "${file%.png}.jpg"
done
```

### Option 3: Use WebP Format (Best compression + quality)

Convert to WebP:
```bash
brew install webp

cd public/gallery
for file in *.png; do
  cwebp -q 85 "$file" -o "${file%.png}.webp"
done
```

**Note:** If using WebP, update image paths in `src/constants/gallery.ts` from `.png` to `.webp`

## After Optimization

### Update Gallery Constants (if changing format)

If you convert PNG to JPG or WebP, update `src/constants/gallery.ts`:

```typescript
// Before
export const PRIVATE_SESSION_GALLERY = [
  '/gallery/private_gallery_3.png',
] as const

// After (if converted to JPG)
export const PRIVATE_SESSION_GALLERY = [
  '/gallery/private_gallery_3.jpg',
] as const
```

### Verify Optimization

Check file sizes after optimization:
```bash
ls -lh public/gallery/
```

Target sizes:
- Thumbnails/small images: <100KB
- Gallery images: <300KB
- Hero/featured images: <500KB

## Performance Impact

Expected improvements after optimization:
- **Page Load Time:** 40-60% faster
- **Total Page Size:** Reduced by 10-15MB
- **LCP (Largest Contentful Paint):** Improved by 1-2 seconds
- **Mobile Performance:** Significant improvement on slower connections

## Already Implemented Code Optimizations

✅ Optimized responsive image sizes
✅ LCP image preloading (/main.svg)

Next step: Compress the actual image files using one of the methods above.
