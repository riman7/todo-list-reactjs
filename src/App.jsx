import { useState } from "react"
import "./styles.css"

export default function App(){
  const [newItem, setNewItem] = useState("")
  return (
    <>
      <form className="new-item-form">
          <div className="form-row">
              <label htmlFor="item">New Item</label>
              <input type="text" id="item" name="item" placeholder="Enter new item" />
          </div>
          <button className="btn">Add</button>
      </form>
      <h1>Todo List</h1>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox" />
            Item 1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </>
  )
}