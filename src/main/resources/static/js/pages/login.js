import React from 'react';

import Nav from '../layout/nav';

export default class Login extends React.Component{

    render(){
        console.log(this.props);
        return(
            <div className="login-container">
                <Nav location={this.props.location} />
                <div className="container-fluid">
                    <div className="row">
                        <div className="login-card center-block">
                            <div className="login-form">
                                <form role="form">
                                    <div className="form-group">
                                        <img src="images/user-avatar.png" width="80" height="80"
                                             className="img-responsive img-circle center-block"/>
                                    </div>
                                    <hr/>
                                    <h4 className="text-center">Log in with Your Account</h4>
                                    <hr/>
                                    <div className="form-group">
                                        <label htmlFor="username" className="sr-only">Username:</label>
                                        <input type="text" id="username" className="form-control text-center"
                                               name="username" placeholder="Username"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password" className="sr-only">Password:</label>
                                        <input type="password" id="password" className="form-control text-center"
                                               name="password" placeholder="Password"/>
                                    </div>
                                    <div className="form-group">
                                        <button type="button" className="btn btn-primary btn-block">Login</button>
                                    </div>
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox" className="" /> Check me out
                                        </label>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}