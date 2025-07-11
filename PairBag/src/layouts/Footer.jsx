import { Link, Outlet } from 'react-router-dom';
import styles from '../styles/layouts/Footer.module.css';
import { PiHouseLine } from "react-icons/pi";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

const Footer = () => {
    return (
        <>
            <Outlet />
            <div className={styles.pageWrapper}>
                <footer className={styles.footer}>

                    <Link to="/" className={styles.navItem}>
                        <PiHouseLine className={styles.icon} />
                        <span className={styles.text}>ホーム</span>
                    </Link>
                    <div className={styles.cameraButtonWrapper}>
                        <Link to="/camera" className={styles.cameraButton}>
                            <MdOutlinePhotoCamera className={styles.cameraIcon} />
                        </Link>
                    </div>
                    <Link to="/chat" className={styles.navItem}>
                        <IoChatboxEllipsesOutline className={styles.icon} />
                        <span className={styles.text}>トーク</span>
                    </Link>


                </footer>
            </div>
        </>
    )
}

export default Footer;
