import * as React from 'react';

export class CardElementComponent extends React.PureComponent<{}, {}> {

    public render(): React.ReactNode {
        return(
            <div className="col-lg-3 col-md-6 mb-4">
                <div className="card h-100">
                    <img className="card-img-top" src="http://placehold.it/350x150" alt=""/>
                    <div className="card-body">
                        <h4 className="card-title">프레젠테이션을 진행</h4>
                        <p className="card-text">컬러, 공간 및 타이포그래피는 단단한 디자인 시스템을 위한 구성 요소이다</p>
                    </div>
                    <div className="card-footer">
                        <p className="card-text">시간 같은거 적기</p>
                    </div>
                </div>
            </div>
        );
    }
}

