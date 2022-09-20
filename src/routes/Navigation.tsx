import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

// import { LazyPage1 } from '../1-lazyload/pages/LazyPage1';
// import { LazyPage2 } from './../1-lazyload/pages/LazyPage2';
// import { LazyPage3 } from './../1-lazyload/pages/LazyPage3';

import { IRoutes, routes } from './routes';

import logo from '../logo.svg'

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="React Logo" />
                    <ul>

                        { routes.map( ({to, name}: IRoutes ) => {
                            return (
                            <li key={to}>
                                <NavLink  to={to} className={ ({ isActive }) => isActive ? 'nav-active' : '' }>{name}</NavLink>
                            </li>
                            )
                        })

                        }
                        {/* <li>
                            <NavLink to="/lazy1" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/lazy2" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/lazy3" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Users</NavLink>
                        </li> */}
                    </ul>
                </nav>


                <Routes>
                    { routes.map(  ({ path, Component}: IRoutes ) => {
                       return ( <Route key={path} path={path} element={ <Component /> } /> )
                    })
                    }
                    <Route path="/*" element={ <Navigate to={routes[0].to} replace /> } />
                </Routes>

            </div>
        </BrowserRouter>
    )
}
