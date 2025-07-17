import { View } from "react-native"
import {Link} from 'expo-router'
import {styles} from '../styles/styles'

export default function Settings(){
    return(

        <View style={[styles.container, {backgroundColor: '#d3d3'}]}>
            <Link push style={styles.textPadrao}  href='/'>Ir para Home</Link>
            <Link navigate style={styles.textPadrao}  href='/user'>Ir para Usuários</Link>
            <Link href='/asdmalk'>Página erro</Link>
        </View>
    )
}
