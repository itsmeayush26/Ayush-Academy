import React, { useState } from "react";
import ReactQuill from "react-quill";
import "quill/dist/quill.snow.css";  

const RichTextEditor = ({ input, setInput }) => {
  const handleChange = (content) => {
    setInput({ ...input, description: content }); // content is HTML
  };

  return (
    <ReactQuill
      theme="snow"
      value={input.description || ""} // ensure it's always a string
      onChange={handleChange}
    />
  );
};

export default RichTextEditor;
