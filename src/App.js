import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Routes from './Routes';
import Header from './components/Header';
import Login from './pages/Login';

function App(props) {

  console.log(props.user);
  console.log(props.isLogued);

  return (
    <BrowserRouter>
      {props.isLogued === true &&
        <>
          <Header />
          <Routes />
        </>
        
      }
      
      {props.isLogued === false &&
        <Login />
      }
      
    </BrowserRouter>
  );
}

const stateToProps = (state) => {
  return {
    user: state.login.user,
    isLogued: state.login.isLogued
  }
}



export default connect(stateToProps)(App);
