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
  score: Scalars['Float'];
};

export type MutationChangeNameArgs = {
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  greet: Greet;
  ranking?: Maybe<Array<Result>>;
  target: Target;
};

export type Result = {
  __typename?: 'Result';
  score: Scalars['Float'];
};

export type Target = {
  __typename?: 'Target';
  angle: Scalars['Float'];
  trigFunc?: Maybe<TrigFunc>;
};

<<<<<<< Updated upstream
export enum TrigFunc {
  Cos = 'cos',
  Sin = 'sin',
  Tan = 'tan',
}
=======
export type TrigFunc = {
  __typename?: 'TrigFunc';
  calcCos: Scalars['Float'];
  calcTan: Scalars['Float'];
  calcsin: Scalars['Float'];
  cos: Scalars['String'];
  sin: Scalars['String'];
  tan: Scalars['String'];
};
>>>>>>> Stashed changes

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    {[key in TKey]: TResult},
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    {[key in TKey]: TResult},
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Greet: ResolverTypeWrapper<Greet>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Result: ResolverTypeWrapper<Result>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Target: ResolverTypeWrapper<Target>;
  TrigFunc: ResolverTypeWrapper<TrigFunc>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Float: Scalars['Float'];
  Greet: Greet;
  Mutation: {};
  Query: {};
  Result: Result;
  String: Scalars['String'];
  Target: Target;
  TrigFunc: TrigFunc;
};

export type GreetResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Greet'] = ResolversParentTypes['Greet']
> = {
  msg?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
  addResult?: Resolver<
    ResolversTypes['Result'],
    ParentType,
    ContextType,
    RequireFields<MutationAddResultArgs, 'score'>
  >;
  changeName?: Resolver<
    ResolversTypes['Greet'],
    ParentType,
    ContextType,
    RequireFields<MutationChangeNameArgs, 'name'>
  >;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  greet?: Resolver<ResolversTypes['Greet'], ParentType, ContextType>;
  ranking?: Resolver<
    Maybe<Array<ResolversTypes['Result']>>,
    ParentType,
    ContextType
  >;
<<<<<<< Updated upstream
=======
  results?: Resolver<
    Maybe<Array<ResolversTypes['Result']>>,
    ParentType,
    ContextType
  >;
>>>>>>> Stashed changes
  target?: Resolver<ResolversTypes['Target'], ParentType, ContextType>;
};

export type ResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Result'] = ResolversParentTypes['Result']
> = {
  score?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TargetResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Target'] = ResolversParentTypes['Target']
> = {
  angle?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
<<<<<<< Updated upstream
  calcRes?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
=======
>>>>>>> Stashed changes
  trigFunc?: Resolver<
    Maybe<ResolversTypes['TrigFunc']>,
    ParentType,
    ContextType
  >;
<<<<<<< Updated upstream
=======
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TrigFuncResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TrigFunc'] = ResolversParentTypes['TrigFunc']
> = {
  calcCos?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  calcTan?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  calcsin?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  cos?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sin?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tan?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
>>>>>>> Stashed changes
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Greet?: GreetResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Result?: ResultResolvers<ContextType>;
  Target?: TargetResolvers<ContextType>;
  TrigFunc?: TrigFuncResolvers<ContextType>;
};
