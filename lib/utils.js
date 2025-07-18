export const createNameFileImage = (file) => {
  if (!file.size) {
    return null;
  }

  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let fileName = "";

  for (let i = 0; i < 20; i++) {
    fileName += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  let fileExtension = file.type.split("/").pop();

  return `${fileName}.${fileExtension}`;
};
