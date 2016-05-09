(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.InventoryAdjustment = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The InventoryAdjustment model module.
   * @module model/InventoryAdjustment
   * @version 1.0
   */

  /**
   * Constructs a new <code>InventoryAdjustment</code>.
   * @alias module:model/InventoryAdjustment
   * @class
   */
  var exports = function() {














  };

  /**
   * Constructs a <code>InventoryAdjustment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InventoryAdjustment} obj Optional instance to populate.
   * @return {module:model/InventoryAdjustment} The populated <code>InventoryAdjustment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('lob')) {
        obj['lob'] = ApiClient.convertToType(data['lob'], 'Integer');
      }
      if (data.hasOwnProperty('skuId')) {
        obj['skuId'] = ApiClient.convertToType(data['skuId'], 'Integer');
      }
      if (data.hasOwnProperty('poNoId')) {
        obj['poNoId'] = ApiClient.convertToType(data['poNoId'], 'Integer');
      }
      if (data.hasOwnProperty('adjustmentDate')) {
        obj['adjustmentDate'] = ApiClient.convertToType(data['adjustmentDate'], 'Date');
      }
      if (data.hasOwnProperty('adjustmentTime')) {
        obj['adjustmentTime'] = ApiClient.convertToType(data['adjustmentTime'], 'String');
      }
      if (data.hasOwnProperty('location')) {
        obj['location'] = ApiClient.convertToType(data['location'], 'String');
      }
      if (data.hasOwnProperty('qty')) {
        obj['qty'] = ApiClient.convertToType(data['qty'], 'Integer');
      }
      if (data.hasOwnProperty('note')) {
        obj['note'] = ApiClient.convertToType(data['note'], 'String');
      }
      if (data.hasOwnProperty('authorizedBy')) {
        obj['authorizedBy'] = ApiClient.convertToType(data['authorizedBy'], 'String');
      }
      if (data.hasOwnProperty('printed')) {
        obj['printed'] = ApiClient.convertToType(data['printed'], 'String');
      }
      if (data.hasOwnProperty('orderNo')) {
        obj['orderNo'] = ApiClient.convertToType(data['orderNo'], 'Number');
      }
      if (data.hasOwnProperty('adjustmentCode')) {
        obj['adjustmentCode'] = ApiClient.convertToType(data['adjustmentCode'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {Integer} lob
   */
  exports.prototype['lob'] = undefined;

  /**
   * @member {Integer} skuId
   */
  exports.prototype['skuId'] = undefined;

  /**
   * @member {Integer} poNoId
   */
  exports.prototype['poNoId'] = undefined;

  /**
   * @member {Date} adjustmentDate
   */
  exports.prototype['adjustmentDate'] = undefined;

  /**
   * @member {String} adjustmentTime
   */
  exports.prototype['adjustmentTime'] = undefined;

  /**
   * @member {String} location
   */
  exports.prototype['location'] = undefined;

  /**
   * @member {Integer} qty
   */
  exports.prototype['qty'] = undefined;

  /**
   * @member {String} note
   */
  exports.prototype['note'] = undefined;

  /**
   * @member {String} authorizedBy
   */
  exports.prototype['authorizedBy'] = undefined;

  /**
   * @member {String} printed
   */
  exports.prototype['printed'] = undefined;

  /**
   * @member {Number} orderNo
   */
  exports.prototype['orderNo'] = undefined;

  /**
   * @member {String} adjustmentCode
   */
  exports.prototype['adjustmentCode'] = undefined;




  return exports;
}));
