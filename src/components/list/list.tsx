import * as React from 'react';

import { ListElementComponent } from './element';

export class ListViewComponent extends React.PureComponent<{}, {}> {

    public render(): React.ReactNode {
        return(
            <div className="list-group row m-5">
                <ListElementComponent/>
                <ListElementComponent/>
                <ListElementComponent/>
                <ListElementComponent/>
                <ListElementComponent/>
                <ListElementComponent/>
                <ListElementComponent/>
                <ListElementComponent/>
            </div>
        );
    }
}