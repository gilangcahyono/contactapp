"use client";

import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const SearchInput = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const qValue = searchParams.get("search") || "";

  const [query, setQuery] = useState(qValue);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const params = new URLSearchParams();
      if (query.trim()) {
        params.set("search", query);
        router.push(`?${params.toString()}`);
      } else {
        router.replace("/");
      }
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
      value={query}
      sx={{ backgroundColor: "#e8e6e6" }}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

export default SearchInput;
