import styles from "./portfolioPage.module.css"
import PhotographerPhoto from "./PhotographerPhoto"
import PhotoSection from "./PhotoSection"

const PortfolioPage = () => {
    const animalPictures = [
        'https://avatars.dzeninfra.ru/get-zen_brief/271828/pub_6533a7aa63f5095f27e7cd39_6533a847b2518f48862d9bc0/scale_2400',
        'https://avatars.dzeninfra.ru/get-zen_brief/271828/pub_6533a7aa63f5095f27e7cd39_6533a847b2518f48862d9bc0/scale_2400',
        'https://avatars.dzeninfra.ru/get-zen_brief/271828/pub_6533a7aa63f5095f27e7cd39_6533a847b2518f48862d9bc0/scale_2400',
        'https://avatars.dzeninfra.ru/get-zen_brief/271828/pub_6533a7aa63f5095f27e7cd39_6533a847b2518f48862d9bc0/scale_2400',
        'https://avatars.dzeninfra.ru/get-zen_brief/271828/pub_6533a7aa63f5095f27e7cd39_6533a847b2518f48862d9bc0/scale_2400',
        'https://avatars.dzeninfra.ru/get-zen_brief/271828/pub_6533a7aa63f5095f27e7cd39_6533a847b2518f48862d9bc0/scale_2400',
    ]
    const naturePictures = [
        'https://avatars.dzeninfra.ru/get-zen_brief/271828/pub_6533a7aa63f5095f27e7cd39_6533a847b2518f48862d9bc0/scale_2400',
        'https://avatars.dzeninfra.ru/get-zen_brief/271828/pub_6533a7aa63f5095f27e7cd39_6533a847b2518f48862d9bc0/scale_2400',
        'https://avatars.dzeninfra.ru/get-zen_brief/271828/pub_6533a7aa63f5095f27e7cd39_6533a847b2518f48862d9bc0/scale_2400',
        'https://avatars.dzeninfra.ru/get-zen_brief/271828/pub_6533a7aa63f5095f27e7cd39_6533a847b2518f48862d9bc0/scale_2400',
        'https://avatars.dzeninfra.ru/get-zen_brief/271828/pub_6533a7aa63f5095f27e7cd39_6533a847b2518f48862d9bc0/scale_2400',
        'https://avatars.dzeninfra.ru/get-zen_brief/271828/pub_6533a7aa63f5095f27e7cd39_6533a847b2518f48862d9bc0/scale_2400',
    ]
    const peoplePictures = [
        'https://avatars.dzeninfra.ru/get-zen_brief/271828/pub_6533a7aa63f5095f27e7cd39_6533a847b2518f48862d9bc0/scale_2400',
        'https://avatars.dzeninfra.ru/get-zen_brief/271828/pub_6533a7aa63f5095f27e7cd39_6533a847b2518f48862d9bc0/scale_2400',
        'https://avatars.dzeninfra.ru/get-zen_brief/271828/pub_6533a7aa63f5095f27e7cd39_6533a847b2518f48862d9bc0/scale_2400',
        'https://avatars.dzeninfra.ru/get-zen_brief/271828/pub_6533a7aa63f5095f27e7cd39_6533a847b2518f48862d9bc0/scale_2400',
        'https://avatars.dzeninfra.ru/get-zen_brief/271828/pub_6533a7aa63f5095f27e7cd39_6533a847b2518f48862d9bc0/scale_2400',
        'https://avatars.dzeninfra.ru/get-zen_brief/271828/pub_6533a7aa63f5095f27e7cd39_6533a847b2518f48862d9bc0/scale_2400',
    ]
    const otherPictures = [
        'https://avatars.dzeninfra.ru/get-zen_brief/271828/pub_6533a7aa63f5095f27e7cd39_6533a847b2518f48862d9bc0/scale_2400',
        'https://avatars.dzeninfra.ru/get-zen_brief/271828/pub_6533a7aa63f5095f27e7cd39_6533a847b2518f48862d9bc0/scale_2400',
        'https://avatars.dzeninfra.ru/get-zen_brief/271828/pub_6533a7aa63f5095f27e7cd39_6533a847b2518f48862d9bc0/scale_2400',
        'https://avatars.dzeninfra.ru/get-zen_brief/271828/pub_6533a7aa63f5095f27e7cd39_6533a847b2518f48862d9bc0/scale_2400',
        'https://avatars.dzeninfra.ru/get-zen_brief/271828/pub_6533a7aa63f5095f27e7cd39_6533a847b2518f48862d9bc0/scale_2400',
        'https://avatars.dzeninfra.ru/get-zen_brief/271828/pub_6533a7aa63f5095f27e7cd39_6533a847b2518f48862d9bc0/scale_2400',
    ]

    const sections = [
        {
            name:'Природа',
            description:'Красочные фотографии природы',
            slideshow: naturePictures,
        },
        {
            name:'Животные',
            description:'Милые животные в нашей жизни',
            slideshow: animalPictures,
        },
        {
            name:'Люди',
            description:'Люди и как они выглядят',
            slideshow: peoplePictures,
        },
        {
            name:'Прочее',
            description:'Просто красивые фотографии',
            slideshow: otherPictures,
        }
    ]

    // const photoLinks = [
    //     'https://avatars.dzeninfra.ru/get-zen_brief/271828/pub_6533a7aa63f5095f27e7cd39_6533a847b2518f48862d9bc0/scale_2400',
    //     'https://avatars.dzeninfra.ru/get-zen_brief/271828/pub_6533a7aa63f5095f27e7cd39_6533a847b2518f48862d9bc0/scale_2400',
    //     'https://avatars.dzeninfra.ru/get-zen_brief/271828/pub_6533a7aa63f5095f27e7cd39_6533a847b2518f48862d9bc0/scale_2400',
    //     'https://avatars.dzeninfra.ru/get-zen_brief/271828/pub_6533a7aa63f5095f27e7cd39_6533a847b2518f48862d9bc0/scale_2400',
    //     'https://avatars.dzeninfra.ru/get-zen_brief/271828/pub_6533a7aa63f5095f27e7cd39_6533a847b2518f48862d9bc0/scale_2400',
    //     'https://avatars.dzeninfra.ru/get-zen_brief/271828/pub_6533a7aa63f5095f27e7cd39_6533a847b2518f48862d9bc0/scale_2400',
    // ]

    return (
    <>
    <PhotographerPhoto />
        <div className={styles.gridContainer}>
        {sections.map((section, id) =>
            <PhotoSection key = {id} fields={section} />
            )}
        </div>
    </>
    )
}

export default PortfolioPage