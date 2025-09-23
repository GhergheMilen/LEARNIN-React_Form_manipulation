import { getSuggestedQuery } from "@testing-library/dom";
import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
  { id: 4, description: "Pants", quantity: 3, packed: false },
  { id: 5, description: "Underwear", quantity: 1, packed: false },
  { id: 6, description: "T-shirt", quantity: 1, packed: false },
  { id: 7, description: "Shirt", quantity: 1, packed: false },
  { id: 8, description: "Toothpaste", quantity: 1, packed: true },
  { id: 9, description: "Toothbrush", quantity: 1, packed: true },
  { id: 10, description: "Jacket", quantity: 1, packed: true },
  { id: 11, description: "Sun Glasses", quantity: 1, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 💼</h1>;
}
//controled elements in forms. input and select mentain theyr state in the DOM
//controlled elements technique
//1. useState hook
//2 use the hook as the value of the input field
//3 use onChange on the input to listen for the changes
function Form() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(1);

  function handeleSubmit(e) {
    e.preventDefault();
    if (!description) return;

    const newItem = { description, amount, packed: false, id: Date.now };

    setDescription("");
    setAmount(1);
  }

  return (
    <form className="add-form" onSubmit={handeleSubmit}>
      <h3>What do you need for your trip</h3>
      <select
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have X% items on your list</em>
    </footer>
  );
}
