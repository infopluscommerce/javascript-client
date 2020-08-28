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
    instance = new infoplus.ZoneApi();
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

  describe('ZoneApi', function() {
    describe('addZone', function() {
      it('should call addZone successfully', function(done) {
        //uncomment below and update the code to test addZone
        //instance.addZone(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addZoneAudit', function() {
      it('should call addZoneAudit successfully', function(done) {
        //uncomment below and update the code to test addZoneAudit
        //instance.addZoneAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addZoneFile', function() {
      it('should call addZoneFile successfully', function(done) {
        //uncomment below and update the code to test addZoneFile
        //instance.addZoneFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addZoneFileByURL', function() {
      it('should call addZoneFileByURL successfully', function(done) {
        //uncomment below and update the code to test addZoneFileByURL
        //instance.addZoneFileByURL(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addZoneTag', function() {
      it('should call addZoneTag successfully', function(done) {
        //uncomment below and update the code to test addZoneTag
        //instance.addZoneTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteZone', function() {
      it('should call deleteZone successfully', function(done) {
        //uncomment below and update the code to test deleteZone
        //instance.deleteZone(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteZoneFile', function() {
      it('should call deleteZoneFile successfully', function(done) {
        //uncomment below and update the code to test deleteZoneFile
        //instance.deleteZoneFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteZoneTag', function() {
      it('should call deleteZoneTag successfully', function(done) {
        //uncomment below and update the code to test deleteZoneTag
        //instance.deleteZoneTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicateZoneById', function() {
      it('should call getDuplicateZoneById successfully', function(done) {
        //uncomment below and update the code to test getDuplicateZoneById
        //instance.getDuplicateZoneById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getZoneByFilter', function() {
      it('should call getZoneByFilter successfully', function(done) {
        //uncomment below and update the code to test getZoneByFilter
        //instance.getZoneByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getZoneById', function() {
      it('should call getZoneById successfully', function(done) {
        //uncomment below and update the code to test getZoneById
        //instance.getZoneById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getZoneFiles', function() {
      it('should call getZoneFiles successfully', function(done) {
        //uncomment below and update the code to test getZoneFiles
        //instance.getZoneFiles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getZoneTags', function() {
      it('should call getZoneTags successfully', function(done) {
        //uncomment below and update the code to test getZoneTags
        //instance.getZoneTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateZone', function() {
      it('should call updateZone successfully', function(done) {
        //uncomment below and update the code to test updateZone
        //instance.updateZone(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateZoneCustomFields', function() {
      it('should call updateZoneCustomFields successfully', function(done) {
        //uncomment below and update the code to test updateZoneCustomFields
        //instance.updateZoneCustomFields(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
