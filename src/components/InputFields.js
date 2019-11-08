import React from "react";
import { Input, Divider, Form } from "semantic-ui-react";

class InputFields extends React.Component {
  state = {
    Office: "",
    Country: "",
    Currency: "",
    Channel: "",
    booking_type: "",
    Package: "",
    Saildate: ""
  };
  handleInput = event => {
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value });
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
        <Form>
          <Form.Group widths="equal">
            <div class="ui grid">
              <div class="three column row">
                <div class="column">
                  <label name="office">Office </label>
                  <div class="field">
                    <Input
                      placeholder="Office"
                      name="Office"
                      value={this.state.Office}
                      onChange={this.handleInput}
                    />
                  </div>
                </div>
                <div class="column">
                  <label name="country">Country </label>
                  <div class="field">
                    <Input
                      placeholder="Country"
                      name="Country"
                      value={this.state.Country}
                      onChange={this.handleInput}
                    />
                  </div>
                </div>
                <div class="column">
                  <label name="package">Package </label>
                  <div class="field">
                    <Input
                      placeholder="Package"
                      name="Package"
                      value={this.state.Package}
                      onChange={this.handleInput}
                    />
                  </div>
                </div>
              </div>
              <div class="three column row">
                <div class="column">
                  <label name="currency">Currency </label>
                  <div class="field">
                    <Input
                      placeholder="Currency"
                      name="Currency"
                      value={this.state.Currency}
                      onChange={this.handleInput}
                    />
                  </div>
                </div>
                <div class="column">
                  <label name="saildate">Saildate </label>
                  <div class="field">
                    <Input
                      placeholder="Saildate"
                      name="Saildate"
                      value={this.state.Saildate}
                      onChange={this.handleInput}
                    />
                  </div>
                </div>
              </div>
              <div class="three column row">
                <div class="column">
                  <label name="channel">Channel </label>
                  <Form.Select
                    onChange={this.handleInput}
                    options={Channel}
                    placeholder="CM"
                  />
                </div>
                <div class="column">
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
            </div>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default InputFields;
