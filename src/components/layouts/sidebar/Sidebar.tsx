import { NavLink } from "react-router";
import styles from "./Sidebar.module.css";

const NAV_ITEMS = [
  { to: "/dashboard", label: "DASHBOARD" },
  { to: "/entry/new", label: "NEW" },
  { to: "/catalog", label: "CATALOG" },
  { to: "/charts", label: "CHARTS" },
];

export const Sidebar = () => {
  return (
    <nav className={styles.sidebar}>
      <div className={styles.logo}>~/diary</div>
      <ul className={styles.list}>
        {NAV_ITEMS.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.linkActive}` : styles.link
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
