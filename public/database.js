
const animalPictures = [
    'https://drive.google.com/uc?export=view&id=1IfTssPHVJ8F77oaYfsoRyJNJq7xDFwUi',
    'https://drive.google.com/uc?export=view&id=14QWpMTI9a0ceeynTsSUcMoJ_OL-jNr4U',
    'https://drive.google.com/uc?export=view&id=1iebRa6fPRllBmPVab5FvWUOM6I_gfXp6',
    'https://drive.google.com/uc?export=view&id=1vhiqq9JmWQkxukj3vL8vybTh7OXL0hTX',
    'https://drive.google.com/uc?export=view&id=1zcg-Rxx3PUxFRZFOZioX-1jN1k7Ac481',
    'https://drive.google.com/uc?export=view&id=1BCE77WknLpzNdlwtnqIdTQV7UhK5F80U',
]
const naturePictures = [
    'https://drive.google.com/uc?export=view&id=1BBREE7MMNh01ZlzdIkGR5QabUeUfWWst',
    'https://drive.google.com/uc?export=view&id=1OMYYMM8XDkVNcJ1TNOznrYjz8mtCmhZy',
    'https://drive.google.com/uc?export=view&id=13QII74dEiuo5syKhnn07Iv3IPfd-vua8',
    'https://drive.google.com/uc?export=view&id=10Lc9zSecISkkC2VgDcrDDfXHItvhZ4Xc',
    'https://drive.google.com/uc?export=view&id=1EYHoLbYMroIhP1dBfl4Fl2uHX9E25qLC',
    'https://drive.google.com/uc?export=view&id=1mNXdtnlh2lyM7iEPbxeZ3DutfXYHPihv',
]
const peoplePictures = [
    'https://drive.google.com/uc?export=view&id=1IfTssPHVJ8F77oaYfsoRyJNJq7xDFwUi',
    'https://drive.google.com/uc?export=view&id=14QWpMTI9a0ceeynTsSUcMoJ_OL-jNr4U',
    'https://drive.google.com/uc?export=view&id=1iebRa6fPRllBmPVab5FvWUOM6I_gfXp6',
    'https://drive.google.com/uc?export=view&id=1vhiqq9JmWQkxukj3vL8vybTh7OXL0hTX',
    'https://drive.google.com/uc?export=view&id=1zcg-Rxx3PUxFRZFOZioX-1jN1k7Ac481',
    'https://drive.google.com/uc?export=view&id=1BCE77WknLpzNdlwtnqIdTQV7UhK5F80U',
]
const otherPictures = [
    'https://drive.google.com/uc?export=view&id=1IfTssPHVJ8F77oaYfsoRyJNJq7xDFwUi',
    'https://drive.google.com/uc?export=view&id=14QWpMTI9a0ceeynTsSUcMoJ_OL-jNr4U',
    'https://drive.google.com/uc?export=view&id=1iebRa6fPRllBmPVab5FvWUOM6I_gfXp6',
    'https://drive.google.com/uc?export=view&id=1vhiqq9JmWQkxukj3vL8vybTh7OXL0hTX',
    'https://drive.google.com/uc?export=view&id=1zcg-Rxx3PUxFRZFOZioX-1jN1k7Ac481',
    'https://drive.google.com/uc?export=view&id=1BCE77WknLpzNdlwtnqIdTQV7UhK5F80U',
]

const sections = [
    {
        id: 'nature',
        name:'Природа',
        description:'Красочные фотографии природы',
        slideshow: naturePictures,
        pictureLinks: naturePictures,
    },
    {
        id: 'animals',
        name:'Животные',
        description:'Милые животные в нашей жизни',
        slideshow: animalPictures,
        pictureLinks: animalPictures,
    },
    {
        id: 'people',
        name:'Люди',
        description:'Люди и как они выглядят',
        slideshow: peoplePictures,
        pictureLinks: peoplePictures,
    },
    {
        id: 'other',
        name:'Прочее',
        description:'Просто красивые фотографии',
        slideshow: otherPictures,
        pictureLinks: otherPictures,
    }
]

export default sections