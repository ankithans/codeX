import React from 'react'
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-github";

const PseudoCode = () => {
  return (
    <div className="pl-2 h-70">
    <button className="bg-red-600 justify-end">Hello CodeX</button>
    <AceEditor
    className="ace h-50 bg-gray-800 w-auto"
    mode="python"
    theme="github"
    name="UNIQUE_ID_OF_DIV"
    editorProps={{ $blockScrolling: true }}
  />
    </div>
  );
}

export default PseudoCode
