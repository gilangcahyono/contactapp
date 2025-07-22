import { UTApi } from "uploadthing/server";
const utapi = new UTApi();

export const deleteFile = async (contactAvatar) => {
  try {
    const fileKey = contactAvatar.split("/").pop();
    return await utapi.deleteFiles(fileKey);
  } catch (error) {
    console.error(error);
    return null;
  }
};
