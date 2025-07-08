import { useState } from 'react'
import Header from './components/Header'
import Balance from './components/Balance'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
import './index.css'

function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, text: 'Groceries', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
  ])

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction])
  }

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id))
  }

  return (
    <div className="container">
      <Header />
      <Balance transactions={transactions} />
      <TransactionList transactions={transactions} onDelete={deleteTransaction} />
      <AddTransaction onAdd={addTransaction} />
    </div>
  )
}

export default App

