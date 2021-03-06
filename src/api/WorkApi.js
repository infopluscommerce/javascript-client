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
    define(['ApiClient', 'model/RecordFile', 'model/Work'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/RecordFile'), require('../model/Work'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.WorkApi = factory(root.infoplus.ApiClient, root.infoplus.RecordFile, root.infoplus.Work);
  }
}(this, function(ApiClient, RecordFile, Work) {
  'use strict';

  /**
   * Work service.
   * @module api/WorkApi
   * @version beta
   */

  /**
   * Constructs a new WorkApi. 
   * @alias module:api/WorkApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addWorkAudit operation.
     * @callback module:api/WorkApi~addWorkAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for a work
     * Adds an audit to an existing work.
     * @param {Number} workId Id of the work to add an audit to
     * @param {String} workAudit The audit to add
     * @param {module:api/WorkApi~addWorkAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addWorkAudit = function(workId, workAudit, callback) {
      var postBody = null;

      // verify the required parameter 'workId' is set
      if (workId === undefined || workId === null) {
        throw new Error("Missing the required parameter 'workId' when calling addWorkAudit");
      }

      // verify the required parameter 'workAudit' is set
      if (workAudit === undefined || workAudit === null) {
        throw new Error("Missing the required parameter 'workAudit' when calling addWorkAudit");
      }


      var pathParams = {
        'workId': workId,
        'workAudit': workAudit
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
        '/beta/work/{workId}/audit/{workAudit}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addWorkFile operation.
     * @callback module:api/WorkApi~addWorkFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attach a file to a work
     * Adds a file to an existing work.
     * @param {Number} workId Id of the work to add a file to
     * @param {String} fileName Name of file
     * @param {module:api/WorkApi~addWorkFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addWorkFile = function(workId, fileName, callback) {
      var postBody = null;

      // verify the required parameter 'workId' is set
      if (workId === undefined || workId === null) {
        throw new Error("Missing the required parameter 'workId' when calling addWorkFile");
      }

      // verify the required parameter 'fileName' is set
      if (fileName === undefined || fileName === null) {
        throw new Error("Missing the required parameter 'fileName' when calling addWorkFile");
      }


      var pathParams = {
        'workId': workId,
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
        '/beta/work/{workId}/file/{fileName}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addWorkFileByURL operation.
     * @callback module:api/WorkApi~addWorkFileByURLCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attach a file to a work by URL.
     * Adds a file to an existing work by URL.
     * @param {module:model/RecordFile} body The url and optionly fileName to be used.
     * @param {Number} workId Id of the work to add an file to
     * @param {module:api/WorkApi~addWorkFileByURLCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addWorkFileByURL = function(body, workId, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addWorkFileByURL");
      }

      // verify the required parameter 'workId' is set
      if (workId === undefined || workId === null) {
        throw new Error("Missing the required parameter 'workId' when calling addWorkFileByURL");
      }


      var pathParams = {
        'workId': workId
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
        '/beta/work/{workId}/file', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addWorkTag operation.
     * @callback module:api/WorkApi~addWorkTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for a work.
     * Adds a tag to an existing work.
     * @param {Number} workId Id of the work to add a tag to
     * @param {String} workTag The tag to add
     * @param {module:api/WorkApi~addWorkTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addWorkTag = function(workId, workTag, callback) {
      var postBody = null;

      // verify the required parameter 'workId' is set
      if (workId === undefined || workId === null) {
        throw new Error("Missing the required parameter 'workId' when calling addWorkTag");
      }

      // verify the required parameter 'workTag' is set
      if (workTag === undefined || workTag === null) {
        throw new Error("Missing the required parameter 'workTag' when calling addWorkTag");
      }


      var pathParams = {
        'workId': workId,
        'workTag': workTag
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
        '/beta/work/{workId}/tag/{workTag}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteWorkFile operation.
     * @callback module:api/WorkApi~deleteWorkFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a file for a work.
     * Deletes an existing work file using the specified data.
     * @param {Number} workId Id of the work to remove file from
     * @param {Number} fileId Id of the file to delete
     * @param {module:api/WorkApi~deleteWorkFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteWorkFile = function(workId, fileId, callback) {
      var postBody = null;

      // verify the required parameter 'workId' is set
      if (workId === undefined || workId === null) {
        throw new Error("Missing the required parameter 'workId' when calling deleteWorkFile");
      }

      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling deleteWorkFile");
      }


      var pathParams = {
        'workId': workId,
        'fileId': fileId
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
        '/beta/work/{workId}/file/{fileId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteWorkTag operation.
     * @callback module:api/WorkApi~deleteWorkTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for a work.
     * Deletes an existing work tag using the specified data.
     * @param {Number} workId Id of the work to remove tag from
     * @param {String} workTag The tag to delete
     * @param {module:api/WorkApi~deleteWorkTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteWorkTag = function(workId, workTag, callback) {
      var postBody = null;

      // verify the required parameter 'workId' is set
      if (workId === undefined || workId === null) {
        throw new Error("Missing the required parameter 'workId' when calling deleteWorkTag");
      }

      // verify the required parameter 'workTag' is set
      if (workTag === undefined || workTag === null) {
        throw new Error("Missing the required parameter 'workTag' when calling deleteWorkTag");
      }


      var pathParams = {
        'workId': workId,
        'workTag': workTag
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
        '/beta/work/{workId}/tag/{workTag}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateWorkById operation.
     * @callback module:api/WorkApi~getDuplicateWorkByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Work} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a work by id
     * Returns a duplicated work identified by the specified id.
     * @param {Number} workId Id of the work to be duplicated.
     * @param {module:api/WorkApi~getDuplicateWorkByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Work}
     */
    this.getDuplicateWorkById = function(workId, callback) {
      var postBody = null;

      // verify the required parameter 'workId' is set
      if (workId === undefined || workId === null) {
        throw new Error("Missing the required parameter 'workId' when calling getDuplicateWorkById");
      }


      var pathParams = {
        'workId': workId
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
      var returnType = Work;

      return this.apiClient.callApi(
        '/beta/work/duplicate/{workId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWorkByFilter operation.
     * @callback module:api/WorkApi~getWorkByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Work>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search works by filter
     * Returns the list of works that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Number} opts.page Result page number.  Defaults to 1.
     * @param {Number} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/WorkApi~getWorkByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Work>}
     */
    this.getWorkByFilter = function(opts, callback) {
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
      var returnType = [Work];

      return this.apiClient.callApi(
        '/beta/work/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWorkById operation.
     * @callback module:api/WorkApi~getWorkByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Work} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a work by id
     * Returns the work identified by the specified id.
     * @param {Number} workId Id of the work to be returned.
     * @param {module:api/WorkApi~getWorkByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Work}
     */
    this.getWorkById = function(workId, callback) {
      var postBody = null;

      // verify the required parameter 'workId' is set
      if (workId === undefined || workId === null) {
        throw new Error("Missing the required parameter 'workId' when calling getWorkById");
      }


      var pathParams = {
        'workId': workId
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
      var returnType = Work;

      return this.apiClient.callApi(
        '/beta/work/{workId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWorkFiles operation.
     * @callback module:api/WorkApi~getWorkFilesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the files for a work.
     * Get all existing work files.
     * @param {Number} workId Id of the work to get files for
     * @param {module:api/WorkApi~getWorkFilesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getWorkFiles = function(workId, callback) {
      var postBody = null;

      // verify the required parameter 'workId' is set
      if (workId === undefined || workId === null) {
        throw new Error("Missing the required parameter 'workId' when calling getWorkFiles");
      }


      var pathParams = {
        'workId': workId
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
        '/beta/work/{workId}/file', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWorkTags operation.
     * @callback module:api/WorkApi~getWorkTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for a work.
     * Get all existing work tags.
     * @param {Number} workId Id of the work to get tags for
     * @param {module:api/WorkApi~getWorkTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getWorkTags = function(workId, callback) {
      var postBody = null;

      // verify the required parameter 'workId' is set
      if (workId === undefined || workId === null) {
        throw new Error("Missing the required parameter 'workId' when calling getWorkTags");
      }


      var pathParams = {
        'workId': workId
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
        '/beta/work/{workId}/tag', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateWork operation.
     * @callback module:api/WorkApi~updateWorkCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a work
     * Updates an existing work using the specified data.
     * @param {module:model/Work} body Work to be updated.
     * @param {module:api/WorkApi~updateWorkCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateWork = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateWork");
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
        '/beta/work', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateWorkCustomFields operation.
     * @callback module:api/WorkApi~updateWorkCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a work custom fields
     * Updates an existing work custom fields using the specified data.
     * @param {module:model/Work} body Work to be updated.
     * @param {module:api/WorkApi~updateWorkCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateWorkCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateWorkCustomFields");
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
        '/beta/work/customFields', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
