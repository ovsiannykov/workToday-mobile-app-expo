import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import sized from "../../Svg/sized";
import downSvg from "../../assets/icons/down.svg";
import Colors from "../../constants/Colors";

const filters = [
  { id: "1", label: "Назва вакансії" },
  { id: "2", label: "Назва вакансії 2" },
];

const VacancyFilter = (props) => {
  const [selectCategory, setSelectCategory] = useState(
    props.data ? props.data[1] : filters[0]
  );
  const [opneList, setOpenList] = useState(false);
  const [data, setData] = useState(filters);

  useEffect(() => {
    if (props.data) {
      setData(props.data);
    }
  }, [props.data]);

  const DownIcon = sized(downSvg, 20, 20);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.select_item}
        onPress={() => setOpenList(!opneList)}
      >
        <View>
          <Text style={styles.title}>{selectCategory.label}</Text>
        </View>
      </TouchableOpacity>
      {opneList ? (
        <View>
          {data.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={
                item.id == selectCategory.id ? styles.active_item : styles.item
              }
              onPress={() => {
                setSelectCategory(item);
                setOpenList(false);
              }}
            >
              <View>
                <Text
                  style={
                    item.id == selectCategory.id
                      ? styles.active_count
                      : styles.count
                  }
                >
                  {item.count}
                </Text>
              </View>
              <View>
                <Text
                  style={
                    item.id == selectCategory.id
                      ? styles.active_title
                      : styles.title
                  }
                >
                  {item.label}
                </Text>
              </View>
              <View></View>
            </TouchableOpacity>
          ))}
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  select_item: {
    width: 320,
    height: 68,
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 50,
    borderWidth: 0.7,
    borderStyle: "dashed",
    display: "flex",
    flexDirection: "row",
  },
  item: {
    width: 320,
    height: 68,
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 0.2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0.2,
    elevation: 1,
    marginTop: 10,
  },
  active_item: {
    width: 320,
    height: 68,
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: Colors.primaryBlue,
    display: "flex",
    flexDirection: "row",
    shadowColor: Colors.primaryBlue,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 0.6,
    elevation: 1,
    marginTop: 10,
  },
  count: {
    fontSize: 20,
    fontFamily: "ComfortaaRegular",
  },
  title: {
    fontFamily: "ComfortaaBold",
    fontSize: 20,
  },
  active_count: {
    fontSize: 20,
    fontFamily: "ComfortaaRegular",
    color: "white",
  },
  active_title: {
    fontFamily: "ComfortaaBold",
    fontSize: 20,
    color: "white",
  },
});

export default VacancyFilter;
