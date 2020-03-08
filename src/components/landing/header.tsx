import * as React from "react";

export class LandingHeaderComponent extends React.PureComponent<{}, {}> {
    // 말만 Header지 실제로는 Navbar처럼 구현되어 있음.
    public render(): React.ReactNode {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="/">제목</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/">JOIN</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">LOGIN</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
