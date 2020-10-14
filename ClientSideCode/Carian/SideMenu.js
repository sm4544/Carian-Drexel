
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import styles from './styles/SideMenuStyles'

export default class SideMenu extends Component {
  constructor() {
    super();
 
    this.options = [
      {
        mainHeading: 'Main Heading 1',
        subOptions: [
          { secondaryHeading: 'First Screen', navigationPath: 'First' },
        ],
      },
      {
        mainHeading: 'Main Heading 2',
        subOptions: [
          { secondaryHeading: 'Second Screen', navigationPath: 'Second' },
          { secondaryHeading: 'Third Screen', navigationPath: 'Third' },
        ],
      },
    ];
  }

  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            {this.options.map((option, key) => (
              <View>
                <Text style={styles.mainHeading}>{option.mainHeading}</Text>
                {option.subOptions.map((item, key) => (
                  <View style={styles.secondaryHeading} key={key}>
                    <Text onPress={this.navigateToScreen(item.navigationPath)}>
                      {item.secondaryHeading}
                    </Text>
                  </View>
                ))}
              </View>
            ))}
          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text>This is my fixed footer</Text>
        </View>
      </View>
    );
  }
};

