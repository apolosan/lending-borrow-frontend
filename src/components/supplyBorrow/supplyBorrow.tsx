import styles from './../home/Home.module.scss';
import { RateWidget } from '../rateWidget/rateWidget';

function SupplyBorrowBoards() {

  return (
    <div className={styles.widgets}>
      <RateWidget type="Supply" />
      <RateWidget type="Borrow" />
    </div>
  );

}

export default SupplyBorrowBoards;