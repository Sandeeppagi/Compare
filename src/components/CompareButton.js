import React from "react";

class CompareButton extends React.Component {
  render() {
    return (
      <div class="ui buttons">
        <button class="ui button">Reset</button>
        <div class="or"></div>
        <button class="ui positive button">Compare</button>
      </div>
    );
  }
}

export default CompareButton;
