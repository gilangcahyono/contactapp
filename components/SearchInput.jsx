"use client";

import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const SearchInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchValue = searchParams.get("search") || "";
  const [search, setSearch] = useState(searchValue);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (search.trim()) {
        router.push(`/?search=${encodeURIComponent(search)}`);
      } else {
        router.replace("/");
      }
    }, 300);
    return () => clearTimeout(timeout);
  }, [search, router]);

  return (
    <TextField
      label="Search contacts"
      type="search"
      fullWidth
      size="small"
      color="lightgray"
      value={search}
      sx={{ backgroundColor: "#e8e6e6" }}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchInput;
