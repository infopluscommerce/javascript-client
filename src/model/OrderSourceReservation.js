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
    root.infoplus.OrderSourceReservation = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The OrderSourceReservation model module.
   * @module model/OrderSourceReservation
   * @version 1.0
   */

  /**
   * Constructs a new <code>OrderSourceReservation</code>.
   * @alias module:model/OrderSourceReservation
   * @class
   * @param orderSourceId
   * @param reservedQuantity
   */
  var exports = function(orderSourceId, reservedQuantity) {


    this['orderSourceId'] = orderSourceId;


    this['reservedQuantity'] = reservedQuantity;

  };

  /**
   * Constructs a <code>OrderSourceReservation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderSourceReservation} obj Optional instance to populate.
   * @return {module:model/OrderSourceReservation} The populated <code>OrderSourceReservation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('orderSourceId')) {
        obj['orderSourceId'] = ApiClient.convertToType(data['orderSourceId'], 'Integer');
      }
      if (data.hasOwnProperty('createDate')) {
        obj['createDate'] = ApiClient.convertToType(data['createDate'], 'Date');
      }
      if (data.hasOwnProperty('modifyDate')) {
        obj['modifyDate'] = ApiClient.convertToType(data['modifyDate'], 'Date');
      }
      if (data.hasOwnProperty('reservedQuantity')) {
        obj['reservedQuantity'] = ApiClient.convertToType(data['reservedQuantity'], 'Integer');
      }
      if (data.hasOwnProperty('sku')) {
        obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {Integer} orderSourceId
   */
  exports.prototype['orderSourceId'] = undefined;

  /**
   * @member {Date} createDate
   */
  exports.prototype['createDate'] = undefined;

  /**
   * @member {Date} modifyDate
   */
  exports.prototype['modifyDate'] = undefined;

  /**
   * @member {Integer} reservedQuantity
   */
  exports.prototype['reservedQuantity'] = undefined;

  /**
   * @member {String} sku
   */
  exports.prototype['sku'] = undefined;




  return exports;
}));
