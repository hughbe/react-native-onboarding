import React from 'react';
import { Dimensions, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const OnboardingPage = ({ page, index, onActionPressed }) => (
    <View style={onboardingPageStyles.contentContainer}>
        <View style={onboardingPageStyles.content}>
            <Text style={onboardingPageStyles.introduction}>{page.title}</Text>
            <Text style={onboardingPageStyles.introductoryText}>{page.subtitle}</Text>
        </View>
        {page.action &&
        <View style={onboardingPageStyles.actionContainer}>
            <TouchableOpacity onPress={() => onActionPressed(page, index)}>
                <Text style={onboardingPageStyles.action}>{page.action.title}</Text>
            </TouchableOpacity>
        </View>
        }
    </View>
);
export default OnboardingPage;

const onboardingPageStyles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        width: Dimensions.get('window').width,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        width: '87.5%'
    },
    introduction: {
        fontSize: 40,
        ...Platform.select({
            ios: {
                fontFamily: 'Helvetica-Light'
            },
            android: {
                fontWeight: '300'
            }
        }),
        color: '#fff',
        marginBottom: 20,
        textAlign: 'center'
    },
    introductoryText: {
        fontSize: 28,
        ...Platform.select({
            ios: {
                fontFamily: 'Helvetica-Light'
            },
            android: {
                fontWeight: '300'
            }
        }),
        color: '#fff',
        textAlign: 'center'
    },
    actionContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 50
    },
    action: {
        fontSize: 28,
        ...Platform.select({
            ios: {
                fontFamily: 'Helvetica-Light'
            },
            android: {
                fontWeight: '300'
            }
        }),
        color: '#fff',
        textAlign: 'center'
    }
});
