(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/OrderLoadProgram'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/OrderLoadProgram'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.OrderLoadProgramApi = factory(root.infoplus.ApiClient, root.infoplus.OrderLoadProgram);
  }
}(this, function(ApiClient, OrderLoadProgram) {
  'use strict';

  /**
   * OrderLoadProgram service.
   * @module api/OrderLoadProgramApi
   * @version 1.0
   */

  /**
   * Constructs a new OrderLoadProgramApi. 
   * @alias module:api/OrderLoadProgramApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getOrderLoadProgramBySearchText operation.
     * @callback module:api/OrderLoadProgramApi~getOrderLoadProgramBySearchTextCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/OrderLoadProgram>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search orderLoadPrograms
     * Returns the list of orderLoadPrograms that match the given searchText.
     * @param {Object} opts Optional parameters
     * @param {String} opts.searchText Search text, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {module:api/OrderLoadProgramApi~getOrderLoadProgramBySearchTextCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/OrderLoadProgram>}
     */
    this.getOrderLoadProgramBySearchText = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'searchText': opts['searchText'],
        'page': opts['page'],
        'limit': opts['limit']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [OrderLoadProgram];

      return this.apiClient.callApi(
        '/v1.0/orderLoadProgram/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getReqLoadProgramById operation.
     * @callback module:api/OrderLoadProgramApi~getReqLoadProgramByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderLoadProgram} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an orderLoadProgram by id
     * Returns the orderLoadProgram identified by the specified id.
     * @param {String} orderLoadProgramId Id of orderLoadProgram to be returned.
     * @param {module:api/OrderLoadProgramApi~getReqLoadProgramByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/OrderLoadProgram}
     */
    this.getReqLoadProgramById = function(orderLoadProgramId, callback) {
      var postBody = null;

      // verify the required parameter 'orderLoadProgramId' is set
      if (orderLoadProgramId == undefined || orderLoadProgramId == null) {
        throw "Missing the required parameter 'orderLoadProgramId' when calling getReqLoadProgramById";
      }


      var pathParams = {
        'orderLoadProgramId': orderLoadProgramId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = OrderLoadProgram;

      return this.apiClient.callApi(
        '/v1.0/orderLoadProgram/{orderLoadProgramId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
