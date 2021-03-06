import React from 'react';

import Row from '../row';
import {PersonDetails, PersonList} from '../sw-components';

export default class PeoplePage extends React.Component {

    state = {
        selectedItem: null,
    }

    onItemSelected = (selectedItem) => {
        this.setState({ selectedItem });
    };

    render() {
        return(
            <Row 
            left={<PersonList onItemSelected={this.onItemSelected}/>}
            right={<PersonDetails itemId={this.state.selectedItem}/>}
        />
        );
    }
}