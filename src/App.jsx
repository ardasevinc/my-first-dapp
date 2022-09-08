import { useState, useRef } from "react";
import { getWord, setWord } from "./utils/contract";

function App() {
  const [message, setMessage] = useState("");
  const inputRef = useRef(null);

  const handleSave = async () => {
    // setMessage(inputRef.current.value)
    const inputString =
      inputRef.current.value || "someone just set an empty string";
    await setWord(inputString);
  };

  const handleView = async () => {
    const word = await getWord();
    setMessage(word);
  };

  return (
    <div className="h-screen w-full bg-slate-900">
      <main className="mx-auto flex h-full max-w-2xl flex-col items-center justify-center text-white">
        <h1 className="mb-10 text-5xl font-bold">My First dApp!</h1>
        <div className="mb-10 flex items-center justify-center rounded-md bg-gray-700/20 p-5 font-mono text-2xl w-96 h-80  overflow-hidden">
          {message}
        </div>
        <label htmlFor="word" className="mb-5 w-64">
          <input
            type="text"
            id="word"
            name="message"
            ref={inputRef}
            className="w-64 p-4 rounded-md bg-slate-800/75 text-white"
          />
        </label>
        <div className="flex gap-x-4">
          <button
            onClick={handleSave}
            className="rounded bg-teal-300 p-2  text-lg text-black transition-colors duration-100 hover:bg-teal-400 active:bg-teal-600"
          >
            Save
          </button>
          <button
            onClick={handleView}
            className="rounded bg-teal-300 p-2  text-lg text-black transition-colors duration-100 hover:bg-teal-400 active:bg-teal-600"
          >
            View
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
