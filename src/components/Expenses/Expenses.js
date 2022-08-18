import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import "../UI/Card.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";

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
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
