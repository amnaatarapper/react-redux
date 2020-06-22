import React from 'react';
import { connect } from 'react-redux';

import { buyIcecream } from '../redux';

const IcecreamContainer = ({numOfIcecreams, buyIcecream}) => {
    return (
        <div>
            <h2>Num of Icecreams - {numOfIcecreams}</h2>
            <button onClick={buyIcecream}>Buy Cake</button>
        </div>
    )
}

// Access what you need from Redux Store
 // Retrieve State Props
const mapStateToProps = state => {
    return {
        numOfIcecreams: state.icecream.numOfIcecreams
    }
}

// Dispatch Store Actions
const mapDispatchToProps = dispatch => {
    return {
        buyIcecream: () => {
            dispatch(buyIcecream())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IcecreamContainer);