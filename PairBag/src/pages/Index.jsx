import styles from "../styles/pages/Index.module.css";
import bagFront from '../assets/bagFront.png';
import Main from "../components/Main";
import { FaPlus } from "react-icons/fa6";


const Index = () => {

    return (
        <Main className={styles.main}>
            <section className={styles.shopBagWrap} >
                <h1>買い物バッグ一覧</h1>
                <input type="date" className={styles.date} />
                <span className={styles.border} ></span>
                <div className={styles.boxWrap} >
                    <div className={styles.box}></div>
                    <div className={styles.box}></div>
                    <div className={styles.box}></div>
                    <div className={styles.box}></div>
                </div>
            </section >
            <section className={styles.shareBagWrap} >
                <h2>共有バッグ</h2>
                <div className={styles.shareBag}>
                    <img src={bagFront} alt="赤いカバン" />
                </div>
                <button type="button" className={styles.addButton}>
                    <FaPlus className={styles.icon} />
                </button>
            </section>
        </Main>
    )
}

export default Index;