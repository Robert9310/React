import React from 'react';


class Login extends React.Component{

    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        const {name, value } = e.target;
        this.setState({
            [name]:value,
        })
        console.log(this.state);
    }

    handleSubmit(event){
        alert('Se ha enviado información del usuario \n Username: '+this.state.username+'\n Password: '+this.state.password);
        event.preventDefault();
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input 
                        className="form-group"
                        name="username" 
                        id="username"
                        type="text" 
                        value={this.state.username} 
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label> 
                    <input 
                        className="form-group"
                        name="password" 
                        id="password"
                        type="text" 
                        value={this.state.password} 
                        onChange={this.handleChange}
                    />
                </div>

                <input className="btn btn-primary" type="submit" value="Submit"/>
            </form>
        );
    }
}

export default Login;