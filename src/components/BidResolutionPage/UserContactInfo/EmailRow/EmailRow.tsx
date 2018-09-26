import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { Call, Email } from "@material-ui/icons";
import styled from "styled-components";
const EmailStyle = styled.div`
  display: flex;
  flex-direction: column;
`;
const EmailaddressStyle = styled.div``;
export class EmailRow extends React.PureComponent<{}> {
  static defaultProps: EmailRow["props"] = {};

  render() {
    return (
      <EmailStyle>
        <EmailaddressStyle />
        <Email />
      </EmailStyle>
    );
  }
}
