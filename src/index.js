import calculateLayout from '@prezly/slate-editor/build/esm/modules/editor-v4-galleries/components/GalleryElement/Gallery/lib/calculateLayout.mjs';

console.log(calculateLayout({
    idealHeight: 500,
    viewportWidth: 800,
    images: [
        { aspectRatio: 1 }
    ],
}));