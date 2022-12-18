import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Alert, TouchableOpacity, StyleSheet, ScrollView, LogBox } from 'react-native';
import Style from '../../utilis/AppStyle';
import { Slider } from '@miblanchard/react-native-slider';
import { AutocompleteTags } from 'react-native-autocomplete-tags'
import RadioButtonRN from 'radio-buttons-react-native';
import { TextInput } from 'react-native-paper';
import * as actions from '../../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Location from 'expo-location';


const relationsArr = [
    "First Circle: Mom & Dad & Siblings",
    "Second Circle: Cousins",
    "Third Circle: Childhood Friends",
    "Fourth Circle: Acquaintance",
    "Fifth Circle: Hello Hello",
    "Stranger"
];

const events = [
    { name: '#Wedding' },
    { name: '#Birthday' },
    { name: "#Party" },
];

const genderRbData = [
    { label: 'Male' }, { label: 'Female' }, { label: 'Other' }
];

const interetsData = [
    "Video Games",
    "Nature",
    "Music",
    "Movies",
    "Toys"
]

const Gift = (props) => {

    const [eventTags, setEventTags] = useState([]);
    const [gender, setGender] = useState(null);
    const [budget, setBudget] = useState([1350, 1550]);
    const [interstsTags, setIntretsTags] = useState([]);
    const [age, setAge] = useState(0);
    const [locationRadius, setLocationRadius] = useState([30, 60]);
    const [related, setRelated] = useState(1);
    const [token, setToken] = useState('');
    const [location, setLocation] = useState(null);
    const dispatch = useDispatch();


    useEffect(() => {
        LogBox.ignoreLogs(["VirtualizedLists should never be nested"])
    }, [])



    const getDataFromAsync = useCallback(async ()=> {
        const dataFromAsync = await AsyncStorage.getItem('Account');
        if(dataFromAsync != null){
            const data = JSON.parse(dataFromAsync);
            setToken(data.token);
        }
    },[setToken])

    useEffect(() => {
        getDataFromAsync();
    },[getDataFromAsync])

    useEffect(() => {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);
        })();
      }, []);


console.log('TOKEN: ' + token);


    const find_gift_action = useCallback(async => {
        try {
            if (token && location) {
                const action = actions.find_gift(
                    token,location,
                    eventTags, gender, budget,
                    interstsTags, age, locationRadius,
                    related
                );
                dispatch(action);
            } else {
                Alert.alert('Find my gift', 'Missing token or location');
            }
        } catch (error) {
            Alert.alert('Find my gift', error.message);
        }
    })



    return (
        <ScrollView nestedScrollEnabled={true}>
            <View style={Style.container}>
                <Text style={{ fontSize: 25, height: 50 }}>Relation:</Text>
                <View style={{ height: 60, borderTopWidth: 2, borderBottomWidth: 2 }}>
                    <Text style={{ fontSize: 20, textAlign: 'center' }}>{related} :
                        {
                            <Text style={{ fontSize: 20, textAlign: 'center' }}> {relationsArr[related - 1]}</Text>
                        }
                    </Text>
                </View>
                <Slider
                    value={related}
                    step={1}
                    maximumValue={6}
                    minimumValue={1}
                    onValueChange={value => setRelated(value)}
                />


                <Text style={{ fontSize: 25, padding: 10 }}>Enter an Event:</Text>
                <View style={[styles.rowContainer]}>
                    <AutocompleteTags
                        tags={eventTags}
                        suggestions={events}
                        labelExtractor={(item) => item.name}
                        suggestionExtractor={(item) => item.name}
                        onChangeTags={(tags) => setEventTags(tags)}
                        onAddNewTag={(input) => {
                            if (input != '') {
                                if (eventTags.length > 0 && eventTags.find((item) => { if (item.name == '#' + input) return true; }) === undefined) {
                                    setEventTags((tags) => [...tags, { name: '#' + input }]);
                                }
                                else if (eventTags.length === 0) {
                                    setEventTags([{ name: '#' + input }])
                                }
                            }
                        }}
                        onSuggestionPress={(sugg) => {
                            if (eventTags.length > 0 && eventTags.find((item) => { if (item.name == sugg.name) return true }) === undefined)
                                setEventTags((tags) => [...tags, { name: sugg.name }]);
                            else if (eventTags.length === 0)
                                setEventTags([{ name: sugg.name }])
                        }}
                        containerStyle={{ backgroundColor: 'white', padding: 10, borderRadius: 20 }}
                    />
                </View>


                <Text style={{ fontSize: 25, padding: 10 }}>Enter an Interests:</Text>
                <View style={[styles.rowContainer]}>
                    <AutocompleteTags
                        tags={interstsTags}
                        suggestions={interetsData}
                        labelExtractor={(item) => item}
                        suggestionExtractor={(item) => item}
                        onChangeTags={(tags) => setIntretsTags(tags)}
                        onAddNewTag={(input) => {
                            if (input != '') {
                                if (interstsTags.length > 0 && interstsTags.find((item) => { if (item == '#' + input) return true; }) === undefined) {
                                    setIntretsTags((tags) => [...tags, '#' + input]);
                                }
                                else if (interstsTags.length === 0) {
                                    setIntretsTags(['#' + input])
                                }
                            }
                        }}
                        onSuggestionPress={(sugg) => {
                            if (interstsTags.length > 0 && interstsTags.find((item) => { if (item == sugg) return true }) === undefined)
                                setIntretsTags((tags) => [...tags, sugg]);
                            else if (interstsTags.length === 0)
                                setIntretsTags([sugg])
                        }}
                        containerStyle={{ backgroundColor: 'white', padding: 10, borderRadius: 20 }}

                    />
                </View>


                <Text style={{ fontSize: 25, padding: 10 }}>Gender:</Text>
                <RadioButtonRN
                    data={genderRbData}
                    selectedBtn={(gender) => setGender(gender)}
                />


                <Text style={{ fontSize: 25, padding: 10 }}>Age:</Text>
                <TextInput
                    value={age} onChangeText={age => { setAge(age) }}
                    label="Age"
                    placeholder="Enter your age"
                    keyboardType="numeric"
                    right={<TextInput.Icon icon="numeric" />}
                    style={{ marginBottom: 15 }}
                />


                <Text style={{ fontSize: 25, height: 50 }}>Location:</Text>
                <View style={{ height: 60, borderTopWidth: 2, borderBottomWidth: 2, justifyContent: 'center' }}>

                    <Text style={{ fontSize: 20, textAlign: 'center' }}>Min Location: {locationRadius[0]} km{'\n'}Max Location: {locationRadius[1]} km</Text>

                </View>
                <Slider
                    value={locationRadius}
                    step={10}
                    maximumValue={100}
                    minimumValue={0}
                    onValueChange={value => setLocationRadius([value[0], value[1]])}
                />


                <Text style={{ fontSize: 25, height: 50 }}>Budget:</Text>
                <View style={{ height: 60, borderTopWidth: 2, borderBottomWidth: 2, justifyContent: 'center' }}>

                    <Text style={{ fontSize: 20, textAlign: 'center' }}>Min: {budget[0]}${'\n'}Max: {budget[1]}$</Text>

                </View>
                <Slider
                    value={budget}
                    step={200}
                    maximumValue={3000}
                    minimumValue={100}
                    onValueChange={value => setBudget([value[0], value[1]])}
                />


                <TouchableOpacity onPress={find_gift_action} style={Style.btn_container}>
                    <Text style={Style.btn_white_text}>FIND MY GIFT</Text>
                </TouchableOpacity>

            </View>






        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
});

export default Gift;