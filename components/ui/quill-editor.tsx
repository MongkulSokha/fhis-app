"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

export default function QuillEditor() {
  const [value, setValue] = useState("");

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list", // covers both ordered and bullet lists
    "link",
    "image",
  ];

  return (
    <div className="p-4 border rounded-lg">
      <ReactQuill
        value={value}
        onChange={setValue}
        modules={modules}
        formats={formats}
        placeholder="Write something amazing..."
        theme="snow"
      />
      <p className="mt-4 text-sm text-gray-600">Content preview:</p>
      <div
        className="p-3 border rounded bg-gray-50"
        dangerouslySetInnerHTML={{ __html: value }}
      />
    </div>
  );
}
