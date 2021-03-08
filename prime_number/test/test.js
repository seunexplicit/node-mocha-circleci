const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');

chai.use(chaiHttp);
const expect = chai.expect;

describe('prime number tester', function(){
	it('it should returned array of prime number', function(done){
		chai.request(server)
		.get('/30')
		.end(function(err, res){
			expect(err).to.be.null;
			expect(res).to.have.status(200);
			expect(res.body).to.be.an('array');
			expect(res.body).to.have.lengthOf(10);
			expect(res.body).to.include([2,3,5,7,11]);
			done()
		})
	});

	it('expect error if no param set', function(done){
		chai.request(server)
		.get('/')
		.end(function(err, res){
			expect(err).not.to.be.null;
			expect(res).to.be.null;
			expect(err).to.have.status(401);
			expect(err.message).to.be('parameter required');
			done();
		})
	})
})