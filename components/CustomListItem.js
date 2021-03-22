import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ListItem, Avatar } from "react-native-elements";

// local imports
import { db } from "../firebase";

const CustomListItem = ({ id, chatName, enterChat }) => {

    const [chatMessages, setChatMessages] = useState([]);

    // creating a useEffect
    useEffect(() => {
        const unsubscribe = db.collection('chats').doc(id).collection('messages').orderBy('timestamp', 'desc').onSnapshot((snapshot) => (
            setChatMessages(snapshot.docs.map((doc) => doc.data()))
        ));

        // clean up the function by returning unsubscribe
        return unsubscribe
    }, [input])

    return (
        <ListItem key={id} onPress={() => enterChat(id, chatName)} key={id} bottomDivider>
            <Avatar 
                rounded
                source={{
                    uri: chatMessages?.[0]?.photoURL || 
                    "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
                }}
            />
            {/* // List Item Content */}
            <ListItem.Content>
                {/* List Item Title */}
                <ListItem.Title style={{ fontWeight: "800" }}> 
                    {chatName} 
                </ListItem.Title>
                {/* List Item Subtitle */}
                <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
                    {chatMessages?.[0]?.displayName} : {chatMessages?.[0]?.message}
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}

export default CustomListItem

const styles = StyleSheet.create({})
