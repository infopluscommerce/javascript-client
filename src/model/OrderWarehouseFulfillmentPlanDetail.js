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
    root.infoplus.OrderWarehouseFulfillmentPlanDetail = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OrderWarehouseFulfillmentPlanDetail model module.
   * @module model/OrderWarehouseFulfillmentPlanDetail
   * @version beta
   */

  /**
   * Constructs a new <code>OrderWarehouseFulfillmentPlanDetail</code>.
   * @alias module:model/OrderWarehouseFulfillmentPlanDetail
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>OrderWarehouseFulfillmentPlanDetail</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderWarehouseFulfillmentPlanDetail} obj Optional instance to populate.
   * @return {module:model/OrderWarehouseFulfillmentPlanDetail} The populated <code>OrderWarehouseFulfillmentPlanDetail</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('warehouseId')) {
        obj['warehouseId'] = ApiClient.convertToType(data['warehouseId'], 'Number');
      }
      if (data.hasOwnProperty('carrierCode')) {
        obj['carrierCode'] = ApiClient.convertToType(data['carrierCode'], 'Number');
      }
      if (data.hasOwnProperty('lineItemList')) {
        obj['lineItemList'] = ApiClient.convertToType(data['lineItemList'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {Number} warehouseId
   */
  exports.prototype['warehouseId'] = undefined;
  /**
   * @member {Number} carrierCode
   */
  exports.prototype['carrierCode'] = undefined;
  /**
   * @member {Array.<String>} lineItemList
   */
  exports.prototype['lineItemList'] = undefined;



  return exports;
}));

