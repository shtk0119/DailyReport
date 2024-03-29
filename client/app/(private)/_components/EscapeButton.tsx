"use client";

import { useRouter } from "next/navigation";
import { EscapeIcon } from "./EscapeIcon";

export default function EscapeButton() {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/home")}
      className="flex flex-col items-center"
    >
      <EscapeIcon />
      <h4 className="text-sm">ESC</h4>
    </div>
  );
}
