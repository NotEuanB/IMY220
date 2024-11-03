import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.js';
import Posts from './pages/Posts.js';

const router = createBrowserRouter([{
    path: "/",
    element: <Home />
},
{
    path: "/posts",
    element: <Posts />
}]);

class App extends React.Component {
    render() {
        return (
            <RouterProvider router={router}>

            </RouterProvider>
        );
    }
}

export default App;