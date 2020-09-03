import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from "react-native";
import IGStoryCircle from "./lib/IGStoryCircle";

const stories = [
  {
    name: "Mattis",
    isStoryInsertable: true,
    hasStory: false,
    source: {
      uri:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    },
  },
  {
    key: "Lorem Sit",
    hasStory: true,
    hasStoryRingColor: ["#20fab1", "#20fab1"],
    notificationCount: 99,
    source: {
      uri:
        "https://images.unsplash.com/uploads/14110635637836178f553/dcc2ccd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    },
  },
  {
    key: "Parturient Aenean Fringilla",
    hasStory: true,
    hasStoryRingColor: ["#eb3434", "#eb3434"],
    source: {
      uri:
        "https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    },
  },
  {
    key: "Parturient",
    hasStory: true,
    hasStoryRingColor: ["#e22ae8", "#e22ae8"],
    // isStoryRead: true,
    source: {
      uri:
        "https://images.unsplash.com/photo-1514846226882-28b324ef7f28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    },
  },
  {
    key: "Adipiscing",
    hasStory: true,
    hasStoryRingColor: ["#3492eb", "#3492eb"],
    source: {
      uri:
        "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    },
  },
  {
    key: "Mollis",
    hasStory: true,
    source: {
      uri:
        "https://images.unsplash.com/photo-1448376561459-dbe8868fa34c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    },
  },
  {
    key: "Dapibus Euismod",
    hasStory: true,
    source: {
      uri:
        "https://images.unsplash.com/photo-1539811107033-3a67f3ebc852?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80",
    },
  },
  {
    key: "Pellentesque",
    hasStory: true,
    source: {
      uri:
        "https://images.unsplash.com/photo-1551292831-023188e78222?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    },
  },
];

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
        <ScrollView
          horizontal
          contentContainerStyle={{
            marginTop: 24,
            marginLeft: 8,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {stories.map((item) => {
            return (
              <View key={item.name} style={{ marginLeft: 12 }}>
                <IGStoryCircle
                  {...item}
                  isStoryInsertable={item.isStoryInsertable}
                  hasStory={item.hasStory}
                  source={item.source}
                />
              </View>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
