import Editor from "@monaco-editor/react";
import React from "react";

export default function CodeEditor() {
  const options = {
    selectOnLineNumbers: true,
    fontSize: 15,
    formatOnType: true,
    tabSize: 4,
  };

  return (
    <div className=" ">
     
      <Editor
        className="p-0.5"
        height="60vh"
        defaultLanguage="python"
        defaultValue="//PseudoCode will be generated here!!!"
        options={options}
        theme="vs-dark"
      />
       <button className="bg-gray-700 text-white rounded-lg hover:bg-indigo-600 p-2">Translate Your PseudoCode</button>
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
