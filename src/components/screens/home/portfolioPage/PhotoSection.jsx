import styles from './photoSection.module.css'
import { useRef } from 'react'

const PhotoSection = ({ fields }) => {
    const imgRef = useRef(null);
    let timer = setInterval(function () {
            console.log(imgRef.current)
            imgRef.current.scrollBy({
                left: 500,
                behavior: 'smooth'
            })
        },2000)
    return (
    <div className={styles.gridInner}>
        <h2>{fields.name}</h2>
        <h3>{fields.description}</h3>
        <div ref={imgRef} className={styles.slider}>
                {fields.slideshow.map((link, index) =>
                    <img key={index} src={link} alt="" />
                )}        
        </div>
    </div>
)}

export default PhotoSection