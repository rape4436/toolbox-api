
'use stricts'

let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url= 'http://localhost:3000';

describe('get text: palindromeChecker true ', () => {
    it('validate palindromeChecker', (done) => {
        chai.request(url)
            .get('/iecho?text=sejes')
            .end(function (err, res) {
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
});

describe('get text: palindromeChecker false ', () => {
    it('validate palindromeChecker', (done) => {
        chai.request(url)
            .get('/iecho?text=casa')
            .end(function (err, res) {
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
});