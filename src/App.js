import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const mockdata = [
    {
      title: "Car test",
      amount: 111.11,
      date: new Date(2020, 1, 1),
      id:'id1'
    },
    {
      title: "Car test 2",
      amount: 222.22,
      date: new Date(2021, 2, 3),
      id:'id2'
    },
    {
      title: "Car test 3",
      amount: 333.33,
      date: new Date(2021, 10, 10),
      id:'id3'
    },
  ];

  const [expenses, setExpenses] = useState(mockdata);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
