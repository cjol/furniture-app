import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { normalBoxShadow } from "@style";
import { Subheading } from "Components/Subheading/Subheading";

const MenuContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: row;
  box-shadow: ${normalBoxShadow};
  align-items: stretch;
  justify-content: stretch;
  max-width: 500px;
`;
const MenuStyled = styled.div`
  background-color: white;
  padding: 24px;
  display: flex;
  flex-direction: column;
  width: 90%;
`;

const MenuCloakStyle = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
`;

export class Menu extends React.PureComponent<{ toggle: () => void }> {
  static defaultProps: Menu["props"] = { toggle: () => {} };

  render() {
    return (
      <MenuContainer>
        <MenuStyled>
          <Subheading>
          <Link to="/profile">
            <Placeholder description="My Profile" />
          </Link>
         </Subheading>
         
         <Subheading>
          <Link to="/project/new">
            <Placeholder description="Create New Project" />
          </Link>
          </Subheading>

         <Subheading>
          <Link to="/">
            <Placeholder description="Browse Listings" />
          </Link>
          </Subheading>

        </MenuStyled>
        <MenuCloakStyle onClick={this.props.toggle} />
      </MenuContainer>
    );
  }
}
