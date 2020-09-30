<img alt="React Native Instagram Story Circle" src="assets/logo.png" width="1050"/>

[![Fully customizable Instagram Story Circle with Bounceable Animated Library for React Native](https://img.shields.io/badge/-Fully%20customizable%20Instagram%20Story%20Circle%20with%20Bounceable%20Animated%20Library%20for%20React%20Native-orange?style=for-the-badge)](https://github.com/WrathChaos/react-native-instagram-story-circle)

[![npm version](https://img.shields.io/npm/v/react-native-instagram-story-circle.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-instagram-story-circle)
[![npm](https://img.shields.io/npm/dt/react-native-instagram-story-circle.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-instagram-story-circle)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
  <img alt="React Native Instagram Story Circle"
        src="assets/Screenshots/React-Native-Instagram-Story-Circle.gif" />
</p>

# Installation

Add the dependency:

```bash
npm i react-native-instagram-story-circle
```

## Peer Dependencies

<h5><i>IMPORTANT! You need install them</i></h5>

```js
"react-native-linear-gradient": ">= 2.5.6"
"@freakycoder/react-native-bounceable": ">= 0.1.0",
```

# Usage

## Import

```jsx
import IGStoryCircle from "react-native-instagram-story-circle";
```

## Fundamental Usage

Please look at the `example` simply run it and check how it works :)

```jsx
<IGStoryCircle source={source} hasStory onPress={() => {}} />
```

# Configuration - Props

| Property                          |       Type       |        Default         | Description                                                                    |
| --------------------------------- | :--------------: | :--------------------: | ------------------------------------------------------------------------------ |
| source                            |      image       |       undefined        | set the image for the circle                                                   |
| size                              |      number      |           64           | change the size of the circle                                                  |
| onPress                           |     function     |       undefined        | set the onPress functionality when the component is pressed                    |
| innerBorderColor                  |      string      |         "#000"         | change the inner circle of the component                                       |
| outerBorderRadius                 |      number      |           32           | change the whole instagram story circle's outer border radius                  |
| innerBorderRadius                 |      number      |           32           | change the whole instagram story circle's inner border radius                  |
| hasStory                          |     boolean      |       undefined        | set true to activate story's colorful ring                                     |
| storyRingColor                    | [string, string] | ["#feda75", "#d62976"] | change the ring color                                                          |
| defaultRingColor                  | [string, string] |    ["#000", "#000"]    | change the default ring color when `hasStory` is false                         |
| profileImageBorderSize            |      number      |           0            | change the profile image border size                                           |
| notificationCount                 |      number      |       undefined        | set the notification count                                                     |
| notificationBubbleBackgroundColor |      color       |       "#eb3434"        | change the notification background color                                       |
| notificationSize                  |      number      |           18           | change the notification circle's size                                          |
| notificationPositionTop           |      number      |        default         | change the notification circle's position of the top side                      |
| notificationPositionLeft          |      number      |        default         | change the notification circle's position of the left side                     |
| ImageComponent                    |    component     |         Image          | set your own Image component instead of default React Native's Image component |

## Future Plans

- [x] ~~LICENSE~~
- [ ] Write an article about the lib on Medium

## Credits

Inspired on [Zafer Ayan's Medium Article](https://medium.com/@ZaferAyan/react-native-instagram-proje-mimarisi-9031e75a72de)

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Instagram Story Circle is available under the MIT license. See the LICENSE file for more info.
