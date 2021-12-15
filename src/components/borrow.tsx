import { useEffect, useState } from 'react';
import { InitContract } from '../utils';
// import { Modal } from './modalLayout/modalLayout';
// import { ModalContent } from './ModalContent/modal_content';

export function Borrow(props: InitContract) {

    const [total_borrows, setBorrows] = useState(0);
    // const [choosed_asset, setChoosedAsset] = useState(0);
    // const [modalShow, setModalShow] = useState(false);

    const onAssetClick = (assetId: number) => {
        // setChoosedAsset(assetId);
        console.log(assetId);
    };

    useEffect(() => {
        (async function fetchMyAPI() {
            try {
                const borrows = await props.dtokenContract.get_total_borrows();
                setBorrows(borrows);
            } catch (e) {
                console.error(e);
            }

        })();
    }, [props.dtokenContract])


    return (
        <div className="borrow">
            <div />
            <div className="">Available <span>Borrow</span> Assets
            </div>
            <div className="tableWrapper">
                <table className="">
                    <thead className="">
                        <tr className="">
                            <th className="" scope="col">Name</th>
                            <th className="" scope="col">Borrow APY</th>
                            <th className="" scope="col">Available Liquidity</th>
                            <th className="" scope="col">Collateral Factor</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        <tr key={(1)} onClick={() => { onAssetClick(1) }} className="">
                            <td className="">
                                <div className="">
                                    <div className="">DAI</div>
                                    <div className="">$1.00</div>
                                </div>
                            </td>
                            <td className="">
                                <div className="">249.9311%</div>
                            </td>
                            <td className="">
                                <div className="">$1.81</div>
                            </td>
                            <td className="">
                                <div className="">95%</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="boxWrapper">
                <div className="blueBox"><p
                    className="">Total Borrow</p><p
                        className="">{total_borrows}</p>
                </div>
            </div>
            {/* <Modal show={!!choosed_asset} handleClose={setChoosedAsset}>
                < ModalContent type="Borrow" />
            </Modal> */}

            {/*{modalShow &&*/}
            {/*    <Modal hideModal={() => setModalShow(false)}>*/}

            {/*    </Modal>*/}
            {/*}*/}
        </div>
    )
}
