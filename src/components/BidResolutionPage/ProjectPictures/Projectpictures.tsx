import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { Call, ChevronLeft, ChevronRight } from "@material-ui/icons";
export class ProjectPictures extends React.PureComponent<{}> {
  static defaultProps: ProjectPictures["props"] = {};

  render() {
    return (
      <Placeholder description="Project Pictures" orientation="row">
        <ChevronLeft />
        <Placeholder description="Picture 1" orientation="row" />
        <Placeholder description="Picture 2" orientation="row" />
        <Placeholder description="Picture 3" orientation="row" />
        <ChevronRight />
      </Placeholder>
    );
  }
}
