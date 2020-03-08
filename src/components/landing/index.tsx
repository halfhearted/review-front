import * as React from "react";

import { LandingFooterComponent } from './footer';
import { LandingHeaderComponent } from './header';
import { FullImageSectionComponent } from './section';

import './index.css'

export class LandingComponent extends React.PureComponent<{}, {}> {

    public render(): React.ReactNode {
        return( 
            <div>
                <LandingHeaderComponent/>
                <FullImageSectionComponent
                    title=""
                    description=""
                    className="landing-intro"    
                />
                <LandingFooterComponent/>
            </div>
        );
    }
}