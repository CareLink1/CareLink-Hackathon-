import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.loader}>
        <span className={styles.heartbeat}></span>
        <span className={styles.pulse}></span>
        <span className={styles.carelinkText}>CareLink</span>
      </div>
    </div>
  );
};

export default Loader;