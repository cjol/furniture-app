import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { RoundButton } from "Components/RoundButton/RoundButton";
import { Call, Email } from "@material-ui/icons";
import { InfoRowPicture } from "./InfoRowPicture/InfoRowPicture";
import { InfoNameAndNumber } from "./InfoNameAndNumber/InfoNameAndNumber";
import styled from "styled-components";

const InfoRowStyled = styled.div`
  display: flex;
  flex-direction: row;
`;
export class InfoRow extends React.PureComponent<{
  infoRowPictureprops: InfoRowPicture["props"];
  infoNameProps: InfoNameAndNumber["props"];
}> {
  static defaultProps: InfoRow["props"] = {
    infoRowPictureprops: InfoRowPicture.defaultProps,
    infoNameProps: InfoNameAndNumber.defaultProps
  };

  render() {
    return (
      <InfoRowStyled>
        <InfoRowPicture {...this.props.infoRowPictureprops} />
        <InfoNameAndNumber {...this.props.infoNameProps} />
        <RoundButton>
          <Call />
        </RoundButton>
      </InfoRowStyled>
    );
  }
}
