import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { FavoritePokemons } from "../pages/Fav";
import { DefaultElement } from "./default";

export function RoutesProvider() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<DefaultElement />}>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<FavoritePokemons />} />
        </Route>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  )
}