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
    instance = new infoplus.EdiDocumentApi();
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

  describe('EdiDocumentApi', function() {
    describe('addEdiDocument', function() {
      it('should call addEdiDocument successfully', function(done) {
        //uncomment below and update the code to test addEdiDocument
        //instance.addEdiDocument(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addEdiDocumentAudit', function() {
      it('should call addEdiDocumentAudit successfully', function(done) {
        //uncomment below and update the code to test addEdiDocumentAudit
        //instance.addEdiDocumentAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addEdiDocumentFile', function() {
      it('should call addEdiDocumentFile successfully', function(done) {
        //uncomment below and update the code to test addEdiDocumentFile
        //instance.addEdiDocumentFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addEdiDocumentFileByURL', function() {
      it('should call addEdiDocumentFileByURL successfully', function(done) {
        //uncomment below and update the code to test addEdiDocumentFileByURL
        //instance.addEdiDocumentFileByURL(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addEdiDocumentTag', function() {
      it('should call addEdiDocumentTag successfully', function(done) {
        //uncomment below and update the code to test addEdiDocumentTag
        //instance.addEdiDocumentTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteEdiDocumentFile', function() {
      it('should call deleteEdiDocumentFile successfully', function(done) {
        //uncomment below and update the code to test deleteEdiDocumentFile
        //instance.deleteEdiDocumentFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteEdiDocumentTag', function() {
      it('should call deleteEdiDocumentTag successfully', function(done) {
        //uncomment below and update the code to test deleteEdiDocumentTag
        //instance.deleteEdiDocumentTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicateEdiDocumentById', function() {
      it('should call getDuplicateEdiDocumentById successfully', function(done) {
        //uncomment below and update the code to test getDuplicateEdiDocumentById
        //instance.getDuplicateEdiDocumentById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEdiDocumentByFilter', function() {
      it('should call getEdiDocumentByFilter successfully', function(done) {
        //uncomment below and update the code to test getEdiDocumentByFilter
        //instance.getEdiDocumentByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEdiDocumentById', function() {
      it('should call getEdiDocumentById successfully', function(done) {
        //uncomment below and update the code to test getEdiDocumentById
        //instance.getEdiDocumentById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEdiDocumentFiles', function() {
      it('should call getEdiDocumentFiles successfully', function(done) {
        //uncomment below and update the code to test getEdiDocumentFiles
        //instance.getEdiDocumentFiles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEdiDocumentTags', function() {
      it('should call getEdiDocumentTags successfully', function(done) {
        //uncomment below and update the code to test getEdiDocumentTags
        //instance.getEdiDocumentTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
