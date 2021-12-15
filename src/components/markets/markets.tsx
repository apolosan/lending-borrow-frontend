import React from "react";
import { SupportedMarkets } from "../../data/mocks";
import { Button } from "../button/button";
import styles from '../home/Home.module.scss';

type setModalShowFuncType = (show: boolean) => void;

interface IMarketsProps {
  setModalShow: setModalShowFuncType
}

export function Markets(props: IMarketsProps) {
  const { setModalShow } = props;

  return (
    <div className={styles.supportedMarkets}>
    <h2>Supported Markets</h2>
    <ul className={styles.table}>
      <li className={styles.table__header}>
        <ul className={styles.colmn}>
          <li>Asset</li>
          <li>Price</li>
          <li>Apy</li>
          <li>Your Supply </li>
          <li>Your Borrow</li>
          <li>Total Supply</li>
          <li>Total Borrow</li>
          <li className={styles.center}>More</li>
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

            <li>${item.Price}</li>
            <li>{item.Apy}%</li>
            <li>{item.Wallet}</li>
            <li>{item.Wallet}</li>
            <li>{item.TotalSupply}</li>
            <li>{item.TotalBorrow}</li>
            <li>
              <Button size="small" text="Supply" color="white" onClick={() => setModalShow(true)} />
              <Button size="small" text="Borrow" color="white" onClick={() => setModalShow(true)} />
            </li>
          </ul>
        </li>
      ))}
    </ul>
  </div>
  )
}