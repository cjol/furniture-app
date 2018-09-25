import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import {TagYourProject} from "./TagYourProject/TagYourProject";

export class TaggingProject extends React.PureComponent<{}> {
  static defaultProps: TaggingProject["props"] = {};

  render() {
    return (
      <Placeholder description="Tagging Project">
        <TagYourProject>
          <Placeholder description="Tagging Instructions" />
          <Placeholder description="Tag Options">
            <Placeholder description="Table" />
            <Placeholder description="Chairs" />
          </Placeholder>
        </TagYourProject>
      </Placeholder>
    );
  }
}
