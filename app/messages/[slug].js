import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import NavBar from '../components/NavBar';
import Footer from '../users/Footer';

const Contact = () => {
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleContact = () => {
    // You can implement the logic to handle the contact form data here
    console.log('Contact Form Data:', contactData);
    // For simplicity, let's clear the form after submission
    setContactData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <ScrollView>
        <NavBar />
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Your Name"
          value={contactData.name}
          onChangeText={(text) => setContactData({ ...contactData, name: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Your Email"
          value={contactData.email}
          onChangeText={(text) => setContactData({ ...contactData, email: text })}
          keyboardType="email-address"
        />
        <TextInput
          style={[styles.input, styles.messageInput]}
          placeholder="Your Message"
          value={contactData.message}
          onChangeText={(text) => setContactData({ ...contactData, message: text })}
          multiline
        />
        <TouchableOpacity style={styles.submitButton} onPress={handleContact}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
    <Footer/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height:700
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  form: {
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  messageInput: {
    height: 80,
    textAlignVertical: 'top', // For multiline input
  },
  submitButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Contact;
