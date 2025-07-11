import { Link, Outlet, } from 'react-router-dom';
import { FaBullhorn, FaRegUser } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";
import styles from "../styles/layouts/MainHeader.module.css";
import logo from '../assets/logo.png';

const MainHeader = () => {
    return (
        <>
            <header className={styles.header}>
                <Link to="/profile">
                    <FaRegUser className={`${styles.icon} ${styles.profile}`} />
                </Link>

                <img src={logo} alt="ロゴ" />

                <div className={styles.header_icons}>
                    <Link to="/notice">
                        <FaBullhorn className={`${styles.icon} ${styles.Notice}`} />
                    </Link>
                    <Link to="/notifications">
                        <FaRegBell className={`${styles.icon} ${styles.Notifications}`} />
                    </Link>
                </div>
            </header>
            <Outlet />
        </>
    );
};

export default MainHeader;
