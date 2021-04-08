import { useState } from "react";
import axios from "axios";

export default function Compile({ code }) {
  const [isLoading, setLoading] = useState(false);
  const [inp, setInput] = useState("");
  const [output, setOutput] = useState("");

  const onSubmitCode = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);

      const res = await axios.post(
        "https://pseudo-x.herokuapp.com/api/v1/compile/",
        {
          source: code,
          input: inp,
        }
      );

      setLoading(false);
      setOutput(res.data.run_status.output);

      // console.log(res.data.run_status);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <div>
      <div className="app  p-8 bg-grey-lightest font-sans">
        <div className="row sm:flex">
          <div className="col sm:w-1/2">
            <div className="box border rounded flex flex-col shadow bg-gray-700">
              <div className="box__title bg-gray-700 px-3 py-2 border-b">
                <h3 className="text-sm text-white font-medium">
                  Enter Custom Input
                </h3>
              </div>
              <textarea
                placeholder="hey"
                className="text-white flex-1 p-2 m-1 bg-transparent"
                name="tt"
                onChange={(e) => setInput(e.target.value)}
              >
                Here Input will come
              </textarea>
            </div>
          </div>

          <div className="col mt-8 sm:ml-8 sm:mt-0 sm:w-1/2">
            <div className="box border rounded flex flex-col shadow bg-gray-700">
              <div className="box__title bg-gray-700 px-3 py-2 border-b">
                <h3 className="text-sm text-grey-darker font-medium text-white">
                  Output
                </h3>
              </div>
              <textarea
                className="text-white flex-1 p-2 m-1 bg-transparent"
                name="tt"
                value={output}
              >
                Here output will come
              </textarea>
            </div>
          </div>
        </div>
      </div>

      <div>
        {isLoading ? (
          <div>loading...</div>
        ) : (
          <button
            onClick={onSubmitCode}
            class="ml-8 bg-green-700 h-10 text-white active:bg-green-300 font-medium uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            Compile and Test
          </button>
        )}
      </div>
    </div>
  );
}
