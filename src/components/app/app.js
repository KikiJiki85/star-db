import React, {Component} from 'react';

import Header from '../header';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';

import { SwapiServiceProvider } from '../swapi-service-context';

import ErrorBoundry from '../error-boundry';
import RandomPlanet from '../random-planet';

import './app.css';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';

export default class App extends Component {

    state = {
        swapiService: new SwapiService(),
    };

    onServiceChange = () => {
        this.setState(({swapiService}) => {
            const Service = swapiService instanceof SwapiService ? DummySwapiService :  SwapiService;
            return {
                swapiService: new Service(),
            }
        });
    };



    render() {

        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <div className="stardb-app">
                        <Header onServiceChange={this.onServiceChange}/>
                        <RandomPlanet />

                        <PeoplePage />
                        <PlanetsPage />
                        <StarshipsPage/>

                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
};