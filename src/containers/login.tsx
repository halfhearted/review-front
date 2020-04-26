import * as React from 'react';

import { LoginComponent } from '../components';

export class LoginContainer extends React.Component<{}/*props*/, {}/*state*/> {

    public render(): React.ReactNode {
        return (
            <div>
                <LoginComponent/>
            </div>
        );
    }
}