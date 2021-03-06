import * as React from 'react';

import { CardsListComponent, HeaderComponent, ListViewComponent } from '../components';

export class LandingContainer extends React.Component<{}/*props*/, {}/*state*/> {

    public render(): React.ReactNode {
        return (
            <div>
                <HeaderComponent/>
                <div className="wrapper">
                    <CardsListComponent/>
                    <ListViewComponent/>
                </div>
            </div>
        );
    }
}