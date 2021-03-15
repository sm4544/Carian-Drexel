import ValidationComponent from 'react-native-form-validator';
import React, { Component, useState } from 'react';
import {
    View,
    Text,
} from 'react-native';
import styles from '../../../styles/homeScreenStyles';

export default class ReviewCard extends ValidationComponent {
    render() {
        return (
            <View style={{ backgroundColor: 'white', }}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', margin: 20, width: '90%' }}>
                    <View style={{ flex: 1, flexDirection: 'row', width: '90%' }}>
                        <View style={styles.profileHeaderPicCircle}>
                            <Text style={{ fontSize: 20, color: '#307ecc' }}>{this.props.review.review_By.charAt(0)}</Text>
                        </View>
                        <View style={{ justifyContent: "center", alignContent: 'center', alignSelf: 'center', }}>
                            <Text style={styles.profileHeaderText}>{this.props.review.review_By}</Text>
                            <Text style={styles.profileHeaderText}>{this.props.review.review_Timestamp}</Text>
                        </View>
                    </View>

                    <View style={{ justifyContent: "center", alignContent: 'center', alignSelf: 'center', }}>
                        <Text style={styles.profileHeaderText}>{this.props.review.review_Stars}</Text>
                    </View>
                </View>
                <View style={{ justifyContent: 'center', width: '90%', marginLeft: 20 }}>
                    <Text numberOfLines={5}>{this.props.review.review_content}</Text>
                </View>
                <View key={this.props.review.id} style={{ borderTopColor: 'black', borderTopWidth: 1, marginLeft: 20, marginRight: 20, marginTop: 10 }} />

            </View>
        )
    }
};