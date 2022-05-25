/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */

import axios, { AxiosResponse } from 'axios';
import { nanoid } from 'nanoid';

const APISTREAM_API_KEY = 'eabVa681yGa2KtIPAZx85'; // CHANGEME
const APISTREAM_SERVER = 'http://127.0.0.1:7070';

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
        width: 1080,
        height: 1920
      }
    }
  } );
  console.log( projectRes.data.project );
};

createCollectionAndProject();
