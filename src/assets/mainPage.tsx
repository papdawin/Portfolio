import React, { useState, useEffect, Suspense } from 'react';
import {useTranslation} from 'react-i18next';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    // Redirect,
} from 'react-router-dom';
// Helper-functions

// Components
import Navbar from "./skeleton/Navbar/navbar.tsx";
import Loader from "./skeleton/loader.tsx";

import Home from "./content/Home/home.tsx";

// const Home = React.lazy(() => import('./pages/Home'));
// const AboutMe = React.lazy(() => import('./pages/About'));

function MainPage() {

    return (
        <Router>
            <Navbar />
                <main>
                    <Routes>
                        <Route
                            path="/"
                            element={<Home />}
                        />
                        {/*<Route*/}
                        {/*    path="/about"*/}
                        {/*    render={(props) => <AboutMe {...props} data={allData} />}*/}
                        {/*/>*/}
                        {/*/!* Redirect *!/*/}
                        {/*<Route exact path="/">*/}
                        {/*    <Redirect to="/home" />*/}
                        {/*</Route>*/}
                    </Routes>
                </main>
                {/*<Footer data={allData} />*/}
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