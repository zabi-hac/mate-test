import React, {Component} from 'react';

class Welcome extends Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <div>
                <h3>Welcome  {this.props.name}</h3>
            </div>
        );
    }
}
export default Welcome;