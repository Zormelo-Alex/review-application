import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import { globalStyles } from "../styles/globalStylesheet";
import Card from "../components/Card";
import Bg from "../assets/images/game_bg.png";
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from "./ReviewForm";

const Home = ({ route, navigation }) => {
  const [data, setData] = useState([
    {
      id: 1,
      title: "Fantastic Product",
      rating: 5,
      body: "This product exceeded my expectations! It's well-made and durable. I highly recommend it.",
      url: "https://wallpaperaccess.com/full/11221428.png",
    },
    {
      id: 2,
      title: "Disappointing Experience",
      rating: 2,
      body: "Unfortunately, this product didn't meet my expectations. The quality was poor, and it broke easily.",
      url: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
    },
    {
      id: 3,
      title: "Great Value for Money",
      rating: 4,
      body: "I'm impressed with the value this product offers. It's affordable and performs exceptionally well.",
      url: "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1713657600&semt=ais",
    },
    {
      id: 4,
      title: "Average Performance",
      rating: 3,
      body: "This product performs adequately, but it didn't wow me. It's decent for the price.",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCYtHYx4xlgbyeO9qVJWue-_kFOsCU5ll5rqyw14TmsTB7bMBM_woxror5VYAEt5ImJWE&usqp=CAU",
    },
    {
      id: 5,
      title: "Highly Recommend!",
      rating: 5,
      body: "I absolutely love this product! It's well-designed, easy to use, and has improved my daily routine.",
      url: "https://wallpaperaccess.com/full/11221428.png",
    },
    {
      id: 6,
      title: "Impressive Quality",
      rating: 4,
      body: "This product's quality is top-notch! I'm amazed by how well it's made and how long-lasting it is.",
      url: "https://wallpaperaccess.com/full/11221428.png",
    },
    {
      id: 7,
      title: "Not Worth the Hype",
      rating: 2,
      body: "Despite the hype surrounding this product, I found it to be underwhelming. It didn't live up to expectations.",
      url: "https://wallpaperaccess.com/full/11221428.png",
    },
    {
      id: 8,
      title: "Decent Purchase",
      rating: 3,
      body: "I made a decent purchase with this product. It's neither exceptional nor terrible, just average.",
      url: "https://wallpaperaccess.com/full/11221428.png",
    },
    {
      id: 9,
      title: "Exceptional Service",
      rating: 5,
      body: "Not only is the product great, but the service provided by the company is exceptional. I'm a satisfied customer.",
      url: "https://wallpaperaccess.com/full/11221428.png",
    },
    {
      id: 10,
      title: "Room for Improvement",
      rating: 3,
      body: "While this product has its merits, there's definitely room for improvement in certain areas.",
      url: "https://wallpaperaccess.com/full/11221428.png",
    },
  ]);
  

  const [isOpen, setIsOpen] = useState(false);

  const addReview = (review) => {
    review.id = data.length + 1;

    setData([...data, review]);
    setIsOpen(false);
  };

  return (
    <ImageBackground source={Bg} style={{ flex: 1 }}>
      <View style={globalStyles.container}>
        <Modal visible={isOpen}>
          <ImageBackground source={Bg} style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.modalContent}>
                <MaterialIcons
                  name="close"
                  size={24}
                  style={{ ...styles.modalToggle, marginTop: 70 }}
                  onPress={() => setIsOpen(false)}
                />
                <ReviewForm addReview={addReview} />
              </View>
            </TouchableWithoutFeedback>
          </ImageBackground>
        </Modal>

        <MaterialIcons
          name="add"
          size={24}
          style={styles.modalToggle}
          onPress={() => setIsOpen(true)}
        />
        <View style={{paddingBottom: 100}}>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Review", item)}
              >
                <Card>
                  <View>
                    <Image style={globalStyles.image} source={item.url}/>
                    <Text style={globalStyles.titleText}>{item.title}</Text>
                  </View>
                </Card>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalContent: {
    flex: 1,
  },
});

export default Home;
