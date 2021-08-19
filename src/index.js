
import './scss/index.scss'

import calculateAnnualIncome from './js/calculateAnnualIncome'
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

	// Set any blank fields to zero.
	if (income.value === '') income.value = '0'
	if (frequencyMultiplier.value === '') frequencyMultiplier.value = '0'
	if (pensionContribution.value === '') pensionContribution.value = '0'

	if (inputsValid(inputs)) {
		const annualIncome = calculateAnnualIncome()
		console.log(annualIncome)


	} else {
		console.log('Invalid Inputs')
	}
})
