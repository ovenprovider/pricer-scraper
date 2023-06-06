import express from 'express'
import { getWoolworthsProducts } from 'fetchers/woolworths/woolworthsProductsFetcher'
import { Request } from 'routes/@types/routes.types'

const router = express.Router()

router.get('/products', async (req: Request<{ searchTerm: string }>, res) => {
  const woolworthsProducts = await getWoolworthsProducts(req.query.searchTerm)
  res.send(woolworthsProducts)
})

export const woolworthsProducts = router
