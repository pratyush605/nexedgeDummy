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
        borderRadius: 20,
        width: screenWidth * 0.8,
        padding: 25,
        marginTop: 25
    },
    selectAccount: {
        borderRadius: 25,
        backgroundColor: '#e0e0e0',
        padding: 25,
        boxShadow: '0 0 8px black'
    },
    circleWithArrow: {
        position: 'absolute',
        right: 10,
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
        marginLeft: 10
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
            <View style={{flexDirection: 'row', width: '100%', marginBottom: 20}}>
                <Icon name='reorder' size={40} style={{paddingTop: 10, paddingLeft: 10}}/>
                <Text style={{paddingTop: 15, marginLeft: 15}}>Investment Report</Text>
            </View>
            <View ref={consolidatedRef} style={styles.container}>
                <View style={{flexDirection: 'row', width: '100%', marginBottom: 20}}>
                    <Icon name='text-snippet' size={40} style={{paddingTop: 10}}/>
                    <Text style={{paddingTop: 15, marginLeft: 15}}>Get Consolidated Report</Text>
                </View>
                <View style={{ borderBottomColor: '#888888', borderBottomWidth: StyleSheet.hairlineWidth, marginTop: 10, marginBottom: 10 }}/>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{marginBottom: 25}}>Select Account: </Text>
                    <View style={styles.circleWithArrow}>
                        <Icon name='keyboard-arrow-right' size={40} color={'white'}/>
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
                                top: reportLayout.height + 10,
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
                                        style={{padding: 10}}
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
                    <Text style={{color: '#888888'}}>{account===''?'Select':account}</Text>
                </Pressable>
            </View>
            <View style={styles.container}>
                <View style={{flexDirection: 'row', width: '100%', marginBottom: 20, alignItems: 'center'}}>
                    <Icon name='list-alt' size={40}/>
                    <Text style={{marginLeft: 15}}>Detailed Report</Text>
                </View>
                <Text style={{marginBottom: 20}}>Capital Gains Report</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{marginBottom: 20}}>File Type: </Text>
                    <View style={styles.filetype}><Text>PDF</Text></View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{marginBottom: 20}}>Select Financial Year: </Text>
                    <View style={[styles.filetype, {width: 120}]}><Text>2025 - 26</Text></View>
                    <View style={styles.circleWithArrow}>
                        <Icon name='keyboard-arrow-right' size={40} color={'white'}/>
                    </View>
                </View>
                <View style={{ borderBottomColor: '#888888', borderBottomWidth: StyleSheet.hairlineWidth, marginTop: 10, marginBottom: 10 }}/>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{marginBottom: 20}}>Transaction Report</Text>
                    <View style={{ position: 'absolute', right: 10,}}>
                        <Icon name='keyboard-arrow-right' size={40} color={'#888888'}/>
                    </View>
                </View>
                <View style={{ borderBottomColor: '#888888', borderBottomWidth: StyleSheet.hairlineWidth, marginTop: 10, marginBottom: 10 }}/>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{marginBottom: 20}}>Dividend Report</Text>
                    <View style={{ position: 'absolute', right: 10,}}>
                        <Icon name='keyboard-arrow-right' size={40} color={'#888888'}/>
                    </View>
                </View>
            </View>
            <Footer/>
        </View>
    );
};

export default InvestmentReportScreen;