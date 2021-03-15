const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('../app.js');
const expect = chai.expect;

chai.use(chaiHttp);

describe('fibonnacci computation', function(){

	it('fib 0: it should return 0', function(){
		chai.request(server)
		.get('/0')
		.end(function(err, res){
			expect(err).to.be.null;
			expect(res).to.have.status(200);
			expect(res.body).to.be.an('object');
			expect(res.body).to.deep.equal({fib:0});
		})
	});

	it('sequence 0: it should return a value ', function(done){
		chai.request(server)
		.get('/sequence/0')
		.end(function(err, res){
			expect(err).to.be.a('null');
			expect(res).to.have.status(200);
			expect(res.body).to.be.an('array');
			expect(res.body).to.have.lengthOf(1);
			expect(res.body).to.deep.equal([0]);
			done();
		});
	});

	it('sequence 2: it should return a value ', function(done){
		chai.request(server)
		.get('/sequence/2')
		.end(function(err, res){
			expect(err).to.be.a('null');
			expect(res).to.have.status(200);
			expect(res.body).to.be.an('array');
			expect(res.body).to.have.lengthOf(3);
			expect(res.body).to.include.ordered.members([0, 1, 1]);
			done();
		});
	})
})