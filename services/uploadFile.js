import { UTApi } from "uploadthing/server";
const utapi = new UTApi();

export const uploadFile = async (file) => {
  let fileAvatarName = null;
  try {
    if (file.size) {
      const res = await utapi.uploadFiles(file);
      fileAvatarName = res.data.ufsUrl;
    }
    return fileAvatarName;
  } catch (error) {
    console.error(error);
    return null;
  }
};
