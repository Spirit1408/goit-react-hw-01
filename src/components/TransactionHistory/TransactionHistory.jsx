import style from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
	return (
		<table className={style.transData}>
			<thead className={style.header}>
				<tr>
					<th>Type</th>
					<th>Amount</th>
					<th>Currency</th>
				</tr>
			</thead>

			<tbody>
				{items.map((item) => (
					<tr className={style.row} key={item.id}>
						<td className={style.column}>
							{item.type[0].toUpperCase() + item.type.slice(1)}
						</td>
						<td className={style.column}>{item.amount}</td>
						<td className={style.column}>{item.currency}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
