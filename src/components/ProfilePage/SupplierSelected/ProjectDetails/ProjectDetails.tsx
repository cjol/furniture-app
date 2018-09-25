import * as React from "react";
import { Placeholder } from "Components/Placeholder";

export class ProjectDetails extends React.PureComponent<{}> {
  static defaultProps: ProjectDetails ["props"] = {};

  render() {
    return (<Placeholder description="SupplierSelected" orientation="row">
       <Placeholder description="Projectdetails">
          <Placeholder description=" ProjectImage" />
          <Placeholder description="ProjectTitle" orientation="column">
            <Placeholder description="Tags" />
          </Placeholder>

          <Placeholder description="Amount" />
        </Placeholder>
      </Placeholder>
    )
  }
}
