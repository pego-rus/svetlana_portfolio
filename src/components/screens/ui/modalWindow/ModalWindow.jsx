import styles from './modal.module.css'

const ModalWindow = ({ requestName, requestState, setRequestState, setInput, clearData }) => {
    return (
        <div className={requestState ? styles.modalMainActive : styles.modalMainHide} onClick={() => {
            setRequestState(false);
            setInput(clearData);
        }}>
            <div className={styles.modalTextBlock} onClick={(event) => {
                event.stopPropagation();
            }}>
                <p>{requestName}, Ваш запрос о сотрудничестве отправлен!</p>
            </div>
        </div>
    )
}

export default ModalWindow