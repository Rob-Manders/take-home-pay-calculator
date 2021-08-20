
import {
	incomeResultYear,
	incomeResultMonth,
	incomeResultWeek,
	pensionResult,
	taxResult,
	niResult
} from './dom'

export default function updateResults(netPay, pension, tax, ni) {
	incomeResultYear.innerHTML = `£${Math.floor(netPay)}`
	incomeResultMonth.innerHTML = `£${Math.floor(netPay / 12)}`
	incomeResultWeek.innerHTML = `£${Math.floor(netPay / 52)}`
	pensionResult.innerHTML = `£${Math.floor(pension)}`
	taxResult.innerHTML = `£${Math.floor(tax)}`
	niResult.innerHTML = `£${Math.floor(ni)}`
}