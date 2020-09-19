import React from 'react';  
import './style.css'

class Popup extends React.Component {  
  render() {  
return (  
<div className='popup'>  
<div className='popup\_inner'>  
<h1>Here are the shift options scheduled for today.</h1>  
<p>9am to 2pm - Interpretation</p>
<p>12pm to 5pm - Interpretation</p>
<p> 8:30am to 1pm - Special Events: Sea Otter Awareness</p>
<button onClick={this.props.closePopup}>OK</button>   
</div>  
</div>  
);  
}  
}  

export default Popup;