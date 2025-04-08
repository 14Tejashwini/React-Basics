import logo from './logo.svg';
import './App.css';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Hello from './JSX/Hello';
import Student1 from './Props/Student1';
import Student2 from './Props/Student2';
import Enroll from './State/Enroll';
import Counter from './State/Counter';
import UseStateHook1 from './useState/UseStateHook1';
import UseStateHook2 from './useState/UseStateHook2';
import UseStateHook3 from './useState/UseStateHook3';
import UseStateHook4 from './useState/UseStateHook4';

function App() {
  return (
    <div className="App">
      <h1>Module 2: V1- Understanding Components</h1>
      {/* <Intro1></Intro1>
      <Intro2></Intro2> */}
      {/* <Hello></Hello>
      <Student1 name="Teju" usn="62">
        <h2>Child node under student1</h2>
      </Student1>
      <Student1 name="Elle" usn="23"></Student1>
      <Student1 name="Ash" usn="36"></Student1>
      <Student2 name="TR" usn="5"></Student2> */}
      {/* <Enroll></Enroll>
      <Counter></Counter> */}
      <UseStateHook2></UseStateHook2>
      <UseStateHook3></UseStateHook3>
      <UseStateHook4></UseStateHook4>
    </div>
  );
}

export default App;
