import React, { useState } from 'react';
import ListData from "./components/ListData";
import Input from './components/Input';
import inputRule from './function/inputRule';

const App = () => {
  const [messageList, setMessagesList] = useState([]);

  const handleInput = (value) => {
    console.log(value);
    if (value == "clear") {
      setMessagesList([]);
    } else {
      setMessagesList([...messageList, inputRule(value)]);  
    }
  }

  return (
    <div className="pb-5 w-full">
      <main className="px-2 pt-1 w-full"><ListData messageList={messageList}/></main>

      <footer className="flex flex-col gap-0 justify-center items-start w-full bg-black pb-2">
        <span className="text-sm mb-0 w-full px-2 pt-1 pb-0">
          <span className="text-green-500">
            anon@local <span className="text-purple-500">CHATAPP</span> <span className="text-red-500">~chat-mode</span>
          </span>
        </span>

        <Input onInput={handleInput}/>
      </footer>
    </div>
  )
}

export default App
