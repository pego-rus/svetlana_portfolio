import styles from './portfolioSection.module.css'
import ContactMe from '../home/contactForm/ContactMe'
import { Link, useParams } from 'react-router-dom'
import sections from '/database.js?url'
import { useEffect } from 'react'

const PortfolioSection = () => {
    const { name }= useParams()
    const sectionData = sections.filter((item) => item.id == name)[0];
    useEffect(() => {
        window.scrollTo({top: 0})
    },[])

    return(
        <>
        <Link className={styles.link} to='/'>На главную страницу</Link>
        <h4 className={styles.h4}>{sectionData.name}</h4>
        <div className={styles.carousell}>
            {sectionData.pictureLinks.map((el, index) => {
                return (
                    <img className={styles.carousellItem} key={index} src={el} alt="" />
                )
            })}
        </div>
        <button className={styles.scrollTop} onClick={() => {window.scrollTo({top: 0, behavior:'smooth'})}}>
        ↑
        </button>
        <ContactMe />
        </>
    )
}

export default PortfolioSection