import Navbar from "../componenets/Navbar.jsx";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    
    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden">

        {/* Background Glow */}
        <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-8 py-24 text-center">

          {/* Badge */}
          <div className="mb-6 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
            ✨ AI Powered Development
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Code Smarter.
            <br />

            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Build Faster.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            An intelligent code editor that helps you write,
            understand, debug and improve your code with AI.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex gap-4">

            <button
              onClick={() => navigate("/editor")}
              className="rounded-xl bg-indigo-600 px-7 py-3.5 font-semibold text-white transition hover:bg-indigo-500"
            >
            Start Coding →
          </button>
            <button className="rounded-xl border border-slate-700 bg-slate-900 px-7 py-3.5 font-semibold text-slate-200 transition hover:border-slate-500">
              Explore Features
            </button>

          </div>

        </div>
      </section>

      {/* Editor Preview */}
      <section className="mx-auto max-w-6xl px-8 pb-24">

        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl shadow-indigo-950/30">

          {/* Window Header */}
          <div className="flex items-center justify-between border-b border-slate-800 px-5 py-3">

            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>

            <span className="text-sm text-slate-500">
              AI Code Editor
            </span>

            <div />
          </div>

          {/* Preview */}
          <div className="grid min-h-[400px] grid-cols-12">

            {/* Mini Sidebar */}
            <div className="col-span-2 border-r border-slate-800 bg-slate-950 p-5">

              <p className="mb-5 text-xs font-semibold uppercase text-slate-500">
                Explorer
              </p>

              <div className="space-y-3 text-sm text-slate-400">
                <p>📁 src</p>
                <p className="pl-4 text-indigo-400">⚛ App.jsx</p>
                <p className="pl-4">⚛ main.jsx</p>
                <p className="pl-4">🎨 index.css</p>
                <p>📁 components</p>
              </div>

            </div>

            {/* Code */}
            <div className="col-span-7 p-6">

              <div className="mb-5 border-b border-slate-800 pb-3 text-sm text-slate-300">
                App.jsx
              </div>

              <div className="font-mono text-sm leading-7">

                <p>
                  <span className="text-purple-400">import</span>{" "}
                  <span className="text-slate-300">React</span>{" "}
                  <span className="text-purple-400">from</span>{" "}
                  <span className="text-green-400">'react'</span>;
                </p>

                <br />

                <p>
                  <span className="text-purple-400">function</span>{" "}
                  <span className="text-blue-400">App</span>() {"{"}
                </p>

                <p className="pl-5">
                  <span className="text-purple-400">return</span> (
                </p>

                <p className="pl-10 text-slate-300">
                  &lt;div&gt;
                </p>

                <p className="pl-14 text-slate-400">
                  Build something amazing.
                </p>

                <p className="pl-10 text-slate-300">
                  &lt;/div&gt;
                </p>

                <p className="pl-5">);</p>

                <p>{"}"}</p>

                <br />

                <p>
                  <span className="text-purple-400">export default</span>{" "}
                  App;
                </p>

              </div>

            </div>

            {/* AI Panel */}
            <div className="col-span-3 border-l border-slate-800 bg-slate-950 p-5">

              <div className="mb-6 flex items-center gap-2">
                <span className="text-xl">🤖</span>

                <h3 className="font-semibold">
                  AI Assistant
                </h3>
              </div>

              <div className="space-y-3">

                <button className="w-full rounded-lg border border-slate-800 bg-slate-900 p-3 text-left text-sm text-slate-300 hover:border-indigo-500">
                  💡 Explain Code
                </button>

                <button className="w-full rounded-lg border border-slate-800 bg-slate-900 p-3 text-left text-sm text-slate-300 hover:border-indigo-500">
                  🐞 Find Bug
                </button>

                <button className="w-full rounded-lg border border-slate-800 bg-slate-900 p-3 text-left text-sm text-slate-300 hover:border-indigo-500">
                  ✨ Generate Code
                </button>

                <button className="w-full rounded-lg border border-slate-800 bg-slate-900 p-3 text-left text-sm text-slate-300 hover:border-indigo-500">
                  ⚡ Optimize Code
                </button>

              </div>

            </div>

          </div>
        </div>

      </section>

      {/* Features */}
      <section
        id="features"
        className="border-t border-slate-900 bg-slate-950 px-8 py-24"
      >

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="text-sm font-semibold tracking-widest text-indigo-400">
              POWERFUL FEATURES
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              Everything you need to code better
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-slate-400">
              One intelligent workspace for writing,
              debugging and improving your code.
            </p>

          </div>

          {/* Cards */}
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            <FeatureCard
              icon="✨"
              title="Generate Code"
              description="Generate useful code from simple natural language instructions."
            />

            <FeatureCard
              icon="🐞"
              title="Debug Code"
              description="Find bugs and understand why your code is not working."
            />

            <FeatureCard
              icon="💡"
              title="Explain Code"
              description="Understand complex code with simple AI explanations."
            />

            <FeatureCard
              icon="⚡"
              title="Optimize Code"
              description="Improve performance, readability and maintainability."
            />

          </div>

        </div>

      </section>

    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-7 transition hover:-translate-y-1 hover:border-indigo-500/50">

      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-2xl">
        {icon}
      </div>

      <h3 className="text-lg font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-400">
        {description}
      </p>

    </div>
  );
}

export default Home;