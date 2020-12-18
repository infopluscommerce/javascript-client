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
    instance = new infoplus.Cart();
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

  describe('Cart', function() {
    it('should create an instance of Cart', function() {
      // uncomment below and update the code to test Cart
      //var instane = new infoplus.Cart();
      //expect(instance).to.be.a(infoplus.Cart);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new infoplus.Cart();
      //expect(instance).to.be();
    });

    it('should have the property createDate (base name: "createDate")', function() {
      // uncomment below and update the code to test the property createDate
      //var instane = new infoplus.Cart();
      //expect(instance).to.be();
    });

    it('should have the property modifyDate (base name: "modifyDate")', function() {
      // uncomment below and update the code to test the property modifyDate
      //var instane = new infoplus.Cart();
      //expect(instance).to.be();
    });

    it('should have the property cartId (base name: "cartId")', function() {
      // uncomment below and update the code to test the property cartId
      //var instane = new infoplus.Cart();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new infoplus.Cart();
      //expect(instance).to.be();
    });

    it('should have the property currentFulfillmentProcessId (base name: "currentFulfillmentProcessId")', function() {
      // uncomment below and update the code to test the property currentFulfillmentProcessId
      //var instane = new infoplus.Cart();
      //expect(instance).to.be();
    });

    it('should have the property currentWorkBatchId (base name: "currentWorkBatchId")', function() {
      // uncomment below and update the code to test the property currentWorkBatchId
      //var instane = new infoplus.Cart();
      //expect(instance).to.be();
    });

    it('should have the property positionType (base name: "positionType")', function() {
      // uncomment below and update the code to test the property positionType
      //var instane = new infoplus.Cart();
      //expect(instance).to.be();
    });

    it('should have the property customFields (base name: "customFields")', function() {
      // uncomment below and update the code to test the property customFields
      //var instane = new infoplus.Cart();
      //expect(instance).to.be();
    });

  });

}));
