import React from "react";
import { Text, View} from 'react-native';


const Details = ({route}) => {
    const {item} = route.params;
    return (
        <View>
            <Text>Hello</Text>
        </View>
    )
};


export default Details;