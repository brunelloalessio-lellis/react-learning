import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {

  const expenses = [
    {
      title: "Car test",
      amount: 111.11,
      date: new Date(),
    },
    {
      title: "Car test 2",
      amount: 222.22,
      date: new Date(),
    },
    {
      title: "Car test 3",
      amount: 333.33,
      date: new Date(),
    },
  ];

  const addExpenseHandler = expense => {
    console.log('in App.js')
    console.log(expense)
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
