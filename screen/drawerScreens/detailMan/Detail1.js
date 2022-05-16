import React, { useState} from 'react';
import { View, Text, Image, TouchableOpacity, Button, ScrollView, StatusBar, StyleSheet} from 'react-native';
import { Constants } from 'expo';
import { create } from 'apisauce';
import { useEffect } from "react/cjs/react.development";

//View
const Detail = () => {
  const [idmonan, setidmonan] = useState('');
  const [TenMonAn, setTenMonAn] = useState('');
  const [NgayDang, setNgayDangMonAn] = useState('');
  const [CongThuc, setCongThuc] = useState('');
  const [data, setData] = useState('');

  var dataToSend = {
    _id: idmonan,
    TenMonAn: TenMonAn,
    NgayDang: NgayDang,
    CongThuc: CongThuc

  };

  var formBody = [];
  for (var key in dataToSend) {
    var encodedKey = encodeURIComponent(key);
    var encodedValue = encodeURIComponent(dataToSend[key]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");

  const api = create({
    baseURL: "http://192.168.1.166:3000/SearchMonAn",
  }); 

  
  const fetchData = async () => {
    
    api
    .get("/Tiramisu")
    .then((response) => response.data)
    .then((data) => setData(data));
};
  
useEffect(() => {
  fetchData();
}, [])

  return (
    <ScrollView>
    <View style={styles.container}>
      <View>
        <View>
          <Image style={[styles.image]}  source={{ uri: 'https://familk.vn/wp-content/uploads/2021/11/cac-loai-banh-man-1.jpg', }}/>
        </View>
        <View style={{alignItems:"center", backgroundColor: '#F1F1F1', padding: 10,}}>
          <Text style={[styles.title]}>Tên món ăn: Pizza ngan lop bacon, oliu, pho mai</Text>
          <Text style={[styles.date]}>Ngày Đăng: 05/03/2022</Text>
        </View>
      </View>
      <View style={{marginTop: 10, backgroundColor: '#F1F1F1', padding: 10,}}>
          <Text style={[styles.title]}>Nguyên liệu:</Text>
          <Text style={[styles.text]}>"220gr bột mỳ",
          "20gr bột ngô",
          "5gr men nở",
          "100gr thịt bò xay",
          "180gr nước",
          "10ml dầu ăn",
          "Ngô ngọt",
          "2 thìa sốt cà chua",
          "Lá Oregano, tỏi, bột thìa là, hạt tiêu, ớt bột…",
          "Cheese (phô mai)"</Text>
      </View>
      <View style={{marginTop: 10, backgroundColor: '#F1F1F1', padding: 10,}}>
          <Text style={[styles.title]}>Công thức: {CongThuc}</Text>
          {/* <Text style={[styles.text]}>Bước 1: Đầu tiên bạn trộn đều bột mỳ với men nở với bột ngô và một chút xíu muối rồi cho dầu ăn vào tiếp tục trộn đều.

Bước 2: Dùng tay nhào kĩ bột với nước cho đến khi được một khối bột nhuyễn mịn và không bị dính tay là được.

Bước 3: Bạn đem ủ bột trong khoảng 10 phút. Trong quá trình đợi bạn chuẩn bị phần nhân bánh.

Bước 4: Trộn đều sốt cà chua với oregano, hạt tiêu, bột thìa là và ớt bột lại với nhau.

Bước 5: Bắc chảo lên bếp, phi thơm tỏi rùi cho thịt bò vào xào chín cùng với hỗn hợp sốt cà chua sau đó cho ngô vào đảo đều và tắt bếp. Bạn cũng có thể thay thế nhân này bằng thịt gà, thịt heo, thêm ớt chuông, quả bơ, thịt hun khói,…tùy khẩu vị yêu thích.

Bước 6: Chia bột thành các phần bằng nhau. Với lượng bột ở công thức này bạn có thể chuẩn bị khoảng 6-7 chiếc bánh nhé!

Bước 7: Đem cán từng phần bột ra thành những tấm tròn mỏng. Phần vỏ bánh sẽ cần mỏng khoảng 1 – 2mm.

Bước 8: Bắc chảo lên bếp, đợi chảo thật nóng rồi cho vỏ bánh vào nướng vàng hai mặt. Khi nướng các bạn chú ý ấn cho bánh không bị phồng lên nhé. Ngoài cách rán bạn có thể nướng bánh trên than lửa nếu thích.

Bước 9: Nếu dùng các loại nhân như thịt hun khói hay gà rán thì các bạn cần trải một lớp sốt cà chua mỏng lên toàn bộ bề mặt bánh trước khi để nhân vào. Sau đó là phần nhân và gập đôi chiếc bánh lại.

Bước 10: Cho bánh vào chảo để nướng lại một lần nữa để vỏ bánh thật vàng giòn là có thể thưởng thức ngay.
          </Text> */}
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
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