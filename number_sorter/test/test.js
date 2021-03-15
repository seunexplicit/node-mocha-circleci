const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const expect = chai.expect;

const server = require('../app.js');

describe('number sorter app', function(){
	it('return error on index / route', function(done){
		chai.request(server)
		.get('/')
		.end(function(err, res){
			expect(res.body).to.be.empty;
			expect(res).to.have.status(401);
			expect(res).to.have.property('text', 'require a value');
			done();
		})

	});
	it('case 1:expect a sorted array to be returned', function(done){
		chai.request(server)
		.get('/sorter1')
		.query({numbers:[3, 10, 4, 1, 2, 7, 8, 3, 2]})
		.end(function(err, res){
			console.log(res.body.processTime, ': processTime');
			expect(err).to.be.null;
			expect(res).to.have.status(200);
			expect(res.body).to.be.an('object');
			expect(res.body).to.have.deep.property('sortedArray', [1, 2, 2, 3, 3, 4, 7, 8, 10]);
			expect(res.body.sortedArray).to.have.lengthOf(9);
			expect(res.body).to.have.property('processTime');
			expect(res.body).to.not.have.property('errorMessage');
			done();
		})

	});
	it('case 2:expect route to accept only array of interger', function(done){
		chai.request(server)
		.get('/sorter1')
		.query({numbers:'12345'})
		.end(function(err, res){
			expect(res.body).to.be.empty
			expect(res).to.have.status(401);
			expect(res).to.have.property('text', 'please pass in an array');
			done()
		})

	});
})