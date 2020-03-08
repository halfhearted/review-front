import * as React from 'react';

import { LandingComponent } from '../components';

export class LandingContainer extends React.Component<{}/*props*/, {}/*state*/> {

    public render(): React.ReactNode {
        return (
            <div>
                <LandingComponent/>
            </div>
        );
    }
}