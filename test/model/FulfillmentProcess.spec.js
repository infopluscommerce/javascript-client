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
    instance = new infoplus.FulfillmentProcess();
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

  describe('FulfillmentProcess', function() {
    it('should create an instance of FulfillmentProcess', function() {
      // uncomment below and update the code to test FulfillmentProcess
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be.a(infoplus.FulfillmentProcess);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property createDate (base name: "createDate")', function() {
      // uncomment below and update the code to test the property createDate
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property modifyDate (base name: "modifyDate")', function() {
      // uncomment below and update the code to test the property modifyDate
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property processNo (base name: "processNo")', function() {
      // uncomment below and update the code to test the property processNo
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property workBatchIdList (base name: "workBatchIdList")', function() {
      // uncomment below and update the code to test the property workBatchIdList
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property warehouseId (base name: "warehouseId")', function() {
      // uncomment below and update the code to test the property warehouseId
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property fulfillmentPlanId (base name: "fulfillmentPlanId")', function() {
      // uncomment below and update the code to test the property fulfillmentPlanId
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property pickScanSchemeId (base name: "pickScanSchemeId")', function() {
      // uncomment below and update the code to test the property pickScanSchemeId
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property orderSmartFilterId (base name: "orderSmartFilterId")', function() {
      // uncomment below and update the code to test the property orderSmartFilterId
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property locationSmartFilterId (base name: "locationSmartFilterId")', function() {
      // uncomment below and update the code to test the property locationSmartFilterId
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property maxOrders (base name: "maxOrders")', function() {
      // uncomment below and update the code to test the property maxOrders
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property batchMaxSize (base name: "batchMaxSize")', function() {
      // uncomment below and update the code to test the property batchMaxSize
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property batchMinSize (base name: "batchMinSize")', function() {
      // uncomment below and update the code to test the property batchMinSize
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property maxCartons (base name: "maxCartons")', function() {
      // uncomment below and update the code to test the property maxCartons
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property fulfillmentProcessGroup (base name: "fulfillmentProcessGroup")', function() {
      // uncomment below and update the code to test the property fulfillmentProcessGroup
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property isMassDistribution (base name: "isMassDistribution")', function() {
      // uncomment below and update the code to test the property isMassDistribution
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property priorityCode (base name: "priorityCode")', function() {
      // uncomment below and update the code to test the property priorityCode
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property numberOfOrders (base name: "numberOfOrders")', function() {
      // uncomment below and update the code to test the property numberOfOrders
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property numberOfLines (base name: "numberOfLines")', function() {
      // uncomment below and update the code to test the property numberOfLines
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property numberOfSKUs (base name: "numberOfSKUs")', function() {
      // uncomment below and update the code to test the property numberOfSKUs
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property completedPicks (base name: "completedPicks")', function() {
      // uncomment below and update the code to test the property completedPicks
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property totalPicks (base name: "totalPicks")', function() {
      // uncomment below and update the code to test the property totalPicks
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property shippedCasebreaks (base name: "shippedCasebreaks")', function() {
      // uncomment below and update the code to test the property shippedCasebreaks
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property totalCasebreaksToShip (base name: "totalCasebreaksToShip")', function() {
      // uncomment below and update the code to test the property totalCasebreaksToShip
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property shippedOrders (base name: "shippedOrders")', function() {
      // uncomment below and update the code to test the property shippedOrders
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property totalOrdersToShip (base name: "totalOrdersToShip")', function() {
      // uncomment below and update the code to test the property totalOrdersToShip
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property completedToDo (base name: "completedToDo")', function() {
      // uncomment below and update the code to test the property completedToDo
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property totalToDo (base name: "totalToDo")', function() {
      // uncomment below and update the code to test the property totalToDo
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property createPickWork (base name: "createPickWork")', function() {
      // uncomment below and update the code to test the property createPickWork
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property pickingRule (base name: "pickingRule")', function() {
      // uncomment below and update the code to test the property pickingRule
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property pickBatchGroupId (base name: "pickBatchGroupId")', function() {
      // uncomment below and update the code to test the property pickBatchGroupId
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property maxSKUsPerBatch (base name: "maxSKUsPerBatch")', function() {
      // uncomment below and update the code to test the property maxSKUsPerBatch
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property layoutRule (base name: "layoutRule")', function() {
      // uncomment below and update the code to test the property layoutRule
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property pickSortRule (base name: "pickSortRule")', function() {
      // uncomment below and update the code to test the property pickSortRule
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property locationSort (base name: "locationSort")', function() {
      // uncomment below and update the code to test the property locationSort
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property firstPickPosition (base name: "firstPickPosition")', function() {
      // uncomment below and update the code to test the property firstPickPosition
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property pickListFormat (base name: "pickListFormat")', function() {
      // uncomment below and update the code to test the property pickListFormat
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property pickListLayout (base name: "pickListLayout")', function() {
      // uncomment below and update the code to test the property pickListLayout
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property pickListGroup (base name: "pickListGroup")', function() {
      // uncomment below and update the code to test the property pickListGroup
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property pickListSort (base name: "pickListSort")', function() {
      // uncomment below and update the code to test the property pickListSort
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property pickListLocationSort (base name: "pickListLocationSort")', function() {
      // uncomment below and update the code to test the property pickListLocationSort
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property pickSummaryFormat (base name: "pickSummaryFormat")', function() {
      // uncomment below and update the code to test the property pickSummaryFormat
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property pickSummaryLayout (base name: "pickSummaryLayout")', function() {
      // uncomment below and update the code to test the property pickSummaryLayout
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property pickSummarySort (base name: "pickSummarySort")', function() {
      // uncomment below and update the code to test the property pickSummarySort
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property createPickSummary (base name: "createPickSummary")', function() {
      // uncomment below and update the code to test the property createPickSummary
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property createPickList (base name: "createPickList")', function() {
      // uncomment below and update the code to test the property createPickList
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property preGenerateParcelLabels (base name: "preGenerateParcelLabels")', function() {
      // uncomment below and update the code to test the property preGenerateParcelLabels
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property labelSort (base name: "labelSort")', function() {
      // uncomment below and update the code to test the property labelSort
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property shipDate (base name: "shipDate")', function() {
      // uncomment below and update the code to test the property shipDate
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property autoShipCasebreakCartons (base name: "autoShipCasebreakCartons")', function() {
      // uncomment below and update the code to test the property autoShipCasebreakCartons
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property autoShipOrders (base name: "autoShipOrders")', function() {
      // uncomment below and update the code to test the property autoShipOrders
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property cartonizeOrders (base name: "cartonizeOrders")', function() {
      // uncomment below and update the code to test the property cartonizeOrders
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property cartonizationScriptId (base name: "cartonizationScriptId")', function() {
      // uncomment below and update the code to test the property cartonizationScriptId
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property createPackingSlip (base name: "createPackingSlip")', function() {
      // uncomment below and update the code to test the property createPackingSlip
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property overridePackingSlipTemplateId (base name: "overridePackingSlipTemplateId")', function() {
      // uncomment below and update the code to test the property overridePackingSlipTemplateId
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property createOrderAssemblyGuide (base name: "createOrderAssemblyGuide")', function() {
      // uncomment below and update the code to test the property createOrderAssemblyGuide
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property createOrderInvoice (base name: "createOrderInvoice")', function() {
      // uncomment below and update the code to test the property createOrderInvoice
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property overrideOrderInvoiceTemplateId (base name: "overrideOrderInvoiceTemplateId")', function() {
      // uncomment below and update the code to test the property overrideOrderInvoiceTemplateId
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property sendToExternalShippingSystem (base name: "sendToExternalShippingSystem")', function() {
      // uncomment below and update the code to test the property sendToExternalShippingSystem
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property externalShippingSystemId (base name: "externalShippingSystemId")', function() {
      // uncomment below and update the code to test the property externalShippingSystemId
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property customFields (base name: "customFields")', function() {
      // uncomment below and update the code to test the property customFields
      //var instane = new infoplus.FulfillmentProcess();
      //expect(instance).to.be();
    });

  });

}));
