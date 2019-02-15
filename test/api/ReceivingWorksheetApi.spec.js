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
    instance = new infoplus.ReceivingWorksheetApi();
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

  describe('ReceivingWorksheetApi', function() {
    describe('addReceivingWorksheet', function() {
      it('should call addReceivingWorksheet successfully', function(done) {
        //uncomment below and update the code to test addReceivingWorksheet
        //instance.addReceivingWorksheet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addReceivingWorksheetAudit', function() {
      it('should call addReceivingWorksheetAudit successfully', function(done) {
        //uncomment below and update the code to test addReceivingWorksheetAudit
        //instance.addReceivingWorksheetAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addReceivingWorksheetTag', function() {
      it('should call addReceivingWorksheetTag successfully', function(done) {
        //uncomment below and update the code to test addReceivingWorksheetTag
        //instance.addReceivingWorksheetTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteReceivingWorksheet', function() {
      it('should call deleteReceivingWorksheet successfully', function(done) {
        //uncomment below and update the code to test deleteReceivingWorksheet
        //instance.deleteReceivingWorksheet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteReceivingWorksheetTag', function() {
      it('should call deleteReceivingWorksheetTag successfully', function(done) {
        //uncomment below and update the code to test deleteReceivingWorksheetTag
        //instance.deleteReceivingWorksheetTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicateReceivingWorksheetById', function() {
      it('should call getDuplicateReceivingWorksheetById successfully', function(done) {
        //uncomment below and update the code to test getDuplicateReceivingWorksheetById
        //instance.getDuplicateReceivingWorksheetById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getReceivingWorksheetByFilter', function() {
      it('should call getReceivingWorksheetByFilter successfully', function(done) {
        //uncomment below and update the code to test getReceivingWorksheetByFilter
        //instance.getReceivingWorksheetByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getReceivingWorksheetById', function() {
      it('should call getReceivingWorksheetById successfully', function(done) {
        //uncomment below and update the code to test getReceivingWorksheetById
        //instance.getReceivingWorksheetById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getReceivingWorksheetTags', function() {
      it('should call getReceivingWorksheetTags successfully', function(done) {
        //uncomment below and update the code to test getReceivingWorksheetTags
        //instance.getReceivingWorksheetTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateReceivingWorksheet', function() {
      it('should call updateReceivingWorksheet successfully', function(done) {
        //uncomment below and update the code to test updateReceivingWorksheet
        //instance.updateReceivingWorksheet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateReceivingWorksheetCustomFields', function() {
      it('should call updateReceivingWorksheetCustomFields successfully', function(done) {
        //uncomment below and update the code to test updateReceivingWorksheetCustomFields
        //instance.updateReceivingWorksheetCustomFields(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
