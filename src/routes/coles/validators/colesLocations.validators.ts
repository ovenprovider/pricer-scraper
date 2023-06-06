// Libraries
import { query } from 'express-validator'

export const getColesStoreLocationsValidators = [
  query('longitude').isFloat().withMessage('Please use a proper number'),
  query('latitude').isFloat().withMessage('Please use a proper number'),
  query('distance')
    .optional()
    .isNumeric()
    .isInt({ min: 0, max: 1000 })
    .withMessage('Please enter a distance between 0 to 1000 km.'),
  query('numberOfLocations')
    .optional()
    .isNumeric()
    .isInt({ min: 0, max: 5 })
    .withMessage('Please enter a valid number of locations between 0 and 5'),
]

export const getColesLocationSuggestionsValidators = [
  query('searchTerm').isNumeric().withMessage('Please use a proper number'),
]
