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

  const initialCode =
    "\ndef main():\n  # You can do a lot here\n  # So I am writing this to fill lines\n  # Let's fill the empty space\n\n  return print('Welcome to CodeX')\n\ndef hello():\n  print('Hello CodeX')\n\ndef mul(a, b):\n  return a * b\n\ndef div(a, b):\n  return a / b\n\nprint('Yo!, Click on compile and Test')n\n\n\n\n\n";

  const [code, setCode] = useState(initialCode);

  function handleEditorChange(value, event) {
    setCode(value);
    console.log("here is the current model value:", value);
  }

  return (
    <div className="h-screen">
      <Navbar />
      <SplitterLayout>
        <div>
          <PseudoCode code={code} />

          <Warnings code={code} />
        </div>

        <div>
          <Editor
            className="p-0.5"
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
