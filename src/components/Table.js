import React from "react";
import { Input, Form } from "semantic-ui-react";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Office: "MIA",
      Country: "USA",
      Currency: "USD",
      Channel: "VP",
      booking_type: "FTI",
      Package: "AL07E207",
      Saildate: "2020-01-05",
      error: null,
      taxesAndFees: "",
      subTypeDeluxe: "",
      TypeDeluxe: "",
      idDeluxe: "",
      descriptionDeluxe: "",
      refundableTypeCodeDeluxe: "",
      qualifiedDeluxe: "",
      valueAddamountDeluxe: "",
      discountDeluxe: "",
      originalAmountDeluxe: "",
      netAmountDeluxe: "",
      priceTypeDeluxe: "",
      categoryDeluxe: "",
      cabinTypeDeluxe: "",
      cabinClassDeluxe: "",
      typeDeluxe1: "",
      descriptionDeluxe2: "",
      subTypeBalcony: "",
      TypeBalcony: "",
      idBalcony: "",
      descriptionBalcony: "",
      refundableTypeCodeBalcony: "",
      qualifiedBalcony: "",
      valueAddamountBalcony: "",
      discountBalcony: "",
      originalAmountBalcony: "",
      netAmountBalcony: "",
      priceTypeBalcony: "",
      categoryBalcony: "",
      cabinTypeBalcony: "",
      cabinClassBalcony: "",
      typeBalcony1: "",
      descriptionBalcony2: "",
      subTypeOutside: "",
      TypeOutside: "",
      idOutside: "",
      descriptionOutside: "",
      refundableTypeCodeOutside: "",
      qualifiedOutside: "",
      valueAddamountOutside: "",
      discountOutside: "",
      originalAmountOutside: "",
      netAmountOutside: "",
      priceTypeOutside: "",
      categoryOutside: "",
      cabinTypeOutside: "",
      cabinClassOutside: "",
      typeOutside1: "",
      descriptionOutside2: "",
      subTypeInterior: "",
      TypeInterior: "",
      idInterior: "",
      descriptionInterior: "",
      refundableTypeCodeInterior: "",
      qualifiedInterior: "",
      valueAddamountInterior: "",
      discountInterior: "",
      originalAmountInterior: "",
      netAmountInterior: "",
      priceTypeInterior: "",
      categoryInterior: "",
      cabinTypeInterior: "",
      cabinClassInterior: "",
      typeInterior1: "",
      descriptionInterior2: ""
    };
  }

  handleInput = event => {
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  };

  mySubmitHandler = event => {
    event.preventDefault();
    const baseURL =
      "http://eslaservicestst01.rccl.com:13030/esl/search/rest/cruiseSearch?header.application=royalcaribbean.com&header.brand=R&header.domainId=1&header.language=en_US" +
      "&criteria.office=" +
      this.state.Office +
      "&criteria.country=" +
      this.state.Country +
      "&criteria.currency=" +
      this.state.Country +
      "&criteria.channel=" +
      this.state.Country +
      "&criteria.bookingType=" +
      this.state.Country +
      "&criteria.cruiseType.value=CO,CT&criteria.brand.value=R&qualifiers.priceScope=REQUESTED_AVAILABLE&qualifiers.searchScope=ALL&resultsPreference.groupBy=PACKAGE&resultsPreference.includeFacets=false&resultsPreference.includePrices=true&resultsPreference.includeResults=true&resultsPreference.pagination.count=10&resultsPreference.pagination.offset=0&resultsPreference.priceLevel.bestPricedCategory=true&resultsPreference.sortBy=PROMOTIONAL_DEALS&resultsPreference.sortOrder=ASCENDING&resultsPreference.strictSearch=true" +
      "&criteria.packageId.value=" +
      this.state.Country +
      "&criteria.sailingDate.date=" +
      this.state.Country;

    alert("You are submitting " + baseURL);
    fetch(
      baseURL,
      // "http://eslaservicestst01.rccl.com:13030/esl/search/rest/cruiseSearch?header.application=royalcaribbean.com&header.brand=R&header.domainId=1&header.language=en_US&criteria.office=MIA&criteria.country=USA&criteria.currency=USD&criteria.channel=VP&criteria.bookingType=FIT&criteria.cruiseType.value=CO,CT&criteria.brand.value=R&qualifiers.priceScope=REQUESTED_AVAILABLE&qualifiers.searchScope=ALL&resultsPreference.groupBy=PACKAGE&resultsPreference.includeFacets=false&resultsPreference.includePrices=true&resultsPreference.includeResults=true&resultsPreference.pagination.count=10&resultsPreference.pagination.offset=0&resultsPreference.priceLevel.bestPricedCategory=true&resultsPreference.sortBy=PROMOTIONAL_DEALS&resultsPreference.sortOrder=ASCENDING&resultsPreference.strictSearch=true&criteria.packageId.value=AL07E207&criteria.sailingDate.date=2020-01-05",
      {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        headers: {
          //Accept: "application/xml"
          Accept: "application/json"
        }
      }
    )
      .then(res => res.json())
      .then(result => {
        console.log("result --", result);
        //var xml = new XMLParser().parseFromString(result);
        //console.log(xml);
        //console.log(xml.getElementsByTagName("host")[0].value);
        return result;
      })
      .then(
        result => {
          const promotionForDeluxeClass =
            result.resultsByPackage.packageSummaryWithClassLevelPricing[0]
              .cabinClassPriceBySailing[0].cabinClassPricing[0].price[0]
              .promotion;
          const averageGuestPriceDeluxe =
            result.resultsByPackage.packageSummaryWithClassLevelPricing[0]
              .cabinClassPriceBySailing[0].cabinClassPricing[0].price[0]
              .averageGuestPrice;

          const valueAddamountappliedDeluxe =
            result.resultsByPackage.packageSummaryWithClassLevelPricing[0]
              .cabinClassPriceBySailing[0].cabinClassPricing[0].price[0]
              .averageGuestPrice.valueAdd;

          const discountappliedDeluxe =
            result.resultsByPackage.packageSummaryWithClassLevelPricing[0]
              .cabinClassPriceBySailing[0].cabinClassPricing[0].price[0]
              .averageGuestPrice.discount;

          const priceTypeDeluxe =
            result.resultsByPackage.packageSummaryWithClassLevelPricing[0]
              .cabinClassPriceBySailing[0].cabinClassPricing[0].price[0];

          const deluxeClass =
            result.resultsByPackage.packageSummaryWithClassLevelPricing[0]
              .cabinClassPriceBySailing[0].cabinClassPricing[0];

          const promotionForBalcony =
            result.resultsByPackage.packageSummaryWithClassLevelPricing[0]
              .cabinClassPriceBySailing[0].cabinClassPricing[1].price[0]
              .promotion;
          const averageGuestPriceBalcony =
            result.resultsByPackage.packageSummaryWithClassLevelPricing[0]
              .cabinClassPriceBySailing[0].cabinClassPricing[1].price[0]
              .averageGuestPrice;

          const valueAddamountappliedBalcony =
            result.resultsByPackage.packageSummaryWithClassLevelPricing[0]
              .cabinClassPriceBySailing[0].cabinClassPricing[1].price[0]
              .averageGuestPrice.valueAdd;

          const discountappliedBalcony =
            result.resultsByPackage.packageSummaryWithClassLevelPricing[0]
              .cabinClassPriceBySailing[0].cabinClassPricing[1].price[0]
              .averageGuestPrice.discount;

          const priceTypeBalcony =
            result.resultsByPackage.packageSummaryWithClassLevelPricing[0]
              .cabinClassPriceBySailing[0].cabinClassPricing[1].price[0];

          const balconyClass =
            result.resultsByPackage.packageSummaryWithClassLevelPricing[0]
              .cabinClassPriceBySailing[0].cabinClassPricing[1];

          const promotionForOutside =
            result.resultsByPackage.packageSummaryWithClassLevelPricing[0]
              .cabinClassPriceBySailing[0].cabinClassPricing[2].price[0]
              .promotion;
          const averageGuestPriceOutside =
            result.resultsByPackage.packageSummaryWithClassLevelPricing[0]
              .cabinClassPriceBySailing[0].cabinClassPricing[2].price[0]
              .averageGuestPrice;

          const valueAddamountappliedOutside =
            result.resultsByPackage.packageSummaryWithClassLevelPricing[0]
              .cabinClassPriceBySailing[0].cabinClassPricing[2].price[0]
              .averageGuestPrice.valueAdd;

          const discountappliedOutside =
            result.resultsByPackage.packageSummaryWithClassLevelPricing[0]
              .cabinClassPriceBySailing[0].cabinClassPricing[2].price[0]
              .averageGuestPrice.discount;

          const priceTypeOutside =
            result.resultsByPackage.packageSummaryWithClassLevelPricing[0]
              .cabinClassPriceBySailing[0].cabinClassPricing[2].price[0];

          const outsideClass =
            result.resultsByPackage.packageSummaryWithClassLevelPricing[0]
              .cabinClassPriceBySailing[0].cabinClassPricing[2];

          const promotionForInterior =
            result.resultsByPackage.packageSummaryWithClassLevelPricing[0]
              .cabinClassPriceBySailing[0].cabinClassPricing[3].price[0]
              .promotion;
          const averageGuestPriceInterior =
            result.resultsByPackage.packageSummaryWithClassLevelPricing[0]
              .cabinClassPriceBySailing[0].cabinClassPricing[3].price[0]
              .averageGuestPrice;

          const valueAddamountappliedInterior =
            result.resultsByPackage.packageSummaryWithClassLevelPricing[0]
              .cabinClassPriceBySailing[0].cabinClassPricing[3].price[0]
              .averageGuestPrice.valueAdd;

          const discountappliedInterior =
            result.resultsByPackage.packageSummaryWithClassLevelPricing[0]
              .cabinClassPriceBySailing[0].cabinClassPricing[3].price[0]
              .averageGuestPrice.discount;

          const priceTypeInterior =
            result.resultsByPackage.packageSummaryWithClassLevelPricing[0]
              .cabinClassPriceBySailing[0].cabinClassPricing[3].price[0];

          const interiorClass =
            result.resultsByPackage.packageSummaryWithClassLevelPricing[0]
              .cabinClassPriceBySailing[0].cabinClassPricing[3];

          console.log("testing --- ", promotionForDeluxeClass);
          this.setState({
            taxesAndFees:
              result.resultsByPackage.packageSummaryWithClassLevelPricing[0]
                .cabinClassPriceBySailing[0].priceComponents.taxesAndFees
                .amount,
            subTypeDeluxe: promotionForDeluxeClass.subType,
            TypeDeluxe: promotionForDeluxeClass.type,
            idDeluxe: promotionForDeluxeClass.id,
            descriptionDeluxe: promotionForDeluxeClass.description,
            refundableTypeCodeDeluxe:
              promotionForDeluxeClass.refundableTypeCode,
            amount: valueAddamountappliedDeluxe.amount,
            discountDeluxe: discountappliedDeluxe.amount,
            originalAmountDeluxe: averageGuestPriceDeluxe.originalAmount,
            netAmountDeluxe: averageGuestPriceDeluxe.netAmount,
            priceTypeDeluxe: priceTypeDeluxe.priceType,
            categoryDeluxe: priceTypeDeluxe.category,
            cabinTypeDeluxe: priceTypeDeluxe.cabinType,
            cabinClassDeluxe: deluxeClass.cabinClass,
            subTypeBalcony: promotionForBalcony.subType,
            TypeBalcony: promotionForBalcony.type,
            idBalcony: promotionForBalcony.id,
            descriptionBalcony: promotionForBalcony.description,
            refundableTypeCodeBalcony: promotionForBalcony.refundableTypeCode,
            amount: valueAddamountappliedBalcony.amount,
            discountBalcony: discountappliedBalcony.amount,
            originalAmountBalcony: averageGuestPriceBalcony.originalAmount,
            netAmountBalcony: averageGuestPriceBalcony.netAmount,
            priceTypeBalcony: priceTypeBalcony.priceType,
            categoryBalcony: priceTypeBalcony.category,
            cabinTypeBalcony: priceTypeBalcony.cabinType,
            cabinClassBalcony: balconyClass.cabinClass,
            type: priceTypeBalcony.type,
            description: priceTypeBalcony.description,
            subTypeOutside: promotionForOutside.subType,
            TypeOutside: promotionForOutside.type,
            idOutside: promotionForOutside.id,
            descriptionOutside: promotionForOutside.description,
            refundableTypeCodeOutside: promotionForOutside.refundableTypeCode,
            amount: valueAddamountappliedOutside.amount,
            discountOutside: discountappliedOutside.amount,
            originalAmountOutside: averageGuestPriceOutside.originalAmount,
            netAmountOutside: averageGuestPriceOutside.netAmount,
            priceTypeOutside: priceTypeOutside.priceType,
            categoryOutside: priceTypeOutside.category,
            cabinTypeOutside: priceTypeOutside.cabinType,
            cabinClassOutside: outsideClass.cabinClass,
            type: priceTypeOutside.type,
            description: priceTypeOutside.description,
            subTypeInterior: promotionForInterior.subType,
            TypeInterior: promotionForInterior.type,
            idInterior: promotionForInterior.id,
            descriptionInterior: promotionForInterior.description,
            refundableTypeCodeInterior: promotionForInterior.refundableTypeCode,
            amount: valueAddamountappliedInterior.amount,
            discountInterior: discountappliedInterior.amount,
            originalAmountInterior: averageGuestPriceInterior.originalAmount,
            netAmountInterior: averageGuestPriceInterior.netAmount,
            priceTypeInterior: priceTypeInterior.priceType,
            categoryInterior: priceTypeInterior.category,
            cabinTypeInterior: priceTypeInterior.cabinType,
            cabinClassInterior: interiorClass.cabinClass,
            type: priceTypeInterior.type,
            description: priceTypeInterior.description
          });
        },
        error => {
          this.setState({
            items: {},
            error
          });
        }
      );
  };

  render() {
    const Channel = [
      { key: "0", text: "CM", value: "CM" },
      { key: "1", text: "channel1", value: "channel1" },
      { key: "2", text: "channel2", value: "channel2" }
    ];
    const booking_type = [
      { key: "0", text: "FIT", value: "FIT" },
      { key: "1", text: "booking_type1", value: "booking_type1" },
      { key: "2", text: "booking_type2", value: "booking_type2" }
    ];
    return (
      <div>
        <Form onSubmit={this.mySubmitHandler}>
          <Form.Group widths="equal">
            <div className="ui grid">
              <div className="three column row">
                <div className="column">
                  <label name="office">Office </label>
                  <div className="field">
                    <Input
                      placeholder="Office"
                      name="Office"
                      value={this.state.Office}
                      onChange={this.handleInput}
                    />
                  </div>
                </div>
                <div className="column">
                  <label name="country">Country </label>
                  <div className="field">
                    <Input
                      placeholder="Country"
                      name="Country"
                      value={this.state.Country}
                      onChange={this.handleInput}
                    />
                  </div>
                </div>
                <div className="column">
                  <label name="package">Package </label>
                  <div className="field">
                    <Input
                      placeholder="Package"
                      name="Package"
                      value={this.state.Package}
                      onChange={this.handleInput}
                    />
                  </div>
                </div>
              </div>
              <div className="three column row">
                <div className="column">
                  <label name="currency">Currency </label>
                  <div className="field">
                    <Input
                      placeholder="Currency"
                      name="Currency"
                      value={this.state.Currency}
                      onChange={this.handleInput}
                    />
                  </div>
                </div>
                <div className="column">
                  <label name="saildate">Saildate </label>
                  <div className="field">
                    <Input
                      placeholder="Saildate"
                      name="Saildate"
                      value={this.state.Saildate}
                      onChange={this.handleInput}
                    />
                  </div>
                </div>
              </div>
              <div className="three column row">
                <div className="column">
                  <label name="channel">Channel </label>
                  <Form.Select
                    onChange={this.handleInput}
                    options={Channel}
                    placeholder="CM"
                  />
                </div>
                <div className="column">
                  <label name="booking_type">Booking type </label>
                  <Form.Select
                    name="booking_type"
                    value={this.state.booking_type}
                    onChange={this.handleInput}
                    options={booking_type}
                    placeholder="FIT"
                  />
                </div>
              </div>
              <div className="three column row">
                <div className="column">
                  <button className="ui right labeled icon button">
                    <i className="right arrow icon"></i>
                    Compare
                  </button>
                </div>
              </div>
            </div>
          </Form.Group>
        </Form>

        <table className="ui celled table">
          <thead>
            <tr>
              <th>Cabin Class</th>
              <th>Sub Type</th>
              <th>Type</th>
              <th>ID</th>
              <th>Description</th>
              <th>Refundable Type Code</th>
              <th>Amount</th>
              <th>Discount</th>
              <th>Original Amount</th>
              <th>Net Amount</th>
              <th>Price Type</th>
              <th>Category</th>
              <th>Cabin Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.cabinClassDeluxe}</td>
              <td>{this.state.subTypeDeluxe}</td>
              <td>{this.state.TypeDeluxe}</td>
              <td>{this.state.idDeluxe}</td>
              <td>{this.state.descriptionDeluxe}</td>
              <td>{this.state.refundableTypeCodeDeluxe}</td>
              <td>{this.state.amount}</td>
              <td>{this.state.discountDeluxe}</td>
              <td>{this.state.originalAmountDeluxe}</td>
              <td>{this.state.netAmountDeluxe}</td>
              <td>{this.state.priceTypeDeluxe}</td>
              <td>{this.state.categoryDeluxe}</td>
              <td>{this.state.cabinTypeDeluxe}</td>
            </tr>
            <tr>
              <td>{this.state.cabinClassBalcony}</td>
              <td>{this.state.subTypeBalcony}</td>
              <td>{this.state.TypeBalcony}</td>
              <td>{this.state.idBalcony}</td>
              <td>{this.state.descriptionBalcony}</td>
              <td>{this.state.refundableTypeCodeBalcony}</td>
              <td>{this.state.amount}</td>
              <td>{this.state.discountBalcony}</td>
              <td>{this.state.originalAmountBalcony}</td>
              <td>{this.state.netAmountBalcony}</td>
              <td>{this.state.priceTypeBalcony}</td>
              <td>{this.state.categoryBalcony}</td>
              <td>{this.state.cabinTypeBalcony}</td>
            </tr>
            <tr>
              <td>{this.state.cabinClassOutside}</td>
              <td>{this.state.subTypeOutside}</td>
              <td>{this.state.TypeOutside}</td>
              <td>{this.state.idOutside}</td>
              <td>{this.state.descriptionOutside}</td>
              <td>{this.state.refundableTypeCodeOutside}</td>
              <td>{this.state.amount}</td>
              <td>{this.state.discountOutside}</td>
              <td>{this.state.originalAmountOutside}</td>
              <td>{this.state.netAmountOutside}</td>
              <td>{this.state.priceTypeOutside}</td>
              <td>{this.state.categoryOutside}</td>
              <td>{this.state.cabinTypeOutside}</td>
            </tr>
            <tr>
              <td>{this.state.cabinClassInterior}</td>
              <td>{this.state.subTypeInterior}</td>
              <td>{this.state.TypeInterior}</td>
              <td>{this.state.idInterior}</td>
              <td>{this.state.descriptionInterior}</td>
              <td>{this.state.refundableTypeCodeInterior}</td>
              <td>{this.state.amount}</td>
              <td>{this.state.discountInterior}</td>
              <td>{this.state.originalAmountInterior}</td>
              <td>{this.state.netAmountInterior}</td>
              <td>{this.state.priceTypeInterior}</td>
              <td>{this.state.categoryInterior}</td>
              <td>{this.state.cabinTypeInterior}</td>
            </tr>
          </tbody>
        </table>

        <div className="ui horizontal divider"></div>
        <table className="ui celled table">
          <thead>
            <tr>
              <th>Cabin Class</th>
              <th>Sub Type - v1</th>
              <th>Sub Type - v2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.cabinClassDeluxe}</td>
              <td>{this.state.subTypeDeluxe}</td>
              <td>{this.state.subTypeInterior}</td>
            </tr>
            <tr>
              <td>{this.state.cabinClassBalcony}</td>
              <td>{this.state.subTypeBalcony}</td>
              <td>{this.state.subTypeBalcony}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
