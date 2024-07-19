import {Suspense, useEffect} from 'react';
import {HashRouter, Route, Routes,} from 'react-router-dom';
import {useTranslation} from "react-i18next";
// Helper-functions
// Components
import Navbar from "./skeleton/Navbar/navbar.tsx";
import Loader from "./skeleton/loader.tsx";
import Home from "./content/Home/home.tsx";
import {Footer} from "./skeleton/Footer/footer.tsx";

// const Home = React.lazy(() => import('./pages/Home'));
// const AboutMe = React.lazy(() => import('./pages/About'));

function MainPage() {
    const {t, i18n} = useTranslation()

    useEffect(() => {
        console.log("Language Changed, rerendering")
    }, [i18n, t]);

    return (
        <HashRouter>
            <Navbar />
                    <Routes>
                        <Route
                            path="/*"
                            element={<Home />}
                        />
                    </Routes>
                <Footer />
        </HashRouter>
    );
}

export default function WrappedMainPage() {
    return (
        <Suspense fallback={<Loader />}>
            <MainPage />
        </Suspense>
    )
}