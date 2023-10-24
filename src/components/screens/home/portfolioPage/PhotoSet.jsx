import styles from './portfolioPage.module.css'

const photosetLinks = [
    'https://avatars.dzeninfra.ru/get-zen_brief/271828/pub_6533a7aa63f5095f27e7cd39_6533a847b2518f48862d9bc0/scale_2400',
    'https://avatars.dzeninfra.ru/get-zen_brief/271828/pub_6533a7aa63f5095f27e7cd39_6533a847b2518f48862d9bc0/scale_2400',
]

const imgArray = photosetLinks.map((el, index)=> <img key={index} src={el} alt="" />)

const PhotoSet = () => {
    return (
        <div className={styles.gridContainer}>
            {imgArray}
        </div>
    )
}

export default PhotoSet