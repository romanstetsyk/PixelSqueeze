export const compress = (file, quality, type) => {
  return new Promise((ressolve, reject) => {
    let img = new Image();

    img.addEventListener(
      "load",
      () => {
        URL.revokeObjectURL(img.src);
        const [width, height] = [img.width, img.height];
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.width = width;
        canvas.height = height;
        context.drawImage(img, 0, 0, width, height);
        canvas.toBlob(
          blob => {
            const f = new File([blob], file.name, { type: type });
            ressolve({ sizeComp: f.size, urlComp: URL.createObjectURL(f) });
          },
          type,
          quality / 100 // Quality as a decimal
        );
      },
      { once: true }
    );

    img.src = URL.createObjectURL(file);
  });
};
