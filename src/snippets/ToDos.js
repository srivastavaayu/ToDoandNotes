import React from "react";
import Header from "./Header";
import "../css/ToDos.css";

function ToDo(props) {
  return (
    <>
      <p className="ToDo">
        <span className="ToDoTitle">To-Do Title:</span>
        <br />
        To-Do Description: <br />
        Due Date:
      </p>
    </>
  );
}

function ToDos() {
  return (
    <>
      <Header />
      <main className="text-center">
        <h2 className="PageTitle text-center">To-Do</h2>
        <hr />
        <button type="button" className="ButtonAdd btn btn-primary">
          Add To-Do
        </button>
        <div className="ToDos">
          <ToDo />
        </div>
      </main>
    </>
  );
}

export default ToDos;
