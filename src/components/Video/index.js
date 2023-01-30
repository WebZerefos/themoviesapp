import {View} from 'react-native';
import React from 'react';
import VideoPlayer from 'react-native-video-controls';

const Video = ({onClose}) => {
  return (
    <View className="flex-1 w-full h-full">
      <VideoPlayer
        onBack={() => onClose()}
        onEnd={() => onClose()}
        fullScreenOrientation="all"
        source={require('../../assets/images/gato.mp4')}
      />
    </View>
  );
};

export default Video;
