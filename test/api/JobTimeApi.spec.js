/**
 * Infoplus API
 * Infoplus API.
 *
 * OpenAPI spec version: beta
 * Contact: api@infopluscommerce.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.infoplus);
  }
}(this, function(expect, infoplus) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new infoplus.JobTimeApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('JobTimeApi', function() {
    describe('addJobTime', function() {
      it('should call addJobTime successfully', function(done) {
        //uncomment below and update the code to test addJobTime
        //instance.addJobTime(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addJobTimeAudit', function() {
      it('should call addJobTimeAudit successfully', function(done) {
        //uncomment below and update the code to test addJobTimeAudit
        //instance.addJobTimeAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addJobTimeTag', function() {
      it('should call addJobTimeTag successfully', function(done) {
        //uncomment below and update the code to test addJobTimeTag
        //instance.addJobTimeTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteJobTime', function() {
      it('should call deleteJobTime successfully', function(done) {
        //uncomment below and update the code to test deleteJobTime
        //instance.deleteJobTime(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteJobTimeTag', function() {
      it('should call deleteJobTimeTag successfully', function(done) {
        //uncomment below and update the code to test deleteJobTimeTag
        //instance.deleteJobTimeTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicateJobTimeById', function() {
      it('should call getDuplicateJobTimeById successfully', function(done) {
        //uncomment below and update the code to test getDuplicateJobTimeById
        //instance.getDuplicateJobTimeById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getJobTimeByFilter', function() {
      it('should call getJobTimeByFilter successfully', function(done) {
        //uncomment below and update the code to test getJobTimeByFilter
        //instance.getJobTimeByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getJobTimeById', function() {
      it('should call getJobTimeById successfully', function(done) {
        //uncomment below and update the code to test getJobTimeById
        //instance.getJobTimeById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getJobTimeTags', function() {
      it('should call getJobTimeTags successfully', function(done) {
        //uncomment below and update the code to test getJobTimeTags
        //instance.getJobTimeTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateJobTime', function() {
      it('should call updateJobTime successfully', function(done) {
        //uncomment below and update the code to test updateJobTime
        //instance.updateJobTime(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateJobTimeCustomFields', function() {
      it('should call updateJobTimeCustomFields successfully', function(done) {
        //uncomment below and update the code to test updateJobTimeCustomFields
        //instance.updateJobTimeCustomFields(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));