import React, { useState } from "react";
import Expenses from "./Component/Expenses/Expenses";
import NewExpenses from "./Component/NewExpenses/NewExpense";

const DUMMY_DATA = [
  // {
  //   id: "e1",
  //   title: "Rosogullah",
  //   amount: 94.12,
  //   date: new Date(2020, 7, 14),
  // },
  // { id: "e2", title: "Mac Pro", amount: 799.49, date: new Date(2021, 2, 12) },
  // {
  //   id: "e3",
  //   title: "kawasaki Ninja",
  //   amount: 294.67,
  //   date: new Date(2021, 2, 28),
  // },
  // {
  //   id: "e4",
  //   title: "DSLR",
  //   amount: 450,
  //   date: new Date(2021, 5, 12),
  // },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_DATA);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
