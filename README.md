# react-native-checkbox
[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger) ![npm](https://img.shields.io/npm/v/react-native-checkedbox) 

A React Native checkbox with all the features, flexibility & Very easy to Use.

## Why this Module? 

Not so much complex & unnecessary thing Exists. All those basics functionality which everyone Needs. <br>Everything with clear & simple!

## Preview

<img src="https://i.imgur.com/464cSYj.jpg" width="60%" />

## Installation

As this module depends on nothing means `no dependency require` so, just 1 below step require to install it.

```sh
npm install react-native-checkedbox
```

or

```sh
yarn add react-native-checkedbox
```

## Usage

```js
import CheckBox from 'react-native-checkedbox';
```

```js

import React from 'react';

const someComponent = props => {
    const [isChecked, setIsChecked] = useState(false);
    
    const handleOnPress = val => { //true | false
      setIsChecked(val);
    }
    
    // You can also handle in this way below;
    //const handleOnPress = () => { //true | false
    //  setIsChecked(!isChecked);
    //}
    
    return (
        <CheckBox
          value={isChecked} // Telling CheckBox if it should be ticked or not!!!
          onPress={handleOnPress} // Function called when user presses CheckBox
        />
    );
}

export default someComponent;

```

## Props

CheckBox component accepts following props.

Name | Type| Default | Is Require | What Value?
--- | --- | --- | --- | ---
value | bool | false | Yes | true or false
onPress | func | - | Yes | only func
disabled | bool | false | No | true or false
tickColor | string | white | No | hex/rgb/color
backgroundColor | string | blue | No | hex/rgba/color 

## Props Demonstration

```js
    
    disabled={isDisabled} // Turn it to true if you want to disable checkBox.
    tickColor={'yellow'} // Any String Value for CheckBox Tick
    backgroundColor={'red'} // Any String Value for CheckBox background

```

## For Future Issues & Contributions

Any one can Contribute & in case of any issue, open the issue Forum!
