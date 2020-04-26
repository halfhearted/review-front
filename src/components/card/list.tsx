import * as React from 'react';

import { CardElementComponent } from './element';

export class CardsListComponent extends React.PureComponent<{}, {}> {

    public render(): React.ReactNode {
        return(
            <div className="row text-center m-5">
                <CardElementComponent/>
                <CardElementComponent/>
                <CardElementComponent/>
                <CardElementComponent/>
                <CardElementComponent/>
                <CardElementComponent/>
                <CardElementComponent/>
                <CardElementComponent/>
            </div>
        );
    }
}