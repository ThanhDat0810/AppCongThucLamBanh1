import React from "react";
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from "react-native";
import { Svg, Path } from "react-native-svg";

import {
useFonts,
} from "@expo-google-fonts/dev";

export default function AdminProductNew (){

	let [fontsLoaded] = useFonts({
	});

	return (
		<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {stylesheet._Admin_Product_New}>
			<View style = {stylesheet._txtRecepi}>
				<View style = {stylesheet._search}>
				</View>
				<View style = {[stylesheet._C_ng_Th_c_, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
				<Text style = {[stylesheet._C_ng_Th_c_, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
					Công Thức:
				</Text>
				</View>
			</View>
			<View style = {stylesheet._txtMaterial}>
				<View style = {stylesheet._search_2}>
				</View>
				<View style = {[stylesheet._Nguy_n_Li_u_, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
				<Text style = {[stylesheet._Nguy_n_Li_u_, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
					Nguyên Liệu:
				</Text>
				</View>
			</View>
			<View style = {stylesheet._txtName}>
				<View style = {stylesheet._search_3}>
				</View>
				<View style = {[stylesheet._T_n_, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
				<Text style = {[stylesheet._T_n_, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
					Tên:
				</Text>
				</View>
			</View>
			<View style = {stylesheet._txtImages}>
				<View style = {stylesheet._search_4}>
				</View>
				<View style = {[stylesheet._H_nh_, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
				<Text style = {[stylesheet._H_nh_, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
					Hình:
				</Text>
				</View>
			</View>
			<View style = {stylesheet._btnEdit}>
				<View style = {stylesheet._Rectangle_283}>
				</View>
				<View style = {[stylesheet._Th_m_S_n_Ph_m, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
				<Text style = {[stylesheet._Th_m_S_n_Ph_m, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
					Thêm Sản Phẩm
				</Text>
				</View>
			</View>
		</View>
		</ScrollView>
	)
}

const stylesheet = StyleSheet.create({
	_Admin_Product_New: {
		position: "relative",
		width: Dimensions.get("window").width,
		height: 800,
		borderRadius: 0,
		overflow: "hidden",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(214, 75, 75, 1)",
		left: 0,
		top: 0,
	},
	_txtRecepi: {
		position: "absolute",
		width: 340,
		height: 241,
		transform: [
			{translateX: 10},
			{translateY: 459},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_search: {
		position: "absolute",
		width: 340,
		height: 205,
		borderRadius: 20,
		opacity: 1,
		left: 0,
		right: "auto",
		top: 36,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 1)",
	},
	C_ng_Th_c: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 19,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Prompt",
		fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 24,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "center",
		textAlignVertical: "center",
		letterSpacing: 0.1,
	},
	_txtMaterial: {
		position: "absolute",
		width: 340,
		height: 248,
		transform: [
			{translateX: 10},
			{translateY: 196},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_search_2: {
		position: "absolute",
		width: 340,
		height: 216.11428833007812,
		borderRadius: 20,
		opacity: 1,
		left: 0,
		right: "auto",
		top: 31.8857421875,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 1)",
	},
	Nguy_n_Li_u: {
		position: "absolute",
		width: 150,
		height: 31.885713577270508,
		left: 19,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Prompt",
		fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 24,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "center",
		textAlignVertical: "center",
		letterSpacing: 0.1,
	},
	_txtName: {
		position: "absolute",
		width: 340,
		height: 76,
		transform: [
			{translateX: 10},
			{translateY: 105},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_search_3: {
		position: "absolute",
		width: 340,
		height: 40,
		borderRadius: 20,
		opacity: 1,
		left: 0,
		right: "auto",
		top: 36,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 1)",
	},
	T_n: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 19,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Prompt",
		fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 24,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "center",
		textAlignVertical: "center",
		letterSpacing: 0.1,
	},
	_txtImages: {
		position: "absolute",
		width: 340,
		height: 76,
		transform: [
			{translateX: 10},
			{translateY: 14},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_search_4: {
		position: "absolute",
		width: 340,
		height: 40,
		borderRadius: 20,
		opacity: 1,
		left: 0,
		right: "auto",
		top: 36,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 1)",
	},
	H_nh: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 19,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Prompt",
		fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 24,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "center",
		textAlignVertical: "center",
		letterSpacing: 0.1,
	},
	_btnEdit: {
		position: "absolute",
		width: 340,
		height: 40,
		transform: [
			{translateX: 10},
			{translateY: 730},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Rectangle_283: {
		position: "absolute",
		width: 340,
		height: 40,
		borderRadius: 10,
		opacity: 1,
		borderWidth: 2,
		borderColor: "rgba(0, 0, 0, 1)",
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 1)",
	},
	_Th_m_S_n_Ph_m: {
		position: "absolute",
		width: 340,
		height: 40,
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Prompt",
		fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 24,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "center",
		textAlignVertical: "center",
		letterSpacing: 0.1,
	},
});