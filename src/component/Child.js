import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux';

class Child extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor")
  }
  render() {
    console.log("child", this.props.counter)
    return (
      <View>
        <Text style={styles.text} >{this.props.counter}</Text>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  counter: state.counter
})
/*gán thuộc tính counter : state.counter lúc này counter cũng trở thành 1 props của component Child 
→ gọi show ra View ta chỉ cần gọi như thông thường <Text>{this.props.counter}</Text> */

export default connect(mapStateToProps, null)(Child);

const styles = StyleSheet.create({
  text: {
    fontSize: 100,
    color: '#000',
    textAlign: 'center'
  }
});