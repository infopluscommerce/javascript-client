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
    define(['ApiClient', 'model/ApiResponse', 'model/BillingCode', 'model/RecordFile'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiResponse'), require('../model/BillingCode'), require('../model/RecordFile'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.BillingCodeApi = factory(root.infoplus.ApiClient, root.infoplus.ApiResponse, root.infoplus.BillingCode, root.infoplus.RecordFile);
  }
}(this, function(ApiClient, ApiResponse, BillingCode, RecordFile) {
  'use strict';

  /**
   * BillingCode service.
   * @module api/BillingCodeApi
   * @version beta
   */

  /**
   * Constructs a new BillingCodeApi. 
   * @alias module:api/BillingCodeApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addBillingCode operation.
     * @callback module:api/BillingCodeApi~addBillingCodeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BillingCode} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a billingCode
     * Inserts a new billingCode using the specified data.
     * @param {module:model/BillingCode} body BillingCode to be inserted.
     * @param {module:api/BillingCodeApi~addBillingCodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BillingCode}
     */
    this.addBillingCode = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addBillingCode");
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
      var returnType = BillingCode;

      return this.apiClient.callApi(
        '/beta/billingCode', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addBillingCodeAudit operation.
     * @callback module:api/BillingCodeApi~addBillingCodeAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for a billingCode
     * Adds an audit to an existing billingCode.
     * @param {Number} billingCodeId Id of the billingCode to add an audit to
     * @param {String} billingCodeAudit The audit to add
     * @param {module:api/BillingCodeApi~addBillingCodeAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addBillingCodeAudit = function(billingCodeId, billingCodeAudit, callback) {
      var postBody = null;

      // verify the required parameter 'billingCodeId' is set
      if (billingCodeId === undefined || billingCodeId === null) {
        throw new Error("Missing the required parameter 'billingCodeId' when calling addBillingCodeAudit");
      }

      // verify the required parameter 'billingCodeAudit' is set
      if (billingCodeAudit === undefined || billingCodeAudit === null) {
        throw new Error("Missing the required parameter 'billingCodeAudit' when calling addBillingCodeAudit");
      }


      var pathParams = {
        'billingCodeId': billingCodeId,
        'billingCodeAudit': billingCodeAudit
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
        '/beta/billingCode/{billingCodeId}/audit/{billingCodeAudit}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addBillingCodeFile operation.
     * @callback module:api/BillingCodeApi~addBillingCodeFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attach a file to a billingCode
     * Adds a file to an existing billingCode.
     * @param {Number} billingCodeId Id of the billingCode to add a file to
     * @param {String} fileName Name of file
     * @param {module:api/BillingCodeApi~addBillingCodeFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addBillingCodeFile = function(billingCodeId, fileName, callback) {
      var postBody = null;

      // verify the required parameter 'billingCodeId' is set
      if (billingCodeId === undefined || billingCodeId === null) {
        throw new Error("Missing the required parameter 'billingCodeId' when calling addBillingCodeFile");
      }

      // verify the required parameter 'fileName' is set
      if (fileName === undefined || fileName === null) {
        throw new Error("Missing the required parameter 'fileName' when calling addBillingCodeFile");
      }


      var pathParams = {
        'billingCodeId': billingCodeId,
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
        '/beta/billingCode/{billingCodeId}/file/{fileName}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addBillingCodeFileByURL operation.
     * @callback module:api/BillingCodeApi~addBillingCodeFileByURLCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attach a file to a billingCode by URL.
     * Adds a file to an existing billingCode by URL.
     * @param {module:model/RecordFile} body The url and optionly fileName to be used.
     * @param {Number} billingCodeId Id of the billingCode to add an file to
     * @param {module:api/BillingCodeApi~addBillingCodeFileByURLCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addBillingCodeFileByURL = function(body, billingCodeId, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addBillingCodeFileByURL");
      }

      // verify the required parameter 'billingCodeId' is set
      if (billingCodeId === undefined || billingCodeId === null) {
        throw new Error("Missing the required parameter 'billingCodeId' when calling addBillingCodeFileByURL");
      }


      var pathParams = {
        'billingCodeId': billingCodeId
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
        '/beta/billingCode/{billingCodeId}/file', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addBillingCodeTag operation.
     * @callback module:api/BillingCodeApi~addBillingCodeTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for a billingCode.
     * Adds a tag to an existing billingCode.
     * @param {Number} billingCodeId Id of the billingCode to add a tag to
     * @param {String} billingCodeTag The tag to add
     * @param {module:api/BillingCodeApi~addBillingCodeTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addBillingCodeTag = function(billingCodeId, billingCodeTag, callback) {
      var postBody = null;

      // verify the required parameter 'billingCodeId' is set
      if (billingCodeId === undefined || billingCodeId === null) {
        throw new Error("Missing the required parameter 'billingCodeId' when calling addBillingCodeTag");
      }

      // verify the required parameter 'billingCodeTag' is set
      if (billingCodeTag === undefined || billingCodeTag === null) {
        throw new Error("Missing the required parameter 'billingCodeTag' when calling addBillingCodeTag");
      }


      var pathParams = {
        'billingCodeId': billingCodeId,
        'billingCodeTag': billingCodeTag
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
        '/beta/billingCode/{billingCodeId}/tag/{billingCodeTag}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteBillingCode operation.
     * @callback module:api/BillingCodeApi~deleteBillingCodeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a billingCode
     * Deletes the billingCode identified by the specified id.
     * @param {Number} billingCodeId Id of the billingCode to be deleted.
     * @param {module:api/BillingCodeApi~deleteBillingCodeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteBillingCode = function(billingCodeId, callback) {
      var postBody = null;

      // verify the required parameter 'billingCodeId' is set
      if (billingCodeId === undefined || billingCodeId === null) {
        throw new Error("Missing the required parameter 'billingCodeId' when calling deleteBillingCode");
      }


      var pathParams = {
        'billingCodeId': billingCodeId
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
        '/beta/billingCode/{billingCodeId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteBillingCodeFile operation.
     * @callback module:api/BillingCodeApi~deleteBillingCodeFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a file for a billingCode.
     * Deletes an existing billingCode file using the specified data.
     * @param {Number} billingCodeId Id of the billingCode to remove file from
     * @param {Number} fileId Id of the file to delete
     * @param {module:api/BillingCodeApi~deleteBillingCodeFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteBillingCodeFile = function(billingCodeId, fileId, callback) {
      var postBody = null;

      // verify the required parameter 'billingCodeId' is set
      if (billingCodeId === undefined || billingCodeId === null) {
        throw new Error("Missing the required parameter 'billingCodeId' when calling deleteBillingCodeFile");
      }

      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling deleteBillingCodeFile");
      }


      var pathParams = {
        'billingCodeId': billingCodeId,
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
        '/beta/billingCode/{billingCodeId}/file/{fileId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteBillingCodeTag operation.
     * @callback module:api/BillingCodeApi~deleteBillingCodeTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for a billingCode.
     * Deletes an existing billingCode tag using the specified data.
     * @param {Number} billingCodeId Id of the billingCode to remove tag from
     * @param {String} billingCodeTag The tag to delete
     * @param {module:api/BillingCodeApi~deleteBillingCodeTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteBillingCodeTag = function(billingCodeId, billingCodeTag, callback) {
      var postBody = null;

      // verify the required parameter 'billingCodeId' is set
      if (billingCodeId === undefined || billingCodeId === null) {
        throw new Error("Missing the required parameter 'billingCodeId' when calling deleteBillingCodeTag");
      }

      // verify the required parameter 'billingCodeTag' is set
      if (billingCodeTag === undefined || billingCodeTag === null) {
        throw new Error("Missing the required parameter 'billingCodeTag' when calling deleteBillingCodeTag");
      }


      var pathParams = {
        'billingCodeId': billingCodeId,
        'billingCodeTag': billingCodeTag
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
        '/beta/billingCode/{billingCodeId}/tag/{billingCodeTag}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBillingCodeByFilter operation.
     * @callback module:api/BillingCodeApi~getBillingCodeByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/BillingCode>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search billingCodes by filter
     * Returns the list of billingCodes that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Number} opts.page Result page number.  Defaults to 1.
     * @param {Number} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/BillingCodeApi~getBillingCodeByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/BillingCode>}
     */
    this.getBillingCodeByFilter = function(opts, callback) {
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
      var returnType = [BillingCode];

      return this.apiClient.callApi(
        '/beta/billingCode/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBillingCodeById operation.
     * @callback module:api/BillingCodeApi~getBillingCodeByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BillingCode} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a billingCode by id
     * Returns the billingCode identified by the specified id.
     * @param {Number} billingCodeId Id of the billingCode to be returned.
     * @param {module:api/BillingCodeApi~getBillingCodeByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BillingCode}
     */
    this.getBillingCodeById = function(billingCodeId, callback) {
      var postBody = null;

      // verify the required parameter 'billingCodeId' is set
      if (billingCodeId === undefined || billingCodeId === null) {
        throw new Error("Missing the required parameter 'billingCodeId' when calling getBillingCodeById");
      }


      var pathParams = {
        'billingCodeId': billingCodeId
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
      var returnType = BillingCode;

      return this.apiClient.callApi(
        '/beta/billingCode/{billingCodeId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBillingCodeFiles operation.
     * @callback module:api/BillingCodeApi~getBillingCodeFilesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the files for a billingCode.
     * Get all existing billingCode files.
     * @param {Number} billingCodeId Id of the billingCode to get files for
     * @param {module:api/BillingCodeApi~getBillingCodeFilesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getBillingCodeFiles = function(billingCodeId, callback) {
      var postBody = null;

      // verify the required parameter 'billingCodeId' is set
      if (billingCodeId === undefined || billingCodeId === null) {
        throw new Error("Missing the required parameter 'billingCodeId' when calling getBillingCodeFiles");
      }


      var pathParams = {
        'billingCodeId': billingCodeId
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
        '/beta/billingCode/{billingCodeId}/file', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBillingCodeTags operation.
     * @callback module:api/BillingCodeApi~getBillingCodeTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for a billingCode.
     * Get all existing billingCode tags.
     * @param {Number} billingCodeId Id of the billingCode to get tags for
     * @param {module:api/BillingCodeApi~getBillingCodeTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getBillingCodeTags = function(billingCodeId, callback) {
      var postBody = null;

      // verify the required parameter 'billingCodeId' is set
      if (billingCodeId === undefined || billingCodeId === null) {
        throw new Error("Missing the required parameter 'billingCodeId' when calling getBillingCodeTags");
      }


      var pathParams = {
        'billingCodeId': billingCodeId
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
        '/beta/billingCode/{billingCodeId}/tag', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateBillingCodeById operation.
     * @callback module:api/BillingCodeApi~getDuplicateBillingCodeByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BillingCode} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a billingCode by id
     * Returns a duplicated billingCode identified by the specified id.
     * @param {Number} billingCodeId Id of the billingCode to be duplicated.
     * @param {module:api/BillingCodeApi~getDuplicateBillingCodeByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BillingCode}
     */
    this.getDuplicateBillingCodeById = function(billingCodeId, callback) {
      var postBody = null;

      // verify the required parameter 'billingCodeId' is set
      if (billingCodeId === undefined || billingCodeId === null) {
        throw new Error("Missing the required parameter 'billingCodeId' when calling getDuplicateBillingCodeById");
      }


      var pathParams = {
        'billingCodeId': billingCodeId
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
      var returnType = BillingCode;

      return this.apiClient.callApi(
        '/beta/billingCode/duplicate/{billingCodeId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateBillingCode operation.
     * @callback module:api/BillingCodeApi~updateBillingCodeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a billingCode
     * Updates an existing billingCode using the specified data.
     * @param {module:model/BillingCode} body BillingCode to be updated.
     * @param {module:api/BillingCodeApi~updateBillingCodeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateBillingCode = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateBillingCode");
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
        '/beta/billingCode', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateBillingCodeCustomFields operation.
     * @callback module:api/BillingCodeApi~updateBillingCodeCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a billingCode custom fields
     * Updates an existing billingCode custom fields using the specified data.
     * @param {module:model/BillingCode} body BillingCode to be updated.
     * @param {module:api/BillingCodeApi~updateBillingCodeCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateBillingCodeCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateBillingCodeCustomFields");
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
        '/beta/billingCode/customFields', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
