import Link from "next/link";
import styles from "./Layout.module.css";

const Layout = ({ title, children }) => {
  return (
    <div className={styles.root}>
      <nav className={styles.navbar}>
        <span>
          Welcome, <strong>Guest</strong>
        </span>

        <div className={styles.links}>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/profile">
            <a>Profile</a>
          </Link>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </div>
      </nav>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default Layout;
