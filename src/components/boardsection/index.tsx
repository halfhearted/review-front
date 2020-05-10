import * as React from "react";


export class BoardSectionComponent extends React.PureComponent<{}, {}> {
    public render(): React.ReactNode {
        return (
            <div className="container">
                <h1 className="my-4">
                    제목임
                </h1>

                <div className="row">
                    <div>
                        <p>내용임.</p>
                    </div>
                </div>
            </div>
        );
    }
}
