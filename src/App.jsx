import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]); 

  function addNotes(inpObject) {
    setNotes((prev) => {
      return [...prev, inpObject];
    });
  }

  function deletNotes(noteId) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteObject, index) => {
        return index !== noteId;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNotes} />
      {notes.map((noteObject, index) => {
        return (
          <Note key={index} onDelete={deletNotes} id={index} {...noteObject} />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;

//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
//- Add new note to an array.
//- Take array and render seperate Note components for each item.

//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.
