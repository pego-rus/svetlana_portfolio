import styles from './portfolioPage.module.css'

const PhotoSet = ({ links }) => {
    return (
        <div className={styles.gridContainer}>
            {links && links.length != 0 ? links.map((el, index)=> <img key={index} src={el} alt="" />) : <p style={{fontSize: '15pt', letterSpacing: '3px'}}>Photos not uploaded!</p>}
        </div>
    )
}

export default PhotoSet