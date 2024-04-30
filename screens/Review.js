import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/globalStylesheet";
import Card from "../components/Card";
import One from "../assets/images/rating-1.png";
import Two from "../assets/images/rating-2.png";
import Three from "../assets/images/rating-3.png";
import Four from "../assets/images/rating-4.png";
import Five from "../assets/images/rating-5.png";
import Bg from "../assets/images/game_bg.png";

const Review = ({ route, navigator }) => {
  const data = route.params;
  // console.log(data)
  return (
    <ImageBackground source={Bg} style={{ flex: 1 }}>
      <View style={globalStyles.container}>
        <Card>
          <Image style={globalStyles.image} source={data.url} />
          <Text style={globalStyles.titleText}>{data.title}</Text>
          <Text style={globalStyles.titleText}>{data.body}</Text>
          <View style={styles.rating}>
            <Text>{"Rating: "}</Text>
            {data.rating == 1 && <Image source={One} />}
            {data.rating == 2 && <Image source={Two} />}
            {data.rating == 3 && <Image source={Three} />}
            {data.rating == 4 && <Image source={Four} />}
            {data.rating == 5 && <Image source={Five} />}
          </View>
        </Card>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderColor: "#eee",
  },
});
export default Review;
