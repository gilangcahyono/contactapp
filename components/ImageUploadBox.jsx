"use client";

import { Avatar, Box } from "@mui/material";
import { useId, useState } from "react";

const ImageUploadBox = (props) => {
  const { avatar } = props;
  const [imagePreview, setImagePreview] = useState(avatar ? avatar : null);
  const formId = useId();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setImagePreview(avatar);
    }
  };

  return (
    <Box sx={{ textAlign: "center", marginBottom: "40px" }}>
      <input
        type="file"
        name="contactAvatar"
        id={formId}
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleImageChange}
      />
      <label htmlFor={formId}>
        <Avatar
          src={imagePreview}
          sx={{ width: 70, height: 70, margin: "20px auto", cursor: "pointer" }}
        />
      </label>
    </Box>
  );
};

export default ImageUploadBox;
