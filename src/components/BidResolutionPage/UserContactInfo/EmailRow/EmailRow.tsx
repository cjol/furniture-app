import { Email } from "@material-ui/icons";
import * as React from "react";
import styled from "styled-components";

const EmailStyle = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  justify-content: stretch;
  align-items: center;
`;
const EmailaddressStyle = styled.div`
  display: flex;
  flex-grow: 1;
  color: grey;
  font-size: 14px;
`;
const EmailIconStyle = styled(Email)`
  color: grey;
`;

export class EmailRow extends React.PureComponent<{ email: string }> {
  static defaultProps: EmailRow["props"] = { email: "address@email.com" };

  render() {
    return (
      <EmailStyle>
        <EmailaddressStyle>email@email.com</EmailaddressStyle>
        <EmailIconStyle />
      </EmailStyle>
    );
  }
}
