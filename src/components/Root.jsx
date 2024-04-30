import { Outlet } from "react-router";
import MainNavigation from "./MainNavigation";


export default function Root() {

    return (
        <div>
            <MainNavigation />
            <main>
                <Outlet />
            </main>

        </div>
    )
}