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
    define(['ApiClient', 'model/WorkBatch'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/WorkBatch'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.WorkBatchApi = factory(root.infoplus.ApiClient, root.infoplus.WorkBatch);
  }
}(this, function(ApiClient, WorkBatch) {
  'use strict';

  /**
   * WorkBatch service.
   * @module api/WorkBatchApi
   * @version beta
   */

  /**
   * Constructs a new WorkBatchApi. 
   * @alias module:api/WorkBatchApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addWorkBatchAudit operation.
     * @callback module:api/WorkBatchApi~addWorkBatchAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for a workBatch
     * Adds an audit to an existing workBatch.
     * @param {Number} workBatchId Id of the workBatch to add an audit to
     * @param {String} workBatchAudit The audit to add
     * @param {module:api/WorkBatchApi~addWorkBatchAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addWorkBatchAudit = function(workBatchId, workBatchAudit, callback) {
      var postBody = null;

      // verify the required parameter 'workBatchId' is set
      if (workBatchId === undefined || workBatchId === null) {
        throw new Error("Missing the required parameter 'workBatchId' when calling addWorkBatchAudit");
      }

      // verify the required parameter 'workBatchAudit' is set
      if (workBatchAudit === undefined || workBatchAudit === null) {
        throw new Error("Missing the required parameter 'workBatchAudit' when calling addWorkBatchAudit");
      }


      var pathParams = {
        'workBatchId': workBatchId,
        'workBatchAudit': workBatchAudit
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
        '/beta/workBatch/{workBatchId}/audit/{workBatchAudit}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addWorkBatchFile operation.
     * @callback module:api/WorkBatchApi~addWorkBatchFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attach a file to a workBatch
     * Adds a file to an existing workBatch.
     * @param {Number} workBatchId Id of the workBatch to add a file to
     * @param {String} fileName Name of file
     * @param {module:api/WorkBatchApi~addWorkBatchFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addWorkBatchFile = function(workBatchId, fileName, callback) {
      var postBody = null;

      // verify the required parameter 'workBatchId' is set
      if (workBatchId === undefined || workBatchId === null) {
        throw new Error("Missing the required parameter 'workBatchId' when calling addWorkBatchFile");
      }

      // verify the required parameter 'fileName' is set
      if (fileName === undefined || fileName === null) {
        throw new Error("Missing the required parameter 'fileName' when calling addWorkBatchFile");
      }


      var pathParams = {
        'workBatchId': workBatchId,
        'fileName': fileName
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
        '/beta/workBatch/{workBatchId}/file/{fileName}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addWorkBatchTag operation.
     * @callback module:api/WorkBatchApi~addWorkBatchTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for a workBatch.
     * Adds a tag to an existing workBatch.
     * @param {Number} workBatchId Id of the workBatch to add a tag to
     * @param {String} workBatchTag The tag to add
     * @param {module:api/WorkBatchApi~addWorkBatchTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addWorkBatchTag = function(workBatchId, workBatchTag, callback) {
      var postBody = null;

      // verify the required parameter 'workBatchId' is set
      if (workBatchId === undefined || workBatchId === null) {
        throw new Error("Missing the required parameter 'workBatchId' when calling addWorkBatchTag");
      }

      // verify the required parameter 'workBatchTag' is set
      if (workBatchTag === undefined || workBatchTag === null) {
        throw new Error("Missing the required parameter 'workBatchTag' when calling addWorkBatchTag");
      }


      var pathParams = {
        'workBatchId': workBatchId,
        'workBatchTag': workBatchTag
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
        '/beta/workBatch/{workBatchId}/tag/{workBatchTag}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteWorkBatchTag operation.
     * @callback module:api/WorkBatchApi~deleteWorkBatchTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for a workBatch.
     * Deletes an existing workBatch tag using the specified data.
     * @param {Number} workBatchId Id of the workBatch to remove tag from
     * @param {String} workBatchTag The tag to delete
     * @param {module:api/WorkBatchApi~deleteWorkBatchTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteWorkBatchTag = function(workBatchId, workBatchTag, callback) {
      var postBody = null;

      // verify the required parameter 'workBatchId' is set
      if (workBatchId === undefined || workBatchId === null) {
        throw new Error("Missing the required parameter 'workBatchId' when calling deleteWorkBatchTag");
      }

      // verify the required parameter 'workBatchTag' is set
      if (workBatchTag === undefined || workBatchTag === null) {
        throw new Error("Missing the required parameter 'workBatchTag' when calling deleteWorkBatchTag");
      }


      var pathParams = {
        'workBatchId': workBatchId,
        'workBatchTag': workBatchTag
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
        '/beta/workBatch/{workBatchId}/tag/{workBatchTag}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateWorkBatchById operation.
     * @callback module:api/WorkBatchApi~getDuplicateWorkBatchByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WorkBatch} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a workBatch by id
     * Returns a duplicated workBatch identified by the specified id.
     * @param {Number} workBatchId Id of the workBatch to be duplicated.
     * @param {module:api/WorkBatchApi~getDuplicateWorkBatchByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WorkBatch}
     */
    this.getDuplicateWorkBatchById = function(workBatchId, callback) {
      var postBody = null;

      // verify the required parameter 'workBatchId' is set
      if (workBatchId === undefined || workBatchId === null) {
        throw new Error("Missing the required parameter 'workBatchId' when calling getDuplicateWorkBatchById");
      }


      var pathParams = {
        'workBatchId': workBatchId
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
      var returnType = WorkBatch;

      return this.apiClient.callApi(
        '/beta/workBatch/duplicate/{workBatchId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWorkBatchByFilter operation.
     * @callback module:api/WorkBatchApi~getWorkBatchByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/WorkBatch>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search workBatchs by filter
     * Returns the list of workBatchs that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Number} opts.page Result page number.  Defaults to 1.
     * @param {Number} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/WorkBatchApi~getWorkBatchByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/WorkBatch>}
     */
    this.getWorkBatchByFilter = function(opts, callback) {
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
      var returnType = [WorkBatch];

      return this.apiClient.callApi(
        '/beta/workBatch/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWorkBatchById operation.
     * @callback module:api/WorkBatchApi~getWorkBatchByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WorkBatch} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a workBatch by id
     * Returns the workBatch identified by the specified id.
     * @param {Number} workBatchId Id of the workBatch to be returned.
     * @param {module:api/WorkBatchApi~getWorkBatchByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WorkBatch}
     */
    this.getWorkBatchById = function(workBatchId, callback) {
      var postBody = null;

      // verify the required parameter 'workBatchId' is set
      if (workBatchId === undefined || workBatchId === null) {
        throw new Error("Missing the required parameter 'workBatchId' when calling getWorkBatchById");
      }


      var pathParams = {
        'workBatchId': workBatchId
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
      var returnType = WorkBatch;

      return this.apiClient.callApi(
        '/beta/workBatch/{workBatchId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWorkBatchTags operation.
     * @callback module:api/WorkBatchApi~getWorkBatchTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for a workBatch.
     * Get all existing workBatch tags.
     * @param {Number} workBatchId Id of the workBatch to get tags for
     * @param {module:api/WorkBatchApi~getWorkBatchTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getWorkBatchTags = function(workBatchId, callback) {
      var postBody = null;

      // verify the required parameter 'workBatchId' is set
      if (workBatchId === undefined || workBatchId === null) {
        throw new Error("Missing the required parameter 'workBatchId' when calling getWorkBatchTags");
      }


      var pathParams = {
        'workBatchId': workBatchId
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
        '/beta/workBatch/{workBatchId}/tag', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateWorkBatch operation.
     * @callback module:api/WorkBatchApi~updateWorkBatchCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a workBatch
     * Updates an existing workBatch using the specified data.
     * @param {module:model/WorkBatch} body WorkBatch to be updated.
     * @param {module:api/WorkBatchApi~updateWorkBatchCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateWorkBatch = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateWorkBatch");
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
        '/beta/workBatch', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateWorkBatchCustomFields operation.
     * @callback module:api/WorkBatchApi~updateWorkBatchCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a workBatch custom fields
     * Updates an existing workBatch custom fields using the specified data.
     * @param {module:model/WorkBatch} body WorkBatch to be updated.
     * @param {module:api/WorkBatchApi~updateWorkBatchCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateWorkBatchCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateWorkBatchCustomFields");
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
        '/beta/workBatch/customFields', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));