import styles from './contactMe.module.css'

const ContactMe = () => {

    const clickHandler = (el) => {
        el.preventDefault();
    }

    return (
        <div id='contacts' className={styles.formDiv}>
            <form className={styles.getRequest}>
                <h2>Форма для связи</h2>
                <input type="text" placeholder='Электронная почта'/>
                <input type="text" placeholder='Номер телефона'/>
                <button onClick = {clickHandler}>Отправить запрос на сотрудничество</button>
            </form>
        </div>
    )
}

export default ContactMe