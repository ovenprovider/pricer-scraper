// Libraries
import express from 'express'
import { validationResult } from 'express-validator'

// Fetchers
import {
  getColesLocationsSuggestions,
  getColesStoreLocations,
} from 'fetchers/coles'

// Types
import { Request } from 'routes/@types'
import {
  ColesLocationSuggestionsRequestQueries,
  ColesStoreLocationsRequestQueries,
} from './@types'

// Validator
import {
  getColesLocationSuggestionsValidators,
  getColesStoreLocationsValidators,
} from './validators'

const router = express.Router()

router.get(
  '/suggestions',
  getColesLocationSuggestionsValidators,
  async (req: Request<ColesLocationSuggestionsRequestQueries>, res: any) => {
    const locationSuggestions = await getColesLocationsSuggestions(
      req.query?.searchTerm ?? '3000',
    )
    res.send(locationSuggestions)
  },
)

router.get(
  '/store-locations',
  getColesStoreLocationsValidators,
  async (req: Request<ColesStoreLocationsRequestQueries>, res: any) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array())
    }

    const storeLocations = await getColesStoreLocations(
      req.query.longitude,
      req.query.latitude,
      req.query.distance ?? 500,
      req.query.numberOfLocations ?? 5,
    )
    res.send(storeLocations)
  },
)

export const colesLocations = router
