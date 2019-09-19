import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import HomePage from '../src/pages/homepage/homepage';
import signInAndUpPage from '../src/pages/signin-up/signin-up';
 
import ShopPage from '../src/pages/shop/shop';
import Header from './components/header/header';
import { auth, createUserProfileDocument } from '../src/firebase/firebase_util';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        

        userRef.onSnapshot(snapshot => {

          this.setState({
            currentUser: snapshot.id,
            ...snapshot.data()
          }, ()=> {
            console.log('App.js from firestore',this.state);
          });


        });

       

      }
      this.setState({
        currentUser: userAuth
      });
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/sigin" component={signInAndUpPage} />
        </Switch>
        {/* <HomePage /> */}
      </div>
    );
  }

}

export default App;
