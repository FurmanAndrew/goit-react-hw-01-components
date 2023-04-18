import PropTypes from 'prop-types';
import './TransactionList.module.css';

export const TransactionList = ({transactionHistory}) => {
    return(<table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {transactionHistory.map(({id, type, amount, currency}) => (<tr key={id}>
      <td>{type}</td>
      <td>{Number(amount)}</td>
      <td>{currency}</td>
    </tr>))}
  </tbody>
</table>)
}

TransactionList.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
    }),
  )
}
// Дані для списку доступні у форматі JSON у файлі transactions.json. Це масив об'єктів, де кожен об'єкт описує одну транзакцію з наступними властивостями:

// id — унікальний ідентифікатор транзакції
// type — тип транзакції
// amount - сума транзакції
// currency - тип валюти