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
    root.infoplus.CustomField = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CustomField model module.
   * @module model/CustomField
   * @version beta
   */

  /**
   * Constructs a new <code>CustomField</code>.
   * @alias module:model/CustomField
   * @class
   * @param name {String} 
   * @param label {String} 
   * @param enabled {Boolean} 
   * @param fieldType {String} 
   * @param searchable {Boolean} 
   * @param tabLabel {String} 
   * @param recordType {String} 
   */
  var exports = function(name, label, enabled, fieldType, searchable, tabLabel, recordType) {
    var _this = this;




    _this['name'] = name;
    _this['label'] = label;
    _this['enabled'] = enabled;
    _this['fieldType'] = fieldType;
    _this['searchable'] = searchable;

    _this['tabLabel'] = tabLabel;
    _this['recordType'] = recordType;

  };

  /**
   * Constructs a <code>CustomField</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CustomField} obj Optional instance to populate.
   * @return {module:model/CustomField} The populated <code>CustomField</code> instance.
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
      if (data.hasOwnProperty('label')) {
        obj['label'] = ApiClient.convertToType(data['label'], 'String');
      }
      if (data.hasOwnProperty('enabled')) {
        obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
      }
      if (data.hasOwnProperty('fieldType')) {
        obj['fieldType'] = ApiClient.convertToType(data['fieldType'], 'String');
      }
      if (data.hasOwnProperty('searchable')) {
        obj['searchable'] = ApiClient.convertToType(data['searchable'], 'Boolean');
      }
      if (data.hasOwnProperty('tooltip')) {
        obj['tooltip'] = ApiClient.convertToType(data['tooltip'], 'String');
      }
      if (data.hasOwnProperty('tabLabel')) {
        obj['tabLabel'] = ApiClient.convertToType(data['tabLabel'], 'String');
      }
      if (data.hasOwnProperty('recordType')) {
        obj['recordType'] = ApiClient.convertToType(data['recordType'], 'String');
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
   * @member {String} label
   */
  exports.prototype['label'] = undefined;
  /**
   * @member {Boolean} enabled
   * @default false
   */
  exports.prototype['enabled'] = false;
  /**
   * @member {String} fieldType
   */
  exports.prototype['fieldType'] = undefined;
  /**
   * @member {Boolean} searchable
   * @default false
   */
  exports.prototype['searchable'] = false;
  /**
   * @member {String} tooltip
   */
  exports.prototype['tooltip'] = undefined;
  /**
   * @member {String} tabLabel
   */
  exports.prototype['tabLabel'] = undefined;
  /**
   * @member {String} recordType
   */
  exports.prototype['recordType'] = undefined;
  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;



  return exports;
}));

