import Editor, { loader } from "@monaco-editor/react";
import React, { useState } from "react";
import axios from "axios";

export default function CodeEditor({ code }) {
  const [pseudo, setPseudo] = useState("");
  const [isLoading, setLoading] = useState(false);

  const onSubmitCode = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);

      const res = await axios.post(
        "https://pseudo-x.herokuapp.com/api/v1/convert/",
        {
          source: code,
          test: "",
        }
      );

      setLoading(false);
      setPseudo(res.data);

      console.log(res.data);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  const options = {
    selectOnLineNumbers: true,
    fontSize: 15,
    formatOnType: true,
    tabSize: 4,
  };

  return (
    <div className=" ">
      {/* <Editor
        className="p-0.5"
        height="60vh"
        defaultLanguage="python"
        defaultValue="//PseudoCode will be generated here!!!"
        options={options}
        theme="vs-dark"
        value={pseudo}
        
      /> */}
      <div>{pseudo}</div>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <button
          onClick={onSubmitCode}
          class="ml-5 bg-red-700 h-10 text-white active:bg-green-300 font-medium uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          Convert Into PseudoCode
        </button>
      )}
    </div>
  );
}
