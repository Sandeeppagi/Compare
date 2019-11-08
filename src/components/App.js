import React from "react";
// import PostList from './PostList';
import CompareButton from "./CompareButton";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <div class="ui horizontal divider"></div>
        <div class="ui left icon action input">
          <div className="ui container">
            <h2 class="ui header">
              <i class="settings icon"></i>
              <div class="content">
                RCCL in house Comparing api utility
                <div class="sub header">Compare old and new API</div>
              </div>
            </h2>
          </div>
        </div>
        <div class="ui horizontal divider"></div>
        <div class="ui horizontal divider"></div>
        <CompareButton />
        <div class="ui horizontal divider"></div>
        <div class="ui horizontal divider"></div>
        <div class="ui segment">
          <div class="ui two column very relaxed grid">
            <div class="column">
              <p>
                ESL service output with new flag turned on to use VPS Pricing
                Service
              </p>
              <p>"shipCode":"AL"</p>
              <p>"sailDate": 20210425</p>
              <p>"packageCode": "AL07E234"</p>
              <p>"officeCode": "MIA"</p>
              <p>"currencyCode":"USD"</p>
              <p>"bookingChannel": "AC"</p>
              <p>"bookingType": "I"</p>
              <p>"occupancy": 4</p>
            </div>
            <div class="column">
              <p>
                ESL service output with new flag turned off to use Cache Grid
              </p>
              <p>"shipCode":"CA"</p>
              <p>"sailDate": 20190101</p>
              <p>"packageCode": "SANDY123"</p>
              <p>"officeCode": "CAL"</p>
              <p>"currencyCode":"USD"</p>
              <p>"bookingChannel": "AC"</p>
              <p>"bookingType": "I"</p>
              <p>"occupancy": 20</p>
            </div>
          </div>
          <div class="ui vertical divider">V1-V2</div>
        </div>
        <div class="ui center aligned basic segment"></div>
      </div>
    );
  }
}

export default App;
