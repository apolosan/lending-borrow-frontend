import '../styles/modal.css';

export interface IModal {
    handleClose: any;
    show: boolean;
    children: any;
}

export function Modal(props: IModal) {
    const { handleClose, show, children } = props;
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
                <button type="button" onClick={()=> handleClose(false)}>
                    Close
                </button>
            </section>
        </div>
    );
};
