export const deleteFile = async (contactAvatar) => {
  try {
    const fileKey = contactAvatar.split("/").pop();
    return await utapi.deleteFiles(fileKey);
  } catch (error) {
    console.error(error);
    return null;
  }
};
