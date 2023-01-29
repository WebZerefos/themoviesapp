import {Text, View} from 'react-native';
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  errorText1: PropTypes.string,
  errorText2: PropTypes.string,
};

const defaultProps = {
  errorText1: 'Oops! Something went wrong',
  errorText2: 'Make sure you are connected to the internet and restart the app',
};

export default class Error extends PureComponent {
  render() {
    const {errorText1, errorText2} = this.props;

    return (
      <View className="flex-1 items-center justify-center mx-10">
        <Text className="font-bold text-red-500">{errorText1}</Text>
        <Text className="text-center">{errorText2}</Text>
      </View>
    );
  }
}

Error.propTypes = propTypes;
Error.defaultProps = defaultProps;
