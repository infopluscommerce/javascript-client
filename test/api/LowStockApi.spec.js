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
    instance = new infoplus.LowStockApi();
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

  describe('LowStockApi', function() {
    describe('addLowStockAudit', function() {
      it('should call addLowStockAudit successfully', function(done) {
        //uncomment below and update the code to test addLowStockAudit
        //instance.addLowStockAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addLowStockFile', function() {
      it('should call addLowStockFile successfully', function(done) {
        //uncomment below and update the code to test addLowStockFile
        //instance.addLowStockFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addLowStockTag', function() {
      it('should call addLowStockTag successfully', function(done) {
        //uncomment below and update the code to test addLowStockTag
        //instance.addLowStockTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteLowStockTag', function() {
      it('should call deleteLowStockTag successfully', function(done) {
        //uncomment below and update the code to test deleteLowStockTag
        //instance.deleteLowStockTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicateLowStockById', function() {
      it('should call getDuplicateLowStockById successfully', function(done) {
        //uncomment below and update the code to test getDuplicateLowStockById
        //instance.getDuplicateLowStockById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getLowStockByFilter', function() {
      it('should call getLowStockByFilter successfully', function(done) {
        //uncomment below and update the code to test getLowStockByFilter
        //instance.getLowStockByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getLowStockById', function() {
      it('should call getLowStockById successfully', function(done) {
        //uncomment below and update the code to test getLowStockById
        //instance.getLowStockById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getLowStockTags', function() {
      it('should call getLowStockTags successfully', function(done) {
        //uncomment below and update the code to test getLowStockTags
        //instance.getLowStockTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
