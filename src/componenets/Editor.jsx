import MonacoEditor from "@monaco-editor/react";
import { useState } from "react";

function Editor({code,setCode}) {
 

  return (
    <main className="flex-1 overflow-hidden bg-slate-900 p-6">

      <div className="flex h-11 items-center border-b border-slate-800 bg-slate-950 px-4">
        <div className="flex h-full items-center gap-2 border-b-2 border-indigo-500 px-3 text-sm text-white">
          <span>⚛️</span>
          <span>App.jsx</span>
        </div>
      </div>

      <MonacoEditor
        height="100%"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue={code}
        onChange={(value) => setCode(value)}
        options={{
          fontSize: 15,
          minimap: {
            enabled: false,
          },
        }}
      />

    </main>
  );
}

export default Editor;