
import './scss/index.scss'

import showFrequencyMultiplier from './showFrequencyMultiplier'
import { inputsValid } from './validateInput'

import {
	income,
	incomeFrequency,
	frequencyMultiplier,
	pensionContribution,
	calculateButton,
	taxCodeDisplay
} from './dom'

import taxBands from './data/taxBands.json5'
import niRates from './data/niRates.json5'

taxCodeDisplay.innerHTML = taxBands.defaultTaxCode

showFrequencyMultiplier(incomeFrequency.value)
incomeFrequency.addEventListener('change', (event) => showFrequencyMultiplier(event.target.value))

calculateButton.addEventListener('click', () => {
	const inputs = [
		income.value,
		frequencyMultiplier.value,
		pensionContribution.value
	]

	if (inputsValid(inputs)) {
		console.log('Valid')




	} else {
		console.log('Invalid Inputs')
	}
})
