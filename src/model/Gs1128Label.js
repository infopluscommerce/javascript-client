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
    root.infoplus.Gs1128Label = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Gs1128Label model module.
   * @module model/Gs1128Label
   * @version beta
   */

  /**
   * Constructs a new <code>Gs1128Label</code>.
   * @alias module:model/Gs1128Label
   * @class
   * @param lobId {Number} 
   * @param orderNo {Number} 
   * @param gs1128TemplateId {Number} 
   */
  var exports = function(lobId, orderNo, gs1128TemplateId) {
    var _this = this;



    _this['lobId'] = lobId;
    _this['orderNo'] = orderNo;
    _this['gs1128TemplateId'] = gs1128TemplateId;










  };

  /**
   * Constructs a <code>Gs1128Label</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Gs1128Label} obj Optional instance to populate.
   * @return {module:model/Gs1128Label} The populated <code>Gs1128Label</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('sscc')) {
        obj['sscc'] = ApiClient.convertToType(data['sscc'], 'String');
      }
      if (data.hasOwnProperty('lobId')) {
        obj['lobId'] = ApiClient.convertToType(data['lobId'], 'Number');
      }
      if (data.hasOwnProperty('orderNo')) {
        obj['orderNo'] = ApiClient.convertToType(data['orderNo'], 'Number');
      }
      if (data.hasOwnProperty('gs1128TemplateId')) {
        obj['gs1128TemplateId'] = ApiClient.convertToType(data['gs1128TemplateId'], 'Number');
      }
      if (data.hasOwnProperty('noOfCopies')) {
        obj['noOfCopies'] = ApiClient.convertToType(data['noOfCopies'], 'Number');
      }
      if (data.hasOwnProperty('recordType')) {
        obj['recordType'] = ApiClient.convertToType(data['recordType'], 'String');
      }
      if (data.hasOwnProperty('palletLoadId')) {
        obj['palletLoadId'] = ApiClient.convertToType(data['palletLoadId'], 'Number');
      }
      if (data.hasOwnProperty('masterCartonLoadId')) {
        obj['masterCartonLoadId'] = ApiClient.convertToType(data['masterCartonLoadId'], 'Number');
      }
      if (data.hasOwnProperty('cartonId')) {
        obj['cartonId'] = ApiClient.convertToType(data['cartonId'], 'Number');
      }
      if (data.hasOwnProperty('lineItemId')) {
        obj['lineItemId'] = ApiClient.convertToType(data['lineItemId'], 'Number');
      }
      if (data.hasOwnProperty('lineItemUnitNo')) {
        obj['lineItemUnitNo'] = ApiClient.convertToType(data['lineItemUnitNo'], 'Number');
      }
      if (data.hasOwnProperty('createDate')) {
        obj['createDate'] = ApiClient.convertToType(data['createDate'], 'Date');
      }
      if (data.hasOwnProperty('modifyDate')) {
        obj['modifyDate'] = ApiClient.convertToType(data['modifyDate'], 'Date');
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
   * @member {String} sscc
   */
  exports.prototype['sscc'] = undefined;
  /**
   * @member {Number} lobId
   */
  exports.prototype['lobId'] = undefined;
  /**
   * @member {Number} orderNo
   */
  exports.prototype['orderNo'] = undefined;
  /**
   * @member {Number} gs1128TemplateId
   */
  exports.prototype['gs1128TemplateId'] = undefined;
  /**
   * @member {Number} noOfCopies
   */
  exports.prototype['noOfCopies'] = undefined;
  /**
   * @member {String} recordType
   */
  exports.prototype['recordType'] = undefined;
  /**
   * @member {Number} palletLoadId
   */
  exports.prototype['palletLoadId'] = undefined;
  /**
   * @member {Number} masterCartonLoadId
   */
  exports.prototype['masterCartonLoadId'] = undefined;
  /**
   * @member {Number} cartonId
   */
  exports.prototype['cartonId'] = undefined;
  /**
   * @member {Number} lineItemId
   */
  exports.prototype['lineItemId'] = undefined;
  /**
   * @member {Number} lineItemUnitNo
   */
  exports.prototype['lineItemUnitNo'] = undefined;
  /**
   * @member {Date} createDate
   */
  exports.prototype['createDate'] = undefined;
  /**
   * @member {Date} modifyDate
   */
  exports.prototype['modifyDate'] = undefined;
  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;



  return exports;
}));

