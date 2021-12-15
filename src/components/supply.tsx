import {InitContract} from '../utils';
import {useEffect, useState} from 'react';
import {Modal} from './modal';
import {ModalContent} from './modal_content';

export function Supply(props: InitContract) {
    const [total_reserve, setReserves] = useState(0);
    const [choosed_asset, setChoosedAsset] = useState(0);

    const onAssetClick = (assetId: number) => {
        setChoosedAsset(assetId);
    };

    useEffect(() => {
        (async function fetchMyAPI() {
            try {
                const reserve = await props.dtokenContract.get_total_reserve();
                setReserves(reserve);
            } catch (e) {
                console.error(e);
            }

        })();
    }, [props.dtokenContract]);

    return(
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
                        <tr key={(1)} onClick={()=>{onAssetClick(1)}} className="">
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
                    className="">Total Supply</p><p
                    className="">{total_reserve}</p>
                </div>
            </div>
            <Modal show={!!choosed_asset} handleClose={setChoosedAsset}>
                < ModalContent type="Supply" />
            </Modal>
        </div>

    )
}
