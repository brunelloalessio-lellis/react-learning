import Expenses from "./components/Expenses/Expenses";

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

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
