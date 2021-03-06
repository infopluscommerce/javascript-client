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
    define(['ApiClient', 'model/WorkProduct'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./WorkProduct'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.Work = factory(root.infoplus.ApiClient, root.infoplus.WorkProduct);
  }
}(this, function(ApiClient, WorkProduct) {
  'use strict';




  /**
   * The Work model module.
   * @module model/Work
   * @version beta
   */

  /**
   * Constructs a new <code>Work</code>.
   * @alias module:model/Work
   * @class
   * @param sourceWarehouseId {Number} 
   * @param sourceBuildingId {Number} 
   * @param sourceLocation {String} 
   * @param destinationWarehouseId {Number} 
   * @param destinationBuildingId {Number} 
   * @param destinationLocation {String} 
   * @param type {String} 
   * @param priorityCode {Number} 
   * @param status {String} 
   * @param userId {Number} 
   */
  var exports = function(sourceWarehouseId, sourceBuildingId, sourceLocation, destinationWarehouseId, destinationBuildingId, destinationLocation, type, priorityCode, status, userId) {
    var _this = this;


    _this['sourceWarehouseId'] = sourceWarehouseId;
    _this['sourceBuildingId'] = sourceBuildingId;
    _this['sourceLocation'] = sourceLocation;
    _this['destinationWarehouseId'] = destinationWarehouseId;
    _this['destinationBuildingId'] = destinationBuildingId;
    _this['destinationLocation'] = destinationLocation;
    _this['type'] = type;


    _this['priorityCode'] = priorityCode;

    _this['status'] = status;
    _this['userId'] = userId;






  };

  /**
   * Constructs a <code>Work</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Work} obj Optional instance to populate.
   * @return {module:model/Work} The populated <code>Work</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('sourceWarehouseId')) {
        obj['sourceWarehouseId'] = ApiClient.convertToType(data['sourceWarehouseId'], 'Number');
      }
      if (data.hasOwnProperty('sourceBuildingId')) {
        obj['sourceBuildingId'] = ApiClient.convertToType(data['sourceBuildingId'], 'Number');
      }
      if (data.hasOwnProperty('sourceLocation')) {
        obj['sourceLocation'] = ApiClient.convertToType(data['sourceLocation'], 'String');
      }
      if (data.hasOwnProperty('destinationWarehouseId')) {
        obj['destinationWarehouseId'] = ApiClient.convertToType(data['destinationWarehouseId'], 'Number');
      }
      if (data.hasOwnProperty('destinationBuildingId')) {
        obj['destinationBuildingId'] = ApiClient.convertToType(data['destinationBuildingId'], 'Number');
      }
      if (data.hasOwnProperty('destinationLocation')) {
        obj['destinationLocation'] = ApiClient.convertToType(data['destinationLocation'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('createDate')) {
        obj['createDate'] = ApiClient.convertToType(data['createDate'], 'Date');
      }
      if (data.hasOwnProperty('modifyDate')) {
        obj['modifyDate'] = ApiClient.convertToType(data['modifyDate'], 'Date');
      }
      if (data.hasOwnProperty('priorityCode')) {
        obj['priorityCode'] = ApiClient.convertToType(data['priorityCode'], 'Number');
      }
      if (data.hasOwnProperty('userDefinedMessage')) {
        obj['userDefinedMessage'] = ApiClient.convertToType(data['userDefinedMessage'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('userId')) {
        obj['userId'] = ApiClient.convertToType(data['userId'], 'Number');
      }
      if (data.hasOwnProperty('lobId')) {
        obj['lobId'] = ApiClient.convertToType(data['lobId'], 'Number');
      }
      if (data.hasOwnProperty('workBatchId')) {
        obj['workBatchId'] = ApiClient.convertToType(data['workBatchId'], 'Number');
      }
      if (data.hasOwnProperty('workProductList')) {
        obj['workProductList'] = ApiClient.convertToType(data['workProductList'], [WorkProduct]);
      }
      if (data.hasOwnProperty('fulfillmentProcessId')) {
        obj['fulfillmentProcessId'] = ApiClient.convertToType(data['fulfillmentProcessId'], 'Number');
      }
      if (data.hasOwnProperty('pickLineId')) {
        obj['pickLineId'] = ApiClient.convertToType(data['pickLineId'], 'Number');
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
   * @member {Number} sourceWarehouseId
   */
  exports.prototype['sourceWarehouseId'] = undefined;
  /**
   * @member {Number} sourceBuildingId
   */
  exports.prototype['sourceBuildingId'] = undefined;
  /**
   * @member {String} sourceLocation
   */
  exports.prototype['sourceLocation'] = undefined;
  /**
   * @member {Number} destinationWarehouseId
   */
  exports.prototype['destinationWarehouseId'] = undefined;
  /**
   * @member {Number} destinationBuildingId
   */
  exports.prototype['destinationBuildingId'] = undefined;
  /**
   * @member {String} destinationLocation
   */
  exports.prototype['destinationLocation'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {Date} createDate
   */
  exports.prototype['createDate'] = undefined;
  /**
   * @member {Date} modifyDate
   */
  exports.prototype['modifyDate'] = undefined;
  /**
   * @member {Number} priorityCode
   */
  exports.prototype['priorityCode'] = undefined;
  /**
   * @member {String} userDefinedMessage
   */
  exports.prototype['userDefinedMessage'] = undefined;
  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {Number} userId
   */
  exports.prototype['userId'] = undefined;
  /**
   * @member {Number} lobId
   */
  exports.prototype['lobId'] = undefined;
  /**
   * @member {Number} workBatchId
   */
  exports.prototype['workBatchId'] = undefined;
  /**
   * @member {Array.<module:model/WorkProduct>} workProductList
   */
  exports.prototype['workProductList'] = undefined;
  /**
   * @member {Number} fulfillmentProcessId
   */
  exports.prototype['fulfillmentProcessId'] = undefined;
  /**
   * @member {Number} pickLineId
   */
  exports.prototype['pickLineId'] = undefined;
  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;



  return exports;
}));


