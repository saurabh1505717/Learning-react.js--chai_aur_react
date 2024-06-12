import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <h1>Custom MyApp,</h1>
  )
}

// This will not work because in customreact, we created our own custom render but here the render by react expects some fixed type of arguments.

// const reactElement = {
//   type:'a',
//   props:{
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

// This is how the React render expects the arguments from a react element.
const reactElement=React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click here to visit google'
  // Evaluated expressions like variables,etc 
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    // <reactElement />
    // reactElement

    // anotherElement

    
    // <MyApp />
    // MyApp()

    <App/>

  // </React.StrictMode>,
)
