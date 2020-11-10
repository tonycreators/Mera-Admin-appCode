import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, Text, ActivityIndicator, View, SafeAreaView, BackHandler, ProgressBarAndroid, StatusBar, Platform} from 'react-native';
import { WebView } from 'react-native-webview';
import NetInfo from '@react-native-community/netinfo';
import NoWifi from './NoWifi';
import Constants from 'expo-constants';
import { ProgressBar, Colors } from 'react-native-paper';


const ActivityIndicatorElement = () => {
  return (
    <View style={styles.activityIndicatorStyle}>
      <ActivityIndicator color="#0100ab" size="large" />
      {/* <ProgressBarAndroid styleAttr="Horizontal" color="#2196F3" style={styles.progressBar}/> */}
      {/* <ProgressBar progress={0.6} color="#2196F3" style={styles.progressBar} /> */}
    </View>
  );
};

const App = () => {
    const [visible, setVisible] = useState(false);
    const [wifiState, setWifiState] = useState(true);

    NetInfo.fetch().then(state => {
      setWifiState(state.isConnected);
    });
    
    

    // useEffect(() => {
    //  const backAction = () => {
    //     Alert.alert('Hold on!', 'Are you sure you want to exit?', [
    //       {
    //         text: 'Cancel',
    //         onPress: () => null,
    //         style: 'cancel',
    //       },
    //       { 
    //         text: 'YES', 
    //         onPress: () => BackHandler.exitApp() 
    //       },
    //     ]);
    //     return true;
    //   };
  
    //   const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
  
    //   return () => backHandler.remove();
    // }, []);
  

    BackHandler.addEventListener('hardwareBackPress', function() {    
      if(webref){
        webref.goBack();
      }
      return true;
    });

  


    return (
      
      <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
       <StatusBar backgroundColor="#0100ab" style="light" animation="slide"/>
        {wifiState ? 
          <WebView 
            source={{ uri: 'https://meraadmin.com' }} 
            javaScriptEnabled={true}
            style={{flex: 1 }} 
            domStorageEnabled={true}
            onLoadStart={() => setVisible(true)}
            onLoad={() => setVisible(false)}
            ref={r => (webref = r)}
          />  
           : <NoWifi />
        }
      {visible ? <ActivityIndicatorElement /> : null}
      </View>
      </SafeAreaView>
    );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  activityIndicatorStyle: {
    flex: 1,
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  progressBar: {
    position: "absolute",
    // top: StatusBar.currentHeight,
    // marginTop: -StatusBar.currentHeight,
    top: Constants.statusBarHeight,
    marginTop: -Constants.statusBarHeight,
    height: 5,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'white',
    borderColor: "#000",
  }
});


export default App;
