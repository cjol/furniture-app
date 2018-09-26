import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { ProjectListing } from "Components/ProjectListing/ProjectListing";
import { Subheading } from "Components/Subheading/Subheading";
import styled from "styled-components";

const ActiveProjectBidsStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export class ActiveProjectBids extends React.PureComponent<{}> {
  static defaultProps: ActiveProjectBids["props"] = {};

  render() {
    return (
      <ActiveProjectBidsStyle>
        <Subheading />
        <ProjectListing />
        <ProjectListing />
      </ActiveProjectBidsStyle>
    );
  }
}
