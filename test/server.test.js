const request = require('supertest');
const express = require('express');

const app = express();
describe("GET /iecho", () => {

    it('responds with json', function(done) {
        request(app)
          .get('/iecho?text=sejes')
          .set('Accept', 'application/json')
          .expect('Content-Type','text/html; charset=utf-8')
          .expect(404, done);
      });


    it('responds with json', function(done) {
        request(app)
          .get('/iecho?text=casa')
          .set('Accept', 'application/json')
          .expect('Content-Type','text/html; charset=utf-8')
          .expect(404, done);
      });
})