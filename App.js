import React, { useState, useEffect } from 'react'
import './App.css'
import Main from './components/main/main'
import Login from './components/login/Login'
import NavBar from './components/navBar/navbar'
import Right from './components/right/right'
import Profile from './components/profile/Profile'
import MemeCompetion from './components/meme-competion/MemeCompetion'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from 'react-router-dom'
import UAuth from '@uauth/js'

const Home = ({ unstoppableUsername, avatar, userLogOut, walletAddress }) => {
  const history = useHistory()

  useEffect(() => {
    if (!unstoppableUsername) {
      history.push('/login')
    }
  }, [unstoppableUsername, history])
  return (
    <div id="container">
      <div id="nav-box">
        <NavBar
          avatar={avatar}
          unstoppableUsername={unstoppableUsername}
          walletAddress={walletAddress}
        />
      </div>
      <Main
        avatar={avatar}
        unstoppableUsername={unstoppableUsername}
        userLogOut={userLogOut}
        walletAddress={walletAddress}
      />
    </div>
  )
}

const ProfileComponent = ({ avatar, unstoppableUsername }) => {
  return (
    <div id="container">
      <div id="nav-box">
        <NavBar avatar={avatar} unstoppableUsername={unstoppableUsername} />
      </div>
      <Profile />
    </div>
  )
}

const MemeCompetionComponent = () => {
  return (
    <div id="container">
      <div id="nav-box">
        <NavBar />
      </div>
      <MemeCompetion />
    </div>
  )
}

const App = () => {
  const [avatar, setAvatar] = useState('')
  const [walletAddress, setWalletAddress] = useState('')
  const [unstoppableUsername, setUnstoppableUsername] = useState('')

  useEffect(() => {
    const getUser = localStorage.getItem('user')
    const getWAddress = localStorage.getItem('walletAddress')
    console.log('get getUser,getWAddress', getUser, getWAddress)
    setUnstoppableUsername(getUser)
    setWalletAddress(getWAddress)
  }, [])

  const unstoppableDomaiInstance = new UAuth({
    clientID: '97347d9d-eb53-46c6-ac5c-a8a2f9de6ae5',
    redirectUri: 'https://meme-dao.netlify.app/',
    scope: 'openid wallet',
  })

  const unstoppableDomainLogin = async () => {
    const user = await unstoppableDomaiInstance.loginWithPopup()
    if (user) {
      localStorage.setItem('user', user.idToken.sub)
      localStorage.setItem('walletAddress', user.idToken.wallet_address)
      setUnstoppableUsername(user.idToken.sub)
      setWalletAddress(user.idToken.wallet_address)
    }
  }
  const userLogOut = () => {
    localStorage.removeItem('user')
    setUnstoppableUsername('')
    setWalletAddress('')
  }

  return (
    <Router>
      {unstoppableUsername ? (
        <Switch>
          <Route exact path="/">
            <Home
              avatar={avatar}
              unstoppableUsername={unstoppableUsername}
              walletAddress={walletAddress}
              userLogOut={userLogOut}
            />
          </Route>
          <Route exact path="/follow-nfts">
            <ProfileComponent
              avatar={avatar}
              unstoppableUsername={unstoppableUsername}
            />
          </Route>
          <Route exact path="/competion">
            <MemeCompetionComponent />
          </Route>
        </Switch>
      ) : (
        <Route>
          <Login
            setAvatar={setAvatar}
            avatar={avatar}
            unstoppableDomainLogin={unstoppableDomainLogin}
            userLogOut={userLogOut}
          />
        </Route>
      )}
    </Router>
  )
}

export default App
