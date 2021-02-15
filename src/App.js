import React from 'react';
import { HomeDefault } from './pages';
import Login from './pages/login';
import { Signup } from './pages/signUp';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './style/main.scss';
import { AuthContext, AuthProvider } from './provider/provider'
const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <HomeDefault />
                    </Route>
                    <Route path="/login" exact>
                        <Login />
                    </Route>
                    <Route path="/signup" exact>
                        <Signup />
                    </Route>
                </Switch>
            </Router>
        </AuthProvider>
    )
}

export default App;