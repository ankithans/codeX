import { useState } from "react";
import { BsCodeSlash } from "react-icons/bs";
import axios from "axios";

export default function Navbar({ code }) {
  const [isLoading, setLoading] = useState(false);
  const [url, setUrl] = useState("");

  const shareCode = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);

      const res = await axios.post(
        "https://pseudo-x.herokuapp.com/api/v1/share/",
        {
          codes: code,
          id: 0,
        }
      );

      setLoading(false);
      setUrl("http://localhost:3000/" + res.data.id);

      console.log(res.data);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <nav className="relative select-none bg-gray-700 lg:flex lg:items-stretch w-full">
      <div className="flex flex-no-shrink items-stretch h-12">
        <BsCodeSlash
          size="45"
          className="pt-2 pl-4 text-gray-100 font-semibold"
        />
        <div className="flex-no-grow mt-1 font-bold text-2xl flex-no-shrink relative py-4 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">
          CodeX
        </div>
      </div>
      <div>{url}</div>
      <div className="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow">
        <div className="lg:flex lg:items-stretch lg:justify-end ml-auto">
          <div className="mx-32 my-1 md:mx-10 md:my-2  rounded-md  bg-indigo-400">
            {isLoading ? (
              <div>loading...</div>
            ) : (
              <button
                onClick={shareCode}
                className="flex-no-grow flex-no-shrink relative py-2 px-10 leading-normal text-white no-underline flex items-center hover:bg-grey-dark"
              >
                Share
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
