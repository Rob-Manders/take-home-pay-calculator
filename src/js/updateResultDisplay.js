
import {
	incomeResultYear,
	incomeResultMonth,
	incomeResultWeek,
	pensionResult,
	taxResult,
	niResult
} from './dom'

export default function updateResults(netPay, pension, tax, ni) {
	incomeResultYear.innerHTML = 	`£${Math.floor(netPay).toLocaleString('en-GB')}`
	incomeResultMonth.innerHTML = `£${Math.floor(netPay / 12).toLocaleString('en-GB')}`
	incomeResultWeek.innerHTML = 	`£${Math.floor(netPay / 52).toLocaleString('en-GB')}`
	pensionResult.innerHTML = 		`£${Math.floor(pension).toLocaleString('en-GB')}`
	taxResult.innerHTML = 			`£${Math.floor(tax).toLocaleString('en-GB')}`
	niResult.innerHTML = 			`£${Math.floor(ni).toLocaleString('en-GB')}`
}