
import "./Expenses.css";
import "../UI/Card.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilterYear] = useState("2019");
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
const filteredExpenses = props.items.filter(expense =>{
  return expense.date.getFullYear().toString() === filteredYear;
})
  return (
    <div>
      <Card className="expenses"> 
        <ExpensesFilter
          seletecd={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
