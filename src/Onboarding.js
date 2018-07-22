import React from 'react';
import { Image, FlatList, StyleSheet, View } from 'react-native';
import PageControl from 'react-native-page-control';
import OnboardingPage from './OnboardingPage';

export default class Onboarding extends React.Component {
    state = {currentPage: 0};

    handleScrollEnd = (event) => {
        const { contentOffset, layoutMeasurement } = event.nativeEvent;
        const currentPage = contentOffset.x / layoutMeasurement.width;
        this.setState({currentPage});
    }

    handleActionPressed = (page) => {
        page.action.onPress(this);
    }
    
    moveToNextPage = () => this.scrollView.scrollToIndex({index: this.state.currentPage + 1, viewOffset: 0});
    moveToPreviousPage = () => this.scrollView.scrollToIndex({index: this.state.currentPage - 1, viewOffset: 0});

    moveToPage = (page) => this.scrollView.scrollToIndex({index: page, viewOffset: 0});
    
    render() {
        const { currentPage } = this.state
        const { backgroundImage, pages } = this.props;

        return (
            <View style={styles.container}>
                <Image
                    source={backgroundImage}
                    style={styles.backgroundImage}
                    resizeMode="cover"
                />
                <View style={styles.backgroundCover} />
                <FlatList
                    ref={scrollView => this.scrollView = scrollView}
                    pagingEnabled={true}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={pages}
                    renderItem={({item, index}) => (
                        <OnboardingPage
                            page={item}
                            index={index}
                            onActionPressed={this.handleActionPressed}
                        />
                    )}
                    keyExtractor={(item, index) => item + index}
                    onMomentumScrollEnd={this.handleScrollEnd}
                />
                <PageControl
                    style={styles.pageControl}
                    numberOfPages={pages.length}
                    currentPage={currentPage}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backgroundImage: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        width: null,
        height: null
    },
    backgroundCover: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: '#000',
        opacity: 0.6
    },
    pageControl: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 20
    }
});