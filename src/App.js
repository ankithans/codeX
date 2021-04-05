import SplitterLayout from "react-splitter-layout";
import Compile from "./components/Compile";
import CodeEditor from "./components/Editor";
import Navbar from "./components/Navbar";
import PseudoCode from "./components/PseudoCode";
import Warnings from "./components/Warnings";

function App() {
  return (
    <div>
      {/*  */}
      <Navbar />
      <SplitterLayout>
        <div>
          {/*  */}
          <CodeEditor />

          {/* Ankit Hans */}
          <Compile />
        </div>

        <div>
          {/* Aryamaan Pandey */}
          <PseudoCode />

          {/*  */}
          <Warnings />
        </div>
      </SplitterLayout>
    </div>
  );
}

export default App;
