import React, { useState } from 'react'
import axios from 'axios'

function ChatInput() {
    const [chatInput, setChatInput] = useState("");

    const handleChange = (event) => {
        setChatInput(event.target.value);
      }
    
      const handleSubmit = async (event) => {
        event.preventDefault();

        const ques = chatInput
        const { data } = await axios.post(`http://localhost:7000/api/chat/chatApi`,{ques})
        console.log(await data);
        // console.log("Input value:", chatInput);
      }
  return (
    <>
        <div>ChatInput</div>
        <form onSubmit={handleSubmit}>
            {/* Input field */}
            <input 
                type="text" 
                placeholder="Enter something..." 
                value={chatInput} 
                onChange={handleChange} 
                className="input-field" 
            />
            {/* Button */}
            <button type="submit" className="submit-button">Submit</button>
        </form>
    </>
  )
}

export default ChatInput