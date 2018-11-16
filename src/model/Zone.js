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
    root.infoplus.Zone = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Zone model module.
   * @module model/Zone
   * @version beta
   */

  /**
   * Constructs a new <code>Zone</code>.
   * @alias module:model/Zone
   * @class
   * @param warehouseId {Number} 
   * @param name {String} 
   */
  var exports = function(warehouseId, name) {
    var _this = this;


    _this['warehouseId'] = warehouseId;
    _this['name'] = name;









  };

  /**
   * Constructs a <code>Zone</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Zone} obj Optional instance to populate.
   * @return {module:model/Zone} The populated <code>Zone</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('warehouseId')) {
        obj['warehouseId'] = ApiClient.convertToType(data['warehouseId'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('address')) {
        obj['address'] = ApiClient.convertToType(data['address'], 'String');
      }
      if (data.hasOwnProperty('isClimateControlled')) {
        obj['isClimateControlled'] = ApiClient.convertToType(data['isClimateControlled'], 'Boolean');
      }
      if (data.hasOwnProperty('isFoodGrade')) {
        obj['isFoodGrade'] = ApiClient.convertToType(data['isFoodGrade'], 'Boolean');
      }
      if (data.hasOwnProperty('isSecure')) {
        obj['isSecure'] = ApiClient.convertToType(data['isSecure'], 'Boolean');
      }
      if (data.hasOwnProperty('isFrozen')) {
        obj['isFrozen'] = ApiClient.convertToType(data['isFrozen'], 'Boolean');
      }
      if (data.hasOwnProperty('isRefrigerated')) {
        obj['isRefrigerated'] = ApiClient.convertToType(data['isRefrigerated'], 'Boolean');
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
   * @member {Number} warehouseId
   */
  exports.prototype['warehouseId'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} address
   */
  exports.prototype['address'] = undefined;
  /**
   * @member {Boolean} isClimateControlled
   * @default false
   */
  exports.prototype['isClimateControlled'] = false;
  /**
   * @member {Boolean} isFoodGrade
   * @default false
   */
  exports.prototype['isFoodGrade'] = false;
  /**
   * @member {Boolean} isSecure
   * @default false
   */
  exports.prototype['isSecure'] = false;
  /**
   * @member {Boolean} isFrozen
   * @default false
   */
  exports.prototype['isFrozen'] = false;
  /**
   * @member {Boolean} isRefrigerated
   * @default false
   */
  exports.prototype['isRefrigerated'] = false;
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


