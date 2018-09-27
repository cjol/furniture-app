import { Add } from "@material-ui/icons";
import { Popup } from "Components/Popup/Popup";
import { RectangularButton } from "Components/RectangularButton/RectangularButton";
import * as React from "react";

import { PhotoUrl } from "./PhotoUrl/PhotoUrl";
import { CheckBox } from "@material-ui/icons";
import styled from "styled-components";
const AddCheckBoxStyle = styled(Add)`
  color: darkgrey;
`;
export class PhotoUploadPopUp extends React.PureComponent<{
  popupProps: Popup["props"];
  photoUrlProps: PhotoUrl["props"][];
  addButtonProps: () => void;
  uploadPhotoProps: () => void;
}> {
  static defaultProps: PhotoUploadPopUp["props"] = {
    popupProps: Popup.defaultProps,
    photoUrlProps: [
      PhotoUrl.defaultProps,
      PhotoUrl.defaultProps,
      PhotoUrl.defaultProps
    ],
    addButtonProps: () => alert("Add Picture"),
    uploadPhotoProps: () => alert("Uploading Picture")
  };

  render() {
    return (
      <Popup>
        <PhotoUrl />
        <PhotoUrl />
        <PhotoUrl />
        <AddCheckBoxStyle />
        <RectangularButton />
      </Popup>
    );
  }
}
