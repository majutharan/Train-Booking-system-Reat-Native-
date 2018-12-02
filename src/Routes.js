import React, {Component} from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import List from './pages/List';
import Profile from './pages/Profile';
import Help from './pages/Help';
import Aboutus from './pages/Aboutus';
import AlertModel from './components/AlertModel';
import Loading from './components/Loading';
import ForgotPassword from './pages/ForgotPassword';
import TrainList from './pages/TrainList';
import SelectClass from './pages/SelectClass';
import Train from './pages/Train';
import Payment from './pages/Payment';


export default class Routes extends Component<{}> {
    render() {
        return(
            <Router>
            <Stack key="root" hideNavBar={true}>
            <Scene key="signup" component={Signup} title="Signup"  />
            <Scene key="login" component={Login} title="Login"   />
            <Scene key="home" component={Home} title="Home"  />
            <Scene key="list" component={List} title="List"  />
            <Scene key="profile" component={Profile} title="Profile"  />
            <Scene key="help" component={Help} title="Help&Support"  />
            <Scene key="aboutus" component={Aboutus} title="Aboutus"  />
            <Scene key="alert" component={AlertModel} title="Alert"  />
            <Scene key="forgotpassword" component={ForgotPassword} title="ForgotPassword"  />
            <Scene key="loading" component={Loading} title="Loading" initial={true} />
            <Scene key="trainlist" component={TrainList} title="TrainList"  />
            <Scene key="selectclass" component={SelectClass} title="SelectClass"  />
            <Scene key="train" component={Train} title="Train"  />
            <Scene key="payment" component={Payment} title="Payment"  />
             
            </Stack>
          </Router>
        )
    }
}