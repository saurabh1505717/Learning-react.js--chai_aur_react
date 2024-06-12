import { useState } from "react"

function App() {
  const [color, setColor] = useState("yellow")

  // const changeBlue=()=>{
  //   setColor("Blue");
  // }
  // const changeRed=()=>{
  //   setColor("Red");
  // }
  // const changePink=()=>{
  //   setColor("Pink");
  // }
  // const changeBrown=()=>{
  //   setColor("Brown");
  // }
  // const changeLightBlue=()=>{
  //   setColor("LightBlue");
  // }
  // const changeOrange=()=>{
  //   setColor("Orange");
  // }
  // const changeGreen=()=>{
  //   setColor("Green");
  // }
  // const changeBlack=()=>{
  //   setColor("Black");
  // }
  // const changeWhite=()=>{
  //   setColor("White");
  // }

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

          {/* <button onClick={changeRed}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
           style={{backgroundColor:"red"}}>Red</button> */}


          <button onClick={()=> setColor("red")}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
           style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=> setColor("black")}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
           style={{backgroundColor:"black"}}>Black</button>
          <button onClick={()=> setColor("orange")}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
           style={{backgroundColor:"orange"}}>Orange</button>
          <button onClick={()=> setColor("blue")}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
           style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={()=> setColor("green")}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
           style={{backgroundColor:"green"}}>Green</button>
          <button onClick={()=> setColor("white")}
           className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
           style={{backgroundColor:"white"}}>White</button>
          <button onClick={()=> setColor("pink")}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
           style={{backgroundColor:"pink"}}>Pink</button>
          <button onClick={()=> setColor("brown")}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
           style={{backgroundColor:"brown"}}>Brown</button>
          <button onClick={()=> setColor("lightblue")}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
           style={{backgroundColor:"lightblue"}}>Light Blue</button>

        </div>

      </div>

    </div>
  )
}

export default App
