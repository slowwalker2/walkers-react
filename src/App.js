import React from 'react';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import 'tui-chart/dist/tui-chart.css';
import chart from '@toast-ui/editor-plugin-chart';

function App() {
  return (
    <div className='App'>
      <Editor
        previewStyle='vertical'
        height='600px'
        initialEditType='markdown'
        useCommandShortcut={true}
        plugins={[chart]}
      />
    </div>
  );
}

export default App;
