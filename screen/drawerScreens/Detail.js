import React, { useState} from 'react';
import { View, Text, Image, TouchableOpacity, Button, ScrollView, StatusBar, StyleSheet} from 'react-native';
import { Constants } from 'expo';
import { create } from 'apisauce';
import { useEffect } from "react/cjs/react.development";
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
//View
const Detail = (props) => {


  const [idmonan, setidmonan] = useState('');
  const [TenMonAn, setTenMonAn] = useState('');
  const [NgayDang, setNgayDangMonAn] = useState('');
  const [CongThuc, setCongThuc] = useState('');
  const [NguyenLieu, setNguyenLieu] = useState('');
  const [data, setData] = useState({});

  var dataToSend = {
    _id: idmonan,
    TenMonAn: TenMonAn,
    NgayDang: NgayDang,
    CongThuc: CongThuc,
    NguyenLieu: NguyenLieu

  };

  var formBody = [];
  for (var key in dataToSend) {
    var encodedKey = encodeURIComponent(key);
    var encodedValue = encodeURIComponent(dataToSend[key]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");

  const api = create({
    baseURL: "http://192.168.1.40:3000/MonAn/detail",
  }); 

  
  const fetchData = async (id) => {
    
    api
    .get(`/${id}`)
   
    .then(async (data) => {
      if(data){
        console.log('first', data.data?.result)

        await  setData(data.data?.result[0])

      }
    
    });

};
  
useEffect(() => {
  if(props.route?.params?.id){
    fetchData(props.route?.params?.id);
    
  }
  console.log("props",props.route?.params?.id)
}, [props])


console.log("data 12313",data?.TenMonAn)

  return (
    <View style={{flex:1}}>
    <ScrollView style={{flexGrow:1}}>
      <View style={styles.container}>
        <View>
            <View>
              <Image style={[styles.image]}  source={{ uri: data?.Anh }}/>
            </View>
            <View style={{alignItems:"center", backgroundColor: '#F1F1F1', padding: 10,}}>
              <Text style={[styles.title]}>Tên món ăn: {data?.TenMonAn}</Text>
              <Text style={[styles.date]}>Ngày Đăng: {data?.NgayDang}</Text>
            </View>
        </View>
            <View style={{marginTop: 10, backgroundColor: '#F1F1F1', padding: 10,}}>
                <Text style={[styles.title]}>Nguyên liệu: {data?.NguyenLieu}</Text>

            </View>
          <View style={{marginTop: 10, backgroundColor: '#F1F1F1', padding: 10,}}>
            <Text style={[styles.title]}>Công thức: {data?.CongThuc}</Text> 
        </View>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "column",
    marginTop: StatusBar.currentHeight || 0,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: "cover",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  date: {
    fontSize: 18,
  },
  text: {
    fontSize: 16,
  },
})
export default Detail;