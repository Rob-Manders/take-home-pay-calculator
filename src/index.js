
import './scss/index.scss'

import calculateAnnualIncome from './js/calculateAnnualIncome'
import calculateNI from './js/calculateNI'
import calculatePension from './js/calculatePension'
import calculateTax from './js/calculateTax'
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
	// Set any blank fields to zero.
	if (income.value === '') income.value = '0'
	if (frequencyMultiplier.value === '') frequencyMultiplier.value = '0'
	if (pensionContribution.value === '') pensionContribution.value = '0'

	// Check inputs are valid numbers before running calculations.
	if (inputsValid([income.value, pensionContribution.value])) {
		const annualIncome = calculateAnnualIncome()

		const tax = calculateTax(annualIncome, taxBands)
		const pension = calculatePension(annualIncome, pensionContribution.value)
		const ni = calculateNI(annualIncome, niRates)

		const netPay = parseInt(annualIncome - (tax + pension + ni))

		updateResults(netPay, pension, tax, ni)

	} else {
		console.log('Invalid Inputs')
	}
})
