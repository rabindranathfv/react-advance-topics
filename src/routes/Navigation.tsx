import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import logo from '../logo.svg'
import { ShoppingPage } from './../2-component-patterns/pages/shoppingPage';

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink to="/home" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/shopping" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>shopping</NavLink>
                        </li>
                    </ul>
                </nav>


                <Routes>
                    <Route path="about" element={ <h1>About Page</h1> } />
                    <Route path="home" element={ <h1>Home Page</h1> } />
                    <Route path="shopping" element={ <ShoppingPage /> } />
                    
                    <Route path="/*" element={ <Navigate to="/home" replace /> } />
                </Routes>

            </div>
        </BrowserRouter>
    )
}
