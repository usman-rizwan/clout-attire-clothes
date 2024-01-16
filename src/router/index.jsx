import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/home";
import PageNotFound from "../components/PageNotFound";

 function AppRouter() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="*" element={<PageNotFound />}/>
        </Routes>
        </BrowserRouter>
    )
}
export default AppRouter;