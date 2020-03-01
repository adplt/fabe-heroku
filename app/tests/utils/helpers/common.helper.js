module.exports = {
  checkCommonResponse: (res) => {
    res.should.have.status(200);
    res.body.should.be.a('object');
    res.body.should.have.property('data');
    res.body.should.have.property('status').eql('OK');
    res.body.should.have.property('message');
    res.body.should.have.property('status').eql('OK');
    res.body.status.should.be.a('string');
    res.body.message.should.be.a('string');
    if (Array.isArray(res.body.data)) res.body.data.should.be.a('array');
    else if (typeof res.body.data === 'object') res.body.data.should.be.a('object');
  },
  badRequestResponse: (res) => {
    res.should.have.status(400);
    res.body.should.have.property('data').eql(null);
    res.body.should.have.property('status').eql('ERROR');
    res.body.should.have.property('message');
    res.body.status.should.be.a('string');
    res.body.message.should.be.a('string');
  },
  internalServerErrorResponse: (res) => {
    res.should.have.status(500);
    res.body.should.have.property('data').eql(null);
    res.body.should.have.property('status').eql('ERROR');
    res.body.should.have.property('message');
    res.body.status.should.be.a('string');
    res.body.message.should.be.a('string');
  },
  customErrorCodeResponse: (res, code) => {
    res.should.have.status(code);
    res.body.should.have.property('data').eql(null);
    res.body.should.have.property('status').eql('ERROR');
    res.body.should.have.property('message');
    res.body.status.should.be.a('string');
    res.body.message.should.be.a('string');
  },
  initialTestSetup: () => {},
};
