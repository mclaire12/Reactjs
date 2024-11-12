import React from "react";
import ReactDOM, { createRoot } from 'react-dom/client';
function App(){
  return <h1>Hello</h1>
}
const Container = document.getElementById("root");
const root = ReactDOM.createRoot(Container);
root.render(<App/>)

export default App;