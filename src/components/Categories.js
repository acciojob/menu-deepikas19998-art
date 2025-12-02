const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((cat, index) => (
        <button key={index} onClick={() => filterItems(cat)}>
          {cat}
        </button>
      ))}
    </div>
  );
};
