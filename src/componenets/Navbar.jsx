function Navbar() {
  return (
    <nav className="border-b border-slate-800 bg-slate-950 px-8 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-xl">
            ⚡
          </div>

          <h1 className="text-xl font-bold text-white">
            AI Code Editor
          </h1>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm text-slate-400 hover:text-white"
          >
            Features
          </a>

          <a
            href="#how-it-works"
            className="text-sm text-slate-400 hover:text-white"
          >
            How It Works
          </a>

          <a
            href="#about"
            className="text-sm text-slate-400 hover:text-white"
          >
            About
          </a>
        </div>

        <button className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500">
          Open Editor
        </button>

      </div>
    </nav>
  );
}

export default Navbar;