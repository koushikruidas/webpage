import { Component } from 'react';
import {GoogleLogin, GoogleLogout} from 'react-google-login';


class login extends Component {

    constructor(){
        super();
        this.state = {
            name: "",
            email: "",
            imgSrc: "",
            isLogged: false
        }

        this.responseGoogle = this.responseGoogle.bind(this);
    }

    responseGoogle = (response) => {
        console.log(response);
        this.setState({
            ...this.state,
            isLogged: true,
            name: response.Is.sd,
            imgSrc:response.profileObj.imageUrl
        })
    }

    logout = () =>{
        alert("Logout Successfully");
            this.setState({
                ...this.state,
                isLogged: false
            }
        )
    }
    
    render() {
        return(
            <div className="loginForm">
                <div> {this.state.isLogged ? null :
                    <GoogleLogin 
                        clientId="150122835088-1nf7nbhtjp3qb7osrl0c36fg4bleeh0d.apps.googleusercontent.com"
                        buttonText="Login with Google"
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle}
                    />}
                </div>
                <div> {this.state.isLogged ? <div className="onLogin">
                        <p>Welcome {this.state.name}</p> 
                        <img src={this.state.imgSrc} alt="User" width="200" height="300"></img>
                        <p></p>
                        <GoogleLogout
                            clientId="150122835088-1nf7nbhtjp3qb7osrl0c36fg4bleeh0d.apps.googleusercontent.com"
                            buttonText="Logout from Google"
                            onLogoutSuccess={this.logout} 
                        />
                    </div>
                    : null}
                </div>
            </div>
        );
    }
}

export default login;