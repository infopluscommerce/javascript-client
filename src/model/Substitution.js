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
    root.infoplus.Substitution = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Substitution model module.
   * @module model/Substitution
   * @version beta
   */

  /**
   * Constructs a new <code>Substitution</code>.
   * @alias module:model/Substitution
   * @class
   * @param lobId {Number} 
   * @param orderSKU {String} 
   * @param substituteSKU {String} 
   * @param period {String} 
   * @param type {String} 
   * @param substitutionQuantity {Number} 
   */
  var exports = function(lobId, orderSKU, substituteSKU, period, type, substitutionQuantity) {
    var _this = this;

    _this['lobId'] = lobId;



    _this['orderSKU'] = orderSKU;
    _this['substituteSKU'] = substituteSKU;
    _this['period'] = period;
    _this['type'] = type;
    _this['substitutionQuantity'] = substitutionQuantity;

  };

  /**
   * Constructs a <code>Substitution</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Substitution} obj Optional instance to populate.
   * @return {module:model/Substitution} The populated <code>Substitution</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('lobId')) {
        obj['lobId'] = ApiClient.convertToType(data['lobId'], 'Number');
      }
      if (data.hasOwnProperty('createDate')) {
        obj['createDate'] = ApiClient.convertToType(data['createDate'], 'Date');
      }
      if (data.hasOwnProperty('modifyDate')) {
        obj['modifyDate'] = ApiClient.convertToType(data['modifyDate'], 'Date');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('orderSKU')) {
        obj['orderSKU'] = ApiClient.convertToType(data['orderSKU'], 'String');
      }
      if (data.hasOwnProperty('substituteSKU')) {
        obj['substituteSKU'] = ApiClient.convertToType(data['substituteSKU'], 'String');
      }
      if (data.hasOwnProperty('period')) {
        obj['period'] = ApiClient.convertToType(data['period'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('substitutionQuantity')) {
        obj['substitutionQuantity'] = ApiClient.convertToType(data['substitutionQuantity'], 'Number');
      }
      if (data.hasOwnProperty('customFields')) {
        obj['customFields'] = ApiClient.convertToType(data['customFields'], {'String': Object});
      }
    }
    return obj;
  }

  /**
   * @member {Number} lobId
   */
  exports.prototype['lobId'] = undefined;
  /**
   * @member {Date} createDate
   */
  exports.prototype['createDate'] = undefined;
  /**
   * @member {Date} modifyDate
   */
  exports.prototype['modifyDate'] = undefined;
  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} orderSKU
   */
  exports.prototype['orderSKU'] = undefined;
  /**
   * @member {String} substituteSKU
   */
  exports.prototype['substituteSKU'] = undefined;
  /**
   * @member {String} period
   */
  exports.prototype['period'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {Number} substitutionQuantity
   */
  exports.prototype['substitutionQuantity'] = undefined;
  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;



  return exports;
}));


