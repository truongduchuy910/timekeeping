import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import ComplaintModal from "./ComplaintModal";
import Container from "../../components/Container";
import Button from "../../components/Button";
export default function ComplaintScreen({ navigation }) {
  const getCurrentDay = () => {
    var date = new Date().getDate();
    if (date < 10) {
      date = "0" + date;
    }
    var month = (new Date().getMonth() + 1).toString();
    if (month < 10) {
      month = "0" + month;
    }
    var year = new Date().getFullYear();
    var today = year + "-" + month + "-" + date;
    return today;
  };

  const [date, setDate] = useState(getCurrentDay);

  const [isModalShow, setIsModalShow] = useState(false);

  const pickDate = (date) => {
    setDate(date.dateString);
    setIsModalShow(false);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <Modal visible={isModalShow} animationType="slide">
          <ComplaintModal pickDate={pickDate} />
          <TouchableOpacity onPress={() => setIsModalShow(false)}>
            <Ionicons
              name="close"
              size={16}
              style={{
                marginBottom: 10,
                borderWidth: 1,
                borderColor: "#eee",
                padding: 8,
                borderRadius: 8,
                alignSelf: "center",
              }}
              color="#24c48a"
            />
          </TouchableOpacity>
        </Modal>
        <View
          style={{
            width: "80%",
            marginLeft: "10%",
          }}
        >
          <View>
            <Text
              style={{
                marginTop: 12,
                marginBottom: 25,
                color: "#888",
                lineHeight: 18,
                fontSize: 13,
                borderBottomWidth: 1,
              }}
            >
              If you are having any problems with Timekeeper system, please fill
              in this form and we will solve your issue immediately.
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#eee",
              marginBottom: 12,
              borderRadius: 8,
              padding: 10,
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                fontSize: 14,
                color: "#666",
              }}
            >
              {date}
            </Text>
            <TouchableOpacity
              style={{ marginLeft: "auto" }}
              onPress={() => {
                setIsModalShow(true);
              }}
            >
              <MaterialCommunityIcons
                name="calendar-month-outline"
                size={16}
                color="#24c48a"
              />
            </TouchableOpacity>
          </View>
          <TextInput
            style={{
              fontSize: 14,
              color: "#666",
              borderWidth: 1,
              borderColor: "#eee",
              marginBottom: 12,
              borderRadius: 8,
              padding: 10,
            }}
            placeholder="Your Message"
          />
          <Button value={"SEND NOW"} />
        </View>
      </Container>
    </TouchableWithoutFeedback>
  );
}