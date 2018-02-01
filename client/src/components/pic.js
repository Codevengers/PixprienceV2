import React from "react";

class Pix extends React.Component {
  render() {
    return (
      <div>
        Hello {this.props.name}
      </div>
    );
  }
}

//ReactDOM.render(
//  <HelloMessage name="Nadia" />,
//  mountNode
//);

export default Pix
