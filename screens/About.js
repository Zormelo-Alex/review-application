import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/globalStylesheet";

const About = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={styles.heading}>
        Welcome to our DOM Services review application!
      </Text>
      <ScrollView>
        <Text style={styles.paragraph}>
          We are thrilled to have you here and want to take a moment to
          introduce ourselves and share our vision for this platform. Our
          Mission At DOM Services is to empower users to make informed decisions
          by providing them with a platform to discover, share, and explore
          authentic reviews on a wide range of products, services, and
          experiences.
        </Text>
        <Text style={styles.paragraph}>
          Who We Are We are a passionate team of developers, designers, and
          enthusiasts who are dedicated to creating a user-friendly and
          transparent platform where individuals can share their honest opinions
          and experiences. Our diverse backgrounds and shared commitment to
          excellence drive us to continuously improve and innovate.
        </Text>
        <Text style={styles.paragraph}>
          What We Offer User-Friendly Interface: We prioritize simplicity and
          usability, ensuring that our platform is accessible to users of all
          backgrounds and skill levels. Comprehensive Reviews: Whether you're
          searching for product reviews, restaurant recommendations, or travel
          tips, you'll find a wealth of information from our community of
          reviewers. Community Engagement: We believe in the power of community
          and actively encourage users to engage with one another, share their
          insights, and support one another in their decision-making process.
          Transparency and Trust: Trust and transparency are at the core of our
          platform. We are committed to maintaining integrity and authenticity
          in all user-generated content, and we take proactive measures to
          prevent fake reviews and misinformation.
        </Text>
        <Text style={styles.paragraph}>
          Our Commitment to You Privacy and Security: We prioritize the privacy
          and security of our users' data, implementing robust measures to
          safeguard personal information and ensure a safe browsing experience.
          Continuous Improvement: We are dedicated to listening to our users'
          feedback and evolving our platform to better meet their needs. Your
          input drives our decisions, and we are constantly striving to deliver
          new features and enhancements that enhance your experience.
        </Text>
        <Text style={styles.paragraph}>
          Get Involved We invite you to join our community and become a part of
          the DOM family. Whether you're here to share your experiences,
          discover new products, or connect with like-minded individuals, we're
          excited to have you on board.
        </Text>
        <Text style={styles.signature}>Sincerely, The DOM Team</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
  },
  paragraph: {
    marginBottom: 10,
  },
  signature: {
    marginTop: 20,
    paddingBottom: 40,
    fontStyle: "italic",
    textAlign: "center",
  },
});

export default About;
