import React from "react";
// import PostList from './PostList';
import CompareButton from "./CompareButton";
import InputFields from "./InputFields";
import XMLParser from "react-xml-parser";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch(
      " http://cul.esla.internal.services.rccl.com/esl/search/rest/cruiseSearch?header.application=royalcaribbean.com&header.brand=R&header.domainId=1&header.language=en_US&criteria.office=LON&criteria.country=GBR&criteria.currency=GBP&criteria.channel=VP&criteria.bookingType=FIT&criteria.cruiseType.value=CO,CT&criteria.brand.value=R&qualifiers.priceScope=REQUESTED_AVAILABLE&qualifiers.searchScope=ALL&resultsPreference.groupBy=PACKAGE&resultsPreference.includeFacets=false&resultsPreference.includePrices=true&resultsPreference.includeResults=true&resultsPreference.pagination.count=10&resultsPreference.pagination.offset=0&resultsPreference.priceLevel.bestPricedCategory=true&resultsPreference.sortBy=PROMOTIONAL_DEALS&resultsPreference.sortOrder=ASCENDING&resultsPreference.strictSearch=true&criteria.packageId.value=AL07W294&criteria.sailingDate.date=2019-12-01",
      {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        headers: {
          Accept: "application/xml"
          // Accept: "application/json"
        }
      }
    )
      .then(res => res.text())
      .then(result => {
        console.log("result --", result);
        var xml = new XMLParser().parseFromString(result);
        console.log(xml);
        // console.log(xml.getElementsByTagName("host")[0].value);
      });
    // .then(
    //   result => {
    //     this.setState({
    //       isLoaded: true,
    //       items: result.items
    //     });
    //   },
    //   // Note: it's important to handle errors here
    //   // instead of a catch() block so that we don't swallow
    //   // exceptions from actual bugs in components.
    //   error => {
    //     this.setState({
    //       isLoaded: true,
    //       error
    //     });
    //   }
    // );
  }
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
        <InputFields />
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
