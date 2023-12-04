import { Link } from 'react-router-dom';
import styles from './photoSection.module.css'
import { useRef, useEffect, useState } from 'react'

const PhotoSection = ({ fields }) => {
    const [scrollLeft, setScrollLeft] = useState(true);
    const [pictureLoaded, setPictureLoaded] = useState(false);
    const imgRef = useRef(null);


    const handleOnload = () => setPictureLoaded(true);

    useEffect(() => {
        let photoNum = 1;
        function scrollFunc () {
            scrollLeft ? 
                setInterval(() => {
                    if (photoNum <= fields.slideshow.length) {
                        imgRef.current.scrollBy({
                            left: imgRef.current.clientWidth,
                            behavior: 'smooth'
                        });
                        photoNum += 1;
                    } else {
                        setScrollLeft(false);
                    };
                }, 3000) :
                setInterval(() => {
                    if (photoNum <= fields.slideshow.length) {
                        imgRef.current.scrollBy({
                            left: -imgRef.current.clientWidth,
                            behavior: 'smooth'
                        });
                        photoNum += 1;
                    } else {
                        setScrollLeft(true);
                    };
                }, 3000)
            };
        pictureLoaded && scrollFunc()
        }, [pictureLoaded, scrollLeft]);

    return (
    <div className={styles.gridInner}>
        <Link className={styles.link} to={`/section/${fields.id}`}>
            <h2>{fields.name}</h2>
            <h3>{fields.description}</h3>
            <div ref={imgRef} id={fields.id} className={styles.slider}>
                    {fields.slideshow.map((link, index) =>
                        <div className={ pictureLoaded ? 
                            styles.imgLoaded : styles.imgLoading} key={index}>
                            <img src={link} alt="" onLoad={handleOnload} />
                        </div>
                    )}        
            </div>
        </Link>
    </div>
)}

export default PhotoSection