import { Outlet } from "react-router";
import { Sidebar } from "../sidebar/Sidebar";
import styles from "./Shell.module.css";

export const Shell = () => {
  return (
    <div className={styles.shell}>
      <Sidebar />
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};
