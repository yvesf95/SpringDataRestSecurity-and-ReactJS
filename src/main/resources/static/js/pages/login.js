import React from 'react';
import { Button, Checkbox, ControlLabel, Form, FormGroup, FormControl, Grid, Image } from 'react-bootstrap';

export default class Login extends React.Component{

    render(){
        console.log(this.props);
        return(
            <div className="login-container">
                <Grid>
                    <div className="login-card">
                        <div className="login-form">
                            <Form action="/">
                                <Image height="80" width="80" src="images/user-avatar.png" 
                                       className="center-block" circle/>
                                <hr/>
                                <h4 className="text-center">Log in with Your Account</h4>
                                <hr/>
                                <FormGroup>
                                    <ControlLabel srOnly>Username:</ControlLabel>
                                    <FormControl type="text" placeholder="Username"/>
                                </FormGroup>
                                <FormGroup>
                                    <ControlLabel srOnly>Password:</ControlLabel>
                                    <FormControl type="text" placeholder="Password"/>
                                </FormGroup>
                                <FormGroup>
                                    <Checkbox>Remember Me</Checkbox>
                                </FormGroup>
                                <Button type="submit" bsStyle="primary" block>Login</Button>
                            </Form>
                        </div>
                    </div>
                </Grid>
            </div>
        );
    }
}