import ModalWindow from '../../ui/modalWindow/ModalWindow';
import { useContext, useEffect, useState } from 'react';
import styles from './contactMe.module.css';
import { ViewPositionContext } from '../../../../providers/ViewPositionProvider';

const clearData = {
    name: '',
    email: '',
    phone: '',
}

const ContactMe = () => {

    const {viewPosition, setViewPosition} = useContext(ViewPositionContext);


    const [input, setInput] = useState(clearData);
    const [requestState, setRequestState] = useState(false);

    const handleChange = (event) => {
        setInput({...input, [event.target.dataset.text] : event.target.value});
    }

    const clickHandler = (el) => {
        const newRequest = JSON.stringify(input);
        console.log(newRequest);
        (input.name && input.email && input.phone) ? setRequestState(true) : (setRequestState(false), alert('Заполните все поля!'));
        el.preventDefault();
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
            <ModalWindow 
            requestName = {input.name} 
            requestState = {requestState} 
            setRequestState = {setRequestState} 
            setInput = {setInput}
            clearData = {clearData}
             />
        </div>
    )
}

export default ContactMe