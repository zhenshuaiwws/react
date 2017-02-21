import React from 'react';
import _ from 'lodash';

export default class Toc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: _.cloneDeep(this.props.data)
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClearAll = this.handleClearAll.bind(this);
    }

    handleClearAll() {
        this.setState({data: this.props.data}, () => {
            console.log(JSON.stringify(this.props.data, null, 2));
        })
    }

    handleChange(item, isParent) {
        //todo:勾选父，在勾选子失效。 Why?
        let _checkState = item.isChecked;
        item.isChecked = !_checkState;

        if (isParent) {
            _.forEach(item.child, function (childItem) {
                childItem.isChecked = !_checkState;
            })
        }

        this.setState({data: this.state.data}, () => {
            console.log(JSON.stringify(this.state.data, null, 2));
        })
    }

    render() {
        return (
            <div className="toc-wrap">
                <div className="toc-head clearfix">
                    <span className="toc-head-title pull-left">职位</span>
                    <a href="javascript:;" className="pull-right" onClick={this.handleClearAll}>清空</a>
                </div>
                {this.state.data.map((item, i) =>
                    <dl key={i} className="toc-section">
                        <dt className="toc-item-head clearfix">
                            <div className="checkbox pull-left">
                                <label>
                                    <input ref={`checkbox-${i}`} type="checkbox" checked={item.isChecked}
                                           onChange={e => this.handleChange(item, true)}/> {item.name}
                                </label>
                            </div>
                            <div className="toc-item-count pull-right">
                                <div>{item.count}</div>
                            </div>
                        </dt>
                        {
                            item.child.map((childItem, j) =>
                                <dl key={j} className="toc-item clearfix">
                                    <div className="checkbox pull-left">
                                        <label>
                                            <input ref={`checkbox-${i}-${j}`}
                                                   type="checkbox" checked={item.isChecked}
                                                   onChange={e => this.handleChange(childItem)}/> {childItem.name}
                                        </label>
                                    </div>
                                    <div className="toc-item-count pull-right">
                                        <div>{item.count}</div>
                                    </div>
                                </dl>
                            )
                        }
                    </dl>
                )}
            </div>
        );
    }

}