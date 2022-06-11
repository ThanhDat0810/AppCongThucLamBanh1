import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { Searchbar } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native";
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    // <ScrollView>
    <SafeAreaView style= {{flex: 1}}>
      <View style={styles.container}>
        <ScrollView>
{/*------ View header and search--------------- */}
          
          
          <View >
            <View style = {styles.search}>
              <View>
                <Text
                  style={{
                    fontSize: 26,
                    
                    color: "#FFF",
                    fontWeight: "bold",}}>
                  WELCOME TO UBAKE !
                </Text>
              </View>
                <Searchbar
                  placeholder="Tìm Công Thức Bánh..."
                  onChangeText={onChangeSearch}
                  value={searchQuery}
                  icon="magnify"
                  style={{
                    marginLeft: 12,
                    marginRight: 12,
                    marginTop: 10,
                    marginBottom:15,
                    height: 30,
                    borderRadius: 20,
                    textSize: 16,}}/>
            </View>
{/*------ View header and search--------------- */}
{/* ------------------------------- */}
            <View style = {styles.twoScroll}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={true}
                style={{ height: 170, marginTop: 20 }}>
                <View>
                  <Image
                    source={require("../assets/P2.png")}
                    style={{ marginLeft: 10, height: 150, borderRadius: 15 }}/>
                </View>

                <View>
                  <Image
                    source={require("../assets/P3.png")}
                    style={{ marginLeft: 10, height: 150, borderRadius: 15 }}/>
                </View>

                <View>
                  <Image
                    source={require("../assets/P4.png")}
                    style={{
                      marginLeft: 10,
                      height: 150,
                      borderRadius: 15,
                      marginRight: 20,
                    }}/>
                </View>
              </ScrollView>
{/* -------------------------------------------------------------- */}
              <View  style = {styles.LIST}>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={true}
                  style={{
                    height: 120,}}>
                {/*---------------------- Bánh Mặn------------------- */}
                      <TouchableOpacity style={styles.ListManButton} onPress={() => navigation.navigate('BanhMan')}>
                        <View>
                          <Image
                            source={require("../assets/P5.png")}
                            style={{ marginLeft: 10 }}
                          />

                          <Text style={styles.text}>Bánh Mặn</Text>
                        </View>
                        </TouchableOpacity>

                  {/*-----------------Bánh Ngọt-----------------------  */}
                          <TouchableOpacity style={styles.ListNgotButton} onPress={() => navigation.navigate('BanhNgot')}>
                          <View>
                            <Image
                              source={require("../assets/P6.png")}
                              style={{ marginLeft: 10 }}
                            />
                            <Text style={styles.text}>Bánh Ngọt</Text>
                          </View>
                          </TouchableOpacity>
                  {/*--------------------Đặc Biệt---------------------------  */}
                  
                          <TouchableOpacity style={styles.ListSpecialButton} onPress={() => navigation.navigate('DacBiet')}>
                          <View>
                            <Image
                              source={require("../assets/P7.png")}
                              style={{ marginLeft: 10 }}
                            />
                            <Text style={styles.text}>Đặc Biệt</Text>
                          </View>
                          </TouchableOpacity>
                  {/* --------------------------Đồ Uống---------------------- */}
                        <TouchableOpacity style={styles.ListDrinkButton} onPress={() => navigation.navigate('DoUong')}>
                          <View>
                            <Image
                              source={require("../assets/P8.png")}
                              style={{ marginLeft: 10, marginRight: 10 }}/>
                            <Text style={styles.text}>Đồ Uống</Text>
                          </View>
                        </TouchableOpacity>
                </ScrollView>
              </View>
              </View>  
              <View style={{ marginLeft: 10, marginTop: 20 }}>
                  <Text
                    style={{
                      fontSize: 26,
                      color: "#FFF",
                      fontWeight: "bold",
                    }}>
                      Lastest Cake
                  </Text>
              </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={true}
            style={{ height: 200, marginTop: 10 }}>
              <View>
                <Image
                  source={require("../assets/P9.png")}
                  style={{
                    marginLeft: 10,
                    height: 150,
                    borderWidth: 3,
                    borderStyle: "solid",
                    borderRadius: 15,
                    borderColor: "#000000",
                  }}/>
                <Text style={styles.texts}>Bánh Muffin</Text>
              </View>

              <View>
                <Image
                  source={require("../assets/P10.png")}
                  style={{
                    marginLeft: 10,
                    height: 150,
                    borderRadius: 15,
                    borderStyle: "solid",
                    borderColor: "#000000",
                    borderWidth: 3,
                  }}/>
                <Text style={styles.texts}>Bánh Flan</Text>
              </View>

              <View>
                <Image
                  source={require("../assets/P11.png")}
                  style={{
                    marginLeft: 10,
                    height: 150,
                    borderRadius: 15,
                    borderStyle: "solid",
                    marginRight: 20,
                    borderColor: "#000000",
                    borderWidth: 3,
                  }}/>
                <Text style={styles.texts}>Bánh Phomai</Text>
              </View>

          </ScrollView>
              <View style={{ marginLeft: 10, marginBottom: 10 }}>
                <Text
                  style={{
                    fontSize: 26,
                    color: "#FFF",
                    fontWeight: "bold",
                  }}>
                  Most List Cake
                </Text>
              </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={true}
            style={{ height: 200, marginTop: 10 }}>
            <View>
              <Image
                source={require("../assets/P9.png")}
                style={{
                  marginLeft: 10,
                  height: 150,
                  borderWidth: 3,
                  borderStyle: "solid",
                  borderRadius: 15,
                  borderColor: "#000000",
                }}
              />
              <Text style={styles.texts}>Bánh Muffin</Text>
            </View>
            <View>
              <Image
                source={require("../assets/P10.png")}
                style={{
                  marginLeft: 10,
                  height: 150,
                  borderRadius: 15,
                  borderStyle: "solid",
                  borderColor: "#000000",
                  borderWidth: 3,
                }}
              />
              <Text style={styles.texts}>Bánh Flan</Text>
            </View>
            <View>
              <Image
                source={require("../assets/P11.png")}
                style={{
                  marginLeft: 10,
                  height: 150,
                  borderRadius: 15,
                  borderStyle: "solid",
                  marginRight: 20,
                  borderColor: "#000000",
                  borderWidth: 3,
                }}
              />
              <Text style={styles.texts}>Bánh Phomai</Text>
            </View>
            
          </ScrollView>
        
        </View>
        </ScrollView>
        <ActionButton buttonColor="rgba(88, 181, 255, 1)">
              <ActionButton.Item
                buttonColor="#9b59b6"
                title="Add to Watch Later"
                onPress={() => navigation.navigate('Homelive')}>
                <Icon
                  name="md-eye"
                  style={styles.actionButtonIcon}
                />
              </ActionButton.Item>
              <ActionButton.Item
                buttonColor="#3498db"
                title="Add to Favourite"
                onPress={() => alert('Added to favourite')}>
                <Icon
                  name="md-star"
                  style={styles.actionButtonIcon}
                />
              </ActionButton.Item>
              <ActionButton.Item
                buttonColor="#1abc9c"
                title="Share"
                onPress={() => alert('Share Post')}>
                <Icon
                  name="md-share-alt"
                  style={styles.actionButtonIcon}
                />
              </ActionButton.Item>
            </ActionButton>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    backgroundColor: "#d64b4b",
    height: 50,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  texts: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 20,
  },
  ListManButton:{
    borderRadius: 1,
    bordersize: 0
    
  },
  twoScroll:{
    flex: 1,
    backgroundColor:"#ffffff"
  },
  search:{

  },
  LIST:{
    paddingTop: 10,
    borderRadius:1,
    backgroundColor: "#d64b4b",
    marginBottom: 10
  }
});
export default HomeScreen;
