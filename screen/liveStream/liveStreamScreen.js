import React, { useState, useEffect } from "react";
import {
  Text,
  TextInput,
  View,
  Button,
  Platform,
  PermissionsAndroid,
} from "react-native";

const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.requestMultiple(
      [
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      ],
      {
        title: "Camera And Microphone Permission",
        message: "Streaming App needs access to your camera ",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK",
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the camera");
    } else {
      console.log("Camera permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
};

const HomeScreenLive = (props) => {
  const [playserver, setPlayserver] = useState("http://10.86.153.112/live/");
  const [pushserver, setPushserver] = useState("http://10.86.153.112/live/");
  const [stream, setStream] = useState("demo_295");

  useEffect(() => {
    if (Platform.OS === "ios") {
      requestCameraPermission();
    }
  }, []);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        padding: 24,
        backgroundColor: "orange",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          color: "#fff",
          fontSize: 25,
          marginBottom: 150,
        }}
      >
        {"React Native\nLive Stream Video example"}
      </Text>
      <Text style={{ color: "#fff", fontSize: 18 }}>
        Please enter a stream name.
      </Text>
      <View
        style={{
          borderWidth: 1,
          borderColor: "blue",
          marginTop: 20,
          marginBottom: 100,
        }}
      >
        <TextInput
          style={{ color: "#fff", height: 40 }}
          placeholder="Write stream name here"
          placeholderTextColor="#555"
          value={stream}
          onChangeText={(stream) => setStream(stream)}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Button
          onPress={() =>
            props.navigation.navigate("Play", {
              playserver: playserver,
              stream: stream,
            })
          }
          title="Join Stream"
        />
        <Button
          onPress={() =>
            props.navigation.navigate("Push", {
              pushserver: pushserver,
              stream: stream,
            })
          }
          title="Stream a Video"
        />
      </View>
    </View>
  );
};
export default HomeScreenLive;



// import React from 'react;
// import { Dimensions, View } from "react-native";
// import { NodeCameraView } from "react-native-nodemediaclient";

// const { width, height } = Dimensions.get("window");

// const config = {
//   cameraConfig: {
//     cameraId: 1,
//     cameraFrontMirror: false
//   },
//   videoConfig: {
//     preset: 4,
//     bitrate: 2000000,
//     profile: 2,
//     fps: 30,
//     videoFrontMirror: true,
//   },
//   audioConfig: {
//     bitrate: 128000,
//     profile: 1,
//     samplerate: 44100,
//   }
// };

// const BroadcastScreen = () => {
//   const cameraViewRef = React.useRef(null);
//   const streamKey = 'd5fca289-e2eb-c8e1-bde5-96f879fb430f';
//   const url = `rtmp://global-live.mux.com:5222/app/${streamKey}`;

//   return (
//     <View style={{flex: 1}}>
//       <NodeCameraView
//         style={{width, height}}
//         ref={cameraViewRef}
//         outputUrl={url}
//         camera={config.cameraConfig}
//         audio={config.audioConfig}
//         video={config.videoConfig}
//         autopreview={true}
//       />
//     </View>
//   );
// };

// export default BroadcastScreen;
