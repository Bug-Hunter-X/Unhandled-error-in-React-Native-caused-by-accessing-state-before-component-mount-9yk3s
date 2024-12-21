This error occurs when you try to access a component's state or props before the component has fully mounted.  This often happens when you try to access state within the constructor or before the componentDidMount lifecycle method has completed. 

```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data // ERROR: props may not be available yet
    };
  }
  render() {
    return (
      <View>
        <Text>{this.state.data}</Text>
      </View>
    );
  }
}
```