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
 * Swagger Codegen version: 2.3.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ApiResponse', 'model/BillingCodeActivity'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiResponse'), require('../model/BillingCodeActivity'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.BillingCodeActivityApi = factory(root.infoplus.ApiClient, root.infoplus.ApiResponse, root.infoplus.BillingCodeActivity);
  }
}(this, function(ApiClient, ApiResponse, BillingCodeActivity) {
  'use strict';

  /**
   * BillingCodeActivity service.
   * @module api/BillingCodeActivityApi
   * @version beta
   */

  /**
   * Constructs a new BillingCodeActivityApi. 
   * @alias module:api/BillingCodeActivityApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addBillingCodeActivity operation.
     * @callback module:api/BillingCodeActivityApi~addBillingCodeActivityCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BillingCodeActivity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a billingCodeActivity
     * Inserts a new billingCodeActivity using the specified data.
     * @param {module:model/BillingCodeActivity} body BillingCodeActivity to be inserted.
     * @param {module:api/BillingCodeActivityApi~addBillingCodeActivityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BillingCodeActivity}
     */
    this.addBillingCodeActivity = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addBillingCodeActivity");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = BillingCodeActivity;

      return this.apiClient.callApi(
        '/beta/billingCodeActivity', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addBillingCodeActivityAudit operation.
     * @callback module:api/BillingCodeActivityApi~addBillingCodeActivityAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for a billingCodeActivity
     * Adds an audit to an existing billingCodeActivity.
     * @param {Number} billingCodeActivityId Id of the billingCodeActivity to add an audit to
     * @param {String} billingCodeActivityAudit The audit to add
     * @param {module:api/BillingCodeActivityApi~addBillingCodeActivityAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addBillingCodeActivityAudit = function(billingCodeActivityId, billingCodeActivityAudit, callback) {
      var postBody = null;

      // verify the required parameter 'billingCodeActivityId' is set
      if (billingCodeActivityId === undefined || billingCodeActivityId === null) {
        throw new Error("Missing the required parameter 'billingCodeActivityId' when calling addBillingCodeActivityAudit");
      }

      // verify the required parameter 'billingCodeActivityAudit' is set
      if (billingCodeActivityAudit === undefined || billingCodeActivityAudit === null) {
        throw new Error("Missing the required parameter 'billingCodeActivityAudit' when calling addBillingCodeActivityAudit");
      }


      var pathParams = {
        'billingCodeActivityId': billingCodeActivityId,
        'billingCodeActivityAudit': billingCodeActivityAudit
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/beta/billingCodeActivity/{billingCodeActivityId}/audit/{billingCodeActivityAudit}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addBillingCodeActivityTag operation.
     * @callback module:api/BillingCodeActivityApi~addBillingCodeActivityTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for a billingCodeActivity.
     * Adds a tag to an existing billingCodeActivity.
     * @param {Number} billingCodeActivityId Id of the billingCodeActivity to add a tag to
     * @param {String} billingCodeActivityTag The tag to add
     * @param {module:api/BillingCodeActivityApi~addBillingCodeActivityTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addBillingCodeActivityTag = function(billingCodeActivityId, billingCodeActivityTag, callback) {
      var postBody = null;

      // verify the required parameter 'billingCodeActivityId' is set
      if (billingCodeActivityId === undefined || billingCodeActivityId === null) {
        throw new Error("Missing the required parameter 'billingCodeActivityId' when calling addBillingCodeActivityTag");
      }

      // verify the required parameter 'billingCodeActivityTag' is set
      if (billingCodeActivityTag === undefined || billingCodeActivityTag === null) {
        throw new Error("Missing the required parameter 'billingCodeActivityTag' when calling addBillingCodeActivityTag");
      }


      var pathParams = {
        'billingCodeActivityId': billingCodeActivityId,
        'billingCodeActivityTag': billingCodeActivityTag
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/beta/billingCodeActivity/{billingCodeActivityId}/tag/{billingCodeActivityTag}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteBillingCodeActivity operation.
     * @callback module:api/BillingCodeActivityApi~deleteBillingCodeActivityCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a billingCodeActivity
     * Deletes the billingCodeActivity identified by the specified id.
     * @param {Number} billingCodeActivityId Id of the billingCodeActivity to be deleted.
     * @param {module:api/BillingCodeActivityApi~deleteBillingCodeActivityCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteBillingCodeActivity = function(billingCodeActivityId, callback) {
      var postBody = null;

      // verify the required parameter 'billingCodeActivityId' is set
      if (billingCodeActivityId === undefined || billingCodeActivityId === null) {
        throw new Error("Missing the required parameter 'billingCodeActivityId' when calling deleteBillingCodeActivity");
      }


      var pathParams = {
        'billingCodeActivityId': billingCodeActivityId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/beta/billingCodeActivity/{billingCodeActivityId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteBillingCodeActivityTag operation.
     * @callback module:api/BillingCodeActivityApi~deleteBillingCodeActivityTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for a billingCodeActivity.
     * Deletes an existing billingCodeActivity tag using the specified data.
     * @param {Number} billingCodeActivityId Id of the billingCodeActivity to remove tag from
     * @param {String} billingCodeActivityTag The tag to delete
     * @param {module:api/BillingCodeActivityApi~deleteBillingCodeActivityTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteBillingCodeActivityTag = function(billingCodeActivityId, billingCodeActivityTag, callback) {
      var postBody = null;

      // verify the required parameter 'billingCodeActivityId' is set
      if (billingCodeActivityId === undefined || billingCodeActivityId === null) {
        throw new Error("Missing the required parameter 'billingCodeActivityId' when calling deleteBillingCodeActivityTag");
      }

      // verify the required parameter 'billingCodeActivityTag' is set
      if (billingCodeActivityTag === undefined || billingCodeActivityTag === null) {
        throw new Error("Missing the required parameter 'billingCodeActivityTag' when calling deleteBillingCodeActivityTag");
      }


      var pathParams = {
        'billingCodeActivityId': billingCodeActivityId,
        'billingCodeActivityTag': billingCodeActivityTag
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/beta/billingCodeActivity/{billingCodeActivityId}/tag/{billingCodeActivityTag}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBillingCodeActivityByFilter operation.
     * @callback module:api/BillingCodeActivityApi~getBillingCodeActivityByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/BillingCodeActivity>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search billingCodeActivitys by filter
     * Returns the list of billingCodeActivitys that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Number} opts.page Result page number.  Defaults to 1.
     * @param {Number} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/BillingCodeActivityApi~getBillingCodeActivityByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/BillingCodeActivity>}
     */
    this.getBillingCodeActivityByFilter = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter': opts['filter'],
        'page': opts['page'],
        'limit': opts['limit'],
        'sort': opts['sort'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [BillingCodeActivity];

      return this.apiClient.callApi(
        '/beta/billingCodeActivity/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBillingCodeActivityById operation.
     * @callback module:api/BillingCodeActivityApi~getBillingCodeActivityByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BillingCodeActivity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a billingCodeActivity by id
     * Returns the billingCodeActivity identified by the specified id.
     * @param {Number} billingCodeActivityId Id of the billingCodeActivity to be returned.
     * @param {module:api/BillingCodeActivityApi~getBillingCodeActivityByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BillingCodeActivity}
     */
    this.getBillingCodeActivityById = function(billingCodeActivityId, callback) {
      var postBody = null;

      // verify the required parameter 'billingCodeActivityId' is set
      if (billingCodeActivityId === undefined || billingCodeActivityId === null) {
        throw new Error("Missing the required parameter 'billingCodeActivityId' when calling getBillingCodeActivityById");
      }


      var pathParams = {
        'billingCodeActivityId': billingCodeActivityId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = BillingCodeActivity;

      return this.apiClient.callApi(
        '/beta/billingCodeActivity/{billingCodeActivityId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBillingCodeActivityTags operation.
     * @callback module:api/BillingCodeActivityApi~getBillingCodeActivityTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for a billingCodeActivity.
     * Get all existing billingCodeActivity tags.
     * @param {Number} billingCodeActivityId Id of the billingCodeActivity to get tags for
     * @param {module:api/BillingCodeActivityApi~getBillingCodeActivityTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getBillingCodeActivityTags = function(billingCodeActivityId, callback) {
      var postBody = null;

      // verify the required parameter 'billingCodeActivityId' is set
      if (billingCodeActivityId === undefined || billingCodeActivityId === null) {
        throw new Error("Missing the required parameter 'billingCodeActivityId' when calling getBillingCodeActivityTags");
      }


      var pathParams = {
        'billingCodeActivityId': billingCodeActivityId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/beta/billingCodeActivity/{billingCodeActivityId}/tag', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateBillingCodeActivityById operation.
     * @callback module:api/BillingCodeActivityApi~getDuplicateBillingCodeActivityByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BillingCodeActivity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a billingCodeActivity by id
     * Returns a duplicated billingCodeActivity identified by the specified id.
     * @param {Number} billingCodeActivityId Id of the billingCodeActivity to be duplicated.
     * @param {module:api/BillingCodeActivityApi~getDuplicateBillingCodeActivityByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BillingCodeActivity}
     */
    this.getDuplicateBillingCodeActivityById = function(billingCodeActivityId, callback) {
      var postBody = null;

      // verify the required parameter 'billingCodeActivityId' is set
      if (billingCodeActivityId === undefined || billingCodeActivityId === null) {
        throw new Error("Missing the required parameter 'billingCodeActivityId' when calling getDuplicateBillingCodeActivityById");
      }


      var pathParams = {
        'billingCodeActivityId': billingCodeActivityId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = BillingCodeActivity;

      return this.apiClient.callApi(
        '/beta/billingCodeActivity/duplicate/{billingCodeActivityId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateBillingCodeActivity operation.
     * @callback module:api/BillingCodeActivityApi~updateBillingCodeActivityCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a billingCodeActivity
     * Updates an existing billingCodeActivity using the specified data.
     * @param {module:model/BillingCodeActivity} body BillingCodeActivity to be updated.
     * @param {module:api/BillingCodeActivityApi~updateBillingCodeActivityCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateBillingCodeActivity = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateBillingCodeActivity");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/beta/billingCodeActivity', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));