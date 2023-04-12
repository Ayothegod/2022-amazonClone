import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home.jsx'
import Login from "./components/Login.jsx"
import Checkout from "./components/Checkout.jsx"
import Notfound from "./components/Notfound.jsx"
import {auth} from './Firebase'
import {useStateValue} from './StateProvider'
import {useEffect} from 'react'


function App() {
  const [{user}, dispatch] = useStateValue()

   // runs on load of the page on refresh based on the dependency
   useEffect(() => {
     const unSubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser){
        // user is logged in

        dispatch({
          type:"ADD_USER",
          user : authUser,
        })
      } else {
        // user is logged out
        dispatch({
          type:"ADD_USER",
          user:null,
        })
      }
    })

    return () => {
      // any cleanup
      unSubscribe()
    }
  }, [])

  console.log("user is ", user)


  return (
    <Router>
      <Routes>
        {/* localhost.com/ */}
        <Route path='/' element={<Home/>} />
        {/* localhost.com/checkout */}
        <Route path='/checkout' element={<Checkout/>}/>
        {/* localhost.com/login */}
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<Notfound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
