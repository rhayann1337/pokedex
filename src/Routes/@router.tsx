import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";

export function RoutesProvider() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />}/>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}