import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { RectangularButton } from "Components/RectangularButton/RectangularButton";
import styled from "styled-components";
const EditSaveComponentStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export class ProfileEditSave extends React.PureComponent<{}> {
  static defaultProps: ProfileEditSave["props"] = {};

  render() {
    return (
      <EditSaveComponentStyled>
        <RectangularButton>Save</RectangularButton>
      </EditSaveComponentStyled>
    );
  }
}
