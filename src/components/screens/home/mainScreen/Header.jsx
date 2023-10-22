import styles from './mainScreen.module.css'

const Header = () => {
    return (
    <>
    <header>
        <nav className={styles.navBar}>
            <ul>
                <li>Портфолио</li>
                <li>Примеры работ</li>
                <li>Контакты</li>
            </ul>
        </nav>
    </header>
    </>
    )
}

export default Header