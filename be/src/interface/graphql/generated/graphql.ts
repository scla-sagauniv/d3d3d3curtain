import {GraphQLResolveInfo} from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {[key: string]: unknown}> = {[K in keyof T]: T[K]};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
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
  trigFunc?: Maybe<TrigFunc>;
};

  ParentType extends ResolversParentTypes['Target'] = ResolversParentTypes['Target']
  trigFunc?: Resolver<
};
  tan?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']
> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
=======
  trigFunc?: Resolver<Maybe<ResolversTypes['TrigFunc']>, ParentType, ContextType>;
>>>>>>> ed4e242b7e0a038ac57db67466f8a03f8f435801
>>>>>>> dbc257a3cd83274f07108d40205e97e18dfda0df
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Greet?: GreetResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Result?: ResultResolvers<ContextType>;
  Target?: TargetResolvers<ContextType>;
  TrigFunc?: TrigFuncResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};
