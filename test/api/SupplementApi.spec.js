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
 * Swagger Codegen version: 2.3.1
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
    instance = new infoplus.SupplementApi();
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

  describe('SupplementApi', function() {
    describe('addSupplement', function() {
      it('should call addSupplement successfully', function(done) {
        //uncomment below and update the code to test addSupplement
        //instance.addSupplement(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addSupplementAudit', function() {
      it('should call addSupplementAudit successfully', function(done) {
        //uncomment below and update the code to test addSupplementAudit
        //instance.addSupplementAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addSupplementTag', function() {
      it('should call addSupplementTag successfully', function(done) {
        //uncomment below and update the code to test addSupplementTag
        //instance.addSupplementTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteSupplement', function() {
      it('should call deleteSupplement successfully', function(done) {
        //uncomment below and update the code to test deleteSupplement
        //instance.deleteSupplement(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteSupplementTag', function() {
      it('should call deleteSupplementTag successfully', function(done) {
        //uncomment below and update the code to test deleteSupplementTag
        //instance.deleteSupplementTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicateSupplementById', function() {
      it('should call getDuplicateSupplementById successfully', function(done) {
        //uncomment below and update the code to test getDuplicateSupplementById
        //instance.getDuplicateSupplementById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSupplementByFilter', function() {
      it('should call getSupplementByFilter successfully', function(done) {
        //uncomment below and update the code to test getSupplementByFilter
        //instance.getSupplementByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSupplementById', function() {
      it('should call getSupplementById successfully', function(done) {
        //uncomment below and update the code to test getSupplementById
        //instance.getSupplementById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSupplementTags', function() {
      it('should call getSupplementTags successfully', function(done) {
        //uncomment below and update the code to test getSupplementTags
        //instance.getSupplementTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateSupplement', function() {
      it('should call updateSupplement successfully', function(done) {
        //uncomment below and update the code to test updateSupplement
        //instance.updateSupplement(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateSupplementCustomFields', function() {
      it('should call updateSupplementCustomFields successfully', function(done) {
        //uncomment below and update the code to test updateSupplementCustomFields
        //instance.updateSupplementCustomFields(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
