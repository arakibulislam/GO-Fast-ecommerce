import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home'
import Login from './components/LogAndReg/Login';
import Registration from './components/LogAndReg/Registration';
import AuthProvider from './Contex/AuthProvider';
import PrivatRoute from './PrivateRoute/PrivatRoute';
import AddProducts from './components/Admin/AddProducts/AddProducts';
import Admin from './components/Admin/Admin/Admin';
import Products from './components/Products/Products';
import SingleProduct from './components/singleProduct/SingleProduct';
import Order from './components/Order/Order';
import UserOrder from './components/Home/UserOrder/UserOrder';
import MyOrder from './components/UserDash/MyOrder';
import HomeBlog from './components/Home/HomeBlog/HomeBlog';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Registration></Registration>
            </Route>
            <Route exact path="/blogs">
              <HomeBlog />
            </Route>
            <Route exact path="/products">
              <Products />
            </Route>
            <PrivatRoute exact path="/product/:shoeId">
              <SingleProduct />
            </PrivatRoute>
            <PrivatRoute exact path="/order/:orderId">
              <Order />
            </PrivatRoute>
            <PrivatRoute exact path="/userorder">
              <UserOrder />
            </PrivatRoute>
            <PrivatRoute path="/admin">
              <Admin></Admin>
            </PrivatRoute>
            <Route exact path="*">
              <NotFound />
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
