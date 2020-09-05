import { ViewStyle, ImageStyle, TextStyle, StyleSheet } from "react-native";

interface Style {
  container: ViewStyle;
  insertIcon: ImageStyle;
  notificationText: TextStyle;
}

export const _storyRing = (size: number = 64): ViewStyle => ({
  width: size,
  height: size,
  borderRadius: size / 2,
  alignItems: "center",
  justifyContent: "center",
});

export const _profileImageStyle = (
  innerCircleSize?: number,
  profileImageBorderSize?: number,
  borderRingColor?: string,
): ImageStyle => ({
  width: innerCircleSize,
  height: innerCircleSize,
  borderColor: borderRingColor,
  borderRadius: innerCircleSize,
  borderWidth: profileImageBorderSize,
});

export const _notificationContainer = (
  notificationSize?: number,
  notificationBubbleBackgroundColor?: string,
  notificationPositionTop?: number,
  notificationPositionLeft?: number,
): ViewStyle => ({
  position: "absolute",
  alignItems: "center",
  justifyContent: "center",
  width: notificationSize,
  height: notificationSize,
  top: notificationPositionTop,
  left: notificationPositionLeft,
  borderRadius: notificationSize,
  backgroundColor: notificationBubbleBackgroundColor,
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
