import React, {Component} from 'react';

import Header from '../header';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';

import './app.css';
import Row from '../row';
import ErrorBoundry from '../error-boundry';
import ItemDetails from '../item-details/item-details';



export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        showRandomPlanet: true,
        hasError: false,
    };

    componentDidCatch() {
        console.log('componentDidCatch()');
        this.setState({ hasError: true })
    };

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet,
            };
        })
    };


    
    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        // const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

        const {getPerson, getPersonImage, getStarship, getStarshipImage} = this.swapiService;

        const personDetails = (
            <ItemDetails 
                itemId={3}
                getData={getPerson}
                getImageUrl={getPersonImage} />
        );

        const starshipDetails = (
            <ItemDetails 
                itemId={5}
                getData={getStarship}
                getImageUrl={getStarshipImage} />
        );

        return (
            <ErrorBoundry>
                <div>
                    <Header />
                    <Row left={personDetails}
                        right={starshipDetails}/>
                </div>
            </ErrorBoundry>
        );
    }
};