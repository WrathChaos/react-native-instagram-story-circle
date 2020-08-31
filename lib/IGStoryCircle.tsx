import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
/**
 * ? Local Imports
 */
import styles from "./IGStoryCircle.style";

const IGStoryCircle = (props) => {
  const { example } = props;
  return (
    <View>
      <Text>{example}</Text>
    </View>
  );
};

IGStoryCircle.propTypes = {
  example: PropTypes.number,
};

IGStoryCircle.defaultProps = {
  example: 5,
};

export default IGStoryCircle;
