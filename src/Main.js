import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native';
import Button from 'react-native-elements'
import Child from './component/Child'
import * as actions from './actions'
import { connect } from 'react-redux';
import ButtonComp from './component/Button';

// yarn add redux react-redux
class Main extends Component {
  handleIncrease = () => {
    this.props.counterIncrease();
  }
  handleDecrease = () => {
    this.props.counterDecrease();
  }
  render() {
    return (
      <View style={{
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignContent: "center"
      }}>
        <View style={{
          flex: 1,
          justifyContent: "center",
          alignContent: 'center'
        }}>
          <Child />
        </View>
        <View style={{ flex: 1 }}>
          <ButtonComp
            title="Increase"
            textColor="#fff"
            bgColor="#397af8"
            onPress={this.handleIncrease} />
          <ButtonComp
            title="Decrease"
            bgColor="orange"
            onPress={this.handleDecrease} />
        </View>

      </View>
    )
  }
}

/* connect() có 2 tham số: 
    mapDispatchToProps(dispatch) | mapDispatchToProps(dispatch) */

//  const mapDispatchToProps = (dispatch) => ({
//    actions:bindActionCreators(actionName, dispatch)
//  });
/*nhiệm vụ map hàm dispatch() của store trở thành 1 thuộc tính của props của component đó, 
  cụ thể ở code bên dưới thì actions chính là 1 props của component đó 
  và giờ muốn phát đi 1 action ta chỉ việc gọi this.props.actions.tên_action_ */

//  const mapStateToProps = (state) => ({
//    state_name:state.reducer_name
//  });
/*biến các state từ store thành props của component và sau đó show ra View */

/* Để đơn giản và ngắn gọn hơn ta sẽ bỏ đi hàm mapDispatchToProps(dispatch) 
  và thay bằng việc truyền trực tiếp actions vào hàm connect() cuối cùng sẽ là:
  connnect(mapStateToProps, actions)(COMPONENT) */
export default connect(null, actions)(Main)
/* Mỗi khi button đc bấm thì ta gọi tới hàm handle tương ứng để xử lý actions, 
  nhớ rằng đã thực hiện connnect(null, actions) ở trên thì bây giờ 
  actions export từ index.js trong package actions trở thành các thuộc tính của props trong component Main.js
   → khi gọi tới action thì ta chỉ việc gọi this.props.action_name_tương_ứng_ */

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: 'red'
  },
  btnStyle: {
    width: 100,
    height: 40,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: "red",
    backgroundColor: "#15c"
  },
});
