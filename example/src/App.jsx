import React, { useState } from 'react';
import ListData from "./components/ListData";
import dateFormat from "./function/DateFormat";
import misoh from './function/misoh-20230730-0721.bundle';
import styleMessage from './function/styleMessage';

const App = () => {
  const [messageInput, setMessageInput] = useState("");
  const [messageList, setMessagesList] = useState([]);

  const handleInputChange = (event) => {
    setMessageInput(event.target.value);
  }

  const handleAddList = () => {
    if (messageInput == "clear" | messageInput == "Clear" | messageInput == "CLEAR") {
      setMessagesList([]);
      setMessageInput("");
    } else {
      if (messageInput != "") {
        const input = misoh(messageInput);

        setMessagesList([...messageList, {
          text: styleMessage(input),
          date: dateFormat(),
          color: 'green-500'
        }]);
        setMessageInput("");
      } 
    }
  };

  const handleKeyPress = (event) => {
    if (event.key == "Enter") {
      handleAddList();
    }
  }

  return (
    <div className="container">
      <main className="px-2 pt-1 pb-20"><ListData messageList={messageList}/></main>

      <footer className="fixed flex flex-col gap-0 justify-center items-start bottom-0 left-0 w-full bg-black">
        <span className="text-sm mb-0 w-full px-2 pt-1 pb-0">
          <span className="text-green-500">
            anonymous@internetrelaychat <span className="text-purple-500">CHATAPP</span> <span className="text-red-500">~</span>
          </span>
        </span>
        <span className="text-white flex w-full items-center mt-0 px-2 py-0">
          <div className="text-white">
          $
          </div>
          <input 
            onChange={handleInputChange} 
            onKeyUp={handleKeyPress}
            value={messageInput}
            type="text" 
            className="w-full bg-black border-none text-slate-400 px-3 py-2 outline-none text-sm" 
            placeholder="Type here..."
          />
        </span>
      </footer>
    </div>
  )
}

export default App
