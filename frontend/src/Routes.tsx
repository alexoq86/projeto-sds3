import Dashboard from "Pages/Dashboard/Index";
import Home from "Pages/Home/Index";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>

            </Switch>

        </BrowserRouter>
    );
}

export default Routes;