import React, { useRef } from 'react';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import 'tui-chart/dist/tui-chart.css';
import chart from '@toast-ui/editor-plugin-chart';
import 'highlight.js/styles/github.css';
import codeSyntaxHightlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import hljs from 'highlight.js';
import 'tui-color-picker/dist/tui-color-picker.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import tableMergedCell from '@toast-ui/editor-plugin-table-merged-cell';
import uml from '@toast-ui/editor-plugin-uml';

function EditorComponent(props) {
  const editorRef = useRef();

  const clickSubmit = () => {
    props.clickSubmit(editorRef.current.getInstance().getMarkdown());
  };
  return (
    <>
      <Editor
        height='300px'
        initialEditType='markdown'
        ref={editorRef}
        {...props}
        plugins={[
          chart,
          [codeSyntaxHightlight, { hljs }],
          colorSyntax,
          tableMergedCell,
          uml,
        ]}></Editor>
      <div class='flex'>
        <button
          class='shadow bg-blue-800 hover:bg-yellow-700 focus:shadow-outline focus:outline-none text-white py-2 px-4 rounded mx-auto mt-2'
          type='button'
          onClick={() => clickSubmit()}>
          저장
        </button>
      </div>
    </>
  );
}

export default EditorComponent;
