import format from 'pg-format'
import pool from '../dataBase/joyasDB.js'
import { filterSQLQuery } from '../helpers/filters.js'

export const getAllJoyasWithFormat = async (
  order_by = 'precio_ASC',
  limits = 6,
  page = 1
) => {
  const [attribute, direction] = order_by.split('_')
  const offset = (page - 1) * limits
  const allJoyas = format(
    'SELECT * FROM inventario ORDER BY %s %s LIMIT %s OFFSET %s',
    attribute,
    direction,
    limits,
    offset
  )

  const response = await pool.query(allJoyas)
  return response.rows
}

export const filterQuery = async (filters) => {
  const { query, values } = filterSQLQuery('inventario', filters)

  const result = await pool.query(query, values)
  return result.rows
}
