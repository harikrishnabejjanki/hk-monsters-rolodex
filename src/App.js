import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import './App.css';
import HomePage from '../src/pages/homepage/homepage';
import SignInAndUpPage from '../src/pages/signin-up/signin-up';

import ShopPage from '../src/pages/shop/shop';
import Header from './components/header/header';
import { auth, createUserProfileDocument } from '../src/firebase/firebase_util';
import { setCurrentUser } from './redux/user/User_action';

class App extends React.Component {


  unSubscribeFromAuth = null;

  componentDidMount() {

    const { setCurrentUser } = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);


        userRef.onSnapshot(snapshot => {

          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });



      }
      setCurrentUser(userAuth);
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  render() {
    console.log('currentUser>',this.props.currentUser);
    
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/sigin" render={() => this.props.currentUser ? (<Redirect to="/" />) : (<SignInAndUpPage />)}/>
        </Switch>
        {/* <HomePage /> */}
      </div>
    );
  }

}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)
  )
});



export default connect(mapStateToProps, mapDispatchToProps)(App);
