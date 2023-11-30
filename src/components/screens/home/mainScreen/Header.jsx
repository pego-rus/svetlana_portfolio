import styles from './mainScreen.module.css'

const Header = () => {
    const handleClick1 = () => {
        document.getElementById('photographer').scrollIntoView({behavior: 'smooth'})
    }
    const handleClick2 = () => {
        document.getElementById('grid').scrollIntoView({behavior: 'smooth', block: 'end'})
    }
    const handleClick3 = () => {
        document.getElementById('contacts').scrollIntoView({behavior: 'smooth', block: 'end'}),
        setTimeout(()=> {
            document.getElementById('contacts').scrollIntoView({behavior: 'smooth', block: 'end'})
        },900)
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