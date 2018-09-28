/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchBidResolutionQuery
// ====================================================

export interface FetchBidResolutionQuery_getProject_owner {
  __typename: "User";
  id: string;
  name: string;
  pictureURL: string | null;
  rating: number;
  phoneNumber: any;
  email: string;
  location: string;
}

export interface FetchBidResolutionQuery_getProject_chosenBid_user {
  __typename: "User";
  id: string;
  name: string;
  pictureURL: string | null;
  phoneNumber: any;
  email: string;
  location: string;
}

export interface FetchBidResolutionQuery_getProject_chosenBid {
  __typename: "Bid";
  price: number;
  time: string;
  user: FetchBidResolutionQuery_getProject_chosenBid_user;
}

export interface FetchBidResolutionQuery_getProject {
  __typename: "Project";
  title: string;
  owner: FetchBidResolutionQuery_getProject_owner;
  chosenBid: FetchBidResolutionQuery_getProject_chosenBid | null;
  description: string;
  photos: string[];
}

export interface FetchBidResolutionQuery {
  getProject: FetchBidResolutionQuery_getProject | null;
}

export interface FetchBidResolutionQueryVariables {
  projID: string;
}

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
// GraphQL query operation: FetchCreateProjectPage
// ====================================================

export interface FetchCreateProjectPage_getUser {
  __typename: "User";
  pictureURL: string | null;
  name: string;
  rating: number;
}

export interface FetchCreateProjectPage {
  getUser: FetchCreateProjectPage_getUser | null;
}

export interface FetchCreateProjectPageVariables {
  userID: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchDetailedProjectView
// ====================================================

export interface FetchDetailedProjectView_getProject_owner {
  __typename: "User";
  pictureURL: string | null;
  name: string;
  rating: number;
}

export interface FetchDetailedProjectView_getProject_bids_items_user {
  __typename: "User";
  pictureURL: string | null;
}

export interface FetchDetailedProjectView_getProject_bids_items {
  __typename: "Bid";
  id: string;
  price: number;
  time: string;
  description: string;
  user: FetchDetailedProjectView_getProject_bids_items_user;
}

export interface FetchDetailedProjectView_getProject_bids {
  __typename: "BidConnection";
  items: FetchDetailedProjectView_getProject_bids_items[];
}

export interface FetchDetailedProjectView_getProject {
  __typename: "Project";
  title: string;
  owner: FetchDetailedProjectView_getProject_owner;
  numberOfBids: number;
  averageBidAmount: number;
  timeUntilClose: string;
  photos: string[];
  description: string;
  bids: FetchDetailedProjectView_getProject_bids;
}

export interface FetchDetailedProjectView {
  getProject: FetchDetailedProjectView_getProject | null;
}

export interface FetchDetailedProjectViewVariables {
  ProjID: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchPlaceBid
// ====================================================

export interface FetchPlaceBid_getProject_owner {
  __typename: "User";
  name: string;
  rating: number;
}

export interface FetchPlaceBid_getProject {
  __typename: "Project";
  owner: FetchPlaceBid_getProject_owner;
  timeUntilClose: string;
  numberOfBids: number;
  averageBidAmount: number;
  photos: string[];
  description: string;
}

export interface FetchPlaceBid {
  getProject: FetchPlaceBid_getProject | null;
}

export interface FetchPlaceBidVariables {
  projID: string;
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
// GraphQL query operation: FetchProfilePage
// ====================================================

export interface FetchProfilePage_getUser_projects_items {
  __typename: "Project";
  photos: string[];
  averageBidAmount: number;
  title: string;
  tags: string[];
}

export interface FetchProfilePage_getUser_projects {
  __typename: "ProjectConnection";
  items: FetchProfilePage_getUser_projects_items[];
}

export interface FetchProfilePage_getUser {
  __typename: "User";
  pictureURL: string | null;
  rating: number;
  name: string;
  email: string;
  location: string;
  phoneNumber: any;
  projects: FetchProfilePage_getUser_projects;
}

export interface FetchProfilePage {
  getUser: FetchProfilePage_getUser | null;
}

export interface FetchProfilePageVariables {
  userID: string;
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

// ====================================================
// GraphQL query operation: FetchProjectListings
// ====================================================

export interface FetchProjectListings_listProjects_items {
  __typename: "Project";
  id: string;
  title: string;
  photos: string[];
  averageBidAmount: number;
  tags: string[];
}

export interface FetchProjectListings_listProjects {
  __typename: "ProjectConnection";
  items: FetchProjectListings_listProjects_items[];
}

export interface FetchProjectListings {
  listProjects: FetchProjectListings_listProjects | null;
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
