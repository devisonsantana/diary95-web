import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import Auth from "./pages/auth/Auth";
import VhsEffect from "./components/layouts/vhs/VhsEffect";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<VhsEffect />}>
          <Route index element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
