import { useState } from "react";

export default function Compile() {
  const [isOpened, setOpened] = useState(false);

  return (
    // <div className="flex  space-x-5 pt-5 pl-5">
    //   <div className="  font-sans">
    //     <div className="row sm:flex ">
    //       <div className="col ">
    //         <div className="box border  rounded flex flex-col shadow bg-white">
    //           <div className="box__title  px-3 py-2 border-b">
    //             <h3 className="text-sm text-grey-darker w-80  font-medium">
    //               Enter Custom Input here
    //             </h3>
    //           </div>
    //           <textarea
    //             placeholder="hey"
    //             class="text-grey-darkest flex-1 p-2 m-1 bg-transparent"
    //             name="tt"
    //           >
    //             hello world
    //           </textarea>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // <button
    //   class="bg-green-700 h-10 text-white active:bg-green-300 font-medium uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
    //   type="button"
    // >
    //   Compile and Test
    // </button>
    // </div>

    <div>
      <div className="app  p-8 bg-grey-lightest font-sans">
        <div className="row sm:flex">
          <div className="col sm:w-1/2">
            <div className="box border rounded flex flex-col shadow bg-white">
              <div className="box__title bg-gray-100 px-3 py-2 border-b">
                <h3 className="text-sm text-grey-darker font-medium">
                  Enter Custom Input
                </h3>
              </div>
              <textarea
                placeholder="hey"
                className="text-gray-500 flex-1 p-2 m-1 bg-transparent"
                name="tt"
              >
                Here Input will come
              </textarea>
            </div>
          </div>

          <div className="col mt-8 sm:ml-8 sm:mt-0 sm:w-1/2">
            <div className="box border rounded flex flex-col shadow bg-white">
              <div className="box__title bg-gray-100 px-3 py-2 border-b">
                <h3 className="text-sm text-grey-darker font-medium">Output</h3>
              </div>
              <textarea
                className="text-gray-500 flex-1 p-2 m-1 bg-transparent"
                name="tt"
              >
                Here output will come
              </textarea>
            </div>
          </div>
        </div>
      </div>

      <div>
        <button
          class="ml-8 bg-green-700 h-10 text-white active:bg-green-300 font-medium uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          Compile and Test
        </button>

        <button
          class="ml-5 bg-red-700 h-10 text-white active:bg-green-300 font-medium uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          Show Warnings
        </button>
      </div>
    </div>
  );
}
