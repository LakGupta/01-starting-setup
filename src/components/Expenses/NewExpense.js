import "./NewExpense.css";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";


function NewExpense(props) {
  const [generateForm, setGenerateForm] = useState(false);

  const ExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    
    props.onAddExpenseData(expenseData);
  };

  const generateFormHandler = () => {

    setGenerateForm(true);

  };

  const stopGenerating = () => {

    setGenerateForm(false);

  };


  return (
    
    <div className="new-expense">

      {(generateForm===true && <ExpenseForm  onCancel={stopGenerating} onSaveExpenseData={ExpenseDataHandler}/> )}
      { !generateForm && <button onClick={generateFormHandler} >Add New Expense</button>}
      
    </div>
  );
}
export default NewExpense;
