let React = require('react');
let ReactDOM = require('react-dom');

let Main = React.createClass({
    render: function () {
        return (
            <div>
                Hello World!!!
            </div>
        )
    }
});

ReactDOM.render(<Main/>, document.getElementById('app'));