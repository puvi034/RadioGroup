This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## This contains the reusable RadioGroup and Radio input using the ReactJS library.
The consumer of this component just need to follow the below interface

```
<RadioGroup name="fruits" defaultValue="Apple" handleSelect={this.handleFruits}>
  <Radio value="Apple"><span className="pad">Apple</span></Radio>
  <Radio value="Banana"><span className="pad">Banana</span></Radio>
  <Radio value="Orange"><span className="pad">Orange</span></Radio>
</RadioGroup>

```

## This approach focuses on declarative way of writing the component and giving more flexibility to the consumer.

- Radio Group component accepts the defaultValue and the name of the group and passes the selectedOption to the
  handleSelect callback. So that consumer of the component keep track of the selected value.
- Radio Component just need to pass the value of the Radio option
