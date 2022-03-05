import React, { useState } from "react";
import ExpenseItems from "./ExpenseItems";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterYear = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(filteredYear);
  };

  const filteredExpenses = props.items.filter(expenses =>{
    return expenses.date.getFullYear().toString() === filteredYear;
  } )
  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onFilterYear={filterYear} />
        <ExpensesChart  expenses={filteredExpenses}></ExpensesChart>


        {filteredExpenses.map(expenses => (
          <ExpenseItems
            key={expenses.id}
            title={expenses.title}
            amount={expenses.amount}
            date={expenses.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
