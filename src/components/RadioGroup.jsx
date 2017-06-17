import React, {Component} from 'react';

class RadioGroup extends Component {
  state = {
    selectedOption: this.props.defaultValue || ''
  }

  handleChange = (e) => {
    const {value} = e.target;
    const {handleSelect} = this.props;
    const {selectedOption} = this.state;
    handleSelect(value);
    this.setState({
      selectedOption: value
    });
  };

  renderChildren = () => {
    const {children, name} = this.props;
    const {selectedOption} = this.state;
    const result = React.Children.map(children, (child) => {
      return React.cloneElement(child, {name, selectedOption, handleChange: this.handleChange})
    });
    return result;
  }

  render() {
    return(
      <div>
        {this.renderChildren()}
      </div>
    )
  }
}

export default RadioGroup;