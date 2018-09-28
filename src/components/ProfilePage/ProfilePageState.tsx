import { ProjectTag } from "Components/FilterResultsPopUp/FilterResultsProjectTags/ProjectTag/ProjectTag";
import * as React from "react";
import {
  Value,
  Compose as RRCompose,
  Counter,
  Input as RRInput,
  List,
  Toggle
} from "react-powerplug";

const Input = RRInput as any;
const Compose = RRCompose as any;

export class ProfilePageState extends React.PureComponent<{
  name: string;
  picture: string;
  email: string;
  location: string;
  phone: string;
  children: (
    input: {
      ownerID: string;
      fullName: string;
      setFullName: (x: any) => void;

      pictureURL: string;
      setPictureURL: (x: any) => void;

      email: string;
      setEmail: (x: any) => void;

      location: string;
      setLocation: (x: any) => void;

      phoneNumber: string;
      setPhoneNumber: (x: any) => void;
      // password: string;
      // setPassword: (x: any) => void;
    }
  ) => React.ReactNode;
}> {
  render() {
    return (
      // form state
      <Compose
        components={[
          <Input initial={this.props.name} />, // full name
          <Input initial={this.props.picture} />, // full name
          <Input initial={this.props.email} />, // full name
          <Input initial={this.props.location} />, // full name
          <Input initial={this.props.phone} /> // full name
        ]}
      >
        {(
          { value: fullName, set: bindFullName },
          { value: pictureURL, bind: bindPictureURL },
          { value: email, bind: bindEmail },
          { value: location, bind: bindLocation },
          { value: phoneNumber, bind: bindPhoneNumber }
        ) => {
          return this.props.children({
            ownerID: "cc0ce972-7a8d-4ea4-bb87-34186d32b2b4",
            fullName,
            setFullName: bindFullName.onChange,

            pictureURL,
            setPictureURL: bindPictureURL.onChange,

            email,
            setEmail: bindEmail.onChange,

            location,
            setLocation: bindLocation.onChange,

            phoneNumber,
            setPhoneNumber: bindPhoneNumber.onChange
          });
        }}
      </Compose>
    );
  }
}
