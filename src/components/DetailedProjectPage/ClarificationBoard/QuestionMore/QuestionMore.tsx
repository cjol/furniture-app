import * as React from "react";
import { Placeholder } from "Components/Placeholder";

export class QuestionMore extends React.PureComponent<{}> {
  static defaultProps: QuestionMore["props"] = {};

  render() {
    return (
      <Placeholder description="QuestionMore">
        <Placeholder description="QuestionSubmit" />
        <Placeholder description="QuestionAdd" />
      </Placeholder>
    );
  }
}
