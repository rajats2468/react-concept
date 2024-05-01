
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Axios, { loader as AxiosLoader } from './Pages/Axios';
import Counter from './Pages/Counter';
import Home from './components/Home';
import Root from './components/Root';
import ContextExample from './Pages/ContextExample';
import ReduxExample from './Pages/ReduxExample';
import RefExample from './Pages/RefExample';
import Memo from './Pages/Memo';
import Form from './Pages/Form';
const router = createBrowserRouter([
  {
    path: "/", element: <Root />, children: [
      { index: true, element: <Home /> },
      { path: "/counter", element: <Counter /> },
      { path: "/axios", element: <Axios />,loader:AxiosLoader },
      {path:"/context",element:<ContextExample/>},
      {path:"/redux",element:<ReduxExample/>},
      {path:"/ref",element:<RefExample/>},
      {path:"/memo",element:<Memo/>},
      {path:"/form",element:<Form/>},

    ]
  },

])
function App() {
  return (
    // <div className="App">
    //   <Counter/>
    //   <Axios/>
    // </div>
    <RouterProvider router={router} />
  );
}

export default App;
