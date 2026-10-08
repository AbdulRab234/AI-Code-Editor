function Sidebar() {
  return (
    <aside className="w-56 border-r border-slate-800 bg-slate-950 p-5">

      <h2 className="mb-6 text-xs font-semibold uppercase tracking-wider text-slate-500">
        Project
      </h2>

      <div className="space-y-3 text-sm">

        <p className="text-slate-300 flex items-center gap-2">
          <span>📁</span>
          <span>src</span>
        </p>

        <p className="pl-4 text-sm text-indigo-400 flex items-center gap-2 rounded-lg     hover:rounded-lg hover:bg-slate-900 hover:text-slate-200">
           <span>📄</span>
           <span>App.jsx</span>
        </p>

       <div className="flex items-center gap-2 px-3 py-2 text-sm text-slate-400 hover:rounded-lg hover:bg-slate-900 hover:text-slate-200">
          <span>📄</span>
          <span>main.jsx</span>
        </div>

        <div className="flex items-center gap-2 px-3 py-2 text-sm text-slate-400 hover:rounded-lg hover:bg-slate-900 hover:text-slate-200">
          <span>📄</span>
          <span>index.css</span>
        </div>

      </div>

    </aside>
  );
}

export default Sidebar;