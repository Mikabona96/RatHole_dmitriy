// Core
import React, { FC, Suspense, useEffect } from 'react';

// Routes
import { Public } from './Public';
import { Private } from './Private';

// Bus
import { useTogglersRedux } from '../../bus/client/togglers';

// Elements
import { Spinner } from '../elements';
import { useUser } from '../../bus/user';

export const Routes: FC = () => {
    const { togglersRedux: { isLoggedIn }} = useTogglersRedux();
    const { refreshUser } = useUser();

    useEffect(() => {
        console.log('REFRESH!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        refreshUser();
    }, []);

    return (
        <Suspense fallback = { <Spinner /> }>
            {
                isLoggedIn
                    ? <Private />
                    : <Public />
            }
        </Suspense>
    );
};
