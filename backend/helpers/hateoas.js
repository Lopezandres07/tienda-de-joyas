const HATEOAS = async (entity, element) => {
  const { next, previous } = element;

  const results = element.results
    .map((i) => {
      return {
        name: i.nombre,
        href: `http://localhost:3000/api/${entity}/${i.id}`, // Añadí comillas invertidas aquí
      };
    })
    .slice(0, 6);

  const totalJoyas = element.results.length;
  const stockTotal = element.results.reduce((total, i) => total + i.stock, 0);
  const dataWithHateoas = {
    next,
    previous,
    totalJoyas,
    stockTotal,
    results,
  };

  return dataWithHateoas;
};

export default HATEOAS;
