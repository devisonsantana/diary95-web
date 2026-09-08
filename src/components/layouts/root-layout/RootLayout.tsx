import { Outlet } from "react-router";
import { Gridscape } from "../gridscape/Gridscape";
import { VhsEffect } from "../vhs/VhsEffect";

export const RootLayout = () => {
  return (
    <>
      <VhsEffect />
      <Gridscape />
      <Outlet />
    </>
  );
};
