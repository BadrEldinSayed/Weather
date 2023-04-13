import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/Home";
import Layout from "./Layout/Layout";

function App() {

  let routers = createBrowserRouter([
    {path: '/', element: <Layout/>, children:[
      {index: true, element: <Home/>}
    ]}
  ])

  return <RouterProvider router={routers}/>
}

export default App;
