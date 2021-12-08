import React, {useState} from 'react'

import  {StyleSheet,View,Image, Text} from "react-native";
import {SocialIcon} from 'react-native-elements'
import {TextInput, Button, Paragraph} from "react-native-paper";


function LoginScreen(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    
    const [eye, setEye] = useState(false);
    const eyeOpen = () => { <TextInput.Icon name="eye" color="#009788"/> };
    const eyeClosed = () => { <TextInput.Icon name="eye-off" color="#009788"/> };

    function eyeChanging() {
        const [eye, setEye] = useState(false);
        if (eye) {
            return eyeOpen
        } else {
            return eyeClosed
        }
    }
    

    return (
        <View style={styles.container}>

            <Image
                style={styles.imageLogin}
                source={require('../assets/loginBackground.jpg')}
            />
            <Text style={{fontSize: 20, fontStyle: 'italic', fontWeight: 'bold', marginTop: 20}}>Rejoignez la communauté</Text>
            <Text style={{fontSize: 20, fontStyle: 'italic', fontWeight: 'bold', marginBottom: 20}}>des M.eaters.</Text>

            <TextInput style={styles.input, {width: "80%", marginBottom: 10}}
                mode="outlined"
                label="Adresse email"
                placeholder="hello@matable.com"
                onChangeText={(val) => setEmail(val)}
            />
            
            <TextInput style={styles.input, {width: "80%", marginBottom: 30}}
                mode="outlined"
                label="Mot de passe"
                placeholder="********"
                secureTextEntry
                onPress={() => setEye(true)}
                right={<TextInput.Icon name="eye" color="#009788"/>, <TextInput.Icon name="eye-off" color="#009788"/>}
                onChangeText={(val) => setPassword(val)}
            />

            <Button style={styles.button}
                mode="contained" 
                labelStyle={{fontSize: 20, fontWeight: "bold", color: "#009788", paddingTop: 4}}
                onPress={() => {props.navigation.navigate('Home')}}>
                Connexion
            </Button>

            <SocialIcon 
                style={{width: "80%", marginBottom: 10}}
                labelStyle={{ color: "#888888"}}
                button light type='google'
                title="Se connecter avec Google"
                
            />

            <SocialIcon
                style={{width: "80%", marginBottom: 20}}
                button title='Se connecter avec Facebook'
                type='facebook'
            />

            <Text
                style={{fontSize: 18, color: "#1A72C2", textDecorationLine: "underline", marginBottom: 20}}
                onPress={() => {props.navigation.navigate('Register') }}>
                Créer un compte
            </Text>

            <Paragraph
                style={{fontSize: 12, marginBottom: 25}}>
                En continuant, vous acceptez nos "
                    <Text 
                        onPress={() => {props.navigation.navigate('Register') }} 
                        style={{fontSize: 12, marginBottom: 25, color: "#1A72C2", textDecorationLine: "underline"}}>Conditions Générales.
                    </Text>"
            </Paragraph>
        
        </View>



    )

}

export default LoginScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#AADEE1",
    },
    imageLogin :{
        alignItems:"flex-start",
        justifyContent:"flex-start",
        flex: 0.9,
        width: '95%',
        resizeMode: 'cover',
        marginTop: 25,
        borderRadius: 10
    },
    input: {
        flex: 0.1
    },
    button: {
        marginBottom: 15,
        backgroundColor: "#FFC960",
        width: "80%",
        height: 50,
        borderRadius: 50,
        textAlignVertical: "center",
        fontSize: 20
    }
});