import Editor, { loader } from "@monaco-editor/react";
import React, { useState } from "react";
import axios from "axios";
import Flowchart from "react-simple-flowchart";

export default function CodeEditor({ code }) {
  const [pseudo, setPseudo] = useState("");
  const [isLoading, setLoading] = useState(false);

  const codee = `st2077924065536=>start: start main
  io2077924065584=>inputoutput: input:
  io2077924067120=>inputoutput: output:  print('Welcome to CodeX')
  e2077924066112=>end: end function return
  
  st2077924065536->io2077924065584
  io2077924065584->io2077924067120
  io2077924067120->e2077924066112`;

  const opt = {
    x: 0,
    y: 0,
    "line-width": 3,
    "line-length": 50,
    "text-margin": 10,
    "font-size": 14,
    "font-color": "black",
    "line-color": "black",
    "element-color": "black",
    fill: "white",
    "yes-text": "yes",
    "no-text": "no",
    "arrow-end": "block",
    scale: 1,
    symbols: {
      start: {
        "font-color": "red",
        "element-color": "green",
        "font-weight": "bold",
      },
      end: {
        "font-color": "red",
        "element-color": "green",
        "font-weight": "bold",
      },
    },
    flowstate: {
      department1: { fill: "pink" },
      department2: { fill: "yellow" },
      external: { fill: "green" },
    },
  };

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
      <Flowchart chartCode={codee} options={opt} onClick={() => {}} />
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
