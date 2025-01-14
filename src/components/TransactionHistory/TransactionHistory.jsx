import css from './TransactionHistory.module.css';
const TransactionHistory = ({ items }) => {
  return (
    <table className={css.tableTransactionHistory}>
      <thead>
        <tr className={css.tableTransactionHistoryThead}>
          <th className={css.type}>Type</th>
          <th className={css.type}>Amount</th>
          <th className={css.type}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr className={css.tableTransactionHistoryRow} key={item.id}>
            <td className={css.tableTransactionHistoryData}>{item.type}</td>
            <td className={css.tableTransactionHistoryData}>{item.amount}</td>
            <td className={css.tableTransactionHistoryData}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
