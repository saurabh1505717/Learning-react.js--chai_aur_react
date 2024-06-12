import { useState, useCallback,useEffect,useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook  - To take the reference of any element which is there on the web page
  const passwordRef=useRef(null)


  // Using useCallBack hook - To write the optimized password generator function. Read more about it.

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "@#_$&";

    // Code to generate random password
    for (let i = 1; i < length; i++) {
      let idx = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(idx);
    }

    setPassword(pass);
  }, [length, numberAllowed, setCharAllowed, setPassword]);


  // We cannot call this directly here in this way; 
  // passwordGenerator()

  // So using "useEffect" hook to call it whenever the page loads and also if there is any change in any of the values of dependency Array. 
  useEffect(()=>{
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select() // to indicate the selected content
    passwordRef.current?.setSelectionRange(0,3) // to indicate selected number of character within the given range

    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-600">
        <h1 className="text-white text-center my-3">Password Generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />

          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={30}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label>Number</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
