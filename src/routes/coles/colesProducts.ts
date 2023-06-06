// Libraries
import express from 'express'

// Fecthers
import { getColesProducts } from 'fetchers/coles'

// Types
import { Request } from '../@types'

const router = express.Router()

router.get('/products', async (req: Request<{ searchTerm: string }>, res) => {
  const products = await getColesProducts(req.query.searchTerm ?? '3000')
  res.send(products)
})

export const colesProducts = router
