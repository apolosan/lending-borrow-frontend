import {InitContract} from '../utils';
import {useEffect, useState} from 'react';

export function Portfolio(props: InitContract) {
    const [total_borrows, setBorrows] = useState(0);
    const [total_reserve, setReserves] = useState(0);

    useEffect(() => {
        (async function fetchMyAPI() {
            try {
                const reserve = await props.dtokenContract.get_total_reserve();
                const borrows = await props.dtokenContract.get_total_borrows();
                setReserves(reserve);
                setBorrows(borrows);
            } catch (e) {
                console.error(e);
            }

        })();
    }, [props.dtokenContract])
    return(
        <div className="portfolio">
            <div className="boxWrapper">
                <div className="blueBox"><p
                    className="">Total Supplied</p><p
                    className="">{total_reserve}</p></div>
                <div className="blueBox"><p
                    className="">Total Borrowed</p><p
                    className="">{total_borrows}</p></div>
            </div>
            <p className=""><span>Supplied</span> Assets</p>
            <div>No supplied assets yet</div>
            <p className=""><span>Borrowed</span> Assets</p>
            <div >No borrowed assets yet</div>
        </div>
    );
}
