import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.less'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () {
    throw new Error('componentDidMount')
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    throw new Error('render')
    return (
      <View className='index'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
