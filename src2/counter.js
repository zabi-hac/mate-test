import React from 'react';

class Counter extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            count : 5,
        };
    }

    looper(){
        setTimeout(() => {
            this.setState( (prev, props)=>({count : prev.count+1}) );
        },1000);
    }
    render(){
        
        console.log('Rendering... '+this.state.count);
        this.looper();
        return(
            <div>
                <h3>hoi{this.state.count}</h3>
            </div>
        );
    }
}
export default Counter;