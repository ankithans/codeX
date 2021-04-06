import React from 'react'
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-twilight";

const PseudoCode = () => {
  return (
    <div className="pl-2 h-70 justify-between items-center">
    <button className="bg-green-600">Translate PseudoCode</button>
    <AceEditor
    className="ace h-50 bg-gray-800 w-auto"
    mode="python"
    theme="twilight"
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
}

export default PseudoCode
