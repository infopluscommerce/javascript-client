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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.FulfillmentPlan = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The FulfillmentPlan model module.
   * @module model/FulfillmentPlan
   * @version beta
   */

  /**
   * Constructs a new <code>FulfillmentPlan</code>.
   * @alias module:model/FulfillmentPlan
   * @class
   * @param name {String} 
   * @param warehouseId {Number} 
   * @param orderSmartFilterId {Number} 
   * @param createPickWork {Boolean} 
   * @param pickScanSchemeId {Number} 
   * @param cartonizeOrders {Boolean} 
   * @param createPackingSlip {String} 
   * @param createOrderInvoice {String} 
   * @param sendToExternalShippingSystem {Boolean} 
   */
  var exports = function(name, warehouseId, orderSmartFilterId, createPickWork, pickScanSchemeId, cartonizeOrders, createPackingSlip, createOrderInvoice, sendToExternalShippingSystem) {
    var _this = this;




    _this['name'] = name;

    _this['warehouseId'] = warehouseId;


    _this['orderSmartFilterId'] = orderSmartFilterId;







    _this['createPickWork'] = createPickWork;
















    _this['pickScanSchemeId'] = pickScanSchemeId;
    _this['cartonizeOrders'] = cartonizeOrders;





    _this['createPackingSlip'] = createPackingSlip;



    _this['createOrderInvoice'] = createOrderInvoice;



    _this['sendToExternalShippingSystem'] = sendToExternalShippingSystem;


  };

  /**
   * Constructs a <code>FulfillmentPlan</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FulfillmentPlan} obj Optional instance to populate.
   * @return {module:model/FulfillmentPlan} The populated <code>FulfillmentPlan</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('createDate')) {
        obj['createDate'] = ApiClient.convertToType(data['createDate'], 'Date');
      }
      if (data.hasOwnProperty('modifyDate')) {
        obj['modifyDate'] = ApiClient.convertToType(data['modifyDate'], 'Date');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('warehouseId')) {
        obj['warehouseId'] = ApiClient.convertToType(data['warehouseId'], 'Number');
      }
      if (data.hasOwnProperty('priorityCode')) {
        obj['priorityCode'] = ApiClient.convertToType(data['priorityCode'], 'Number');
      }
      if (data.hasOwnProperty('lastRunTime')) {
        obj['lastRunTime'] = ApiClient.convertToType(data['lastRunTime'], 'Date');
      }
      if (data.hasOwnProperty('orderSmartFilterId')) {
        obj['orderSmartFilterId'] = ApiClient.convertToType(data['orderSmartFilterId'], 'Number');
      }
      if (data.hasOwnProperty('locationSmartFilterId')) {
        obj['locationSmartFilterId'] = ApiClient.convertToType(data['locationSmartFilterId'], 'Number');
      }
      if (data.hasOwnProperty('maxOrders')) {
        obj['maxOrders'] = ApiClient.convertToType(data['maxOrders'], 'Number');
      }
      if (data.hasOwnProperty('batchSizeMax')) {
        obj['batchSizeMax'] = ApiClient.convertToType(data['batchSizeMax'], 'Number');
      }
      if (data.hasOwnProperty('batchSizeMin')) {
        obj['batchSizeMin'] = ApiClient.convertToType(data['batchSizeMin'], 'Number');
      }
      if (data.hasOwnProperty('maxCartons')) {
        obj['maxCartons'] = ApiClient.convertToType(data['maxCartons'], 'Number');
      }
      if (data.hasOwnProperty('version')) {
        obj['version'] = ApiClient.convertToType(data['version'], 'String');
      }
      if (data.hasOwnProperty('isMassDistribution')) {
        obj['isMassDistribution'] = ApiClient.convertToType(data['isMassDistribution'], 'Boolean');
      }
      if (data.hasOwnProperty('createPickWork')) {
        obj['createPickWork'] = ApiClient.convertToType(data['createPickWork'], 'Boolean');
      }
      if (data.hasOwnProperty('pickingRule')) {
        obj['pickingRule'] = ApiClient.convertToType(data['pickingRule'], 'String');
      }
      if (data.hasOwnProperty('pickBatchGroupId')) {
        obj['pickBatchGroupId'] = ApiClient.convertToType(data['pickBatchGroupId'], 'String');
      }
      if (data.hasOwnProperty('maxSKUsPerBatch')) {
        obj['maxSKUsPerBatch'] = ApiClient.convertToType(data['maxSKUsPerBatch'], 'Number');
      }
      if (data.hasOwnProperty('layoutRule')) {
        obj['layoutRule'] = ApiClient.convertToType(data['layoutRule'], 'String');
      }
      if (data.hasOwnProperty('pickSortRule')) {
        obj['pickSortRule'] = ApiClient.convertToType(data['pickSortRule'], 'String');
      }
      if (data.hasOwnProperty('locationSort')) {
        obj['locationSort'] = ApiClient.convertToType(data['locationSort'], 'String');
      }
      if (data.hasOwnProperty('createPickList')) {
        obj['createPickList'] = ApiClient.convertToType(data['createPickList'], 'Boolean');
      }
      if (data.hasOwnProperty('pickListFormat')) {
        obj['pickListFormat'] = ApiClient.convertToType(data['pickListFormat'], 'String');
      }
      if (data.hasOwnProperty('pickListLayout')) {
        obj['pickListLayout'] = ApiClient.convertToType(data['pickListLayout'], 'String');
      }
      if (data.hasOwnProperty('pickListGroup')) {
        obj['pickListGroup'] = ApiClient.convertToType(data['pickListGroup'], 'String');
      }
      if (data.hasOwnProperty('pickListSort')) {
        obj['pickListSort'] = ApiClient.convertToType(data['pickListSort'], 'String');
      }
      if (data.hasOwnProperty('pickListLocationSort')) {
        obj['pickListLocationSort'] = ApiClient.convertToType(data['pickListLocationSort'], 'String');
      }
      if (data.hasOwnProperty('createPickSummary')) {
        obj['createPickSummary'] = ApiClient.convertToType(data['createPickSummary'], 'Boolean');
      }
      if (data.hasOwnProperty('pickSummaryFormat')) {
        obj['pickSummaryFormat'] = ApiClient.convertToType(data['pickSummaryFormat'], 'String');
      }
      if (data.hasOwnProperty('pickSummaryLayout')) {
        obj['pickSummaryLayout'] = ApiClient.convertToType(data['pickSummaryLayout'], 'String');
      }
      if (data.hasOwnProperty('pickSummarySort')) {
        obj['pickSummarySort'] = ApiClient.convertToType(data['pickSummarySort'], 'String');
      }
      if (data.hasOwnProperty('pickScanSchemeId')) {
        obj['pickScanSchemeId'] = ApiClient.convertToType(data['pickScanSchemeId'], 'Number');
      }
      if (data.hasOwnProperty('cartonizeOrders')) {
        obj['cartonizeOrders'] = ApiClient.convertToType(data['cartonizeOrders'], 'Boolean');
      }
      if (data.hasOwnProperty('cartonizationScriptId')) {
        obj['cartonizationScriptId'] = ApiClient.convertToType(data['cartonizationScriptId'], 'Number');
      }
      if (data.hasOwnProperty('autoShipCasebreakCartons')) {
        obj['autoShipCasebreakCartons'] = ApiClient.convertToType(data['autoShipCasebreakCartons'], 'Boolean');
      }
      if (data.hasOwnProperty('autoShipOrders')) {
        obj['autoShipOrders'] = ApiClient.convertToType(data['autoShipOrders'], 'Boolean');
      }
      if (data.hasOwnProperty('preGenerateParcelLabels')) {
        obj['preGenerateParcelLabels'] = ApiClient.convertToType(data['preGenerateParcelLabels'], 'Boolean');
      }
      if (data.hasOwnProperty('labelSort')) {
        obj['labelSort'] = ApiClient.convertToType(data['labelSort'], 'String');
      }
      if (data.hasOwnProperty('createPackingSlip')) {
        obj['createPackingSlip'] = ApiClient.convertToType(data['createPackingSlip'], 'String');
      }
      if (data.hasOwnProperty('overridePackingSlipTemplateId')) {
        obj['overridePackingSlipTemplateId'] = ApiClient.convertToType(data['overridePackingSlipTemplateId'], 'Number');
      }
      if (data.hasOwnProperty('createOrderAssemblyGuide')) {
        obj['createOrderAssemblyGuide'] = ApiClient.convertToType(data['createOrderAssemblyGuide'], 'Boolean');
      }
      if (data.hasOwnProperty('orderAssemblyGuideLayout')) {
        obj['orderAssemblyGuideLayout'] = ApiClient.convertToType(data['orderAssemblyGuideLayout'], 'String');
      }
      if (data.hasOwnProperty('createOrderInvoice')) {
        obj['createOrderInvoice'] = ApiClient.convertToType(data['createOrderInvoice'], 'String');
      }
      if (data.hasOwnProperty('overrideOrderInvoiceTemplateId')) {
        obj['overrideOrderInvoiceTemplateId'] = ApiClient.convertToType(data['overrideOrderInvoiceTemplateId'], 'Number');
      }
      if (data.hasOwnProperty('createCartonGS1128Labels')) {
        obj['createCartonGS1128Labels'] = ApiClient.convertToType(data['createCartonGS1128Labels'], 'String');
      }
      if (data.hasOwnProperty('createLineItemEachGS1128Labels')) {
        obj['createLineItemEachGS1128Labels'] = ApiClient.convertToType(data['createLineItemEachGS1128Labels'], 'String');
      }
      if (data.hasOwnProperty('sendToExternalShippingSystem')) {
        obj['sendToExternalShippingSystem'] = ApiClient.convertToType(data['sendToExternalShippingSystem'], 'Boolean');
      }
      if (data.hasOwnProperty('externalShippingSystemId')) {
        obj['externalShippingSystemId'] = ApiClient.convertToType(data['externalShippingSystemId'], 'Number');
      }
      if (data.hasOwnProperty('customFields')) {
        obj['customFields'] = ApiClient.convertToType(data['customFields'], {'String': Object});
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Date} createDate
   */
  exports.prototype['createDate'] = undefined;
  /**
   * @member {Date} modifyDate
   */
  exports.prototype['modifyDate'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {Number} warehouseId
   */
  exports.prototype['warehouseId'] = undefined;
  /**
   * @member {Number} priorityCode
   */
  exports.prototype['priorityCode'] = undefined;
  /**
   * @member {Date} lastRunTime
   */
  exports.prototype['lastRunTime'] = undefined;
  /**
   * @member {Number} orderSmartFilterId
   */
  exports.prototype['orderSmartFilterId'] = undefined;
  /**
   * @member {Number} locationSmartFilterId
   */
  exports.prototype['locationSmartFilterId'] = undefined;
  /**
   * @member {Number} maxOrders
   */
  exports.prototype['maxOrders'] = undefined;
  /**
   * @member {Number} batchSizeMax
   */
  exports.prototype['batchSizeMax'] = undefined;
  /**
   * @member {Number} batchSizeMin
   */
  exports.prototype['batchSizeMin'] = undefined;
  /**
   * @member {Number} maxCartons
   */
  exports.prototype['maxCartons'] = undefined;
  /**
   * @member {String} version
   */
  exports.prototype['version'] = undefined;
  /**
   * @member {Boolean} isMassDistribution
   * @default false
   */
  exports.prototype['isMassDistribution'] = false;
  /**
   * @member {Boolean} createPickWork
   * @default false
   */
  exports.prototype['createPickWork'] = false;
  /**
   * @member {String} pickingRule
   */
  exports.prototype['pickingRule'] = undefined;
  /**
   * @member {String} pickBatchGroupId
   */
  exports.prototype['pickBatchGroupId'] = undefined;
  /**
   * @member {Number} maxSKUsPerBatch
   */
  exports.prototype['maxSKUsPerBatch'] = undefined;
  /**
   * @member {String} layoutRule
   */
  exports.prototype['layoutRule'] = undefined;
  /**
   * @member {String} pickSortRule
   */
  exports.prototype['pickSortRule'] = undefined;
  /**
   * @member {String} locationSort
   */
  exports.prototype['locationSort'] = undefined;
  /**
   * @member {Boolean} createPickList
   * @default false
   */
  exports.prototype['createPickList'] = false;
  /**
   * @member {String} pickListFormat
   */
  exports.prototype['pickListFormat'] = undefined;
  /**
   * @member {String} pickListLayout
   */
  exports.prototype['pickListLayout'] = undefined;
  /**
   * @member {String} pickListGroup
   */
  exports.prototype['pickListGroup'] = undefined;
  /**
   * @member {String} pickListSort
   */
  exports.prototype['pickListSort'] = undefined;
  /**
   * @member {String} pickListLocationSort
   */
  exports.prototype['pickListLocationSort'] = undefined;
  /**
   * @member {Boolean} createPickSummary
   * @default false
   */
  exports.prototype['createPickSummary'] = false;
  /**
   * @member {String} pickSummaryFormat
   */
  exports.prototype['pickSummaryFormat'] = undefined;
  /**
   * @member {String} pickSummaryLayout
   */
  exports.prototype['pickSummaryLayout'] = undefined;
  /**
   * @member {String} pickSummarySort
   */
  exports.prototype['pickSummarySort'] = undefined;
  /**
   * @member {Number} pickScanSchemeId
   */
  exports.prototype['pickScanSchemeId'] = undefined;
  /**
   * @member {Boolean} cartonizeOrders
   * @default false
   */
  exports.prototype['cartonizeOrders'] = false;
  /**
   * @member {Number} cartonizationScriptId
   */
  exports.prototype['cartonizationScriptId'] = undefined;
  /**
   * @member {Boolean} autoShipCasebreakCartons
   * @default false
   */
  exports.prototype['autoShipCasebreakCartons'] = false;
  /**
   * @member {Boolean} autoShipOrders
   * @default false
   */
  exports.prototype['autoShipOrders'] = false;
  /**
   * @member {Boolean} preGenerateParcelLabels
   * @default false
   */
  exports.prototype['preGenerateParcelLabels'] = false;
  /**
   * @member {String} labelSort
   */
  exports.prototype['labelSort'] = undefined;
  /**
   * @member {String} createPackingSlip
   */
  exports.prototype['createPackingSlip'] = undefined;
  /**
   * @member {Number} overridePackingSlipTemplateId
   */
  exports.prototype['overridePackingSlipTemplateId'] = undefined;
  /**
   * @member {Boolean} createOrderAssemblyGuide
   * @default false
   */
  exports.prototype['createOrderAssemblyGuide'] = false;
  /**
   * @member {String} orderAssemblyGuideLayout
   */
  exports.prototype['orderAssemblyGuideLayout'] = undefined;
  /**
   * @member {String} createOrderInvoice
   */
  exports.prototype['createOrderInvoice'] = undefined;
  /**
   * @member {Number} overrideOrderInvoiceTemplateId
   */
  exports.prototype['overrideOrderInvoiceTemplateId'] = undefined;
  /**
   * @member {String} createCartonGS1128Labels
   */
  exports.prototype['createCartonGS1128Labels'] = undefined;
  /**
   * @member {String} createLineItemEachGS1128Labels
   */
  exports.prototype['createLineItemEachGS1128Labels'] = undefined;
  /**
   * @member {Boolean} sendToExternalShippingSystem
   * @default false
   */
  exports.prototype['sendToExternalShippingSystem'] = false;
  /**
   * @member {Number} externalShippingSystemId
   */
  exports.prototype['externalShippingSystemId'] = undefined;
  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;



  return exports;
}));


