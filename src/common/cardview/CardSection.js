import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => (
	<View style={[styles.viewStyle, props.style ]}>{props.children}</View>
	);

const styles = {
	viewStyle: {
		padding: 5,
		backgroundColor: '#FFF',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		borderColor: '#DDDDDD',
	}
};

export { CardSection };
