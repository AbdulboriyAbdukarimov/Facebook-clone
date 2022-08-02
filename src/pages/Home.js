import React from 'react'
import "./home.css"
import Feed from '../components/Feed/Feed'
import Header from '../components/header/Header'
import Sidebar from '../components/sidebar/Sidebar'
import Widgets from '../components/widgets/Widgets'
import Login from '../components/Login/Login'
import { useStateValue } from '../StateProvider'
import Chat from '../components/Chat/Chat'

const Home = () => {

  const [{ user }, dispatch] = useStateValue();

  return (
    <div className='home'>
      {!user ? ( 
        <Login/>
      ) : (
        <>
          <Header/>
          <div className="app__body">
            <Sidebar/>
            <Feed/>
            <Widgets/>
          </div>
          <Chat/>
        </>
      )}
    </div>
  )
}

export default Home
