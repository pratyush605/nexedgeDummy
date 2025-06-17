import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Footer from '../components/Footer';
import { screenHeight, screenWidth } from '../utils/Constants';
import PerformanceBarChart from '../components/PerformanceBarChart';

const styles = StyleSheet.create({
    performance: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#e0e0e0'
    },
    container: {
        backgroundColor: '#fff',
        borderRadius: 20,
        width: screenWidth * 0.8,
        padding: 20,
        marginTop: 25
    },
    group: {
        flex: 1,
        backgroundColor: '#e0e0e0',
        borderRadius: 50,
        width: 45,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    sectionHeader: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 10,
        marginTop: 10,
        color: '#000',
    },
    sectionSubHeader: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 14,
    },
    sectionSubText: {
        fontSize: 13,
        textAlign: 'center',
        fontStyle: 'italic',
        marginBottom: 20,
        color: '#444',
    },
    dataCard: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 16,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#021B78',
        width: screenWidth * 0.8,
    },
});

const PerformanceScreen = () => {

    const chartData = [
        { label: '1 Month', strategy: 14, benchmark: 8 },
        { label: '3 Month', strategy: -14, benchmark: 10 },
        { label: '6 Month', strategy: 17, benchmark: 10 },
        { label: '1 Year', strategy: 14, benchmark: 8 },
        { label: 'Since Inception', strategy: 27, benchmark: 15 },
    ];

  return (
    <View style={styles.performance}>
        <ScrollView contentContainerStyle={{flexGrow: 1, paddingBottom: screenHeight * 0.2 * 0.35}}>
            <View style={styles.container}>
                <View style={{flexDirection: 'row', width: '100%', marginBottom: 20}}>
                    <View style={styles.group}>
                        <Icon name='group' size={30} color={'blue'}/>
                    </View>
                    <View style={{flex: 7}}>
                        <Text style={{fontSize: 10, color: '#888888'}}>Hello</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text>My Family</Text>
                            <Icon name='keyboard-arrow-down' size={30}></Icon>
                        </View>
                    </View>
                    <View style={{flex: 4, position: 'absolute', right: 0, alignItems: 'flex-end'}}>
                        <View style={[styles.group, {backgroundColor: 'blue', height: 30, width: 30}]}>
                            <Icon name='refresh' size={20} color={'white'}/>
                        </View>
                        <Text style={{fontSize: 8, color: '#888888'}}>Last Updated</Text>
                        <Text style={{fontSize: 8}}>17-06-2025 01:13 PM</Text>
                    </View>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{flexDirection: 'row', width: '100%', marginBottom: 20}}>
                    <View style={styles.group}>
                        <Icon name='webhook' size={30} color={'blue'}/>
                    </View>
                    <View style={{flex: 7}}>
                        <Text style={{fontSize: 10, color: '#888888'}}>Asset Class</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text>Equities</Text>
                            <Icon name='keyboard-arrow-down' size={30}></Icon>
                        </View>
                    </View>
                </View>
            </View>
            <View style={[styles.container, {borderColor: 'blue', borderWidth: 1}]}>
                <Text>Equities</Text>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1}}>
                        <Text style={{color: '#888888', marginTop: 10, marginBottom: 10}}>Inspection Date</Text>
                        <Text style={{color: '#888888', marginTop: 10, marginBottom: 10}}>Cash Inflow</Text>
                        <Text style={{color: '#888888', marginTop: 10, marginBottom: 10}}>Cash Outflow</Text>
                        <Text style={{color: '#888888', marginTop: 10, marginBottom: 10}}>Cash On Hand</Text>
                        <Text style={{color: '#888888', marginTop: 10, marginBottom: 10}}>Dividends</Text>
                        <Text style={{color: '#888888', marginTop: 10, marginBottom: 10}}>Current Value</Text>
                        <Text style={{color: '#888888', marginTop: 10, marginBottom: 10}}>Portfolio Abs. Gain</Text>
                        <Text style={{color: '#888888', marginTop: 10, marginBottom: 10}}>BM Abs. Gain</Text>
                        <Text style={{color: '#888888', marginTop: 10, marginBottom: 10}}>Portfolio XIRR</Text>
                        <Text style={{color: '#888888', marginTop: 10, marginBottom: 10}}>BM XIRR</Text>
                    </View>
                    <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                        {[
                            '17 June 2025',
                            '₹ 2,500.00',
                            '₹ 2,500.00',
                            '₹ 2,500.00',
                            '₹ 2,500.00',
                            '₹ 2,500.00',
                            '₹ 2,500.00 (10.2%)',
                            '₹ 2,500.00 (10.2%)',
                            '10.2%', '10.2%'
                        ].map((value, index) => (
                            <Text key={index} style={{marginTop: 10, marginBottom: 10}}>{value}</Text>
                        ))}
                    </View>
                </View>
            </View>

        <Text style={styles.sectionHeader}>Lorem Ipsum</Text>

        <View style={styles.dataCard}>
          <Text style={styles.sectionSubHeader}>Absolute return as of April 2025</Text>
          <Text style={styles.sectionSubText}>Inception Date: 20th March 2023</Text>

          <PerformanceBarChart data={chartData} />
        </View>
        </ScrollView>
        <Footer/>
    </View>
  );
};

export default PerformanceScreen;