function TransactionList({ transactions, onDelete }) {
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((t) => (
          <li key={t.id} className={t.amount < 0 ? 'minus' : 'plus'}>
            {t.text} <span>${t.amount}</span>
            <button onClick={() => onDelete(t.id)} className="delete-btn">x</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TransactionList
