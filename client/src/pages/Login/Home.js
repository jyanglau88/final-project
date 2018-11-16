import React, { Component } from 'react';
import App from '../../App';
import Nav from '../../components/Nav'

class Home extends Component {
  // calls the login method in authentication service
  login = () => {
    this.props.auth.login();
  }
  // calls the logout method in authentication service
  logout = () => {
    this.props.auth.logout();
  }
  render() {
    // calls the isAuthenticated method in authentication service
    const { isAuthenticated } = this.props.auth;
    return (
      <div>
        {
          isAuthenticated() &&
          <div className="#">

          <Nav />

            <App />
            <h5>
              {' '}
              <a className="btn btn-lg btn-outline-dark float-right bounceIn mr-3"
                style={{ cursor: 'pointer' }}
                onClick={this.logout}
              >
                Log Out🔒
              </a>
            </h5>
          </div>
        }
        {
          !isAuthenticated() && (
            <div className="#">
            <div className="jumbotron">
              <h1 className="display-4" >Welcome to Pill❤️Pals!</h1>
              <br></br>
              <h5 className="lead" >
                Your🕵️ go to website👨‍💻 for tracking📜 your pet's🐩 prescriptions!💊{' '}
                </h5>
                <br></br>
              <h5 className="lead" >To continue just click Log In📋 or Sign Up📝!</h5>
                <div className="#">
                <a className="btn btn-lg btn-outline-dark float-right bounceIn"
                  style={{ cursor: 'pointer' }}
                  onClick={this.login}
                >
                  Log In📋
                </a>
                </div>
                <div className="#">
                <a className="btn btn-lg btn-outline-dark  float-right bounceIn"
                  style={{ cursor: 'pointer' }}
                  onClick={this.login}
                >
                  Sign Up📝
                </a>
                </div>
                {' '}
              <br></br>
            </div>

            {/* Images at bottom of login page */}
            <a className="fixed-bottom fx-btm">
            <p className="fam-pet-pic float-left bounceIn"></p>
            <p className="fam-pet-pic4 float-right bounceIn"></p>
            <p className="fam-pet-pic3 center bounceIn"></p>
            </a>

            </div>
          )
        }
      </div>
      );
    }
  }

  export default Home;