/**
 * DashboardGrid Conatin list of Items 
 * MovieItem is a component which load the view of particular item
 */
import React from 'react'
import { SafeAreaView, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { getListData } from '../acitons'
import MovieItem from './MovieItem';
import OfflineNotice from '../common/OfflineNotice'


class DashboardGrid extends React.Component {
    componentDidMount() {
        this.props.getListData()
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <OfflineNotice />
                {(this.props.error)?<Text style={styles.error}>{this.props.error}</Text>:null}
                <FlatList
                    data={this.props.listData.movies}
                    renderItem={({ item }) => <MovieItem item={item} mainProps={this.props} />}
                    keyExtractor={(_, index) => index.toString()}
                />
            </SafeAreaView>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        loading: state.dashboardReducer.loading,
        listData: state.dashboardReducer.listData,
        error: state.dashboardReducer.error
    }
}

export default connect(mapStateToProps, { getListData })(DashboardGrid)