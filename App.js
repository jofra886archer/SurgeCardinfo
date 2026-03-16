import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
// import Receipt from './components/Receipt'; // Uncomment to use Receipt component

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <h1>E-ZPass Delaware Expense Tracker</h1>
        <ExpenseForm onAddExpense={addExpenseHandler} />
        <ExpenseList items={expenses} />
        {/* <Receipt /> */}
      </div>
    </div>
  );
}

export default App;
