
import './scss/index.scss'

import showFrequencyMultiplier from './showFrequencyMultiplier'
import { inputsValid } from './validateInput'

import taxBands from './data/taxBands.json5'
import niRates from './data/niRates.json5'

const income = document.getElementById('income')
const incomeFrequency = document.getElementById('incomeFrequency')
const frequencyMultiplierContainer = document.getElementById('frequencyMultiplierContainer')
const frequencyMultiplerLabel = document.getElementById('frequencyMultiplerLabel')
const frequencyMultiplier = document.getElementById('frequencyMultiplier')
const pensionContribution = document.getElementById('pensionContribution')
const calculateButton = document.getElementById('calculateButton')

const netPayDisplay = document.getElementById('netPay')
const pensionPaidDisplay = document.getElementById('penstionPaid')
const taxPaidDisplay = document.getElementById('taxPaid')
const niPaidDisplay = document.getElementById('niPaid')
const taxCodeDisplay = document.getElementById('taxCode')

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
