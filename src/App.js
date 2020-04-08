import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import AuthPage from './pages/auth/auth.component';
import Header from './components/header/header.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

class App extends Component {

  constructor() {
    super()
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => console.log('onSnapshot state', this.state))
        })
      } else {
        this.setState({ currentUser: userAuth }) // why not just set to null?
      }

    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/login' component={AuthPage} />
          <Route path='/signin' component={AuthPage} />
        </Switch>
      </div>
    )
  }

}

export default App;