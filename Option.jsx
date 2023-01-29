import React from "react";

class Option extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: ""
    };
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleOptionChange(event) {
    this.setState({ selectedOption: event.target.value });
  }

  render() {
    return (
      <div>
        <form>
          <label>
            <select
              className=" selectedOption"
              value={this.state.selectedOption}
              onChange={this.handleOptionChange}
            >
              {" "}
              yugfuy
              <option value="option1">Huddi</option>
              <option value="option2">Shirt 2</option>
              <option value="option3">pent 3</option>
              <option value="option3">T shert</option>
            </select>
          </label>
          <label>
            <select
              className=" selectedOption2"
              value={this.state.selectedOption2}
              onChange={this.handleOptionChange2}
            >
              <option value="option1">s</option>
              <option value="option2"> M</option>
              <option value="option3"> Xl</option>
              <option value="option3"> XXl</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default Option;
