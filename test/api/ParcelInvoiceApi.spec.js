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
    instance = new infoplus.ParcelInvoiceApi();
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

  describe('ParcelInvoiceApi', function() {
    describe('addParcelInvoiceAudit', function() {
      it('should call addParcelInvoiceAudit successfully', function(done) {
        //uncomment below and update the code to test addParcelInvoiceAudit
        //instance.addParcelInvoiceAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addParcelInvoiceFile', function() {
      it('should call addParcelInvoiceFile successfully', function(done) {
        //uncomment below and update the code to test addParcelInvoiceFile
        //instance.addParcelInvoiceFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addParcelInvoiceFileByURL', function() {
      it('should call addParcelInvoiceFileByURL successfully', function(done) {
        //uncomment below and update the code to test addParcelInvoiceFileByURL
        //instance.addParcelInvoiceFileByURL(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addParcelInvoiceTag', function() {
      it('should call addParcelInvoiceTag successfully', function(done) {
        //uncomment below and update the code to test addParcelInvoiceTag
        //instance.addParcelInvoiceTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteParcelInvoice', function() {
      it('should call deleteParcelInvoice successfully', function(done) {
        //uncomment below and update the code to test deleteParcelInvoice
        //instance.deleteParcelInvoice(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteParcelInvoiceFile', function() {
      it('should call deleteParcelInvoiceFile successfully', function(done) {
        //uncomment below and update the code to test deleteParcelInvoiceFile
        //instance.deleteParcelInvoiceFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteParcelInvoiceTag', function() {
      it('should call deleteParcelInvoiceTag successfully', function(done) {
        //uncomment below and update the code to test deleteParcelInvoiceTag
        //instance.deleteParcelInvoiceTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicateParcelInvoiceById', function() {
      it('should call getDuplicateParcelInvoiceById successfully', function(done) {
        //uncomment below and update the code to test getDuplicateParcelInvoiceById
        //instance.getDuplicateParcelInvoiceById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getParcelInvoiceByFilter', function() {
      it('should call getParcelInvoiceByFilter successfully', function(done) {
        //uncomment below and update the code to test getParcelInvoiceByFilter
        //instance.getParcelInvoiceByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getParcelInvoiceById', function() {
      it('should call getParcelInvoiceById successfully', function(done) {
        //uncomment below and update the code to test getParcelInvoiceById
        //instance.getParcelInvoiceById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getParcelInvoiceFiles', function() {
      it('should call getParcelInvoiceFiles successfully', function(done) {
        //uncomment below and update the code to test getParcelInvoiceFiles
        //instance.getParcelInvoiceFiles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getParcelInvoiceTags', function() {
      it('should call getParcelInvoiceTags successfully', function(done) {
        //uncomment below and update the code to test getParcelInvoiceTags
        //instance.getParcelInvoiceTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
