import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

class App extends React.Component {
  handleEditorChange = (content, editor) => {
    console.log('Content was updated:', content);
  }

  render() {
    return (
      <div className="">
      <Editor
        className="bg-gray-800"
        apiKey="488o5w3xiru51euir8viv6uz4f6bprfa8w2kofbw8d2izohx"
        init={{ /* your other settings */ }}
        initialValue="<p>This is the initial content of the editor</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount'
          ],
          toolbar:
            'undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help'
        }}
        onEditorChange={this.handleEditorChange}
      />
      </div>
    );
  }
}

export default App;













/*import React from 'react'
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-tomorrow_night_blue";

const PseudoCode = () => {
  return (
    <div className="pl-2 h-70 justify-between items-center">
    <button className="bg-gray-700 text-opacity-25">Translate PseudoCode</button>
    <AceEditor
    className="ace h-50 bg-black-700 w-auto"
    mode="python"
    theme="tomorrow_night_blue"
    fontSize={16}
    showGutter={true}
    showPrintMargin={true}
    highlightActiveLine={true}
    setOptions={{
      enableBasicAutocompletion: true,
      enableLiveAutocompletion:true,
      enableSnippets:true,
      showLineNumbers:true,
      tabSize:2,
    }}
    name="UNIQUE_ID_OF_DIV"
    editorProps={{ $blockScrolling: true }}
  />
    </div>
  );
}

export default PseudoCode*/
