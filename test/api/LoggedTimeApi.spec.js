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
    instance = new infoplus.LoggedTimeApi();
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

  describe('LoggedTimeApi', function() {
    describe('addLoggedTimeAudit', function() {
      it('should call addLoggedTimeAudit successfully', function(done) {
        //uncomment below and update the code to test addLoggedTimeAudit
        //instance.addLoggedTimeAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addLoggedTimeFile', function() {
      it('should call addLoggedTimeFile successfully', function(done) {
        //uncomment below and update the code to test addLoggedTimeFile
        //instance.addLoggedTimeFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addLoggedTimeFileByURL', function() {
      it('should call addLoggedTimeFileByURL successfully', function(done) {
        //uncomment below and update the code to test addLoggedTimeFileByURL
        //instance.addLoggedTimeFileByURL(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addLoggedTimeTag', function() {
      it('should call addLoggedTimeTag successfully', function(done) {
        //uncomment below and update the code to test addLoggedTimeTag
        //instance.addLoggedTimeTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteLoggedTimeFile', function() {
      it('should call deleteLoggedTimeFile successfully', function(done) {
        //uncomment below and update the code to test deleteLoggedTimeFile
        //instance.deleteLoggedTimeFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteLoggedTimeTag', function() {
      it('should call deleteLoggedTimeTag successfully', function(done) {
        //uncomment below and update the code to test deleteLoggedTimeTag
        //instance.deleteLoggedTimeTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicateLoggedTimeById', function() {
      it('should call getDuplicateLoggedTimeById successfully', function(done) {
        //uncomment below and update the code to test getDuplicateLoggedTimeById
        //instance.getDuplicateLoggedTimeById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getLoggedTimeByFilter', function() {
      it('should call getLoggedTimeByFilter successfully', function(done) {
        //uncomment below and update the code to test getLoggedTimeByFilter
        //instance.getLoggedTimeByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getLoggedTimeById', function() {
      it('should call getLoggedTimeById successfully', function(done) {
        //uncomment below and update the code to test getLoggedTimeById
        //instance.getLoggedTimeById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getLoggedTimeFiles', function() {
      it('should call getLoggedTimeFiles successfully', function(done) {
        //uncomment below and update the code to test getLoggedTimeFiles
        //instance.getLoggedTimeFiles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getLoggedTimeTags', function() {
      it('should call getLoggedTimeTags successfully', function(done) {
        //uncomment below and update the code to test getLoggedTimeTags
        //instance.getLoggedTimeTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateLoggedTimeCustomFields', function() {
      it('should call updateLoggedTimeCustomFields successfully', function(done) {
        //uncomment below and update the code to test updateLoggedTimeCustomFields
        //instance.updateLoggedTimeCustomFields(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
