import React from 'react';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

function App() {
  return (
    <div className='App'>
      <Editor
        previewStyle='vertical'
        height='600px'
        initialEditType='markdown'
        useCommandShortcut={true}
      />
    </div>
  );
}

export default App;
