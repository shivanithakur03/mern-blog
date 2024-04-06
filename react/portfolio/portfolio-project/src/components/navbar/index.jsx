import React from'react';
import {FaReact} from 'react-icons/fa';
import{Link }from 'react-router-dom'
const data=[
    {
    label:'Home',
    to:'/'
},
{
    label:'About',
    to:'/about'
},
{
    label:'Skills',
    to:'/skills'
},
{
    label:'Resume',
    to:'/resume'
},
{
    label:'Portfolio',
    to:'/portfolio'
},
{
    label:'contact',
    to:'/contact'
}
]

const Navbar=()=>{
    return(
        <div>
            <nav className="navbar">
                <div classNmae="navbar__container">
                    
                </div>
            </nav>

        </div>
    )
}
export default Navbar;
