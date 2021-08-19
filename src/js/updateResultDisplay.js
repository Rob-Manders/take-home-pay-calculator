
import {
	netPayMonthDisplay,
	netPayYearDisplay,
	pensionPaidMonthDisplay,
	pensionPaidYearDisplay,
	taxPaidMonthDisplay,
	taxPaidYearDisplay,
	niPaidMonthDisplay,
	niPaidYearDisplay		
} from './dom'

export default function updateResults(netPayMonth, netPayYear, pensionMonth, pensionYear, taxMonth, taxYear, niMonth, niYear) {
	netPayMonthDisplay.innerHTML = netPayMonth
	netPayYearDisplay.innerHTML = netPayYear
	pensionPaidMonthDisplay.innerHTML = pensionMonth
	pensionPaidYearDisplay.innerHTML = pensionYear
	taxPaidMonthDisplay.innerHTML = taxMonth
	taxPaidYearDisplay.innerHTML = taxYear
	niPaidMonthDisplay.innerHTML = niMonth
	niPaidYearDisplay.innerHTML = niYear
}