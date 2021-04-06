import SplitterLayout from "react-splitter-layout";
import Compile from "./components/Compile";
import CodeEditor from "./components/Editor";
import Navbar from "./components/Navbar";
import PseudoCode from "./components/PseudoCode";
import Warnings from "./components/Warnings";

function App() {
  return (
    <div className="h-screen">
      <Navbar />
      <SplitterLayout>
        <div>
          <PseudoCode />

          <Warnings />
        </div>

        <div>
          <CodeEditor />

          <Compile />
        </div>
      </SplitterLayout>
    </div>
  );
}

export default App;
