import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import note from "../notes.js";

function App() {
  return (
    <div>
      <Header />
      {note.map((note) => (
        <Note key={note.id} title={note.title} content={note.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
