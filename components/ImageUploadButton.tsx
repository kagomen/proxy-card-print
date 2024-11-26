"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

export default function ImageUploadButton() {
  const [image, setImage] = useState<File>();

  function showImage(e: { target: HTMLInputElement }) {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  }

  return (
    <>
      <Button
        variant="outline"
        className="p-0 w-[140px] h-[calc(140px*1.4)]"
        asChild
      >
        <label role="button" tabIndex={0} className="cursor-pointer">
          <input type="file" accept="image/*" hidden onChange={showImage} />
          {image ? (
            <Image
              src={URL.createObjectURL(image)}
              alt=""
              width="140"
              height={140 * 1.4}
              className="hover:opacity-70"
            />
          ) : (
            "+ upload"
          )}
        </label>
      </Button>
    </>
  );
}
