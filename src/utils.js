// Media Resize

export function getResizedImagePath(imagePath, size) {
  if (imagePath) {
    const resizedImagePath = imagePath.match(/media\/screenshots/)
      ? imagePath.replace(
          '/media/screenshots/',
          `/media/resize/${size}/-/screenshots/`
        )
      : imagePath.replace('/media/games/', `/media/resize/${size}/-/games/`);

    return resizedImagePath;
  }
  return imagePath;
}
