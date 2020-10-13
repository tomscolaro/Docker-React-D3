import React from "react"
var http = require('http');


var postHTML =
  '<html><head><title>Post Example</title></head>' +
  '<body>' +
  '<form method="post">' +
  'Input 1: <input name="input1"><br>' +
  'Input 2: <input name="input2"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';




http.createServer(function (req, res) {
    var body = "";
    req.on('data', function (chunk) {
      body += chunk;
    });
    req.on('end', function () {
      console.log('POSTed: ' + body);
      res.writeHead(200);
      res.end(postHTML);
    });
  }).listen(8080);


















class GetData extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            data: null
        };
    }

    componentDidMount() {
        MyApiCall.then(
            res => this.setState({
                // using spread operator, you will need transform-object-rest-spread from babel or
                // another transpiler to use this
                ...this.state, // spreading in state for future proofing
                isLoaded: true,
                data: res.data
            })
        );
    }

    render() {
        const { isLoaded, data } = this.state;
        return (
            {
              data
               
            }
        );
    }

}

