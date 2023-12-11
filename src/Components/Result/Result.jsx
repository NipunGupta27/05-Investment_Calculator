import React from 'react'
import { calculateInvestmentResults, formatter } from '../../util/investment'

const Result = ({userData}) => {
    const resultData = calculateInvestmentResults(userData);
    console.log(resultData); 
    const initalInvestment = resultData[0].valueEndOfYear - resultData[0].annualInvestment - resultData[0].interest;
  return (
    <table id='result'>
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {resultData.map( yearData => {
            const totalInterest = yearData.valueEndOfYear - (yearData.annualInvestment * yearData.year) - initalInvestment;
            const totalInvestment = initalInvestment + (yearData.annualInvestment * yearData.year);
            return <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                <td>{formatter.format(yearData.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalInvestment)}</td>
            </tr>})}
        </tbody>
    </table>
  )
}

export default Result