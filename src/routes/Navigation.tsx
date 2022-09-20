import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';



import { IRoutes, routes } from './routes';

import logo from '../logo.svg'

export const Navigation = () => {
    return (
        <Suspense fallback={<span>Loading</span>}>
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
        </Suspense>

    )
}
