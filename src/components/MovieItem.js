import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Card, CardSection, ImageView } from '../common'
import styles from '../helpers/styles'

export default MovieItem = (props) => {

    return (
        <TouchableOpacity onPress={() => props.mainProps.navigation.navigate('DetailView', { singleItem: props.item })}>
            <Card>
                <CardSection>
                    <ImageView
                        imageStyle={styles.thumbImage}
                        uri={props.item.Poster ? props.item.Poster : (props.item['Poster '])?props.item['Poster ']:''}
                        errorUri={require('../images/default-image.png')}
                    />
                    <View>
                        <CardSection>
                            <Text style={styles.textTitle}>{props.item.Title}</Text>
                        </CardSection>
                        <CardSection>
                            <Text style={styles.textDate}>Runtime : {props.item.Runtime} ({props.item.Year})</Text>
                        </CardSection>
                        <CardSection>
                            <Text style={styles.textItalic}>{props.item.Language}</Text>
                        </CardSection>
                    </View>
                </CardSection>

            </Card>
        </TouchableOpacity>
    )
}