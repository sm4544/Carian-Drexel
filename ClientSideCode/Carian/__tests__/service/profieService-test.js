import sinonStubPromise from 'sinon-stub-promise';
import sinon from 'sinon';

import React from "react";
import { postLoginApi } from '../../screen/services/profileService'
sinonStubPromise(sinon);


let stubedFetch = sinon.stub('fetch');
const URL = "http://127.0.0.1:8000/login";

window.fetch.returns(Promise.resolve(mockApiResponse()));

function mockApiResponse(body = {}) {
    return new window.Response(JSON.stringify(body), {
        status: 200,
        headers: { 'Content-type': 'application/json' }
    });
}

describe('loginAPi()', () => {
    let server;

    beforeEach(function () {
        server = sinon.fakeServer.create();
    });

    afterEach(function () {
        server.restore();
    });

    it('should return a response.', async () => {
        body = JSON.stringify({ email: 'hello', password: 'password' });
        const response = await postLoginApi(body);
        console.log("response:", response);
    });

    it('should return a response object', async () => {
        body = JSON.stringify({ email: 'hello', password: 'password' });
        server.respondWith("POST", URL, [200, { "Content-Type": "application/json" },
            '{ "id": "1", "username": "John", "avatar_url": "A_URL" }']);
        const response = postLoginApi(body);
        server.respond();
        response.then(function (result) {
            console.log("result:", result); //The code doesn't get here
            result.should.deep.equal({ "id": "1", "username": "John", "avatar_url": "A_URL" });
        });
    });

});