function Item({ item, onAddToCart, onItemDelete }) {

  function handleAddToCart() {
    fetch(`http://localhost:4000/items/${item.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ isInCart: !item.isInCart })
    })
      .then(res => res.json())
      .then(updatedItem => {
        onAddToCart(updatedItem);
      })
  }

  function handleDelete() {
    fetch(`http://localhost:4000/items/${item.id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(() => { onItemDelete(item) })

  }

  return (
    <li className={item.isInCart ? "in-cart" : ""}>
      <span>{item.name}</span>
      <span className="category">{item.category}</span>
      <button onClick={handleAddToCart} className={item.isInCart ? "remove" : "add"}>
        {item.isInCart ? "Remove From" : "Add to"} Cart
      </button>
      <button className="remove" onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default Item;
