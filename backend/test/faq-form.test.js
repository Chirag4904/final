let chai = require('chai');
let should = chai.should();
let chaiHttp = require('chai-http');
// let server = require('../server')
let express = require("express");
let router = express.Router();
let { FaqModel, faq } = require("../models/faq-form.model");
let sleep = require('sleep');
chai.use(chaiHttp);
let mockFaq;


describe('FAQ CRUD Unit tests', () => {
    // FaqModel.collection.drop();

    // CREATE
    beforeEach((done) => {
        mockFaq = new FaqModel({
            title: 'title',
            description: 'description'
        });
        mockFaq.save(function (err, doc) {
            console.log(doc)
            console.log(err)
            done();
        });
        // sleep.sleep(5)
    });

    // GET
    describe('/get-faq-form', () => {
        it('SHOULD LIST ALL FAQ FORMS', (done) => {
            chai.request(router)
                .post('/get-faq-form')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.be.a('array');
                    res.body[0].should.have.property('_id');
                    res.body[0].should.have.property('title');
                    res.body[0].should.have.property('description');
                });
        });
    });

    // // DELETE
    // describe('/delete-faq-form', () => {
    //     it('DELETE FAQ FORMS', (done) => {
    //         chai.request(router)
    //             .post('/delete-faq-form')
    //             .end((err, res) => {
    //                 res.should.have.status(200);
    //                 res.should.be.json;
    //                 res.body.should.be.a('array');
    //                 res.body[0].should.have.property('_id');
    //                 res.body[0].should.have.property('title');
    //                 res.body[0].should.have.property('description');
    //             });
    //     });
    // });

    // DELETE
    afterEach((done) => {
        FaqModel.collection.drop();
        done();
    });

});