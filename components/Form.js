import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import PressableTab from './PressableTab';
import CompanyTab from '../components/Tab/CompanyTab';
import PaymentTab from '../components/Tab/PaymentTab';
import TeamTab from '../components/Tab/TeamTab';
import MobileTab from './Tab/MobileTab';

export default function Form() {

    const [tab, setTab] = useState('company');

    let content;

    let myTabStyleCompany = styles.tabCompany;
    let myTabStylePayment = styles.tabPayment;
    let myTabStyleTeam = styles.tabTeam;
    let myTabStyleMobile = styles.tabMobile;

    if(tab === 'company'){
        myTabStyleCompany = styles.tabPressed;
        content = <CompanyTab/>;
    }else if(tab === 'payment'){
        myTabStylePayment = styles.tabPressed;
        content = <PaymentTab/>;
    }else if(tab === 'team'){
        myTabStyleTeam = styles.tabPressed;
        content = <TeamTab/>;
    }else{
        myTabStyleMobile = styles.tabPressed; 
        content = <MobileTab/>
    }


  return (
    <View style={styles.container}>
        <Text style={styles.businessText}> Business settings </Text>
        <View style={styles.tabView}>
            <PressableTab tab='Company' style={myTabStyleCompany} onPress={() => setTab('company')}/>
            <PressableTab tab='Payment' style={myTabStylePayment} onPress={() => setTab('payment')}/>
            <PressableTab tab='Team' style={myTabStyleTeam} onPress={() => setTab('team')}/>
            <PressableTab tab='Mobile apps' style={myTabStyleMobile} onPress={() => setTab('mobile')}/>
        </View>
        <View style={styles.contentView}>
            {content}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '92%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
    },
    businessText: {
        fontWeight: 'bold',
        fontSize: 17,
    },
    tabView: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
    },
    tabCompany: {
        borderBottomColor: 'gray',
        borderBottomWidth: 2,
        alignItems: 'center',
        paddingHorizontal: 4,
        paddingBottom: 8,
        width: '25%',
    },
    tabPayment: {
        borderBottomColor: 'gray',
        borderBottomWidth: 2,
        alignItems: 'center',
        paddingHorizontal: 4,
        paddingBottom: 8,
        width: '25%',
    },
    tabTeam: {
        borderBottomColor: 'gray',
        borderBottomWidth: 2,
        alignItems: 'center',
        paddingHorizontal: 4,
        paddingBottom: 8,
        width: '25%',
    },
    tabMobile: {
        borderBottomColor: 'gray',
        borderBottomWidth: 2,
        alignItems: 'center',
        paddingHorizontal: 4,
        paddingBottom: 8,
        width: '25%',
    },
    tabPressed: {
        borderBottomColor: '#A020F0',
        borderBottomWidth: 2,
        alignItems: 'center',
        paddingHorizontal: 4,
        paddingBottom: 8,
        width: '25%',
    },
    contentView: {
        marginTop: 20,
        marginBottom: 10,
    }
})