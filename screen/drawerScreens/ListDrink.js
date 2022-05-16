import React, { useState } from "react";
import {
  FlatList,
  View,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { create } from "apisauce";
import { useEffect } from "react/cjs/react.development";





const ListDrink = ({navigation}) => {
  const [selectedId, setSelectedId] = useState(null);
    const [idmonan, setidmonan] = useState('');
    const [TenMonAn, setTenMonAn] = useState('');
    const [NgayDangMonAn, setNgayDangMonAn] = useState('');
    const [HinhMonAn, setHinhMonAn] = useState('');
    const [data ,setData] = useState("")
  
    const api = create({
      baseURL: "http://172.20.10.5:3000/MonAn",
    });
    var dataToSend = {
      _id : idmonan,
      TenMonAn: TenMonAn,
      NgayDang: NgayDangMonAn,
      Anh: HinhMonAn
  
    };
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
  
  
    const fetchData = async () => {
      
      api
      .get("/622f3b103c95fe82de8b4ccf")
      .then((response) => response.data)
      .then((data) => setData(data));
  };
    
  useEffect(() => {
    fetchData();
  }, [])

  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <View
        style={{
          height: 150,
          flex: 1,
          paddingTop: 20,
          paddingStart: 10,
          flexDirection: "row",
        }}
      >
        <Image style={[styles.image]} source={{uri:item.Anh}} />
        <View style={{ flex: 1 }}>
          <Text style={[styles.title, textColor]}>{item.TenMonAn}</Text>
          <View
            style={{ height: 2, backgroundColor: "black", marginHorizontal: 5 }}
          ></View>
          <Text style={[styles.date, textColor]}>Ngày đăng: {item.NgayDang}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => {
    const backgroundColor = item._id === selectedId ? "#C4C4C4" : "#E5E5E5";
    const color = item._id === selectedId ? "white" : "black";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item._id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        extraData={selectedId}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    marginVertical: 2,
    marginHorizontal: 4,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    alignItems: "center",
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 5,
  },
  date: {
    fontSize: 14,
    alignItems: "center",
    marginLeft: 10,
    marginTop: 5,
  },
});

export default ListDrink;
