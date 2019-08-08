import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

// import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsCollectionFetching, selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
	// state = {
	// 	loading: true
	// };

	componentDidMount() {
		this.props.fetchCollectionsStartAsync();
	// 	const { updateCollections } = this.props;
	// 	const collectionRef = firestore.collection('collections');

	// 	// fetch('https://firestore.googleapis.com/v1/projects/crwn-db-4fed0/databases/(default)/documents/collections')
	// 	// .then(response => response.json())
	// 	// .then(collections => console.log(collections));		
		
	// 	collectionRef.get().then(snapshot => {
	// 		const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
	// 		updateCollections(collectionsMap);
	// 		this.setState({ loading: false });
	// 	});
		
	// 	// collectionRef.onSnapshot(async snapshot => {
	// 	// 	const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
	// 	// 	updateCollections(collectionsMap);
	// 	// 	this.setState({ loading: false });
	// 	// })
	}

	render() {
		const { match, isCollectionFetching, isCollectionLoaded } = this.props;
		// const { loading } = this.state;
		return (
			<div className='shop-page'>
				<Route 
					exact path={`${match.path}`}
					render={props => (<CollectionsOverviewWithSpinner isLoading={!isCollectionLoaded} {...props} />)}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={props => (<CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />)}
				/>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	isCollectionFetching: selectIsCollectionFetching,
	isCollectionLoaded: selectIsCollectionLoaded
});

const mapDispatchToProps = dispatch => ({
	fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
	// updateCollections: collections => dispatch(updateCollections(collections))

});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);