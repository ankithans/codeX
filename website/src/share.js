import SplitterLayout from "react-splitter-layout";
import Compile from "./components/Compile";
import Editor from "@monaco-editor/react";
import Navbar from "./components/Navbar";
import PseudoCode from "./components/PseudoCode";
import Warnings from "./components/Warnings";
import { useState, useEffect } from "react";
import axios from "axios";

function Share({ match }) {
  const options = {
    selectOnLineNumbers: true,
    fontSize: 15,
    formatOnType: true,
    tabSize: 4,
  };

  const initialCode = "# Add Some Python Code";

  const [isLoading, setLoading] = useState(false);
  const [code, setCode] = useState(initialCode);

  function handleEditorChange(value, event) {
    setCode(value);
    console.log("here is the current model value:", value);
  }

  const gettCode = async (e) => {};

  useEffect(async () => {
    // const { id } = URLSearchParams();
    const id = match.params.id;
    console.log(id);
    try {
      console.log("chala...");
      setLoading(true);
      const res = await axios.get(
        `https://pseudo-x.herokuapp.com/api/v1/share/${id}`
      );
      setLoading(false);
      setCode(res.data.codes);
      console.log(res.data);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  }, []);

  if (isLoading) return <div>loading...</div>;

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
            defaultValue={code}
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

export default Share;
