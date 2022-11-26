import React from "react";

import Chart from "../Chart/Chart.js";

const ExpensesChart = (props) => {
  const DataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  // updating "chartDataPoints" here
  props.expenses.forEach((expense) => {
    const expenseMonth = expense.date.getMonth(); // staring az 0 (jan = 0)
    return (DataPoints[expenseMonth].value += expense.amount); // adding every expense amount to its epecific month in DataPoints array
  });

  return <Chart dataPoints={DataPoints} />;
};

export default ExpensesChart;
