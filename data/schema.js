/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

import {
    GraphQLInt,
    GraphQLList,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
} from 'graphql';

import STORE from './database';

const TeaType = new GraphQLObjectType({
    name: 'Tea',
    fields: () => ({
        name: {type: GraphQLString},
        steepingTime: {type: GraphQLInt},
    }),
});

const StoreType = new GraphQLObjectType({
    name: 'Store',
    fields: () => ({
        teas: {type: new GraphQLList(TeaType)},
    }),
});

export const Schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: () => ({
            store: {
                type: StoreType,
                resolve: () => STORE,
            },
        }),
    }),
});

