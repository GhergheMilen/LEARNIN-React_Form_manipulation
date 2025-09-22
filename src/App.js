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
  { id: 11, description: "Glasses", quantity: 1, packed: false },
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
function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for your trip</h3>
    </div>
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
        {item.quantity}
        {item.description}
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
