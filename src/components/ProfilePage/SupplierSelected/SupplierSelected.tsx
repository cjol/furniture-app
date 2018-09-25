import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import {ProjectDetails} from "./ProjectDetails/ProjectDetails";

export class SupplierSelected extends React.PureComponent<{}> {
  static defaultProps: SupplierSelected["props"] = {};

  render() {
    return (
      <Placeholder description="SupplierSelected" orientation="row">
        <ProjectDetails>
          <Placeholder description=" ProjectImage" />
          <Placeholder description="ProjectTitle" orientation="column">
            <Placeholder description="Tags" />
          </Placeholder>
          <Placeholder description="Amount" />
        </ProjectDetails>
      </Placeholder>
    );
  }
}
