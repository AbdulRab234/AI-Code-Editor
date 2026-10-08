import Sidebar from "../componenets/Sidebar";
import Editor from "../componenets/Editor";
import ChatBox from "../componenets/ChatBox";
import { useState } from "react";

function EditorPage() {
  const [code, setCode] = useState(`function App() {
  return (
    <div>Hello World sami babu</div>
  );
}`);
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <header className="flex h-16 items-center justify-between border-b border-slate-800 px-6">

        <h1 className="text-lg font-bold">
          ⚡ AI Code Editor
        </h1>

        <div className="flex gap-3">
          <button className="rounded-lg border border-slate-700 px-4 py-2 text-sm">
            ▶ Run
          </button>

          <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold">
            ✨ Ask AI
          </button>
        </div>

      </header>
      <div className="flex min-h-[calc(100vh-4rem)] flex-1">
        <Sidebar />
        <Editor  code = {code} setCode= {setCode}/>
        <ChatBox  code = {code}/>
      </div>

    </div>
  );
}

export default EditorPage;