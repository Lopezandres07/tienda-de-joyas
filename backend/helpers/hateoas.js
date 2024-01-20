const HATEOAS = async (entity, element) => {
  const results = element
    .map((i) => {
      return {
        name: i.nombre,
        href: `http://localhost:3000/api/${entity}/${i.id}`,
      }
    })
    .slice(0, 6)

  const totalJoyas = element.length
  const stockTotal = element.reduce((total, i) => total + i.stock, 0)
  const dataWithHateoas = {
    totalJoyas,
    stockTotal,
    results,
  }

  return dataWithHateoas
}

export default HATEOAS
