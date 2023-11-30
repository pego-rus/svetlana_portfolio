import Header from './Header'
import styles from './mainScreen.module.css'
import { useContext } from 'react';
import { ViewPositionContext } from '../../../../providers/ViewPositionProvider';

const MainScreen = () => {
    const {viewPosition, setViewPosition} = useContext(ViewPositionContext);

    return (
    <div className={styles.mainscreenContainer} onTouchStart={() => {setViewPosition(
        {
            photographerPhoto: true,
            photoSection: true,
            contactForm: true
        }
    )}}>
    <Header />
    </div>
    )
}

export default MainScreen