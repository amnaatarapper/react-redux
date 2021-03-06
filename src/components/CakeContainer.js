import React from 'react';
import { connect } from 'react-redux';

import { buyCake } from '../redux';

const CakeContainer = ({numOfCakes, buyCake}) => {
    return (
        <div>
            <h2>Num of Cakes - {numOfCakes}</h2>
            <button onClick={buyCake}>Buy Cake</button>
        </div>
    )
}

// Access what you need from Redux Store
 // Retrieve State Props
const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

// Dispatch Store Actions
const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => {
            dispatch(buyCake())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);