import Editor from "@monaco-editor/react";
import React from "react";

export default function CodeEditor() {
  const options = {
    selectOnLineNumbers: true,
    fontSize: 15,
    formatOnType: true,
    tabSize: 4,
  };

  const initialCode =
    "\ndef main():\n  # You can do a lot here\n  # So I am writing this to fill lines\n  # Let's fill the empty space\n\n  return print('Welcome to CodeX')\n\ndef hello():\n  print('Hello CodeX')\n\ndef mul(a, b):\n  return a * b\n\ndef div(a, b):\n  return a / b\n\nprint('Yo!, Click on compile and Test')n\n\n\n\n\n";
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
