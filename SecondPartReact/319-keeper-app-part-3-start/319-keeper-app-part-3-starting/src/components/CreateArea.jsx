import React, { useState } from "react";

function CreateArea({ onAdd }) {
  const [note, setNote] = useState({ title: "", content: "" });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prevNote) => ({ ...prevNote, [name]: value }));
  };

  // Handle form submission
  const submitNote = (e) => {
    e.preventDefault();
    if (note.title.trim() || note.content.trim()) {
      onAdd(note);
      setNote({ title: "", content: "" }); // Clear input fields
    }
  };

  return (
    <div>
      <form onSubmit={submitNote}>
        <input
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
