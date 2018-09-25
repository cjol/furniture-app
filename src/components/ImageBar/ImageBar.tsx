import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { ChevronLeft } from "@material-ui/icons";
import { ChevronRight } from "@material-ui/icons";

export class ImageBar extends React.PureComponent<{}> {
  static defaultProps: ImageBar["props"] = {};

  render() {
    return (
      <Placeholder description="ImageBar" orientation="row">
        <ChevronLeft />
        <Placeholder description="Image1" />
        <Placeholder description="Image2" />
        <Placeholder description="Image3" />
        <ChevronRight />
      </Placeholder>
    );
  }
}
