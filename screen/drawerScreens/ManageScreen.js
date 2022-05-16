import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function Item({ item }) {
  return (
    <View style={styles.listItem}>
      <Image source={{uri:item.photo}} style={{width:50, height:50,borderRadius:10, alignSelf: "center"}} />
      <View style={{alignItems:"center",flex:1}}>
        <Text style={{fontWeight:"bold", fontSize: 16, marginTop: 20, textAlign: "center"}}>{item.name}</Text>
        <Text>{item.position}</Text>
      </View>
      <TouchableOpacity style={{height:60,width:60,alignItems:"center", justifyContent: "center"}}>
       <Ionicons name="chevron-forward-outline" size={24} />
      </TouchableOpacity>
    </View>
  );
}

export default class ManageScreen extends React.Component {
  state = {
    data:[
        {
            "name": "Quản Lý Sản Phẩm",
            "photo": "https://quantapower.com/wp-content/uploads/2021/09/2281512-200.png"
        },
        {
            "name": "Quản Lý User",
            "photo": "https://cdn2.iconfinder.com/data/icons/instagram-outline/19/11-512.png"
        }
    ]
  }


  render(){
    return (
      <View style={styles.container}>
        <FlatList
          style={{flex:1}}
          data={this.state.data}
          renderItem={({ item }) => <Item item={item}/>}
          keyExtractor={item => item.name}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listItem:{
    marginTop: 20,
    backgroundColor:"#F7F7F7",
    width: "90%",
    flex:1,
    alignSelf: "center",
    flexDirection:"row",
    borderRadius:5, 
    borderWidth: 2,
    borderColor: '#F7F7F7'
  }
});
