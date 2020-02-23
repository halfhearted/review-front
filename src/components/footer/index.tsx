import * as React from "react";


export class FooterComponent extends React.PureComponent<{}, {}> {

    public render(): React.ReactNode {
        return (
            <footer id="sticky-footer" className="py-4 bg-dark text-white-50">
                <div className="container text-center">
                    <small>Copyright &copy; Your Website</small>
                </div>
            </footer>
        );
    }
}