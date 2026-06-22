"use client";

import { MagnifyingGlassIcon } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import { Input } from "@/components/ui/input";

export function SearchInput({
  placeholder = "Search articles...",
}: {
  placeholder?: string;
}) {
  const [value, setValue] = useState("");

  return (
    <div className="relative">
      <MagnifyingGlassIcon
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
      />
      <Input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="rounded-xl pl-10 pr-4 py-3"
      />
    </div>
  );
}
