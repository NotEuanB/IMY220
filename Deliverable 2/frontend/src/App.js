import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Playlist from './pages/Playlist';
import Profile from './pages/Profile';
import Splash from './pages/Splash';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Splash />,
        errorElement: <div>404 Not Found</div>
    },
    {
        path: "/profile",
        element: <Profile />,
        errorElement: <div>404 Not Found</div>
    },
    {
        path: "/playlist",
        element: <Playlist />,
        errorElement: <div>404 Not Found</div>
    },
    {
        path: "/home",
        element: <Home />,
        errorElement: <div>404 Not Found</div>
    }
]);

class App extends React.Component {
    render() {
        console.log("App here");
        return (
            <RouterProvider router={router}>
            </RouterProvider>
                
        );
    }
}

export default App;