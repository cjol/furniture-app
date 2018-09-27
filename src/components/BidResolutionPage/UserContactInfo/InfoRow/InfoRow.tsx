import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { RoundButton } from "Components/RoundButton/RoundButton";
import { Call, Email } from "@material-ui/icons";
import { InfoRowPicture } from "./InfoRowPicture/InfoRowPicture";
import { InfoNameAndNumber } from "./InfoNameAndNumber/InfoNameAndNumber";
import styled from "styled-components";
import { greenMain, normalBoxShadow, white } from "@style";

const InfoRowStyled = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${greenMain};
  padding: 24px;
  align-items: center;
`;

const InvertedButton = styled(RoundButton)`
  background-color: ${white};
  color: ${greenMain};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 36px;
  height: 36px;
  width: 36px;
  box-shadow: ${normalBoxShadow};
`;

export class InfoRow extends React.PureComponent<{
  infoRowPictureProps: InfoRowPicture["props"];
  infoNameProps: InfoNameAndNumber["props"];
}> {
  static defaultProps: InfoRow["props"] = {
    infoRowPictureProps: InfoRowPicture.defaultProps,
    infoNameProps: InfoNameAndNumber.defaultProps
  };

  render() {
    return (
      <InfoRowStyled>
        <InfoRowPicture {...this.props.infoRowPictureProps} />
        <InfoNameAndNumber {...this.props.infoNameProps} />
        <InvertedButton>
          <Call />
        </InvertedButton>
      </InfoRowStyled>
    );
  }
}
