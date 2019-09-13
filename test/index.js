const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);

describe("First Test case", function() {
    it("Should Pass #1", function(done) {
        chai.request(app)
        .get('/')
        .then(response => {
            chai.expect(response).to.have.status(200)
            chai.expect(response.body.success).to.equal('GET')
            chai.expect(response.body.data).to.equal(50)
            done()
        })
        .catch(err => {
            done(err)
        })
    });

    it("Should Pass #2", function(done) {
       chai.request(app)
        .get('/?value=3')
        .then(response => {
            chai.expect(response).to.have.status(200)
            chai.expect(response.body.success).to.equal('GET')
            chai.expect(response.body.data).to.equal(250)
            done()
        })
        .catch(err => {
            done(err)
        })
    })

});

