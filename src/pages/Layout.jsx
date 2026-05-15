import { Outlet } from "react-router-dom"
import { NavigationMenu } from "../components/NavigationMenu/NavigationMenu"

export const Layout = () => {
return (
    <div>
        <NavigationMenu />
        <Outlet />
    </div>
  )}