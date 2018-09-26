import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { RoundButton } from "Components/RoundButton/RoundButton";
import { Add } from "@material-ui/icons";

export class QuestionAdd extends React.PureComponent<{}> {
  static defaultProps: QuestionAdd["props"] = {};

  render() {
    return (
      <Placeholder description="QuestionMore">
        <Placeholder description="QuestionSubmit" />
        <RoundButton>
          <Add />
        </RoundButton>
      </Placeholder>
    );
  }
}
