import React from "react";
import PropTypes from "prop-types";
import { Text, Image, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
/**
 * ? Local Imports
 */
import styles, {
  _storyRing,
  _profileImageStyle,
  _insertIconContainer,
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
  isStoryInsertable?: boolean;
  profileImageBorderSize?: number;
  notificationSize?: number;
  notificationPositionTop?: number;
  notificationPositionStart?: number;
  storyReadRingColor?: [string, string];
  hasStoryRingColor?: [string, string];
  defaultRingColor?: [string, string];
}

interface IState {}

const IGStoryCircle = (props: IProps) => {
  const {
    isStoryRead,
    hasStory,
    size = 64,
    source,
    innerCircleSize,
    insertStoryTop,
    insertStoryStart,
    notificationCount,
    isStoryInsertable,
    profileImageBorderSize,
    notificationSize,
    notificationPositionTop,
    notificationPositionStart,
    storyReadRingColor = ["#ddd"],
    hasStoryRingColor = ["#feda75", "#d62976"],
    defaultRingColor = ["#000", "#000"],
  } = props;

  const borderSize = (size * 6) / 100;
  const innerBorderSize = (size * 3) / 100;

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={
          isStoryRead
            ? storyReadRingColor
            : hasStory
            ? hasStoryRingColor
            : defaultRingColor
        }
        start={{ x: 0.0, y: 1.0 }}
        end={{ x: 1.0, y: 1.0 }}
        useAngle={true}
        angle={45}
        style={_storyRing(size)}
      >
        <Image
          source={source}
          style={_profileImageStyle(
            innerCircleSize || size - borderSize,
            profileImageBorderSize || hasStory ? innerBorderSize : 0,
          )}
        />
      </LinearGradient>
      {!hasStory && isStoryInsertable && (
        <View
          style={_insertIconContainer(
            insertStoryTop || (size * 8) / 12,
            insertStoryStart || (size * 8) / 12,
          )}
        >
          <Image
            source={require("./local-assets/add_story.png")}
            style={styles.insertIcon}
            resizeMode="contain"
          />
        </View>
      )}
      {notificationCount && (
        <View
          style={_notificationContainer(
            notificationSize || 15,
            notificationPositionTop || size / 12,
            notificationPositionStart || (size * 8) / 12,
          )}
        >
          <Text style={styles.notificationText}>{notificationCount}</Text>
        </View>
      )}
    </View>
  );
};

export default IGStoryCircle;
