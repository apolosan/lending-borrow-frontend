import { RateWidget } from '../components/rateWidget/rateWidget';
import { Button } from '../components/button/button';
import styles from './Home.module.scss';

import WethIcon from '../assets/images/supported-markets/weth__icon.png';
import WnearIcon from '../assets/images/supported-markets/wnear__icon.png';
import { Modal } from '../components/modal';
import { useState } from 'react';

// interface SupportedMarketsTypes {
// 	id: number;
// 	AssetIcon: string,
// 	Asset: string,
// 	Price: number,
// 	Apy: number,
// 	Wallet: string,
// 	TotalSupply: string,
// 	TotalBorrow: string,
// 	SupplyOnClick: Function,
// 	BorrowOnClick: Function
// };

const SupportedMarkets = [
	{
		id: 1,
		AssetIcon: `${WethIcon}`,
		Asset: 'WETH',
		Price: 1.01,
		Apy: 1.9868,
		Wallet: '0 WETH',
		TotalSupply: '$0,000.00',
		TotalBorrow: '$54,007.86',
		SupplyOnClick: function () {
			console.log("Supply Click");
		},
		BorrowOnClick: function () {
			console.log("Borrow Click");
		}
	},
	{
		id: 2,
		AssetIcon: `${WnearIcon}`,
		Asset: 'WNEAR',
		Price: 9.82,
		Apy: 2.4561,
		Wallet: '0 NEAR',
		TotalSupply: '$62,066.43',
		TotalBorrow: '$4,152.73',
		SupplyOnClick: function () {
			console.log("Supply Click");
		},
		BorrowOnClick: function () {
			console.log("Borrow Click");
		}
	}
];

function Home() {

	const [modalShow, setModalShow] = useState(false);

	return (
		<main>
			<div className={styles.intro}>
				<div className="container">
					<div className={styles.intro__inner}>
						<h1>DeFi is Near! </h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
				</div>
			</div>

			<div className="container">
				<div className={styles.home}>
					<div className={styles.widgets}>
						<RateWidget type="Supply" />
						<RateWidget type="Borrow" />
					</div>

					<div className={styles.supportedMarkets}>
						<h2>Supported Markets</h2>
						<ul className={styles.table}>
							<li className={styles.table__header}>
								<ul className={styles.colmn}>
									<li>Asset</li>
									<li>Price</li>
									<li>Apy</li>
									<li>Wallet</li>
									<li>TotalSupply</li>
									<li>TotalBorrow</li>
									<li>More</li>
								</ul>
							</li>

							{SupportedMarkets.map((item) => (
								<li key={item.id} className={styles.table__item}>
									<ul className={styles.colmn}>
										<li>
											<div className={styles.colmn__icon}>
												<img src={item.AssetIcon} alt="Asset Icon" />
											</div>
											{item.Asset}
										</li>

										<li>
											${item.Price}
										</li>

										<li>
											{item.Apy}%
										</li>

										<li>
											{item.Wallet}
										</li>

										<li>
											{item.TotalSupply}
										</li>

										<li>
											{item.TotalBorrow}
										</li>

										<li>
											<Button size="small" text="Supply" color="white" onClick={() => setModalShow(true)} />
											<Button size="small" text="Borrow" color="white" onClick={() => setModalShow(true)} />
										</li>
									</ul>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
			<Modal show={modalShow} handleClose={setModalShow}>1111</Modal>
		</main>
	);
}

export default Home;
