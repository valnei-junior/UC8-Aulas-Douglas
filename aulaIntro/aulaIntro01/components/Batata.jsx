
import { View, Text, StyleSheet } from 'react-native';


export default function Batata(){
    return(
        <View>
            <Text style={styles.Text}>Olá mundo</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Text:{
        color: '#fff',
    }
})