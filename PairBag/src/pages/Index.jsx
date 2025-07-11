import styles from "../styles/pages/Index.module.css";


const Index = () => {

    return (
        <>
            <div className={styles.container}>
                <section className={styles.shopBagWrap} >
                    <h1>買い物バッグ一覧</h1>
                    <span className={styles.border} ></span>
                </section >
            </div >
        </>
    )
}

export default Index;