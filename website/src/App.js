import SplitterLayout from "react-splitter-layout";
import Compile from "./components/Compile";
import Editor from "@monaco-editor/react";
import Navbar from "./components/Navbar";
import PseudoCode from "./components/PseudoCode";
import Warnings from "./components/Warnings";
import { useState } from "react";

function App() {
  const options = {
    selectOnLineNumbers: true,
    fontSize: 15,
    formatOnType: true,
    tabSize: 4,
  };

  const initialCode = "# Add Some Python Code";

  const [code, setCode] = useState(initialCode);

  function handleEditorChange(value, event) {
    setCode(value);
    console.log("here is the current model value:", value);
  }

  return (
    <div className="h-screen bg-gray-100">
      <Navbar code={code} />
      <SplitterLayout>
        <div>
          <PseudoCode code={code} />

          <Warnings code={code} />
        </div>

        <div>
          <Editor
            className="pt-3"
            height="60vh"
            defaultLanguage="python"
            defaultValue={initialCode}
            options={options}
            theme="vs-dark"
            onChange={handleEditorChange}
          />

          <Compile code={code} />
        </div>
      </SplitterLayout>
    </div>
  );
}

export default App;
