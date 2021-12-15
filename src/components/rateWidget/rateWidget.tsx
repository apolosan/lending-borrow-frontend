import styles from './RateWidget.module.scss';

interface RateWidgetProps {
	type: 'Supply' | 'Borrow';
}

export function RateWidget({ type }: RateWidgetProps) {
	return (
		<div className={styles.rateWidget}>
			<h3>{type}</h3>
			<ul className={styles.list}>
				<li>
					<h4>Your {type} balance</h4>
					<p>$0.00</p>
				</li>

				<li>
					<h4>Total {type}</h4>
					<p>$45,056,310.56</p>
				</li>
			</ul>
		</div>
	)
}
