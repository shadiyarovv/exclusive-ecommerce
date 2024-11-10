const Categories = () => {
  const categories = [
    { id: 1, label: "Women's Fashion" },
    { id: 2, label: "Men's Fashion" },
    { id: 3, label: "Electronics" },
    { id: 4, label: "Home & Lifestyle" },
    { id: 5, label: "Medicine" },
    { id: 6, label: "Sports & Outdoor" },
    { id: 7, label: "Baby's & Toys" },
    { id: 8, label: "Groceries & Pets" },
    { id: 9, label: "Health & Beauty" },
  ];

  return (
    <div className="flex flex-col gap-3">
      {categories.map((cat) => {
        return <p key={cat.id}>{cat.label}</p>;
      })}
    </div>
  );
};

export default Categories;
