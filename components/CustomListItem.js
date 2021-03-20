import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ListItem, Avatar } from "react-native-elements";

const CustomListItem = ({ id, chatName, enterChat }) => {
    return (
        <ListItem onPress={() => enterChat(id, chatName)} key={id} bottomDivider>
            <Avatar 
                rounded
                source={{
                    uri: "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
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
                    This is a test subtitle
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}

export default CustomListItem

const styles = StyleSheet.create({})
