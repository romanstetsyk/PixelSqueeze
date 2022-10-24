export const compress = (file, quality, type) => {
  return new Promise((ressolve, reject) => {
    let img = new Image();
    img.onload = () => {
      const [width, height] = [img.width, img.height];
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      canvas.width = width;
      canvas.height = height;
      context.drawImage(img, 0, 0, width, height);
      canvas.toBlob(
        blob => {
          const clone = new File([blob], file.name, { type: type });
          clone.id = file.id;
          clone.quality = quality;
          URL.revokeObjectURL(img.src);
          ressolve(clone);
        },
        type,
        quality / 100 // Quality as a decimal
      );
    };
    img.src = URL.createObjectURL(file);
  });
};
