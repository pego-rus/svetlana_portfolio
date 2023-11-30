import styles from './portfolioPage.module.css'

const PhotographerPhoto = () => {
    return (
        <div id='photographer' className={styles.photographer}>
            <h3 className={styles.photographerName}>Профессиональный фотограф Светлана</h3>
            <img src="https://drive.google.com/uc?export=view&id=1nzTuX3riPHGHSi6wjjnanBquc87XauwV" alt="" className={styles.photographerPhoto}/>
        </div>
    )
}

export default PhotographerPhoto;