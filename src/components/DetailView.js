/**
 * DetailView is dispaly all the details of Movie 
 * each information display in card section
 */
import React, { Component } from 'react'
import { Text, SafeAreaView, ScrollView } from 'react-native'
import styles from '../helpers/styles'
import OfflineNotice from '../common/OfflineNotice'
import { Card, CardSection, ImageView } from '../common'


class DetailView extends Component {
   // Deafult values
    item = {}

    componentWillMount() {
        this.item = this.props.navigation.getParam('singleItem', {})
    }
    
    render() {
        return (
            <SafeAreaView style={styles.container}>
            <OfflineNotice/>
                <ScrollView>
                    <Card>
                        <CardSection>
                            <ImageView
                                imageStyle={styles.detailImage}
                                resizeMode='contain'
                                uri={this.item.Poster ? this.item.Poster : (this.item['Poster ']) ? this.item['Poster '] : ''}
                                errorUri={require('../images/default-image.png')}
                            />
                        </CardSection>
                        <CardSection>
                            <Text style={[styles.textTitle, styles.layerH]}>{this.item.Title}</Text>
                            <Text style={[styles.textDate, styles.textItalic,]}>(Year {this.item.Year})</Text>
                        </CardSection>
                        <CardSection style={styles.eqContent}>
                            <Text style={styles.textPlain}>
                                <Text style={styles.textBold}>Rating </Text>
                                {this.item.Rated}
                            </Text>
                            <Text style={styles.textPlain}>
                                <Text style={styles.textBold}>Runtime </Text>
                                {this.item.Runtime}
                            </Text>
                        </CardSection>
                        <CardSection>
                            <Text style={styles.textPlain}>
                                <Text style={styles.textBold}>Genre </Text>
                                {this.item.Genre}
                            </Text>
                        </CardSection>
                        <CardSection>
                            <Text style={styles.textPlain}>
                                <Text style={styles.textBold}>Director </Text>
                                {this.item.Director}
                            </Text>
                        </CardSection>
                        <CardSection>
                            <Text style={styles.textPlain}> <Text style={styles.textBold}>Writer </Text>
                                {this.item.Writer}
                            </Text>
                        </CardSection>
                        <CardSection>
                            <Text style={styles.textPlain}> <Text style={styles.textBold}>Actors </Text>
                                {this.item.Actors}
                            </Text>
                        </CardSection>
                        <CardSection>
                            <Text style={styles.textPlain}> <Text style={styles.textBold}>Plot </Text>
                                {this.item.Plot}
                            </Text>
                        </CardSection>

                        <CardSection style={styles.eqContent}>
                            <Text style={styles.textPlain}> <Text style={styles.textBold}>Country </Text>
                                {this.item.Country}
                            </Text>
                            <Text style={styles.textPlain}> <Text style={styles.textBold}>Language </Text>
                                {this.item.Language}
                            </Text>
                        </CardSection>
                        <CardSection>
                            <Text style={styles.textPlain}> <Text style={styles.textBold}>Awards </Text>
                                {this.item.Awards}
                            </Text>
                        </CardSection>
                    </Card>
                </ScrollView>
            </SafeAreaView>

        )
    }
}

export default DetailView