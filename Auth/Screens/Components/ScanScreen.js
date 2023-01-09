import {View, Text, Linking} from 'react-native';
import React, {useEffect} from 'react';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import Svg, {Defs, Rect, Mask} from 'react-native-svg';

const ScanScreen = () => {
  const devices = useCameraDevices();
  const device = devices.back;

  const requestCameraPermission = React.useCallback(async () => {
    const Permission = await Camera.requestCameraPermission();
    if (Permission === 'denied') await Linking.openSettings();
  }, []);
  useEffect(() => {
    requestCameraPermission();
  }, []);
  function CameraFrame() {
    return (
      <Svg style={{height: '100%', width: '100%'}}>
        <Defs>
          <Mask id="mask" x="0" y="0" height="100%" width="100%">
            <Rect height="100%" width="100%" fill="#fff" />
            <Rect x="18%" y="30%" height="250" width="250" fill="black" />
          </Mask>
        </Defs>
        <Rect
          height="100%"
          width="100%"
          fill="rgba(0,0,0,0.5)"
          mask="url(#mask)"
        />
        <Rect
          x="18%"
          y="30%"
          height="250"
          width="250"
          strokeWidth="3"
          stroke="#fff"
        />
      </Svg>
    );
  }
  function renderCamera() {
    if (device == null) {
      return <View style={{flex: 1}}></View>;
    } else {
      return (
        <View style={{flex: 1}}>
          <Camera style={{flex: 1}} device={device} isActive={true} />
          <View
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
            }}>
            {CameraFrame()}
          </View>
        </View>
      );
    }
  }
  return <View style={{flex: 1}}>{renderCamera()}</View>;
};

export default ScanScreen;
