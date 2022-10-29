import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { HomePage } from "../HomePages/HomePages";

export const Layout = () => {
    return <main>
        <HomePage />
        <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
        </Suspense>
    </main>
}