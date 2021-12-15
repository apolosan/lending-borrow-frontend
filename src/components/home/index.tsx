import React from 'react';

import { Modal } from '../modalLayout/modalLayout';
import { ModalContent } from '../ModalContent/modal_content';
import styles from './Home.module.scss';
import { InitContract } from '../../utils';
import { Markets } from '../markets/markets';
import SupplyBorrowBoards from '../supplyBorrow/supplyBorrow';

function Home(props: InitContract) {


	const [modalShow, setModalShow] = React.useState(false);

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
					<SupplyBorrowBoards />
					<Markets setModalShow={setModalShow} />
				</div>
			</div>
			{modalShow &&
				<Modal hideModal={() => setModalShow(false)}>
					<ModalContent
						type="Supply"
						title="weth"
						desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
						icon="weth" />
				</Modal>
			}
		</main>
	);
}

export default Home;
