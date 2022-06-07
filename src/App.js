import logo from "./logo.svg";
import "./App.css";
import StickyNoteContainer from "./components/StickyNoteContainer";
import StickyNoteForm from "./components/StickyNoteForm";
import {useState, React} from 'react'

let array = [
  {title: "Title from array",
  content: "Content from array"},
  {title: "Title from array 1",
  content: "Content from array 1"},
  {title: "Title from array 2",
  content: "Content from array 2"},
  {title: "Title from array 3",
  content: "Content from array 3"},
  {title: "Title from array 4",
  content: "Content from array 4"}]

function App() {
  const [stickyNotes, setStickyNotes] = useState(array)

  const formSubmitHandler = (values) => {
    console.log("Values passed up: ", values)
    setStickyNotes([values,...stickyNotes])
  }

  return <div>
    <StickyNoteForm formSubmitHandler={formSubmitHandler} /> 
    <StickyNoteContainer stickyNotes={stickyNotes} />
    </div>;
}

export default App;
