import { Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import CartDetails from "../cart/CartDetails";
import NotFound from "../common/NotFound";
import Navi from "../navi/Navi";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import Dashboard from "./Dashboard";

function App() {
  return (
    
    <Container>
      <Navi />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/product"  component={Dashboard} />
        <Route path="/cart"  component={CartDetails} />
        <Route path="/saveproduct/:productId"  component={AddOrUpdateProduct} />
        <Route path="/saveproduct"  component={AddOrUpdateProduct} />
        <Route component={NotFound} />
      </Switch>
     
    </Container>
    
  );
}

export default App;
