import * as React from 'react';

import { CardsListComponent, LandingComponent, ListViewComponent } from '../components';

export class LandingContainer extends React.Component<{}/*props*/, {}/*state*/> {

    public render(): React.ReactNode {
        return (
            <div>
                <LandingComponent/>
                <div className="wrapper">
                    <CardsListComponent/>
                    <ListViewComponent/>
                </div>
            </div>
        );
    }
}