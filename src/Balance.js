import React from 'react';


class Balance extends React.Component {
    constructor(props) {
        super(props)
    }
    render () {
        const style={
            width: '100&'
        }
        return (
            
                <div className="uk-container" style={style}>
                
                <h2 className='uk-align-left'>{this.props.getAccountOwner('https://api.teller.io/accounts')}</h2>
                <h2 className='uk-align-right'></h2>
                </div>
        )
    }
}

export default Balance