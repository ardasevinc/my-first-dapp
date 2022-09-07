import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen w-full bg-slate-900">
      <main className="mx-auto flex h-full max-w-2xl flex-col items-center justify-center text-white">
        <h1 className="mb-10 text-5xl font-bold">Do Epic Shit!</h1>
        <div className="mb-10 flex items-center justify-center rounded-md bg-gray-700/20 p-5 font-mono text-4xl">
          {count}
        </div>
        <button
          className="rounded bg-teal-300 p-2  text-lg text-black transition-colors duration-100 hover:bg-teal-400 active:bg-teal-600"
          onClick={() => setCount((count) => count + 1)}
        >
          Click Me!
        </button>
      </main>
    </div>
  );
}

export default App;
