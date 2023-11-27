import PhotographerPhoto from "./PhotographerPhoto"
import PhotoSet from "./PhotoSet"

const PortfolioPage = () => {
    
const photoLinks = [
    'https://avatars.dzeninfra.ru/get-zen_brief/271828/pub_6533a7aa63f5095f27e7cd39_6533a847b2518f48862d9bc0/scale_2400',
    'https://avatars.dzeninfra.ru/get-zen_brief/271828/pub_6533a7aa63f5095f27e7cd39_6533a847b2518f48862d9bc0/scale_2400',
    'https://avatars.dzeninfra.ru/get-zen_brief/271828/pub_6533a7aa63f5095f27e7cd39_6533a847b2518f48862d9bc0/scale_2400',
    'https://avatars.dzeninfra.ru/get-zen_brief/271828/pub_6533a7aa63f5095f27e7cd39_6533a847b2518f48862d9bc0/scale_2400',
    'https://avatars.dzeninfra.ru/get-zen_brief/271828/pub_6533a7aa63f5095f27e7cd39_6533a847b2518f48862d9bc0/scale_2400',
    'https://avatars.dzeninfra.ru/get-zen_brief/271828/pub_6533a7aa63f5095f27e7cd39_6533a847b2518f48862d9bc0/scale_2400',
]

    return (
    <>
    <PhotographerPhoto />
    <PhotoSet links = {photoLinks}/>
    </>
    )
}

export default PortfolioPage