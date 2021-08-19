
import './scss/index.scss'

import showFrequencyMultiplier from './js/showFrequencyMultiplier'
import updateResults from './js/updateResultDisplay'
import { inputsValid } from './js/validateInput'

import {
	income,
	incomeFrequency,
	frequencyMultiplier,
	pensionContribution,
	calculateButton,
	taxCodeDisplay
} from './js/dom'

import taxBands from './data/taxBands.json5'
import niRates from './data/niRates.json5'

taxCodeDisplay.innerHTML = taxBands.defaultTaxCode

showFrequencyMultiplier(incomeFrequency.value)
incomeFrequency.addEventListener('change', (event) => showFrequencyMultiplier(event.target.value))

calculateButton.addEventListener('click', () => {
	const inputs = [
		income.value,
		pensionContribution.value
	]

	if (inputsValid(inputs)) {
		console.log('Valid')

		updateResults(1,2,3,4,5,6,7,8)


	} else {
		console.log('Invalid Inputs')
	}
})
