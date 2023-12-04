import styles from './portfolioSection.module.css'
import ContactMe from '../home/contactForm/ContactMe'
import { Link, useParams } from 'react-router-dom'
import sections from '/database.js?url'
import { useEffect, useState } from 'react'

const PortfolioSection = () => {
    const [carousellPos, setCarousellPos] = useState(0)
    const { name }= useParams()
    const sectionData = sections.filter((item) => item.id == name)[0];
    useEffect(() => {
        window.scrollTo({top: 0})
    },[])

    return(
        <>
        <Link className={styles.link} to='/'>На главную</Link>
        <h4 className={styles.h4}>{sectionData.name}</h4>
        <div className={styles.carousell}>
            {sectionData.pictureLinks.map((el, index) => 
                    <img key={index} className={
                        (carousellPos == index) ? styles.currentCarousellItem :
                            (carousellPos-index==-1) ? styles.nextCarousellItem : 
                                (carousellPos-index==1) ? styles.previousCarousellItem : styles.noVisionCarousellItem
                    }
                    onClick={() => {
                        if (carousellPos > index) setCarousellPos(carousellPos-1);
                        if (carousellPos < index) setCarousellPos(carousellPos+1);
                    }
                    } src={el} alt="" />
            )}
        </div>
        <ContactMe />
        </>
    )
}

export default PortfolioSection