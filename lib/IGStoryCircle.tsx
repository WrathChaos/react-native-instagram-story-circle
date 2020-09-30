import * as React from "react";
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
  source: any;
  size?: number;
  hasStory?: boolean;
  innerBorderColor: string;
  insertStoryTop?: number;
  innerCircleSize?: number;
  insertStoryStart?: number;
  notificationSize?: number;
  innerBorderRadius?: number;
  outerBorderRadius?: number;
  notificationCount?: number;
  profileImageBorderSize?: number;
  notificationPositionTop?: number;
  notificationPositionLeft?: number;
  storyRingColor?: [string, string];
  defaultRingColor?: [string, string];
  notificationBubbleBackgroundColor?: string;
  ImageHost?: any;
  ImageComponent?: any;
  onPress: () => void;
}

const IGStoryCircle = (props: IProps) => {
  const {
    size = 64,
    source,
    onPress,
    hasStory,
    storyRingColor,
    innerCircleSize,
    notificationSize,
    defaultRingColor,
    innerBorderColor,
    notificationCount,
    innerBorderRadius = 32,
    outerBorderRadius = 32,
    profileImageBorderSize,
    notificationPositionTop,
    notificationPositionLeft,
    notificationBubbleBackgroundColor,
    ImageHost = View,
    ImageComponent = Image,
  } = props;

  const borderSize = (size * 6) / 100;
  const innerBorderSize = (size * 3) / 100;
  const defaultNotificationPositionTop = size / 12;
  const defaultNotificationPositionLeft = (size * 9) / 12;

  const generateRingColor = () => {
    if (hasStory) return storyRingColor;
    else return defaultRingColor;
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
      style={_storyRing(size, outerBorderRadius)}
      colors={generateRingColor()}
      start={{ x: 0.0, y: 1.0 }}
      end={{ x: 1.0, y: 1.0 }}
    >
      <ImageHost>
        <ImageComponent
          source={source}
          style={_profileImageStyle(
            innerCircleSize || size - borderSize,
            profileImageBorderSize || hasStory ? innerBorderSize : 0,
            innerBorderColor,
            innerBorderRadius,
          )}
        />
      </ImageHost>
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
  defaultRingColor: ["#000", "#000"],
  storyRingColor: ["#feda75", "#d62976"],
  notificationBubbleBackgroundColor: "#eb3434",
};

export default IGStoryCircle;
