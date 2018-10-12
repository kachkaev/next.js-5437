import Link from "next/link";
import React from "react";

export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    return (
      <>
        <div>Error: {this.props.statusCode || "unknown"}</div>
        <p>
          <Link href="/">
            <a>main page</a>
          </Link>
        </p>
      </>
    );
  }
}
