
export function validateInput(input) {
	if (isNaN(input) || !input) return false
	else return true
}

export function inputsValid(inputs) {
	return inputs.every(input => validateInput(input))
}