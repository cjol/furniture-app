import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { Popup } from "Components/Popup/Popup";
import { PlainText } from "Components/PlainText/PlainText";
import styled from "../../../node_modules/styled-components";

const TextContainer = styled.div`
  margin-left: 16px;
  margin-right: 16px;
  margin-bottom: 16px;
`;
export class BidSubmitted extends React.PureComponent<{
  title: string;
  popup: Popup["props"];
}> {
  static defaultProps: BidSubmitted["props"] = {
    title: "Project Title",
    popup: Popup.defaultProps
  };

  render() {
    return (
      <Popup {...this.props.popup}>
        <TextContainer>
          <PlainText>
            Congratulations you have successfully bid on “Project Title”. You
            will be notifed when the bid has been awarded.
          </PlainText>
        </TextContainer>
      </Popup>
    );
  }
}
