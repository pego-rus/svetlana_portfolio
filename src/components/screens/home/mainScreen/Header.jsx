import styles from './mainScreen.module.css'
import { useRef } from 'react';

const Header = () => {
    const ref1 = useRef('')
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const handleClick1 = () => {
        ref1.current.scrollIntoView();
    }
    const handleClick2 = () => {
        ref2.current.scrollIntoView();
    }
    const handleClick3 = () => {
        ref3.current.scrollIntoView();
    }
    return (
    <>
    <header>
        <nav className={styles.navBar}>
            <ul>
                <li onClick={handleClick1}>Портфолио</li>
                <li onClick={handleClick2}>Примеры работ</li>
                <li onClick={handleClick3}>Контакты</li>
            </ul>
        </nav>
    </header>
    </>
    )
}

export default Header