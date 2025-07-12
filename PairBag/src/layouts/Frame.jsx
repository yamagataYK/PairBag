import { Outlet } from "react-router-dom";
import styles from '../styles/layouts/Frame.module.css'

export default function Frame() {
    return (
        <div className={styles.frame}>
            <Outlet />
        </div>
    );
}