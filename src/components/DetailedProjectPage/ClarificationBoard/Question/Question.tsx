import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { PlainText } from "Components/PlainText/PlainText";

export class Question extends React.PureComponent<{}> {
  static defaultProps: Question["props"] = {};

  render() {
    return (
      <Placeholder description="Question" orientation="column">
        <Placeholder description="QuestionTitle" />
        <PlainText />
      </Placeholder>
    );
  }
}
