import * as React from "react";
import { IPropsFullLandingImageSection } from './types'


export class FullImageSectionComponent extends React.PureComponent<IPropsFullLandingImageSection, {}> {

    public render(): React.ReactNode {
        return (
            <div className={this.props.className}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12 text-center">
                            <h1 className="font-weight-light">{this.props.title}</h1>
                            <p className="lead">{this.props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
/*
export class HalfImageSectionComponent extends React.PureComponent<TPropsHalfLandingImageSection, {}> {

    public render(): React.ReactNode {
        return (
            <div className="container-fluid">
                <div className="row no-gutter">
                    <div className="col-md-8 col-lg-6">
                        <div className="login d-flex align-items-center py-5">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 text-center">
                                        <h1 className="font-weight-light">{this.props.title}</h1>
                                        <h1 className="font-weight-light">{this.props.subTitle}</h1>
                                        <p className="lead">
                                            {this.props.subTitle}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>    
                </div>
            </div>
        );
    }
}

*/