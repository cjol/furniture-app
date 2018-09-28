import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { RectangularButton } from "Components/RectangularButton/RectangularButton";
import styled from "styled-components";
import { SaveProfileButton } from "./SaveProfileButton/SaveProfileButton";
const EditSaveComponentStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export class ProfileEditSave extends React.PureComponent<{
  buttonProps: SaveProfileButton["props"];
}> {
  static defaultProps: ProfileEditSave["props"] = {
    buttonProps: SaveProfileButton.defaultProps
  };

  render() {
    return (
      <EditSaveComponentStyled>
        <SaveProfileButton {...this.props.buttonProps} />
      </EditSaveComponentStyled>
    );
  }
}
