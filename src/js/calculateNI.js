
export default function calculateNI(annualIncome, niRates) {
	const {
		lowRate,
		mediumRate,
		highRate
	} = niRates
	const weeklyIncome = annualIncome / 52
	let lowPortion = 0, mediumPortion = 0, highPortion = 0

	if (weeklyIncome > highRate.amount) highPortion = weeklyIncome - highRate.amount

	if (weeklyIncome > mediumRate.amount) {
		if (weeklyIncome > highRate.amount) mediumPortion = highRate.amount - mediumRate.amount
		else mediumPortion = weeklyIncome - mediumRate.amount
	}

	if (weeklyIncome > lowRate.amount) {
		if (weeklyIncome > mediumRate.amount) lowPortion = mediumRate.amount - lowRate.amount
		else lowPortion = weeklyIncome.amount
	}

	const lowContribution = (lowPortion / 100) * lowRate.rate
	const mediumContribution = (mediumPortion / 100) * mediumRate.rate
	const highContribution = (highPortion / 100) * highRate.rate

	return lowContribution + mediumContribution + highContribution
}