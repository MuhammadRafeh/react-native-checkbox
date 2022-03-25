import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const CheckBox = props => {
  return (
    <TouchableOpacity style={styles.touchableOpacity} onPress={props?.onPress?.bind(null, !props?.value)} disabled={props?.disabled}>
      <View style={[styles.container, { backgroundColor: props?.value ? (props?.backgroundColor ? props?.backgroundColor : 'blue') : 'transparent', borderColor: props?.backgroundColor ? props?.backgroundColor : 'blue' }]}>
        {props?.value && (<Image source={require('../assets/tick.png')} style={[{ tintColor: props?.tickColor ? props.tickColor : 'white', width: 15, height: 15 }]} resizeMode={'cover'} />)}
      </View>
    </TouchableOpacity>
  );
}

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    width: 20,
    height: 20,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'blue',
    borderRadius: 2,
  },
  touchableOpacity: {
    width: 35,
    height: 33,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

CheckBox.propTypes = {
  value: PropTypes.bool,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  tickColor: PropTypes.string,
  backgroundColor: PropTypes.string
}

