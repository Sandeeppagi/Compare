import React from "react";
import XMLParser from "react-xml-parser";
import Table from "./Table";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  render() {
    return (
      <div className="ui container">
        <div className="ui horizontal divider"></div>
        <div className="ui left icon action input">
          <div className="ui container">
            <h2 className="ui header">
              <i className="settings icon"></i>
              <div className="content">
                RCCL in house Comparing api utility
                <div className="sub header">Compare old and new API</div>
              </div>
            </h2>
          </div>
        </div>
        <div className="ui horizontal divider"></div>
        <div className="ui horizontal divider"></div>
        <Table />
        <div className="ui horizontal divider"></div>
        <div className="ui horizontal divider"></div>
        <div className="ui horizontal divider"></div>
        <div className="ui center aligned basic segment"></div>
      </div>
    );
  }
}

export default App;
