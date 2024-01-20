import express from 'express'
import {
  getAllJoyasController,
  getFilteredJoyasController,
} from '../Controller/joyasController.js'

const router = express.Router()

router.get('/joyas', getAllJoyasController)
router.get('/joyas/filtros', getFilteredJoyasController)

export default router
