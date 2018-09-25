import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { ChevronRight } from "@material-ui/icons";
import { ChevronLeft } from "@material-ui/icons";

export class ImagesAvailable extends React.PureComponent<{}> {
  static defaultProps: ImagesAvailable["props"] = {};

  render() {
    return (
      <Placeholder description="Images Available" orientation="row">
        <ChevronLeft />
        <Placeholder description="Image1" />
        <Placeholder description="Image2" />
        <Placeholder description="Image3" />
        <ChevronRight />
      </Placeholder>
    );
  }
}
