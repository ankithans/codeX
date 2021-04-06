import React from "react";

export default function Warnings() {
  return (
    <div className="card">
       <div className="col mt-2 sm:ml-20 sm:mt-20 sm:w-1/2 p-1 shadow-sm rounded-lg">
            <div className="box border rounded flex flex-col shadow bg-gray-100 h-40 w-96 ">
              <div className="box__title bg-gray-100 px-3 py-2 border-b">
                <h3 className="text-sm text-grey-darker font-medium text-red-500">Warnings!</h3>
              </div>
              <textarea
                className="text-gray-500 flex-1 p-2 m-1 bg-transparent"
                name="tt"
              >
               Warnings will come here!!
              </textarea>
            </div>
          </div>
    </div>
  );
}
