import React, { Component } from 'react'
import { Image } from 'react-native'
import { log } from '../../helpers';

export class ImageView extends Component {
    state = {
        image: {}
    }
    componentDidMount(){
        this.setState({ image: { uri: this.props.uri.toString().trim() } })
    }
    onError(e) {
        log(`ImageView Error: ${e.nativeEvent.error}`)
        this.setState({ image: this.props.errorUri})
    }

    render() {
        return (
            <Image style={this.props.imageStyle}
                source={this.state.image}
                resizeMode={(this.props.resizeMode?this.props.resizeMode:'stretch')}
                onError={this.onError.bind(this)}
            />
        )
    }
}