import { Outlet } from "react-router";
import "./vhs.css";

export const VhsEffect = () => {
  return (
    <>
      <div className="vhs-effect" aria-hidden="true">
        <div className="vhs-noise" />
        <div className="vhs-scanlines" />
        <div className="vhs-tracking" />
        <div className="vhs-glitch vhs-glitch-red" />
        <div className="vhs-glitch vhs-glitch-blue" />
      </div>
      <Outlet />
    </>
  );
};
