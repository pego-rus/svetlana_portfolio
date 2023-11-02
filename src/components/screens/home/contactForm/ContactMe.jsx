import { useState } from 'react';
import styles from './contactMe.module.css'

const clearData = {
    name: '',
    email: '',
    phone: '',
}

const ContactMe = () => {

    const [input, setInput] = useState(clearData);

    const handleChange = (event) => {
        let name = event.target.dataset.text;
        setInput({...input, [name] : event.target.value});
    }

    const clickHandler = (el) => {
        const newRequest = JSON.stringify(input);
        console.log(newRequest);
        el.preventDefault();
        setInput(clearData)
    };

    return (
        <div id='contacts' className={styles.formDiv}>
            <form className={styles.getRequest}>
                <h2>Форма для связи</h2>
                <input type="text" data-text='name' value={input.name} placeholder='Name' onChange={handleChange} />
                <input type="text" data-text='email' value={input.email} placeholder='Электронная почта' onChange={handleChange} />
                <input type="text" data-text='phone' value={input.phone} placeholder='Номер телефона' onChange={handleChange} />
                <button onClick = {clickHandler}>Отправить запрос на сотрудничество</button>
            </form>
        </div>
    )
}

export default ContactMe