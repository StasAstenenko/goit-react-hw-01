import style from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <div className={style.transactionHistory}>
      <table className={style.table}>
        <thead>
          <tr>
            <th className={style.th}>Type</th>
            <th className={style.th}>Amount</th>
            <th className={style.th}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <tr key={item.id} className={style[item.type]}>
                <td className={style.td}>{item.type}</td>
                <td className={style.td}>{item.amount}</td>
                <td className={style.td}>{item.currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
