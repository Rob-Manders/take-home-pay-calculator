
export default function calculateTax(annualIncome, taxBands) {
	const {
		allowanceCap,
		basicRate,
		higherRate,
		additionalRate
	} = taxBands

	let basicPortion = 0, higherPortion = 0, additionalPortion = 0

	if (annualIncome > additionalRate.amount) additionalPortion = annualIncome - additionalRate.amount


	if (annualIncome > higherRate.amount) {
		if (annualIncome > additionalRate.amount) higherPortion = additionalRate.amount - higherRate.amount
		else higherPortion = annualIncome - higherRate.amount
	} 

	if (annualIncome > basicRate.amount) {
		if (annualIncome > allowanceCap) basicPortion = higherRate.amount
		else if (annualIncome > higherRate.amount) basicPortion = higherRate.amount - basicRate.amount
		else basicPortion = annualIncome - basicRate.amount
	} 

	const basicTax = (basicPortion / 100) * basicRate.rate
	const higherTax = (higherPortion / 100) * higherRate.rate
	const additionalTax = (additionalPortion / 100) * additionalRate.rate

	return basicTax + higherTax + additionalTax
}