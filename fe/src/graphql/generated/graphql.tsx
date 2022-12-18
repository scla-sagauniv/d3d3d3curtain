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
  addResult: Result;
  changeName: Greet;
};


export type MutationAddResultArgs = {
  resultinput: ResultInput;
};


export type MutationChangeNameArgs = {
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  greet: Greet;
  ranking?: Maybe<Array<Result>>;
  results?: Maybe<Array<Result>>;
  target: Target;
};

export type Result = {
  __typename?: 'Result';
  score: Scalars['Float'];
  target: Target;
  user: User;
};

export type ResultInput = {
  score: Scalars['Float'];
  target: TargetInput;
  user: UserInput;
};

export type Target = {
  __typename?: 'Target';
  angle: Scalars['Float'];
  calcRes?: Maybe<Scalars['Float']>;
  trigFunc?: Maybe<TrigFunc>;
};

export type TargetInput = {
  angle: Scalars['Float'];
  target?: InputMaybe<TrigFuncInput>;
};

export type TrigFunc = {
  __typename?: 'TrigFunc';
  calcCos: Scalars['Float'];
  calcTan: Scalars['Float'];
  calcsin: Scalars['Float'];
  cos: Scalars['String'];
  sin: Scalars['String'];
  tan: Scalars['String'];
};

export type TrigFuncInput = {
  calcCos: Scalars['Float'];
  calcTan: Scalars['Float'];
  calcsin: Scalars['Float'];
  cos: Scalars['String'];
  sin: Scalars['String'];
  tan: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  name: Scalars['String'];
};

export type UserInput = {
  name: Scalars['String'];
};

export type ChangeNameMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type ChangeNameMutation = { __typename?: 'Mutation', changeName: { __typename?: 'Greet', msg: string, name: string } };

export type GetGreetQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGreetQuery = { __typename?: 'Query', greet: { __typename?: 'Greet', msg: string, name: string } };
