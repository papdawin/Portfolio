import {Suspense, useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
// Helper-functions
// Components
import Navbar from "./skeleton/Navbar/navbar.tsx";
import Loader from "./skeleton/loader.tsx";

import Home from "./content/Home/home.tsx";
import {Footer} from "./skeleton/Footer/footer.tsx";
import {useTranslation} from "react-i18next";

// const Home = React.lazy(() => import('./pages/Home'));
// const AboutMe = React.lazy(() => import('./pages/About'));

function MainPage() {
    const {t, i18n} = useTranslation()

    useEffect(() => {
        console.log("Language Changed, rerendering")
    }, [i18n, t]);

    return (
        <Router>
            <Navbar />
                <main>
                    <Routes>
                        <Route
                            path="/"
                            element={<Home />}
                        />
                    </Routes>
                </main>
                <Footer />
        </Router>
    );
}

export default function WrappedMainPage() {
    return (
        <Suspense fallback={<Loader />}>
            <MainPage />
        </Suspense>
    )
}