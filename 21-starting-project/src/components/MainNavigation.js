import {NavLink} from "react-router-dom"

import classes from "./MainNavigation.module.css"

const MainNavigation = ()=>{
    return <header className={classes.header}>
    <nav>
        <ul className={classes.list}>
            <li>
                <p> <NavLink to="/" className={({isActive})=>isActive ? classes.active : undefined} end>Home</NavLink> </p>
            </li>
            <li>
                <p><NavLink to="/products" className={({isActive})=>isActive ? classes.active : undefined}>Products</NavLink></p>
            </li>
           
        </ul>
    </nav>
    </header>
}

export default MainNavigation;