import React, { Component } from 'react'
import { Button } from 'react-native-elements'

const ButtonComp = ({ title, onPress, bgColor, textColor }) => (
  <Button
    style={{ marginBottom: 10 }}
    backgroundColor={bgColor}
    title={title}
    color={textColor}
    onPress={onPress} />
)
export default ButtonComp
//muốn tách nhỏ component nên tạm lấy ví dụ viết 1 component con riêng ra