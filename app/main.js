import React from 'react';
import ReactDOM from 'react-dom';

import Toc from './components/toc.jsx';

let data = [
    {
        id: 'a',
        name: '研发部门',
        count: '100',
        child: [
            {id: 'a1', name: '服务端工程师', count: '20'},
            {id: 'a2', name: '前端工程师', count: '80'}
        ]
    },
    {
        id: 'b',
        name: '产品部门',
        count: '20',
        child: [
            {id: 'b1', name: 'UI', count: '10'},
            {id: 'b2', name: '产品', count: '5'},
            {id: 'b3', name: '交互', count: '5'},
        ]
    }
];

class Main extends React.Component {
    render() {
        return <Toc data={data}/>;
    }
}

ReactDOM.render(<Main/>, document.getElementById('app'));