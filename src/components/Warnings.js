import React, { useState } from "react";
import axios from "axios";

export default function Warnings({ code }) {
  const [warnings, setWarnings] = useState("");
  const [isLoading, setLoading] = useState(false);

  const onSubmitCode = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);

      const res = await axios.post(
        "https://pseudo-x.herokuapp.com/api/v1/warnings/",
        {
          source: code,
          test: "",
        }
      );

      setLoading(false);
      setWarnings(res.data);

      // console.log(res.data.run_status);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <div className="card">
      <div className="col mt-1 sm:ml-20 sm:mt-20 sm:w-1/2 p-0.10 shadow-sm rounded-lg">
        <div className="box border rounded flex flex-col shadow bg-gray-700 h-40 w-58">
          <div className="box__title bg-gray-700 px-3 py-2 border-b">
            <h3 className="text-sm text-grey-darker font-medium text-red-500">
              Warnings!
            </h3>
          </div>
          <textarea
            className="text-gray-100 flex-1 p-2 m-1 bg-transparent h-full"
            name="tt"
            value={warnings}
          >
            Warnings will come here!!
          </textarea>
        </div>
        {isLoading ? (
          <div>loading...</div>
        ) : (
          <button
            onClick={onSubmitCode}
            class="ml-5 bg-red-700 h-10 text-white active:bg-green-300 font-medium uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            Show Warnings
          </button>
        )}
      </div>
    </div>
  );
}
