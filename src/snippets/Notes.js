import React from "react";
import Header from "./Header";
import "../css/Notes.css";

function Note(props) {
  return (
    <>
      <p className="Note">
        <span className="NoteTitle">Note Title:</span>
        <br />
        Note Description:
      </p>
    </>
  );
}

function Notes() {
  return (
    <>
      <Header />
      <main className="text-center">
        <h2 className="PageTitle text-center">Notes</h2>
        <hr />
        <button type="button" className="ButtonAdd btn btn-primary">
          Add Note
        </button>
        <div className="Notes">
          <Note />
        </div>
      </main>
    </>
  );
}

export default Notes;
