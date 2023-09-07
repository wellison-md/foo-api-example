const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = require('chai');

chai.use(chaiHttp);
const app = require('../app');

describe('Route GET/ ', function() {
  it('returns a message when the api ups successfully', async function() {
    const response = await chai
      .request(app)
      .get('/')

    expect(response).to.have.status(200)
    expect(response.body).to.be.deep.equal({
      message: 'Running api with success',
    })
  });
});
