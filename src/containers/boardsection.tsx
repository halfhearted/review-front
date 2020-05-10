import * as React from 'react';

import { BoardSectionComponent, HeaderComponent } from '../components';

export class BoardSectionContainer extends React.Component<{}/*props*/, {}/*state*/> {

    public render(): React.ReactNode {
        return (
            <div>
                <HeaderComponent/>
                <BoardSectionComponent/>
            </div>
        );
    }
}