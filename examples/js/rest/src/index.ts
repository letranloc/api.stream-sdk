/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */

import axios, { AxiosResponse } from 'axios';
import { nanoid } from 'nanoid';

const APISTREAM_API_KEY = 'abc123'; // CHANGEME
const APISTREAM_SERVER = 'https://live.api.stream/live/v2';

async function authenticate (): Promise<string> {
  const http = axios.create( {
    baseURL: APISTREAM_SERVER,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      'X-Api-Key': APISTREAM_API_KEY,
    },
  } );
  let res = await http.post( `/authentication/token`, {
    serviceUserId: nanoid( 21 ),
    displayName: 'ApiDemo',
  } );
  let token = res.data.accessToken as string;
  return token;
}

function initHttp ( accessToken: string ) {
  return axios.create( {
    baseURL: APISTREAM_SERVER,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': `Bearer ${ accessToken }`
    }
  } );
}

async function createCollectionAndProject () {
  // get an access token
  let token = await authenticate();
  // set headers
  let http = initHttp( token );
  // create a collection
  let collectionRes = await http.post( `/collection`, {
  } );
  // create a project on that collection
  let projectRes = await http.post( `/collection/${ collectionRes.data.collection.collectionId }/project`, {
    rendering: {
      video: {
        width: 1920,
        height: 1080
      }
    }
  } );
  console.log( projectRes.data.project );
};

createCollectionAndProject();
