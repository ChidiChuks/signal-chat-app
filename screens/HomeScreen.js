import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Avatar } from "react-native-elements";
import CustomListItem from '../components/CustomListItem';

// Personal imports
import { auth, db } from "../firebase";

const HomeScreen = ({ navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Signal",
            headerStyle: { backgroundColor: "#fff" },
            headerTitleStyle: { color: "black" },
            headerTintColor: "black",
            headerLeft: () => <View style={{ marginLeft: 20 }}>
                <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
                {/* <TouchableOpacity></TouchableOpacity> */}
            </View>,
        });
    }, []);

    return (
        <SafeAreaView>
            <ScrollView>
                <CustomListItem />
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({});