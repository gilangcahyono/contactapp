"use client";

import { Box, Button } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const LoadMoreButton = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const qValue = searchParams.get("cursor");
  const [cursor, setCursor] = useState(qValue);

  useEffect(() => {
    console.log(cursor);
    if (cursor) {
      router.push(`/?cursor=${encodeURIComponent(cursor)}`);
    }
  }, [cursor, router]);

  const handleClick = () => {
    if (cursor) {
      setCursor(Number(cursor) + 10);
    }
  };

  return (
    <Box textAlign="center" marginBottom="1rem">
      <Button variant="outlined" color="inherit" onClick={handleClick}>
        Load contact more
      </Button>
    </Box>
  );
};

export default LoadMoreButton;
