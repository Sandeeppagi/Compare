import React from "react";

class CompareButton extends React.Component {
  render() {
    return (
      <div class="ui grid">
        <div class="three column row">
          <div class="column">
            <button class="ui right labeled icon button">
              <i class="right arrow icon"></i>
              Compare
            </button>
          </div>
          <div class="column"></div>
          <div class="column"></div>
        </div>
      </div>
    );
  }
}

export default CompareButton;
