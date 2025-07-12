import { Outlet } from 'react-router-dom';
import styles from '../styles/layouts/ChatFooter.module.css';
import { FaPaperPlane } from "react-icons/fa6";

const ChatFooter = () => {
    return (
        <>
            <Outlet />
            <footer className={styles.footer}>
                <input type="text" placeholder='メッセージを入力' className={styles.textarea} />
                <FaPaperPlane className={styles.icon} />
            </footer>
        </>
    )
}

export default ChatFooter;
