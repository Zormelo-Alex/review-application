import React, { useState } from "react";
import { Alert, Button, Text, TextInput, View } from "react-native";
import { globalStyles } from "../styles/globalStylesheet";
import * as yup from "yup";

const ReviewForm = ({ addReview }) => {
  const [title, setTitle] = useState(null);
  const [body, setBody] = useState(null);
  const [rating, setRating] = useState(null);

  const reviewSchema = yup.object({
    title: yup.string().required().min(3),
    body: yup.string().required().min(10),
    rating: yup
      .number()
      .required()
      .test("is-a-num", "rating must be a number", (val) => {
        return parseInt(val) < 6 && parseInt(val) > 0;
      }),
  });

  const handleSubmit = async () => {
    try {
      const data = {
        title,
        body,
        rating,
      };
      const values = await reviewSchema.validate(data);
      // console.log(values);
      addReview(data);
    } catch (error) {
      Alert.alert(`OOPS, ${error.path} !`, `${error.message}`, [
        { title: "Ok", onPress: null },
      ]);
      console.log(error.path);
    }
  };

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.form}>
        <Text>Title:</Text>
        <TextInput
          style={globalStyles.input}
          placeholder="Title..."
          onChangeText={(val) => setTitle(val)}
          value={title}
        />
        <Text>Body: </Text>
        <TextInput
          style={globalStyles.input}
          placeholder="Body..."
          onChangeText={(val) => setBody(val)}
          value={body}
          multiline
        />
        <Text>Rating:</Text>
        <TextInput
          style={globalStyles.input}
          placeholder="Rating (1-5)"
          onChangeText={(val) => setRating(val)}
          value={rating}
          keyboardType="numeric"
        />
        <View style={globalStyles.btn}>
          <Button title="Submit" onPress={handleSubmit} />
        </View>
      </View>
    </View>
  );
};

export default ReviewForm;
