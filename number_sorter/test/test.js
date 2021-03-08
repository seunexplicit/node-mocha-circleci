const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const expect = chai.expect;

const server = require('../app.js');

describe('number sorter app', function(){
	it('case 1:expect a sorted array to be returned', function(done){
		chai.request(server)
		.get('/')
		.query({numbers:[3, 4, 1, 2]})
		.end(function(err, res){
			expect(err).to.be.null;
			expect(res).to.have.status(200);
			expect(res.body).to.be.an('array');
			expect(res.body).to.have.lengthOf(4);
			expect(res.body).to.include.ordered.members([1,2,3,4]);
			done();
		})

	});
	it('case 2:expect a sorted array to be returned', function(done){
		chai.request(server)
		.get('/')
		.query({numbers:[]})
		.end(function(err, res){
			expect(res).to.be.null;
			expect(err).to.have.status(401);
			expect(err).to.have.param('message').to.be('requires a value');
			done()
		})

	});
})