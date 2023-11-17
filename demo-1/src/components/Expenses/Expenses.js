import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");
  const [filterInfoText, setFilterInfoText] = useState("2019, 2021 and 2022");
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  const expenseFilterHandler = (selectedFilterYear) => {
    // console.log(selectedFilterYear)
    setFilterYear(selectedFilterYear);
    if (selectedFilterYear === "2019") {
      setFilterInfoText("2020, 2021 and 2022");
    } else if (selectedFilterYear === "2021") {
      setFilterInfoText("2019, 2020 and 2022");
    } else if (selectedFilterYear === "2022") {
      setFilterInfoText("2019, 2020 and 2021");
    } else {
      setFilterInfoText("2019, 2021 and 2022");
    }
  };

  return (
    <div>
      <Card className="expenses">

        <ExpenseFilter
          onExpenseFilterChanged={expenseFilterHandler}
          selected={filterYear}
        ></ExpenseFilter>
        <p style={{ color: "white" }}> Data for {filterInfoText} are hidden!</p>
        <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
        <ExpensesList items={filteredExpenses}></ExpensesList>
        
      </Card>
    </div>
  );
};

export default Expenses;
