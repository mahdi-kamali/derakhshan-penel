import styles from "./styles.module.scss";

export default function HEADERS() {
  return (
    <div className={styles.headers}>
      <img
        src='/images/logo_auth.png'
        alt=''
      />
      <h2>سلام , خوش آمدید!</h2>
    </div>
  );
}
