"use client";

import { Avatar, Box } from "@mui/material";
import { useState } from "react";

const ImageUploadBox = (props) => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };
  return (
    <Box sx={{ textAlign: "center", marginBottom: "40px" }}>
      <input
        type="file"
        name={props.name}
        id={props.name}
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleImageChange}
      />
      <label htmlFor={props.name}>
        <Avatar
          src={imagePreview}
          sx={{ width: 70, height: 70, margin: "20px auto", cursor: "pointer" }}
        />
      </label>
    </Box>
  );
};

export default ImageUploadBox;
