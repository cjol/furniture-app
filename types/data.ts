/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateProject
// ====================================================

export interface CreateProject_createProject_owner {
  __typename: "User";
  id: string;
}

export interface CreateProject_createProject_bids_items {
  __typename: "Bid";
  id: string;
}

export interface CreateProject_createProject_bids {
  __typename: "BidConnection";
  items: CreateProject_createProject_bids_items[];
}

export interface CreateProject_createProject_chosenBid {
  __typename: "Bid";
  id: string;
}

export interface CreateProject_createProject {
  __typename: "Project";
  id: string;
  title: string;
  owner: CreateProject_createProject_owner;
  photos: string[];
  description: string;
  tags: string[];
  closeDate: any;
  bids: CreateProject_createProject_bids;
  chosenBid: CreateProject_createProject_chosenBid | null;
}

export interface CreateProject {
  createProject: CreateProject_createProject | null;
}

export interface CreateProjectVariables {
  project: CreateProjectInput;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: PlaceBid
// ====================================================

export interface PlaceBid_createBid_user {
  __typename: "User";
  id: string;
}

export interface PlaceBid_createBid_project {
  __typename: "Project";
  id: string;
}

export interface PlaceBid_createBid {
  __typename: "Bid";
  id: string;
  price: number;
  time: string;
  user: PlaceBid_createBid_user;
  description: string;
  project: PlaceBid_createBid_project;
}

export interface PlaceBid {
  createBid: PlaceBid_createBid | null;
}

export interface PlaceBidVariables {
  bid: CreateBidInput;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SaveProfile
// ====================================================

export interface SaveProfile_updateUser {
  __typename: "User";
  id: string;
  name: string;
  pictureURL: string | null;
  email: string;
  location: string;
  phoneNumber: any;
}

export interface SaveProfile {
  updateUser: SaveProfile_updateUser | null;
}

export interface SaveProfileVariables {
  user: UpdateUserInput;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface CreateBidInput {
  price: number;
  time: string;
  user: string;
  description: string;
  project: string;
}

export interface CreateProjectInput {
  title: string;
  owner: string;
  photos: string[];
  description: string;
  tags: string[];
  closeDate: any;
}

export interface UpdateUserInput {
  id: string;
  name?: string | null;
  pictureURL?: string | null;
  email?: string | null;
  location?: string | null;
  phoneNumber?: any | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
