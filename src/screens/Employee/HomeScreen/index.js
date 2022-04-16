import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import HomeHeader from "../../../components/HomeHeader";
import Map from "../../../components/Map";
import Vacancy from "../../../components/Vacancy";
import DateFilter from "../../../components/DateFilter";
import HomeModal from "../../../components/HomeModal";

const HomeScreen = (props) => {
  const [isMap, setIsMap] = useState(false);
  const [isCalendar, setIsCalendar] = useState(false);
  const [isFilter, setIsFilter] = useState(false);

  const navigation = useNavigation();

  const mapHandler = () => {
    setIsMap(!isMap);
    setIsCalendar(false);
    setIsFilter(false);
  };

  const calendarHandler = () => {
    setIsCalendar(!isCalendar);
    setIsMap(false);
    setIsFilter(false);
  };

  const filterHandler = () => {
    setIsFilter(!isFilter);
    setIsMap(false);
    setIsCalendar(false);
  };

  const closeModal = () => {
    setIsFilter(false);
  };

  return (
    <>
      <LinearGradient colors={["#F4F7FF", "#FFFFFF"]} style={styles.container}>
        <View style={styles.header_box}>
          <HomeModal isFilter={isFilter} closeModal={closeModal} />
          <HomeHeader
            mapHandler={mapHandler}
            isMap={isMap}
            calendarHandler={calendarHandler}
            isCalendar={isCalendar}
            filterHandler={filterHandler}
            isFilter={isFilter}
          />
          {isCalendar ? <DateFilter /> : null}
          {isMap ? <Map /> : null}
        </View>
        <View style={styles.vacancy_scrollBox}>
          <ScrollView>
            <View style={styles.vacancy_box}>
              <Vacancy
                title='Офіціант'
                onPress={() =>
                  navigation.navigate("VacancyDetail", { title: "Офіціант" })
                }
              />
            </View>
          </ScrollView>
        </View>
      </LinearGradient>
    </>
  );
};

export default HomeScreen;
