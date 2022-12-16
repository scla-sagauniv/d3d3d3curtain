export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Greet = {
  __typename?: 'Greet';
  msg: Scalars['String'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  changeName: Greet;
};


export type MutationChangeNameArgs = {
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  greet: Greet;
};

export type ChangeNameMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type ChangeNameMutation = { __typename?: 'Mutation', changeName: { __typename?: 'Greet', msg: string, name: string } };

export type GetGreetQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGreetQuery = { __typename?: 'Query', greet: { __typename?: 'Greet', msg: string, name: string } };
