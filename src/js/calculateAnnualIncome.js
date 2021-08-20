
import {
	income,
	incomeFrequency,
	frequencyMultiplier
} from './dom'

export default function calculateAnnualIncome() {
	let annualIncome = 0

	switch (incomeFrequency.value) {
		case 'annual':
			annualIncome = income.value
			break
		case 'monthly':
			annualIncome = income.value * 12
			break
		case 'weekly':
			annualIncome = income.value * 52
			break
		case 'daily':
			annualIncome = (income.value * frequencyMultiplier.value) * 52
			break
		case 'hourly':
			annualIncome = (income.value * frequencyMultiplier.value) * 52
			break
	}

	return annualIncome
}