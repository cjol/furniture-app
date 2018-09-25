import * as React from "react";
import { Placeholder } from "Components/Placeholder";

export class QuestionAdd extends React.PureComponent<{}> {
  static defaultProps: QuestionAdd["props"] = {};

  render() {
    return (
      <Placeholder description="QuestionMore">
        <Placeholder description="QuestionSubmit" />
        <Placeholder description="QuestionAdd" />
      </Placeholder>
    );
  }
}
