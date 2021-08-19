
import {
	frequencyMultiplierContainer,
	frequencyMultiplerLabel
} from './dom'

export default function showFrequencyMultiplier(selection) {
	switch (selection) {
		case 'daily':
			frequencyMultiplierContainer.style.display = 'block'
			frequencyMultiplerLabel.innerHTML = 'Days per week:'
			break
		case 'hourly':
			frequencyMultiplierContainer.style.display = 'block'
			frequencyMultiplerLabel.innerHTML = 'Hours per week:'
			break
		default:
			frequencyMultiplierContainer.style.display = 'none'
	}
}