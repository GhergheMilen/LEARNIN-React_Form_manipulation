export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <p>
          <em>Start adding some items to your list🚀</em>
        </p>
      </footer>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const procPacked = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {procPacked === 100
          ? "You got everything! Ready to go ✈"
          : `💼 You have ${numItems} items on your list, and you've packed ${numPacked} (${procPacked}%)`}
      </em>
    </footer>
  );
}
