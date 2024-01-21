
import { filterQuery, getAllJoyasWithFormat } from '../Models/joyasModels.js'
import HATEOAS from '../helpers/hateoas.js'
import pagination from '../helpers/pagination.js'

export const getAllJoyasController = async (req, res) => {
  const { order_by, limits, page, pages, items } = req.query

  try {
    const allJoyas = await getAllJoyasWithFormat(order_by, limits, page)
    const paginationData = pagination(allJoyas, pages, items)
    const allJoyasWithHateoas = await HATEOAS('joyas', paginationData)
    res.status(200).json(allJoyasWithHateoas)
  } catch (error) {
    console.error('Error en el controlador', error)
    res.status(500).send('Error interno del servidor')
  }
}

export const getFilteredJoyasController = async (req, res) => {
  const { precio_max, precio_min, categoria, metal } = req.query
  const filters = { precio_max, precio_min, categoria, metal }

  console.log('filters:', filters)

  try {
    const FilteredJoyas = await filterQuery(filters)
    res.status(200).json(FilteredJoyas)
  } catch (error) {
    console.error('Error en el controlador', error)
    res.status(500).send('Error interno del servidor')
  }
}
