const HATEOAS = async (entity, element) => {
  const results = element
    .map((i) => {
      return {
        name: i.nombre,
        links: [
          {
            href: `http://localhost:3000/api/${entity}/${i.id}`,
          },
        ],
      };
    })
    .slice(0, 6);

  const totalItems = element.length;
  const totalStock = element.reduce((total, i) => total + i.stock, 0);
  const dataWithHateoas = {
    totalItems,
    totalStock,
    results,
  };

  return dataWithHateoas;
};

export default HATEOAS;
