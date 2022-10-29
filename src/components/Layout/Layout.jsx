import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { HomePage } from "../HomePage/HomePage";

export const Layout = () => {
    return <div>
        <HomePage />
        <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
        </Suspense>
    </div>
}