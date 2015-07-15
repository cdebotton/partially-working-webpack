import React, { Component } from "react";

export default class HTMLDocument extends Component {
  render() {
    return (
      <html lang="en">
      <head>
        <title>Webpack Demo</title>
      </head>
      <body>
        <div id="root"
             dangerouslySetInnerHTML={{ __html: this.props.markup  }} />
        <script src="http://localhost:3001/bundle.js" />
      </body>
      </html>
    );
  }
}
