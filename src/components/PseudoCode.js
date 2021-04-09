import { VscRunAll } from "react-icons/vsc";
import React, { useState } from "react";
import axios from "axios";
import Flowchart from "react-simple-flowchart";

export default function CodeEditor({ code }) {
  const [pseudo, setPseudo] = useState("Click on Show Pseudocode Button");
  const [isLoading, setLoading] = useState(false);

  const [flow, setFlow] = useState("");

  const generateFlow = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);

      const res = await axios.post(
        "https://pseudo-x.herokuapp.com/api/v1/flow/",
        {
          source: code,
          test: "",
        }
      );

      setLoading(false);
      setFlow(res.data);

      console.log(res.data);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  const codee = flow;

  const opt = {
    x: 0,
    y: 0,
    "line-width": 3,
    "line-length": 50,
    "text-margin": 10,
    "font-size": 11,
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

      var ps;

      for (var i = 0; i < res.data.length; i++) {
        ps += res.data[i] + "\n";
      }

      setLoading(false);
      ps = ps.substr(9);
      setPseudo(ps);

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
    <div className="p-8 pt-10">
      <div className="" role="alert">
        <div class="bg-yellow-500 text-white flex justify-between font-bold rounded-t px-4 py-2">
          <div> Generate Flowchart</div>
          <div className="px-2 py-1 pl-3 bg-gray-600 hover:bg-gray-400 rounded-md">
            <div onClick={generateFlow} className="p-0 m-0">
              <VscRunAll size="22" />
            </div>
          </div>
        </div>
        <div class="border border-t-0  rounded-b h-auto bg-yellow-100 px-4 py-3 text-green-800">
          {flow == "" ? (
            <div>Click on Generate Flowchart Button</div>
          ) : (
            <Flowchart
              className="pb-5"
              chartCode={codee}
              options={opt}
              onClick={() => {}}
            />
          )}
        </div>
      </div>
      {/* <button
        onClick={generateFlow}
        class="mt-3 bg-yellow-500 h-10 text-white active:bg-green-300 font-medium uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
      >
        Generate flowchart
      </button> */}

      <div className="pt-12" role="alert">
        <div class="bg-green-500 text-white flex justify-between font-bold rounded-t px-4 py-2">
          <div>Generate PseudoCode</div>

          <div className="px-2 py-1 pl-3 bg-gray-600 hover:bg-gray-400 rounded-md">
            <div onClick={onSubmitCode} className="p-0 m-0">
              <VscRunAll size="22" />
            </div>
          </div>
        </div>

        <div class="border border-t-0  rounded-b h-auto bg-green-100 px-4 py-3 text-green-800">
          <div className="whitespace-pre-wrap">{pseudo}</div>
        </div>
      </div>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        // <button
        //   onClick={onSubmitCode}
        //   class="mt-3 bg-green-500 h-10 text-white active:bg-green-300 font-medium uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        //   type="button"
        // >
        //   Convert Into PseudoCode
        // </button>
        <div></div>
      )}
    </div>
  );
}
