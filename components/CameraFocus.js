import React, { Component } from "react";
import { StyleSheet, View, Dimensions } from "react-native";

class CameraFocus extends Component {
  render() {
    const { height, width } = Dimensions.get("window");
    const maskRowHeight = Math.round((height - 200) / 20);
    const maskColWidth = (width - 200) / 2;
    return (
      <View style={styles.app}>
        <View style={styles.maskOutter}>
          <View
            style={[{ flex: maskRowHeight }, styles.maskRow, styles.maskFrame]}
          />

          <View style={[{ flex: 40 }, styles.maskCenter]}>
            <View style={[{ width: maskColWidth }, styles.maskFrame]} />
            <View style={styles.maskInner}>
              <View
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: 10,
                  borderColor: "#FFFFFF",
                  borderTopWidth: 1
                }}
              />
              <View
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: 10,
                  borderColor: "#FFFFFF",
                  borderBottomWidth: 1
                }}
              />
              <View
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: 20,
                  height: "100%",
                  borderColor: "#FFFFFF",
                  borderLeftWidth: 1
                }}
              />
              <View
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: 20,
                  height: "100%",
                  borderColor: "#FFFFFF",
                  borderRightWidth: 1
                }}
              />
              <View
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: 30,
                  height: 30,
                  borderColor: "#00BED6",
                  borderTopWidth: 4,
                  borderLeftWidth: 4
                }}
              />
              <View
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: 30,
                  height: 30,
                  borderColor: "#00BED6",
                  borderTopWidth: 4,
                  borderRightWidth: 4
                }}
              />
              <View
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: 30,
                  height: 30,
                  borderColor: "#00BED6",
                  borderBottomWidth: 4,
                  borderLeftWidth: 4
                }}
              />
              <View
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: 30,
                  height: 30,
                  borderColor: "#00BED6",
                  borderBottomWidth: 4,
                  borderRightWidth: 4
                }}
              />
            </View>
            <View style={[{ width: maskColWidth }, styles.maskFrame]} />
          </View>
          <View
            style={[{ flex: maskRowHeight }, styles.maskRow, styles.maskFrame]}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1
  },
  cameraView: {
    flex: 1,
    justifyContent: "flex-start"
  },
  maskOutter: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-around"
  },
  maskInner: {
    width: 300,
    backgroundColor: "transparent"
  },
  maskFrame: {
    backgroundColor: "#1C355E",
    opacity: 0.7
  },
  maskRow: {
    width: "100%"
  },
  maskCenter: { flexDirection: "row" },
  rectangleText: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flex: 1,
    textAlign: "center",
    color: "white"
  }
});

export default CameraFocus;
