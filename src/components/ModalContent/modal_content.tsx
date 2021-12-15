
import { Tabs } from 'antd';
import { Button } from '../../components/button/button';
import styles from './ModalContent.module.scss';

import WethIcon from '../../assets/images/supported-markets/weth__icon.png';
import WnearIcon from '../../assets/images/supported-markets/wnear__icon.png';
import { stringify } from 'querystring';

const { TabPane } = Tabs;

function callback(key: any) {
    console.log(key);
};

export interface IModalContent {
    type: string
    title: string;
    desc: string;
    icon: 'weth' | 'wnear';
};

export interface TabInputProps {
    type: 'supply' | 'borrow' | 'repay' | 'withdraw';
};

export function ModalContent(props: IModalContent) {
    const clickMaxBtn = () => {
        console.log('max');
    };

    const click80PercentLimit = () => {
        console.log('click80PercentLimit');
    };

    const clickMaxWithdraw = () => {
        console.log('clickWithdraw');
    };

    const renderButton = (type: string) => {
        switch(type) {
            case 'supply':
            return <button className={styles.tabs__inputBtn} onClick={clickMaxBtn}>Max</button>
            case 'borrow':
                return <button className={styles.tabs__inputBtn} onClick={click80PercentLimit}>80% limit</button>
            case 'borrow':
                return <button className={styles.tabs__inputBtn} onClick={clickMaxWithdraw}>Max</button>
            default:   
                return 
        }
      }

    const TabInput = ({ type }: TabInputProps) => {
        return (
            <>
                <div className={styles.tabs__input}>
                    <div className={styles.tabs__inputIcon}>
                        <img src={props.icon === "weth" ? WethIcon : props.icon === "wnear" ? WnearIcon : ""} alt="icon" />
                    </div>
                    <input type="number" placeholder="Supply WETH" />
                    {/* {type === "supply" ?
                        <button className={styles.tabs__inputBtn} onClick={clickMaxBtn}>Max</button>
                        : type === "borrow" ?
                            <button className={styles.tabs__inputBtn} onClick={click80PercentLimit}>80% limit</button>
                            : type === "withdraw" ?
                                <button className={styles.tabs__inputBtn} onClick={clickMaxWithdraw}>Max</button>
                                : type === "repay" ? ""
                                    : null
                    } */}
                    {renderButton(type)}
                </div>

                <ul className={styles.tabs__subInfo}>
                    {type === "supply" ?
                        <>
                            <li>
                                <p>Interest rates</p>
                                <span>111%</span>
                            </li>
                            <li>
                                <p>Exchange rate WETH to DToken</p>
                                <span>111%</span>
                            </li>
                        </>

                        : type === "borrow" ?
                            <>
                                <li>
                                    <p>Borrow rates</p>
                                    <span>111%</span>
                                </li>
                            </>

                            : type === "withdraw" ?
                                <>
                                    <li>
                                        <p>Exchange rate WETH to DToken</p>
                                        <span>111%</span>
                                    </li>
                                </>

                                : type === "repay" ?
                                    <>
                                        <li>
                                            <p>Borrow amount</p>
                                            <span>111%</span>
                                        </li>
                                        <li>
                                            <p>Borrow rates</p>
                                            <span>111%</span>
                                        </li>
                                        <li>
                                            <p>Fee</p>
                                            <span>111%</span>
                                        </li>
                                    </>
                                    : null
                    }

                </ul>

                <div className={styles.tabs__actionBtn}>
                    {type === "supply" ?
                        <Button text="Supply" size="large" color="primary" onClick={() => console.log('supply')} />
                        : type === "borrow" ?
                            <Button text="Borrow" size="large" color="primary" onClick={() => console.log('borrow')} />
                            : type === "withdraw" ?
                                <Button text="Withdraw" size="large" color="primary" onClick={() => console.log('withdraw')} />
                                : type === "repay" ?
                                    <Button text="Repay" size="large" color="primary" onClick={() => console.log('Repay')} />
                                    : null
                    }
                </div>
            </>
        )
    }

    return (
        <div className={styles.modalContent}>
            <header className={styles.modalContent__header}>
                <h4>{props.title}</h4>
            </header>

            <div className={styles.modalContent__info}>
                <div className={styles.modalContent__icon}>
                    <img src={props.icon === "weth" ? WethIcon : props.icon === "wnear" ? WnearIcon : ""} alt="icon" />
                </div>
                <p>{props.desc}</p>
            </div>

            <div className={styles.tabs}>
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="Supply" key="1">
                        <TabInput type="supply" />
                    </TabPane>
                    <TabPane tab="Withdraw" key="2">
                        <TabInput type="repay" />
                    </TabPane>
                </Tabs>
            </div>
        </div>
    );
}
