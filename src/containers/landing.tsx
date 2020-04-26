import * as React from 'react';

import { CardsListComponent, LandingComponent } from '../components';

export class LandingContainer extends React.Component<{}/*props*/, {}/*state*/> {

    public render(): React.ReactNode {
        return (
            <div>
                <LandingComponent/>
                <div className="wrapper">
                    <CardsListComponent/>
                </div>
            </div>
        );
    }
}