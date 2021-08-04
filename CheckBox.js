import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const CheckBox = props => {
  return (
      <TouchableOpacity style={styles.touchableOpacity} onPress={props?.onPress?.bind(null, !props?.value)} disabled={props?.disabled}>
        <View style={[styles.backLayer, {backgroundColor: props?.value ? 'rgba(42, 187, 155, 0.1)' : 'transparent'}]} />
        <View style={[styles.container, { backgroundColor: props?.value ? (props?.backgroundColor ? props?.backgroundColor : 'blue') : 'transparent', borderColor: props?.backgroundColor ? props?.backgroundColor : 'blue'  }]}>
          { props?.value && ( <Image source={require('./tick.png')} style={[{tintColor: props?.tickColor ? props.tickColor: 'white'} ]} resizeMode={'cover'} /> )}
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
    // borderWidth: 1
  },
  backLayer: {
    position: 'absolute', 
    top: 4.5, 
    left: 6, 
    width: 24, 
    height: 24, 
    borderRadius: 3,
  }
})

CheckBox.propTypes = {
  value: PropTypes.bool,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  tickColor: PropTypes.string,
  backgroundColor: PropTypes.string
}

