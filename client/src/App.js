import './App.css';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Home from './pages/home/Home';
import Product from './pages/product/Product';
import Products from './pages//products/Products';
import Layout from './Layout';

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element: <Home/>
        },
        {
          path:"/products/:id",
          element: <Products/>
        },
        {
          path:"/product/:id",
          element: <Product/>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
