import React, {useState} from 'react';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TextInput
} from 'react-native';

import Styles from './style';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={Styles.container}>
            <Text style={{color: 'black', marginVertical: 8}}>Trigueros es joto</Text>

            <TextInput style={Styles.input}/>
        </View>
    );
}

export default Login;
