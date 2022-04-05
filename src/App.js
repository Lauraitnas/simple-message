import {useState} from "react";

function App() {
  //State
  const [message, setMessage] = useState(
    "Javascript is the best language in the world"
    );

    //action
  function handleClick(){
    setMessage("Some new message saying something smart");
  }

    //what appears on the screen
  return (
  <div>
  <h1>{message}</h1>
  <button onClick={handleClick}>Update the message</button>
  </div>
  );
}

export default App;
