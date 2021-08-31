import { Navigate, Outlet } from 'react-router-dom';

import { lazyImport } from '@/utils/lazyImport';

const App = () => {
    return (
        <div></div>
    );
};

export const protectedRoutes = [
    {
        path: '/app',
        element: <App />
    },
];
