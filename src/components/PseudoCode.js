import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function MyComponent() {
  const [value, setValue] = useState("Pseudo Code will be generated here");

  return (
    <div className="">
      <button className="bg-blue-400 hover:bg-red-500 rounded-lg">Translate Your Code</button>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        className="bg-gray-100"
      />
    </div>
  );
}

/*import React from 'react'
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-tomorrow_night_blue";

const PseudoCode = () => {
  return (
    <div className="pl-2 h-70 justify-between items-center">
    <button className="bg-gray-700 text-opacity-25">Translate PseudoCode</button>
    <AceEditor
    className="ace h-50 bg-black-700 w-auto"
    mode="python"
    theme="tomorrow_night_blue"
    fontSize={16}
    showGutter={true}
    showPrintMargin={true}
    highlightActiveLine={true}
    setOptions={{
      enableBasicAutocompletion: true,
      enableLiveAutocompletion:true,
      enableSnippets:true,
      showLineNumbers:true,
      tabSize:2,
    }}
    name="UNIQUE_ID_OF_DIV"
    editorProps={{ $blockScrolling: true }}
  />
    </div>
  );
};

export default PseudoCode*/
