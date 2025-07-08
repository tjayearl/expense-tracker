import { useState } from 'react'

function AddTransaction({ onAdd }) {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!text || !amount) return

    const newTransaction = {
      id: Date.now(),
      text,
      amount: +amount,
    }

    onAdd(newTransaction)
    setText('')
    setAmount('')
  }

  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter description..."
          />
        </div>
        <div className="form-control">
          <label>Amount (negative = expense, positive = income)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction
