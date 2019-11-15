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

  componentDidMount() {
    fetch(
      //"http://mockbin.org/request
      " http://cul.esla.internal.services.rccl.com/esl/search/rest/cruiseSearch?header.application=royalcaribbean.com&header.brand=R&header.domainId=1&header.language=en_US&criteria.office=LON&criteria.country=GBR&criteria.currency=GBP&criteria.channel=VP&criteria.bookingType=FIT&criteria.cruiseType.value=CO,CT&criteria.brand.value=R&qualifiers.priceScope=REQUESTED_AVAILABLE&qualifiers.searchScope=ALL&resultsPreference.groupBy=PACKAGE&resultsPreference.includeFacets=false&resultsPreference.includePrices=true&resultsPreference.includeResults=true&resultsPreference.pagination.count=10&resultsPreference.pagination.offset=0&resultsPreference.priceLevel.bestPricedCategory=true&resultsPreference.sortBy=PROMOTIONAL_DEALS&resultsPreference.sortOrder=ASCENDING&resultsPreference.strictSearch=true&criteria.packageId.value=AL07W294&criteria.sailingDate.date=2019-12-01",
      {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        headers: {
          //Accept: "application/xml"
          Accept: "application/json"
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
