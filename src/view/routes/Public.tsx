// Core
import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Pages
import Register from '../pages/Register';

export const Public: FC = () => {
    return (
        <Routes>
            <Route
                element = { <Register /> }
                path = '/'
            />
            <Route
                element = {
                    <Navigate
                        replace
                        to = '/'
                    />
                }
                path = '*'
            />
        </Routes>
    );
};
