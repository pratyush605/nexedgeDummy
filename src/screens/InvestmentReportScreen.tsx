import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, Alert, Pressable, TouchableWithoutFeedback } from 'react-native';
import React, { useRef, useState } from 'react';
import Footer from '../components/Footer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { screenHeight, screenWidth } from '../utils/Constants';
import { reportLayout } from '../utils/Types';

const styles = StyleSheet.create({
    investmentReport: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#e0e0e0'
    },
    container: {
        backgroundColor: '#fff',
        borderRadius: screenWidth * 0.05,
        width: screenWidth * 0.8,
        padding: screenWidth * 0.05 * 0.8,
        marginTop: screenHeight * 0.025
    },
    selectAccount: {
        borderRadius: screenWidth * 0.06,
        backgroundColor: '#e0e0e0',
        padding: screenWidth * 0.05 * 0.8,
        boxShadow: '0 0 8px black'
    },
    circleWithArrow: {
        position: 'absolute',
        right: screenWidth * 0.02,
        borderRadius: 50,
        width: screenWidth * 0.2 * 0.35,
        height: screenWidth * 0.2 * 0.35,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center'
    },
    filetype: {
        alignItems: 'center',
        justifyContent: 'center',
        width: screenWidth * 0.15,
        height: screenHeight * 0.2 * 0.2,
        borderRadius: 50,
        boxShadow: '0 0 8px black',
        marginLeft: screenWidth * 0.02
    },
    title: {
        flexDirection: 'row',
        width: '100%',
        marginBottom: screenHeight * 0.02,
    },
    divider: {
        borderBottomColor: '#888888',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginVertical: screenHeight * 0.01,
    }
});

const InvestmentReportScreen = () => {

    const accountOptions = [
        { label: 'My Family', value: 'myFamily' },
        { label: 'Personal', value: 'personal' },
        { label: 'Business', value: 'business' },
    ];

    const [modalVisible, setModalVisible] = useState(false);
    const [account, setAccount] = useState('');
    const [reportLayout, setReportLayout] = useState<reportLayout>({ x: 0, y: 0, width: 0, height: 0 });

    const consolidatedRef = useRef<View>(null);

    const showModal = () => {
        if (consolidatedRef.current) {
            consolidatedRef.current.measure((pageX, pageY, width, height) => {
                setReportLayout({ x: pageX, y: pageY, width, height });
                setModalVisible(true);
            });
        }
    };

    return (
        <View style={styles.investmentReport}>
            <View style={styles.title}>
                <Icon name='reorder' size={screenWidth * 0.067} style={{paddingTop: screenWidth * 0.02, paddingLeft: screenWidth * 0.02}}/>
                <Text style={{paddingTop: screenWidth * 0.025, marginLeft: screenWidth * 0.025, fontSize: screenWidth * 0.025}}>Investment Report</Text>
            </View>
            <View ref={consolidatedRef} style={styles.container}>
                <View style={styles.title}>
                    <Icon name='text-snippet' size={screenWidth * 0.067} style={{paddingTop: screenWidth * 0.015}}/>
                    <Text style={{paddingTop: screenWidth * 0.025, marginLeft: screenWidth * 0.025, fontSize: screenWidth * 0.025}}>Get Consolidated Report</Text>
                </View>
                <View style={styles.divider}/>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{marginBottom: screenWidth * 0.04}}>Select Account: </Text>
                    <View style={styles.circleWithArrow}>
                        <Icon name='keyboard-arrow-right' size={screenWidth * 0.067} color={'white'}/>
                    </View>
                </View>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                        <View style={{flex: 1}}>
                            <View style={[styles.selectAccount, {
                                position: 'absolute',
                                top: reportLayout.height + screenHeight * 0.01,
                                left: reportLayout.x,
                                width: reportLayout.width
                            }]}>
                                {accountOptions.map((option) => (
                                    <TouchableOpacity
                                        key={option.value}
                                        onPress={() => {
                                            setAccount(option.value);
                                            setModalVisible(false);
                                        }}
                                        style={{padding: screenWidth * 0.03}}
                                    >
                                        <Text>{option.label}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
                <Pressable
                    onPress={showModal}>
                    <Text style={{color: '#888888', fontSize: screenWidth * 0.025}}>{account===''?'Select':account}</Text>
                </Pressable>
            </View>
            <View style={styles.container}>
                <View style={[styles.title, {alignItems: 'center'}]}>
                    <Icon name='list-alt' size={screenWidth * 0.067}/>
                    <Text style={{marginLeft: screenWidth * 0.025, fontSize: screenWidth * 0.025}}>Detailed Report</Text>
                </View>
                <Text style={{marginBottom: screenHeight * 0.02, fontSize: screenWidth * 0.025}}>Capital Gains Report</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{marginBottom: screenHeight * 0.02}}>File Type: </Text>
                    <View style={styles.filetype}><Text style={{fontSize: screenWidth * 0.025}}>PDF</Text></View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{marginBottom: screenHeight * 0.02}}>Select Financial Year: </Text>
                    <View style={[styles.filetype, {width: screenWidth * 0.2}]}><Text style={{fontSize: screenWidth * 0.025}}>2025 - 26</Text></View>
                    <View style={styles.circleWithArrow}>
                        <Icon name='keyboard-arrow-right' size={screenWidth * 0.067} color={'white'}/>
                    </View>
                </View>
                <View style={styles.divider}/>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{marginBottom: screenHeight * 0.02}}>Transaction Report</Text>
                    <View style={{ position: 'absolute', right: screenWidth * 0.02,}}>
                        <Icon name='keyboard-arrow-right' size={screenWidth * 0.067} color={'#888888'}/>
                    </View>
                </View>
                <View style={styles.divider}/>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{marginBottom: screenHeight * 0.02}}>Dividend Report</Text>
                    <View style={{ position: 'absolute', right: screenWidth * 0.02,}}>
                        <Icon name='keyboard-arrow-right' size={screenWidth * 0.067} color={'#888888'}/>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default InvestmentReportScreen;