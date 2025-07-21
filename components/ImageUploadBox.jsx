"use client";

import { Avatar } from "@mui/material";
import { useId, useState } from "react";

const ImageUploadBox = (props) => {
  const { avatar } = props;
  const inputId = useId();
  const [imagePreview, setImagePreview] = useState(avatar ? avatar : null);

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
    <>
      <Avatar
        component={"label"}
        htmlFor={inputId}
        src={imagePreview}
        sx={{
          width: 70,
          height: 70,
          marginX: "auto",
          marginTop: "20px",
          marginBottom: "40px",
          cursor: "pointer",
        }}
      />
      <input
        type="file"
        id={inputId}
        name="contactAvatar"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleImageChange}
      />
    </>
  );
};

export default ImageUploadBox;
