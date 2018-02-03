import React from "react";



class Team extends React.Component{
    render(){
        return(
           <div className="team-member-container">
                <p className="team-member-name center-aligned">{props.name}</p>
                <div className="img-container">
                    <img className="responsive-img" alt={props.name} src={props.image} />
                </div>
                <p className="role center-aligned">{props.role}</p>
           </div> 
        );
    }
}

export default Team;
