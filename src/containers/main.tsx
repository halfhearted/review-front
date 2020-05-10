import * as React from 'react';

import { FooterComponent, HeaderComponent, ListViewComponent } from '../components';

export class MainContainer extends React.Component<{}/*props*/, {}/*state*/> {

    public render(): React.ReactNode {
        return (
            <div>
                <HeaderComponent/>
                <div className="wrapper">
                    <ListViewComponent/>
                </div>
                <FooterComponent/>
            </div>
        );
    }
}