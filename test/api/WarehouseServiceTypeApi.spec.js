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
    instance = new infoplus.WarehouseServiceTypeApi();
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

  describe('WarehouseServiceTypeApi', function() {
    describe('addWarehouseServiceType', function() {
      it('should call addWarehouseServiceType successfully', function(done) {
        //uncomment below and update the code to test addWarehouseServiceType
        //instance.addWarehouseServiceType(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addWarehouseServiceTypeAudit', function() {
      it('should call addWarehouseServiceTypeAudit successfully', function(done) {
        //uncomment below and update the code to test addWarehouseServiceTypeAudit
        //instance.addWarehouseServiceTypeAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addWarehouseServiceTypeFile', function() {
      it('should call addWarehouseServiceTypeFile successfully', function(done) {
        //uncomment below and update the code to test addWarehouseServiceTypeFile
        //instance.addWarehouseServiceTypeFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addWarehouseServiceTypeTag', function() {
      it('should call addWarehouseServiceTypeTag successfully', function(done) {
        //uncomment below and update the code to test addWarehouseServiceTypeTag
        //instance.addWarehouseServiceTypeTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteWarehouseServiceType', function() {
      it('should call deleteWarehouseServiceType successfully', function(done) {
        //uncomment below and update the code to test deleteWarehouseServiceType
        //instance.deleteWarehouseServiceType(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteWarehouseServiceTypeTag', function() {
      it('should call deleteWarehouseServiceTypeTag successfully', function(done) {
        //uncomment below and update the code to test deleteWarehouseServiceTypeTag
        //instance.deleteWarehouseServiceTypeTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicateWarehouseServiceTypeById', function() {
      it('should call getDuplicateWarehouseServiceTypeById successfully', function(done) {
        //uncomment below and update the code to test getDuplicateWarehouseServiceTypeById
        //instance.getDuplicateWarehouseServiceTypeById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWarehouseServiceTypeByFilter', function() {
      it('should call getWarehouseServiceTypeByFilter successfully', function(done) {
        //uncomment below and update the code to test getWarehouseServiceTypeByFilter
        //instance.getWarehouseServiceTypeByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWarehouseServiceTypeById', function() {
      it('should call getWarehouseServiceTypeById successfully', function(done) {
        //uncomment below and update the code to test getWarehouseServiceTypeById
        //instance.getWarehouseServiceTypeById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWarehouseServiceTypeTags', function() {
      it('should call getWarehouseServiceTypeTags successfully', function(done) {
        //uncomment below and update the code to test getWarehouseServiceTypeTags
        //instance.getWarehouseServiceTypeTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateWarehouseServiceType', function() {
      it('should call updateWarehouseServiceType successfully', function(done) {
        //uncomment below and update the code to test updateWarehouseServiceType
        //instance.updateWarehouseServiceType(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateWarehouseServiceTypeCustomFields', function() {
      it('should call updateWarehouseServiceTypeCustomFields successfully', function(done) {
        //uncomment below and update the code to test updateWarehouseServiceTypeCustomFields
        //instance.updateWarehouseServiceTypeCustomFields(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
