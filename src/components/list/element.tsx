import * as React from 'react';

export class ListElementComponent extends React.PureComponent<{}, {}> {

    public render(): React.ReactNode {
        return(
            <div className="col-sm-6">
                <a href="/" className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">게임 끝인가</h5>
                    </div>
                    <p className="mb-1">코로나 사태 종결?</p>
                    <small>악플다는사람</small>
                </a>
            </div>
        );
    }
}

