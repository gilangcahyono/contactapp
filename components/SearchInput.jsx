"use client";

import { TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SearchInput = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace(`/?search=${encodeURIComponent(query)}`);
    }, 300);
    return () => clearTimeout(timeout);
  }, [query, router]);

  return (
    <TextField
      label="Search contacts"
      type="search"
      fullWidth
      size="small"
      color="lightgray"
      sx={{ backgroundColor: "#e8e6e6" }}
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

export default SearchInput;
