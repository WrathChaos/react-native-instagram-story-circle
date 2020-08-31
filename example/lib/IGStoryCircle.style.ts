import { ViewStyle, ImageStyle, TextStyle, StyleSheet } from "react-native";

interface Style {
  container: ViewStyle;
  insertIcon: ImageStyle;
  notificationText: TextStyle;
}

export const _storyRing = (size: number): ViewStyle => ({
  width: size,
  height: size,
  borderRadius: size / 2,
  alignItems: "center",
  justifyContent: "center",
});

export const _profileImageStyle = (
  innerCircleSize: number,
  profileImageBorderSize: number,
): ImageStyle => ({
  borderColor: "#000",
  width: innerCircleSize,
  height: innerCircleSize,
  borderRadius: innerCircleSize,
  borderWidth: profileImageBorderSize,
});

export const _insertIconContainer = (
  insertStoryTop: number,
  insertStoryStart: number,
): ViewStyle => ({
  width: 20,
  height: 20,
  borderWidth: 3,
  borderRadius: 20,
  top: insertStoryTop,
  position: "absolute",
  alignItems: "center",
  borderColor: "#000",
  start: insertStoryStart,
  justifyContent: "center",
  backgroundColor: "#30ABF1",
});

export const _notificationContainer = (
  notificationSize: number,
  notificationPositionTop: number,
  notificationPositionStart: number,
): ViewStyle => ({
  position: "absolute",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#d00",
  width: notificationSize,
  height: notificationSize,
  top: notificationPositionTop,
  borderRadius: notificationSize,
  start: notificationPositionStart,
});

export default StyleSheet.create<Style>({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  insertIcon: {
    width: 8,
    height: 8,
  },
  notificationText: {
    fontSize: 10,
    color: "#fdfdfd",
    fontWeight: "bold",
  },
});
