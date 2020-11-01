let mongoose = require("mongoose");
let User = require('../modules/user/user.model');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
//let server = require('../server');
const API = 'http://localhost:3000'
let should = chai.should();

chai.use(chaiHttp);

describe('Users', () => {
    beforeEach((done) => { //Before each test we empty the database
        console.log("Done");
        done();
        // User.deleteMany({}, (err,res) => {
        //    done();
        // });
        // User.deleteMany({ }, function (err) {
        //     if(err) console.log(err);
        //     console.log("Successful deletion");
        //     done();
        // });
    });

    describe('/GET user', () => {
        //this.timeout(6000);
        it('it should GET all the users', (done) => {
          chai.request(API)
              .get('/users')
              .end((err, res) => {
                    //console.log("res :: ",res);
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(4);
                done();
              });
        });
    });
})