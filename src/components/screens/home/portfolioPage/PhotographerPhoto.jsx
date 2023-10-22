import styles from './portfolioPage.module.css'

const PhotographerPhoto = () => {
    return (
        <div className={styles.photographer}>
            <h3 className={styles.photographerName}>Профессиональный фотограф Светлана</h3>
            <img src="https://avatars.dzeninfra.ru/get-zen_brief/271828/pub_6533a7aa63f5095f27e7cd39_6533a847f4f1cc0ae72008da/scale_2400" alt="" className={styles.photographerPhoto}/>
        </div>
    )
}

export default PhotographerPhoto