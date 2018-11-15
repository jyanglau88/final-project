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
            <div className="jumbotron">
              <h5>Welcome to Pill❤️Pals!</h5>
              <h5>
                Your🕵️ go to website👨‍💻 for tracking📜 your pet's🐩 prescriptions!💊{' '}
                </h5>
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

              <h5>Please click Log In📋 or Sign Up📝 to continue.</h5>
            </div>
          )
        }
      </div>
      );
    }
  }

  export default Home;