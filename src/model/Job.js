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
    define(['ApiClient', 'model/JobInput', 'model/JobOutput', 'model/JobStep'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./JobInput'), require('./JobOutput'), require('./JobStep'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.Job = factory(root.infoplus.ApiClient, root.infoplus.JobInput, root.infoplus.JobOutput, root.infoplus.JobStep);
  }
}(this, function(ApiClient, JobInput, JobOutput, JobStep) {
  'use strict';




  /**
   * The Job model module.
   * @module model/Job
   * @version beta
   */

  /**
   * Constructs a new <code>Job</code>.
   * @alias module:model/Job
   * @class
   * @param assemblyQuantity {Number} 
   * @param warehouseId {Number} 
   * @param lobId {Number} 
   * @param layout {String} 
   * @param trackAssemblies {Boolean} 
   * @param trackSteps {Boolean} 
   * @param fulfillmentPlanId {Number} 
   */
  var exports = function(assemblyQuantity, warehouseId, lobId, layout, trackAssemblies, trackSteps, fulfillmentPlanId) {
    var _this = this;





    _this['assemblyQuantity'] = assemblyQuantity;
    _this['warehouseId'] = warehouseId;
    _this['lobId'] = lobId;




    _this['layout'] = layout;
    _this['trackAssemblies'] = trackAssemblies;
    _this['trackSteps'] = trackSteps;





    _this['fulfillmentPlanId'] = fulfillmentPlanId;











  };

  /**
   * Constructs a <code>Job</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Job} obj Optional instance to populate.
   * @return {module:model/Job} The populated <code>Job</code> instance.
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
      if (data.hasOwnProperty('sourceJobRecipeId')) {
        obj['sourceJobRecipeId'] = ApiClient.convertToType(data['sourceJobRecipeId'], 'Number');
      }
      if (data.hasOwnProperty('assemblyQuantity')) {
        obj['assemblyQuantity'] = ApiClient.convertToType(data['assemblyQuantity'], 'Number');
      }
      if (data.hasOwnProperty('warehouseId')) {
        obj['warehouseId'] = ApiClient.convertToType(data['warehouseId'], 'Number');
      }
      if (data.hasOwnProperty('lobId')) {
        obj['lobId'] = ApiClient.convertToType(data['lobId'], 'Number');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('orderNoId')) {
        obj['orderNoId'] = ApiClient.convertToType(data['orderNoId'], 'Number');
      }
      if (data.hasOwnProperty('poNoId')) {
        obj['poNoId'] = ApiClient.convertToType(data['poNoId'], 'Number');
      }
      if (data.hasOwnProperty('workBatchId')) {
        obj['workBatchId'] = ApiClient.convertToType(data['workBatchId'], 'Number');
      }
      if (data.hasOwnProperty('layout')) {
        obj['layout'] = ApiClient.convertToType(data['layout'], 'String');
      }
      if (data.hasOwnProperty('trackAssemblies')) {
        obj['trackAssemblies'] = ApiClient.convertToType(data['trackAssemblies'], 'Boolean');
      }
      if (data.hasOwnProperty('trackSteps')) {
        obj['trackSteps'] = ApiClient.convertToType(data['trackSteps'], 'Boolean');
      }
      if (data.hasOwnProperty('jobNo')) {
        obj['jobNo'] = ApiClient.convertToType(data['jobNo'], 'String');
      }
      if (data.hasOwnProperty('assemblyInstructions')) {
        obj['assemblyInstructions'] = ApiClient.convertToType(data['assemblyInstructions'], 'String');
      }
      if (data.hasOwnProperty('inputs')) {
        obj['inputs'] = ApiClient.convertToType(data['inputs'], [JobInput]);
      }
      if (data.hasOwnProperty('outputs')) {
        obj['outputs'] = ApiClient.convertToType(data['outputs'], [JobOutput]);
      }
      if (data.hasOwnProperty('steps')) {
        obj['steps'] = ApiClient.convertToType(data['steps'], [JobStep]);
      }
      if (data.hasOwnProperty('fulfillmentPlanId')) {
        obj['fulfillmentPlanId'] = ApiClient.convertToType(data['fulfillmentPlanId'], 'Number');
      }
      if (data.hasOwnProperty('totalPicksPutbacks')) {
        obj['totalPicksPutbacks'] = ApiClient.convertToType(data['totalPicksPutbacks'], 'Number');
      }
      if (data.hasOwnProperty('completedPicksPutbacks')) {
        obj['completedPicksPutbacks'] = ApiClient.convertToType(data['completedPicksPutbacks'], 'Number');
      }
      if (data.hasOwnProperty('totalAssemblies')) {
        obj['totalAssemblies'] = ApiClient.convertToType(data['totalAssemblies'], 'Number');
      }
      if (data.hasOwnProperty('completedAssemblies')) {
        obj['completedAssemblies'] = ApiClient.convertToType(data['completedAssemblies'], 'Number');
      }
      if (data.hasOwnProperty('totalSteps')) {
        obj['totalSteps'] = ApiClient.convertToType(data['totalSteps'], 'Number');
      }
      if (data.hasOwnProperty('completedSteps')) {
        obj['completedSteps'] = ApiClient.convertToType(data['completedSteps'], 'Number');
      }
      if (data.hasOwnProperty('totalReceipts')) {
        obj['totalReceipts'] = ApiClient.convertToType(data['totalReceipts'], 'Number');
      }
      if (data.hasOwnProperty('completedReceipts')) {
        obj['completedReceipts'] = ApiClient.convertToType(data['completedReceipts'], 'Number');
      }
      if (data.hasOwnProperty('totalToDo')) {
        obj['totalToDo'] = ApiClient.convertToType(data['totalToDo'], 'Number');
      }
      if (data.hasOwnProperty('completedToDo')) {
        obj['completedToDo'] = ApiClient.convertToType(data['completedToDo'], 'Number');
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
   * @member {Number} sourceJobRecipeId
   */
  exports.prototype['sourceJobRecipeId'] = undefined;
  /**
   * @member {Number} assemblyQuantity
   */
  exports.prototype['assemblyQuantity'] = undefined;
  /**
   * @member {Number} warehouseId
   */
  exports.prototype['warehouseId'] = undefined;
  /**
   * @member {Number} lobId
   */
  exports.prototype['lobId'] = undefined;
  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {Number} orderNoId
   */
  exports.prototype['orderNoId'] = undefined;
  /**
   * @member {Number} poNoId
   */
  exports.prototype['poNoId'] = undefined;
  /**
   * @member {Number} workBatchId
   */
  exports.prototype['workBatchId'] = undefined;
  /**
   * @member {String} layout
   */
  exports.prototype['layout'] = undefined;
  /**
   * @member {Boolean} trackAssemblies
   * @default false
   */
  exports.prototype['trackAssemblies'] = false;
  /**
   * @member {Boolean} trackSteps
   * @default false
   */
  exports.prototype['trackSteps'] = false;
  /**
   * @member {String} jobNo
   */
  exports.prototype['jobNo'] = undefined;
  /**
   * @member {String} assemblyInstructions
   */
  exports.prototype['assemblyInstructions'] = undefined;
  /**
   * @member {Array.<module:model/JobInput>} inputs
   */
  exports.prototype['inputs'] = undefined;
  /**
   * @member {Array.<module:model/JobOutput>} outputs
   */
  exports.prototype['outputs'] = undefined;
  /**
   * @member {Array.<module:model/JobStep>} steps
   */
  exports.prototype['steps'] = undefined;
  /**
   * @member {Number} fulfillmentPlanId
   */
  exports.prototype['fulfillmentPlanId'] = undefined;
  /**
   * @member {Number} totalPicksPutbacks
   */
  exports.prototype['totalPicksPutbacks'] = undefined;
  /**
   * @member {Number} completedPicksPutbacks
   */
  exports.prototype['completedPicksPutbacks'] = undefined;
  /**
   * @member {Number} totalAssemblies
   */
  exports.prototype['totalAssemblies'] = undefined;
  /**
   * @member {Number} completedAssemblies
   */
  exports.prototype['completedAssemblies'] = undefined;
  /**
   * @member {Number} totalSteps
   */
  exports.prototype['totalSteps'] = undefined;
  /**
   * @member {Number} completedSteps
   */
  exports.prototype['completedSteps'] = undefined;
  /**
   * @member {Number} totalReceipts
   */
  exports.prototype['totalReceipts'] = undefined;
  /**
   * @member {Number} completedReceipts
   */
  exports.prototype['completedReceipts'] = undefined;
  /**
   * @member {Number} totalToDo
   */
  exports.prototype['totalToDo'] = undefined;
  /**
   * @member {Number} completedToDo
   */
  exports.prototype['completedToDo'] = undefined;
  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;



  return exports;
}));

