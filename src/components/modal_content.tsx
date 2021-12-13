import {IModal} from './modal';

export interface IModalContent {
    type: string
}

export function ModalContent(props: IModalContent) {
    return (
        <div>
            <div>{props.type}</div>
            <div>
                <input placeholder="value" type="number" defaultValue="0" />
            </div>
            <div>Supply Rates:</div>
            <div>Deposit APY:<span>XXX</span></div>
            <div>Collateral Factor:<span>XXX</span></div>
            <div>
                <input type="checkbox" id="collateral" name="collateral" />
                <label htmlFor="collateral">Use as collateral</label>
            </div>
            <div>
                <button>{props.type} DAI</button>
            </div>
        </div>
    );
};
