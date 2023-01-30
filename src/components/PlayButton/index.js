import {Pressable, View, Image} from 'react-native';
import React, {memo, PureComponent} from 'react';

export class PlayButton extends PureComponent {
  render() {
    const {onPress} = this.props;
    return (
      <Pressable hitSlop={8} onPress={onPress}>
        <View className="w-12 h-12 bg-blue-500 justify-center items-center rounded-full absolute -top-9 -right-48">
          <Image
            className="h-5 w-5 ml-1"
            source={require('../../assets/images/play.png')}
          />
        </View>
      </Pressable>
    );
  }
}

export default memo(PlayButton);
