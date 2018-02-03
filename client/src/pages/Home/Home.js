/////////////////////////////////////////////// /* Import Stock React Components */ ////////////////////////////////////////////////////////
import React, {Component} from "react";
/////////////////////////////////////////////// /* Components */ ////////////////////////////////////////////////////////
// import API from "../../utils/API"
import About from '../../components/About/About'

class Home extends Component {


  render() {
    return (
      <React.Fragment>
          <About />
        {/* Your Components Goes Here */}
      </React.Fragment>);
  } // End of Render
} // End of Class

export default Home;
