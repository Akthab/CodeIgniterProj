import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import MinimalLayout from 'layout/MinimalLayout';
// import AllPostsController from 'pages/allPosts/controller/AllPostsController';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - utilities
const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));
const PostPages = Loadable(lazy(() => import('pages/post/controller/PostPageController')));
const AllPostsPage = Loadable(lazy(() => import('pages/allPosts/controller/AllPostsController')));
const LoginView = Loadable(lazy(() => import('pages/authentication/Login/view/LoginView')));
const RegisterView = Loadable(lazy(() => import('pages/authentication/Register/view/RegisterView')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/login',
    // element: <MinimalLayout />,
    children: [
        {
            path: '/login',
            element: <LoginView />
        },
        {
            path: 'register',
            element: <RegisterView />
        }

        // {
        //     path: 'dashboard',
        //     children: [
        //         {
        //             path: 'default',
        //             element: <DashboardDefault />
        //         }
        //     ]
        // },
        // {
        //     path: 'sample-page',
        //     element: <PostPages />
        // },
        // {
        //     path: 'shadow',
        //     element: <AllPostsPage />
        // },
        // {
        //     path: 'typography',
        //     element: <Typography />
        // },
        // {
        //     path: 'icons/ant',
        //     element: <AntIcons />
        // }
    ]
};

export default MainRoutes;
