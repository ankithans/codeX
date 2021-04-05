import Editor from "@monaco-editor/react";
import React from "react";

export default function CodeEditor() {
  return (
    <div>
      <Editor
        className=""
        height="71vh"
        defaultLanguage="python"
        defaultValue="hello"
        theme="vs-dark"
      />
    </div>
  );
}
