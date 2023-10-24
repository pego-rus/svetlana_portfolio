import PhotographerPhoto from "./PhotographerPhoto"
import PhotoSet from "./PhotoSet"
import { forwardRef } from "react"

const PortfolioPage = () => {
    return (
    <>
    <PhotographerPhoto />
    <PhotoSet />
    </>
    )
}

export default forwardRef(PortfolioPage)