import React, { Component } from 'react';
import { View, ScrollView, KeyboardAvoidingView, Text, TextInput } from 'react-native';

export default class KeyboardAvoidingViewDemo extends Component {

  render() {
    return (
      <ScrollView>
        <KeyboardAvoidingView  enabled>
          <Text style={{ fontSize: 100 }}>a</Text>
          <Text style={{ fontSize: 100 }}>a</Text>
          <Text style={{ fontSize: 100 }}>a</Text>
          <Text style={{ fontSize: 100 }}>a</Text>
          <Text style={{ fontSize: 100 }}>a</Text>
          <Text style={{ fontSize: 100 }}>a</Text>
          <TextInput style={{ width: '100%', padding: 10, backgroundColor: 'gray' }} placeholder="enter" />
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}