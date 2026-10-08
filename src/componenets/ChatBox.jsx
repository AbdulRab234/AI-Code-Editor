import { useState } from "react";

function ChatBox({code}) {
  const [prompt,setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const handleSend = () =>{
    console.log("User Prompt:",prompt);
    console.log("Editor Code:",code);
    setResponse("ai is analyzing your code");
    setPrompt("");
  };
  return (
    <aside className="relative z-10 w-80 border-l border-slate-800 bg-slate-950 p-5 rounded-4xl">

      <div className="mb-6 rounded-2xl">
        <h2 className="font-semibold">
          🤖 AI Assistant
        </h2>

        <p className="mt-1 text-xs text-slate-500">
          Ask AI to understand, debug and improve your code.
        </p>
      </div>

      <div className="space-y-3">
        <div className="mb-5 rounded-xl border border-slate-800 bg-slate-900 p-3">
            <textarea
              value={prompt}
             onChange={(e) => setPrompt(e.target.value)}
              placeholder="Ask AI about your code..."
              className="h-24 w-full resize-none bg-transparent text-sm text-slate-300 outline-none placeholder:text-slate-600"
            />

            <button
           onClick={handleSend}
            className="mt-2 w-full rounded-lg bg-indigo-600 py-2 text-sm font-semibold text-white hover:bg-indigo-500">
              Send to AI →
            </button>
        </div>
        {response && (
        <div className="mb-5 rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-4">
          <p className="mb-2 text-xs font-semibold text-indigo-400">
            AI Response
          </p>

          <p className="text-sm leading-6 text-slate-300">
            {response}
          </p>
        </div>
      )}

        <button 
        onClick={() => setPrompt("Explain this code")}
        className="w-full rounded-lg border border-slate-800 bg-slate-900 p-3 text-left text-sm text-slate-300 hover:border-indigo-500">
          💡 Explain Code
        </button>

        <button 
        onClick={() => setPrompt("Find the bug in this code")}
        className="w-full rounded-lg border border-slate-800 bg-slate-900 p-3 text-left text-sm text-slate-300 hover:border-indigo-500">
          🐞 Find Bug
        </button>

        <button 
        onClick={() => setPrompt("Generate code for this requirement")}
        className="w-full rounded-lg border border-slate-800 bg-slate-900 p-3 text-left text-sm text-slate-300 hover:border-indigo-500">
          ✨ Generate Code
        </button>

        <button 
         onClick={() => setPrompt("Optimize this code")}
         className="w-full rounded-lg border border-slate-800 bg-slate-900 p-3 text-left text-sm text-slate-300 hover:border-indigo-500">
          ⚡ Optimize Code
        </button>

      </div>

    </aside>
  );
}

export default ChatBox;