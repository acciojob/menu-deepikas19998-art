const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((cat, index) => (
        <button
          key={index}
          id={`filter-btn-${index}`}     // << REQUIRED BY CYPRESS
          onClick={() => filterItems(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};
