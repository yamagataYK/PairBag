import { Outlet, useNavigate } from 'react-router-dom';
import styles from '../styles/layouts/Header.module.css';
import { FaChevronLeft, } from "react-icons/fa6";


const Header = () => {
    const navigate = useNavigate();
    return (
        <>
            <header className={styles.header}>
                <FaChevronLeft onClick={() => navigate(-1)} className={styles.icon} />
                <h2>お知らせ</h2>
            </header>
            <Outlet />
        </>
    );
};

export default Header;
