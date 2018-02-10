import React from "react";

export default class TimelineImage extends React.Component{

    render(){
        return(
        	<div className="col-md-4">
	          	<img src={this.props.base64_image} style={{width: 304, height: 228}}  alt="Image" />
	      	</div>
        );
    }
}

// export default TimelineImage;