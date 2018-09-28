import { ProjectTag } from "Components/FilterResultsPopUp/FilterResultsProjectTags/ProjectTag/ProjectTag";
import * as React from "react";
import {
  Value,
  Compose as RRCompose,
  Counter,
  Input,
  List,
  Toggle
} from "react-powerplug";

const Compose = RRCompose as any;

export class ProfilePageState extends React.PureComponent<{
  children: (
    input: {
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
          Input, // full name
          Input, // picture
          Input, // email
          Input, // location
          Input // phone number
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
