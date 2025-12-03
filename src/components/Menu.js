import React from "react";

function Menu({ items }) {
  return (
    <div className="menu-container">
      {items.map((item) => {
        const testId =
          item.category === "Breakfast"
            ? "menu-item-breakfast"
            : item.category === "Lunch"
            ? "menu-item-lunch"
            : "menu-item-shakes";

        return (
          <div key={item.id} className="menu-item" data-test-id={testId}>
            <img src={item.img} alt={item.title} />
            <div className="menu-info">
              <h3>{item.title}</h3>
              <p className="category">{item.category}</p>
              <p className="price">${item.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
