export const filterSQLQuery = (entity, filters) => {
  const table = entity.toLowerCase()
  let query = `SELECT * FROM ${table} WHERE 1 = 1`
  console.log('initial query', query)

  const values = []

  const filterEntries = Object.entries(filters)
  console.log('filterEntries', filterEntries)

  for (const [key, value] of filterEntries) {
    if (value !== undefined) {
      if (key === 'precio_max') {
        query += ` AND precio <= $${values.length + 1}`
        values.push(value)
      } else if (key === 'precio_min') {
        query += ` AND precio >= $${values.length + 1}`
        values.push(value)
      } else if (key === 'categoria' || key === 'metal') {
        query += ` AND ${key} = $${values.length + 1}`
        values.push(value)
      }
    }
  }

  console.log('final query', query)

  return { query, values }
}
