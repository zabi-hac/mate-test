import React from 'react';
import './css/contact.css';
function Con(props){
    return(
        <div className='c_form'>
            <h1 style={props.sp_style} > {props.name}  contact form </h1>
            Name:<input type="text" name="name" /><br/>
            Address:<textarea cols='10' rows='3' ></textarea>
        </div>
    );
}
export default Con;