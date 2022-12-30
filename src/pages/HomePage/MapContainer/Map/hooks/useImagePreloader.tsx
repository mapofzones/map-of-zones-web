import { useEffect, useState } from 'react';

import { ImagesMap } from '../Types';

function preloadImagePromise(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = () => resolve(img);
    img.onerror = img.onabort = () => reject();
    img.src = src;
    img.crossOrigin = 'anonymous';
  });
}

async function getImageAsync(imgUrl: string) {
  let image: HTMLImageElement | null = null;
  try {
    image = await preloadImagePromise(imgUrl);
  } catch (error) {}
  return image;
}

export function useImagePreloader(imageList: string[]) {
  const [images, setImages] = useState<ImagesMap>({});

  useEffect(() => {
    const preloadImages = async () => {
      imageList.forEach(async (imgUrl) => {
        if (images[imgUrl]) {
          return;
        }

        const image = await getImageAsync(imgUrl);
        if (image !== null) {
          setImages((prev) => {
            const newMap = { ...prev };
            newMap[imgUrl] = image;
            return newMap;
          });
        }
      });
    };

    if (imageList) {
      preloadImages();
    }
  }, [imageList, images]);

  return images;
}
