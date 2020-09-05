import React from "react";
import { View, Image, StatusBar, ScrollView, SafeAreaView } from "react-native";
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
    notificationCount: 3,
    source: {
      uri:
        "https://images.unsplash.com/uploads/14110635637836178f553/dcc2ccd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    },
  },
  {
    key: "Parturient Aenean Fringilla",
    hasStory: true,
    hasStoryRingColor: ["#eb3434", "#eb3434"],
    isStoryRead: true,
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
  const renderHeader = () => {
    return (
      <View
        style={{
          padding: 16,
          alignContent: "center",
          flexDirection: "row",
          backgroundColor: "#1a1a1a",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("./assets/camera.png")}
            style={{ height: 25, width: 25 }}
          />
          <Image
            resizeMode="contain"
            source={require("./assets/ig-logo.png")}
            style={{ left: 8, top: 3, height: 25, width: 100 }}
          />
        </View>
        <View style={{ marginLeft: "auto" }}>
          <Image
            source={require("./assets/send.png")}
            style={{ height: 25, width: 25 }}
          />
        </View>
      </View>
    );
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
        {renderHeader()}
        <ScrollView
          horizontal
          style={{ marginTop: 16 }}
          contentContainerStyle={{
            margin: 8,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {stories.map((item) => {
            return (
              <View key={item.name} style={{ marginLeft: 12 }}>
                <IGStoryCircle
                  {...item}
                  source={item.source}
                  hasStory={item.hasStory}
                  onPress={() => {}}
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
