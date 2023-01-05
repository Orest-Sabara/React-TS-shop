import {Route, Routes} from "react-router-dom";
import {Product} from "./components/Product";
import {ProductsPage} from "./pages/ProductsPage";
import {AboutPage} from "./pages/AboutPage";
import {Navigations} from "./components/Navigations";

function App() {
    return (
        <>
            <Navigations />
            <Routes>
                <Route path='/' element={<ProductsPage/>}/>
                <Route path='/about' element={<AboutPage/>}/>
            </Routes>
        </>
    )
}

export default App;
