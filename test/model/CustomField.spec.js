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
    instance = new infoplus.CustomField();
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

  describe('CustomField', function() {
    it('should create an instance of CustomField', function() {
      // uncomment below and update the code to test CustomField
      //var instane = new infoplus.CustomField();
      //expect(instance).to.be.a(infoplus.CustomField);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new infoplus.CustomField();
      //expect(instance).to.be();
    });

    it('should have the property createDate (base name: "createDate")', function() {
      // uncomment below and update the code to test the property createDate
      //var instane = new infoplus.CustomField();
      //expect(instance).to.be();
    });

    it('should have the property modifyDate (base name: "modifyDate")', function() {
      // uncomment below and update the code to test the property modifyDate
      //var instane = new infoplus.CustomField();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new infoplus.CustomField();
      //expect(instance).to.be();
    });

    it('should have the property label (base name: "label")', function() {
      // uncomment below and update the code to test the property label
      //var instane = new infoplus.CustomField();
      //expect(instance).to.be();
    });

    it('should have the property enabled (base name: "enabled")', function() {
      // uncomment below and update the code to test the property enabled
      //var instane = new infoplus.CustomField();
      //expect(instance).to.be();
    });

    it('should have the property fieldType (base name: "fieldType")', function() {
      // uncomment below and update the code to test the property fieldType
      //var instane = new infoplus.CustomField();
      //expect(instance).to.be();
    });

    it('should have the property searchable (base name: "searchable")', function() {
      // uncomment below and update the code to test the property searchable
      //var instane = new infoplus.CustomField();
      //expect(instance).to.be();
    });

    it('should have the property tooltip (base name: "tooltip")', function() {
      // uncomment below and update the code to test the property tooltip
      //var instane = new infoplus.CustomField();
      //expect(instance).to.be();
    });

    it('should have the property tabLabel (base name: "tabLabel")', function() {
      // uncomment below and update the code to test the property tabLabel
      //var instane = new infoplus.CustomField();
      //expect(instance).to.be();
    });

    it('should have the property recordType (base name: "recordType")', function() {
      // uncomment below and update the code to test the property recordType
      //var instane = new infoplus.CustomField();
      //expect(instance).to.be();
    });

    it('should have the property customFields (base name: "customFields")', function() {
      // uncomment below and update the code to test the property customFields
      //var instane = new infoplus.CustomField();
      //expect(instance).to.be();
    });

  });

}));
