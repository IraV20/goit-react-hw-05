import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css"
import clsx from "clsx";

const getClassLink = ({isActive}) => clsx(css.link, isActive && css.isActive );

export default function Navigation(){
    return(
       <nav>
            <ul className={css.navList}> 
               <li><NavLink className={getClassLink} to="/">Home</NavLink></li>
               <li><NavLink className={getClassLink} to="/movies">Movies</NavLink></li>
            </ul>
        </nav> 
        
    )
}