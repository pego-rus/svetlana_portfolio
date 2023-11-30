import styles from "./portfolioPage.module.css"
import PhotographerPhoto from "./PhotographerPhoto"
import PhotoSection from "./PhotoSection"
import { useContext, useEffect, useState } from "react"
import { ViewPositionContext } from "../../../../providers/ViewPositionProvider"
import sections from "/database.js?url"

const PortfolioPage = () => {
    const {viewPosition, setViewPosition} = useContext(ViewPositionContext);

    return (
    <>
        {viewPosition.photographerPhoto ? <PhotographerPhoto /> : 
            <div id='photographer' onMouseOver={() => {setViewPosition(
                {
                    ...viewPosition,
                    photographerPhoto: true,
                }
            )}}
            onTouchMove={() => {setViewPosition(
                {
                    ...viewPosition,
                    photographerPhoto: true,
                }
            )}} style={{"height": "50vh"}}>
            </div>}
        {viewPosition.photoSection ?
            <div id='grid' className={styles.gridContainer}>
            {sections.map((section, id) =>
                <PhotoSection key = {id} fields={section} />
                )}
            </div>
            : <div id='grid' onMouseOver={() => {setViewPosition(
                {   
                    ...viewPosition,
                    photographerPhoto: true,
                    photoSection: true,
                    contactForm: true
                })
                }}
                onTouchMove={() => {setViewPosition(
                    {   
                        ...viewPosition,
                        photographerPhoto: true,
                        photoSection: true,
                        contactForm: true
                    })
                    }}
                style={{"height": "100vh"}}>
            </div>
        }
    </>
    )
}

export default PortfolioPage