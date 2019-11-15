import React from "react";
import { Input, Form } from "semantic-ui-react";

class InputFields extends React.Component {
  state = {
    Office: "sDA",
    Country: "ADF",
    Currency: "SRGR",
    Channel: "CVGB",
    booking_type: "ETGE",
    Package: "ETHBB",
    Saildate: "THT"
  };
  handleInput = event => {
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  };
  mySubmitHandler = event => {
    event.preventDefault();
    alert("You are submitting " + this.state.Office);
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
      </div>
    );
  }
}

export default InputFields;
