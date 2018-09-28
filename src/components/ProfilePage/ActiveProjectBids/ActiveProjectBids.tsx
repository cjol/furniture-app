import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { ProjectListing } from "Components/ProjectListing/ProjectListing";
import { Subheading } from "Components/Subheading/Subheading";
import styled from "styled-components";

const ActiveProjectBidsStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: strech;
`;

export class ActiveProjectBids extends React.PureComponent<{
  projectListingProps: ProjectListing["props"][];
}> {
  static defaultProps: ActiveProjectBids["props"] = {
    projectListingProps: [
      ProjectListing.defaultProps,
      ProjectListing.defaultProps
    ]
  };

  render() {
    const ActiveProjectBidsComponents = this.props.projectListingProps
      .filter(listing => listing.chosenBid === null)
      .map(projectListingProp => {
        return <ProjectListing {...projectListingProp} />;
      });
    return (
      <ActiveProjectBidsStyle>
        <Subheading>Active Projects</Subheading>

        {ActiveProjectBidsComponents}
      </ActiveProjectBidsStyle>
    );
  }
}
