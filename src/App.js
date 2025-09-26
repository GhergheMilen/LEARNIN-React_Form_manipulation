import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 1, packed: true },
//   { id: 4, description: "Pants", quantity: 3, packed: false },
//   { id: 5, description: "Underwear", quantity: 1, packed: false },
//   { id: 6, description: "T-shirt", quantity: 1, packed: false },
//   { id: 7, description: "Shirt", quantity: 1, packed: false },
//   { id: 8, description: "Toothpaste", quantity: 1, packed: true },
//   { id: 9, description: "Toothbrush", quantity: 1, packed: true },
//   { id: 10, description: "Jacket", quantity: 1, packed: true },
//   { id: 11, description: "Sun Glasses", quantity: 1, packed: false },
// ];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 💼</h1>;
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(1);

  function handeleSubmit(e) {
    e.preventDefault();
    if (!description) return;

    const newItem = { description, amount, packed: false, id: Date.now() };

    onAddItems(newItem);

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

function PackingList({ items, onDeleteItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} onDeleteItem={onDeleteItem} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItem }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.amount} {} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
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
