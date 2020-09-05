import React from "react";
import { Text, Image, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import RNBounceable from "@freakycoder/react-native-bounceable";
/**
 * ? Local Imports
 */
import styles, {
  _storyRing,
  _profileImageStyle,
  _notificationContainer,
} from "./IGStoryCircle.style";

interface IProps {
  size?: number;
  source: any;
  hasStory?: boolean;
  isStoryRead?: boolean;
  insertStoryTop?: number;
  innerCircleSize?: number;
  insertStoryStart?: number;
  notificationCount?: number;
  profileImageBorderSize?: number;
  notificationSize?: number;
  notificationPositionTop?: number;
  notificationPositionLeft?: number;
  storyIsReadRingColor?: [string, string];
  hasStoryRingColor?: [string, string];
  defaultRingColor?: [string, string];
  notificationBubbleBackgroundColor?: string;
  innerBorderColor: string;
  onPress: () => void;
}

const IGStoryCircle = (props: IProps) => {
  const {
    size = 64,
    source,
    onPress,
    hasStory,
    isStoryRead,
    innerCircleSize,
    notificationSize,
    defaultRingColor,
    innerBorderColor,
    notificationCount,
    hasStoryRingColor,
    storyIsReadRingColor,
    profileImageBorderSize,
    notificationPositionTop,
    notificationPositionLeft,
    notificationBubbleBackgroundColor,
  } = props;

  const borderSize = (size * 6) / 100;
  const innerBorderSize = (size * 3) / 100;
  const defaultNotificationPositionTop = size / 12;
  const defaultNotificationPositionLeft = (size * 9) / 12;

  const generateRingColor = () => {
    if (isStoryRead) return storyIsReadRingColor;
    else {
      if (hasStory) return hasStoryRingColor;
      else return defaultRingColor;
    }
  };

  const renderNotificationCount = () =>
    notificationCount && (
      <View
        style={_notificationContainer(
          notificationSize,
          notificationBubbleBackgroundColor,
          notificationPositionTop || defaultNotificationPositionTop,
          notificationPositionLeft || defaultNotificationPositionLeft,
        )}
      >
        <Text style={styles.notificationText}>{notificationCount}</Text>
      </View>
    );

  const renderIGCircle = () => (
    <LinearGradient
      useAngle
      angle={45}
      style={_storyRing(size)}
      colors={generateRingColor()}
      start={{ x: 0.0, y: 1.0 }}
      end={{ x: 1.0, y: 1.0 }}
    >
      <Image
        source={source}
        style={_profileImageStyle(
          innerCircleSize || size - borderSize,
          profileImageBorderSize || hasStory ? innerBorderSize : 0,
          innerBorderColor,
        )}
      />
    </LinearGradient>
  );

  return (
    <RNBounceable onPress={onPress}>
      <View style={styles.container}>
        {renderIGCircle()}
        {renderNotificationCount()}
      </View>
    </RNBounceable>
  );
};

IGStoryCircle.defaultProps = {
  notificationSize: 18,
  innerBorderColor: "#000",
  storyIsReadRingColor: ["#ddd"],
  defaultRingColor: ["#000", "#000"],
  notificationBubbleBackgroundColor: "#d00",
  hasStoryRingColor: ["#feda75", "#d62976"],
};

export default IGStoryCircle;
