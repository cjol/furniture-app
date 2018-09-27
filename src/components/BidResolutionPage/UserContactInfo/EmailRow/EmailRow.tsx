import * as React from "react";
import { Call, Email } from "@material-ui/icons";
import { Placeholder } from "Components/Placeholder";
import styled from "styled-components";
const EmailStyle = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  justify-content: stretch;
`;
const EmailaddressStyle = styled.div`
  flex-grow: 1;
`;
export class EmailRow extends React.PureComponent<{ email: string }> {
  static defaultProps: EmailRow["props"] = { email: "address@email.com" };

  render() {
    return (
      <EmailStyle>
        <EmailaddressStyle>email@email.com</EmailaddressStyle>
        <Email />
      </EmailStyle>
    );
  }
}
