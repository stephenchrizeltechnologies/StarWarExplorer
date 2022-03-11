import { StyleSheet } from 'react-native';

import { Text, View } from './Themed';

export default function PeopleDetail(props) {


    props.navigation.setOptions({ title: props.route.params.item.name });

    return ( 

        <View style={{
            fontSize: 20, fontWeight: 'bold',
        }}>
            <View style={styles.subview}>
                <Text style={styles.lable}>Name</Text>
                <Text style={styles.item}>{props.route.params.item.name}</Text>
            </View>
            <View style={styles.subview}>

                <Text style={styles.lable}>Gender</Text>

                <Text style={styles.item}>{props.route.params.item.gender}</Text>
            </View>
            <View style={styles.subview}>
                <Text style={styles.lable}>Height</Text>

                <Text style={styles.item} >{props.route.params.item.height}</Text>
            </View>
            <View style={styles.subview}>
                <Text style={styles.lable}>Mass</Text>

                <Text style={styles.item} >{props.route.params.item.mass}</Text>
            </View>
            <View style={styles.subview}>
                <Text style={styles.lable}>Hair Color</Text>

                <Text style={styles.item}>{props.route.params.item.hair_color}</Text>
            </View>
            <View style={styles.subview}>
                <Text style={styles.lable}>Skin Color</Text>

                <Text style={styles.item}>{props.route.params.item.skin_color}</Text>
            </View>
            <View style={styles.subview}>
                <Text style={styles.lable}>Birth Year</Text>

                <Text style={styles.item}>{props.route.params.item.birth_year}</Text>
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    subview:{
    padding: 17,
},
    lable: {
    color: 'darkblue',
    fontSize: 20,
    fontWeight:'bold'
},
    item: {
    padding: 10,
    fontSize: 18,
},
});


