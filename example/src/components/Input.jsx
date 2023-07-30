import React, { useState } from 'react';

const Input = ({onInput}) => {
    const [messageInput, setMessageInput] = useState("");

    const handleInputChange = (event) => {
        setMessageInput(event.target.value);
    }

    const handleKeyPress = (event) => {
        if (event.key == "Enter") {
            setMessageInput("");
            onInput(messageInput);
        }
    }

    return(
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
    );
}

export default Input;