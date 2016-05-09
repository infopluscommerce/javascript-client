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
    root.infoplus.BillOfLadingOrderInfoLine = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The BillOfLadingOrderInfoLine model module.
   * @module model/BillOfLadingOrderInfoLine
   * @version 1.0
   */

  /**
   * Constructs a new <code>BillOfLadingOrderInfoLine</code>.
   * @alias module:model/BillOfLadingOrderInfoLine
   * @class
   * @param additionalShipperInfo
   */
  var exports = function(additionalShipperInfo) {





    this['additionalShipperInfo'] = additionalShipperInfo;
  };

  /**
   * Constructs a <code>BillOfLadingOrderInfoLine</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BillOfLadingOrderInfoLine} obj Optional instance to populate.
   * @return {module:model/BillOfLadingOrderInfoLine} The populated <code>BillOfLadingOrderInfoLine</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('customerOrderNo')) {
        obj['customerOrderNo'] = ApiClient.convertToType(data['customerOrderNo'], 'String');
      }
      if (data.hasOwnProperty('noPackages')) {
        obj['noPackages'] = ApiClient.convertToType(data['noPackages'], 'Integer');
      }
      if (data.hasOwnProperty('weight')) {
        obj['weight'] = ApiClient.convertToType(data['weight'], 'Integer');
      }
      if (data.hasOwnProperty('palletslip')) {
        obj['palletslip'] = ApiClient.convertToType(data['palletslip'], 'Boolean');
      }
      if (data.hasOwnProperty('additionalShipperInfo')) {
        obj['additionalShipperInfo'] = ApiClient.convertToType(data['additionalShipperInfo'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} customerOrderNo
   */
  exports.prototype['customerOrderNo'] = undefined;

  /**
   * @member {Integer} noPackages
   */
  exports.prototype['noPackages'] = undefined;

  /**
   * @member {Integer} weight
   */
  exports.prototype['weight'] = undefined;

  /**
   * @member {Boolean} palletslip
   * @default false
   */
  exports.prototype['palletslip'] = false;

  /**
   * @member {String} additionalShipperInfo
   */
  exports.prototype['additionalShipperInfo'] = undefined;




  return exports;
}));
