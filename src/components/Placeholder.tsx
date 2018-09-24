import * as React from "react";

export class Placeholder extends React.PureComponent<{
  description?: string;
  children?: any;
  orientation?: "row" | "column";
}> {
  static defaultProps: Placeholder["props"] = {
    description: "",
    orientation: "row"
  };

  render() {
    return (
      <div
        style={{
          border: "1px solid grey",
          padding: 5
        }}
      >
        {this.props.description && (
          <div style={{}}>[{this.props.description}]</div>
        )}
        <div
          style={{
            display: "flex",
            flexDirection: this.props.orientation
          }}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

export class DataError extends React.PureComponent<{ message?: string }> {
  static defaultProps: DataError["props"] = { message: "Error" };
  render() {
    return <div>{this.props.message}</div>;
  }
}

export class Loading extends React.PureComponent<{}> {
  static defaultProps: Loading["props"] = {};
  render() {
    return <div>Loading...</div>;
  }
}
