import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const fullExpenses = props.expenses;
  const [filteredYear, setFilteredYear] = useState("2021");
  const [filteredExpenses, setFilteredExpenses] = useState(fullExpenses);

  const filterChangeHandler = (year) => {
    setFilteredYear(year);
    filterExpenses(year);
  };

  const filterExpenses = (year) => {
    const expenses = fullExpenses.filter(
      (expense) => expense.date.getFullYear() === +year
    );
    setFilteredExpenses(expenses);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          filterChange={filterChangeHandler}
          selected={filteredYear}
        />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
