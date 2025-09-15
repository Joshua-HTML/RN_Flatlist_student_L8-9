import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import colors from "../styles/colors";
import defaultStyles from "../styles/defaultStyles";
import { useState } from "react";


export default function Index() {

  //Declare the data type for each item in the array
  type dataType = {
    id: string; //unique identifier 
    title: string; //text displayed in flatlist
  }

  const DATA: dataType[] = [
    {id:"1", title: "First Item"},
    {id:"2", title: "Second Item"},
    {id:"3", title: "Third Item"},
    {id:"4", title: "Fourth Item"},
  ];
  // create a state car to keep track of selected id 
  const [selectedId, setSelectedId] = useState<string>("1")

  const itemSelected = (item: dataType) => {
    console.log(item.title);
    setSelectedId(item.id)
  }

  return (
    <View style={defaultStyles.container}>
      <View style={defaultStyles.titleContainer}>
        <Text style={defaultStyles.title}>Insert Title Here</Text>
      </View>
      <View style={[defaultStyles.textContainer, { flex: 1 }]}>
        <View style={styles.flatlist}>
          <FlatList
              data ={DATA}
              keyExtractor={(item: dataType) => item.id}
              renderItem={({item}) => (
                <TouchableOpacity onPress={() => itemSelected(item)}>
                  <View style={[styles.flastListRow, 
                  {
                    backgroundColor:item.id ===selectedId ? colors.primary: colors.secondary

                  }]}>
                    <Text>{item.title}</Text>
                  </View>
                </TouchableOpacity>
              )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flatlist: {
    alignItems: "center",
  },
  flastListRow:{
    backgroundColor: 'lightgreen',
    margin: 5,
    padding:5,
    width:150,
  },

  titleContainer: {
    marginTop: 5,
    width: 300,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  titleText: {
    fontSize: 24,
    padding: 10,
  },
});
