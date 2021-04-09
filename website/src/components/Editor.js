import Editor from "@monaco-editor/react";
import React from "react";

export default function CodeEditor() {
  const options = {
    selectOnLineNumbers: true,
    fontSize: 15,
    formatOnType: true,
    tabSize: 4,
  };

  const initialCode = "// Add Some Python Code";
  return (
    <div className=" ">
      <Editor
        className="p-0.5"
        height="60vh"
        defaultLanguage="python"
        defaultValue={initialCode}
        options={options}
        theme="vs-dark"
      />
    </div>
  );
}
