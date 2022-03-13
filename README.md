# r-lightbox (based on v.1.0.0)

A simple lightbox made to work with the lastest version of <strong>react</strong> and <strong>typescript</strong>.
Supports panning the images, zooming in, swiping left and right, and putting custom components on the right side of header and hooter.

## How to provide Images?

```jsx
export interface LboxImage {
    src: string;
    description?: string;
    title?: string;
    secondaryTitle?: string;
}
```

The images prop is an array of LboxImages.
The only mandatory field of the each LboxImage is the src.

## Other props

```jsx 
export interface Props {
    open: boolean;
    images: LboxImage[];
    onClose: () => void;
    onChange?: (oldImg: LboxImage, newImg: LboxImage) => void;
    headerElement?: React.ReactNode;
    footerElement?: React.ReactNode;
}
```

**Open:** Is the lightbox open?
**onClose:** Will be called when the close button is clicked.  
**onChanged:** Will be called when the image changes. It should have two parameters, namely the old image and the new image.  
**headerElement:** You can provide a custom component that will be put on the right side of the header.  
**footerElement:** You can provide a custom component that will be put on the right side of the footer.  

## Example
https://nimamt.github.io/r-lightbox/  
The example project folder in this repository contains an example usage.  
The library is simple and not complex; most props are optional.

## Further work
The use of storybook and implementing more customization and support of videos may be added.
