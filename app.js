import "./styles.css";
import Product from "./Product";
import CartPage from './cart'
import { Router ,Route, Link, Switch} from 'react-router-dom'

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
      <Product />
  
   <Route path="/cart" exacat>
    <CartPage/></Route>
    </Switch> 
     </Router>
    </div>
  );
}
