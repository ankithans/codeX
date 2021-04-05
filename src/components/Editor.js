import Editor from "@monaco-editor/react";
import React from "react";

export default function CodeEditor() {
  return (
    <div>
      <Editor
        className="p-4"
        height="70vh"
        defaultLanguage="python"
        defaultValue="hello"
        theme="vs-dark"
      />
    </div>
  );
}
