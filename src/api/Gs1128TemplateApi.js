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
    define(['ApiClient', 'model/ApiResponse', 'model/Gs1128Template', 'model/RecordFile'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiResponse'), require('../model/Gs1128Template'), require('../model/RecordFile'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.Gs1128TemplateApi = factory(root.infoplus.ApiClient, root.infoplus.ApiResponse, root.infoplus.Gs1128Template, root.infoplus.RecordFile);
  }
}(this, function(ApiClient, ApiResponse, Gs1128Template, RecordFile) {
  'use strict';

  /**
   * Gs1128Template service.
   * @module api/Gs1128TemplateApi
   * @version beta
   */

  /**
   * Constructs a new Gs1128TemplateApi. 
   * @alias module:api/Gs1128TemplateApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addGs1128Template operation.
     * @callback module:api/Gs1128TemplateApi~addGs1128TemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Gs1128Template} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a gs1128Template
     * Inserts a new gs1128Template using the specified data.
     * @param {module:model/Gs1128Template} body Gs1128Template to be inserted.
     * @param {module:api/Gs1128TemplateApi~addGs1128TemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Gs1128Template}
     */
    this.addGs1128Template = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addGs1128Template");
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
      var returnType = Gs1128Template;

      return this.apiClient.callApi(
        '/beta/gs1128Template', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addGs1128TemplateAudit operation.
     * @callback module:api/Gs1128TemplateApi~addGs1128TemplateAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for a gs1128Template
     * Adds an audit to an existing gs1128Template.
     * @param {Number} gs1128TemplateId Id of the gs1128Template to add an audit to
     * @param {String} gs1128TemplateAudit The audit to add
     * @param {module:api/Gs1128TemplateApi~addGs1128TemplateAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addGs1128TemplateAudit = function(gs1128TemplateId, gs1128TemplateAudit, callback) {
      var postBody = null;

      // verify the required parameter 'gs1128TemplateId' is set
      if (gs1128TemplateId === undefined || gs1128TemplateId === null) {
        throw new Error("Missing the required parameter 'gs1128TemplateId' when calling addGs1128TemplateAudit");
      }

      // verify the required parameter 'gs1128TemplateAudit' is set
      if (gs1128TemplateAudit === undefined || gs1128TemplateAudit === null) {
        throw new Error("Missing the required parameter 'gs1128TemplateAudit' when calling addGs1128TemplateAudit");
      }


      var pathParams = {
        'gs1128TemplateId': gs1128TemplateId,
        'gs1128TemplateAudit': gs1128TemplateAudit
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
        '/beta/gs1128Template/{gs1128TemplateId}/audit/{gs1128TemplateAudit}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addGs1128TemplateFile operation.
     * @callback module:api/Gs1128TemplateApi~addGs1128TemplateFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attach a file to a gs1128Template
     * Adds a file to an existing gs1128Template.
     * @param {Number} gs1128TemplateId Id of the gs1128Template to add a file to
     * @param {String} fileName Name of file
     * @param {module:api/Gs1128TemplateApi~addGs1128TemplateFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addGs1128TemplateFile = function(gs1128TemplateId, fileName, callback) {
      var postBody = null;

      // verify the required parameter 'gs1128TemplateId' is set
      if (gs1128TemplateId === undefined || gs1128TemplateId === null) {
        throw new Error("Missing the required parameter 'gs1128TemplateId' when calling addGs1128TemplateFile");
      }

      // verify the required parameter 'fileName' is set
      if (fileName === undefined || fileName === null) {
        throw new Error("Missing the required parameter 'fileName' when calling addGs1128TemplateFile");
      }


      var pathParams = {
        'gs1128TemplateId': gs1128TemplateId,
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
        '/beta/gs1128Template/{gs1128TemplateId}/file/{fileName}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addGs1128TemplateFileByURL operation.
     * @callback module:api/Gs1128TemplateApi~addGs1128TemplateFileByURLCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attach a file to a gs1128Template by URL.
     * Adds a file to an existing gs1128Template by URL.
     * @param {module:model/RecordFile} body The url and optionly fileName to be used.
     * @param {Number} gs1128TemplateId Id of the gs1128Template to add an file to
     * @param {module:api/Gs1128TemplateApi~addGs1128TemplateFileByURLCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addGs1128TemplateFileByURL = function(body, gs1128TemplateId, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addGs1128TemplateFileByURL");
      }

      // verify the required parameter 'gs1128TemplateId' is set
      if (gs1128TemplateId === undefined || gs1128TemplateId === null) {
        throw new Error("Missing the required parameter 'gs1128TemplateId' when calling addGs1128TemplateFileByURL");
      }


      var pathParams = {
        'gs1128TemplateId': gs1128TemplateId
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
        '/beta/gs1128Template/{gs1128TemplateId}/file', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addGs1128TemplateTag operation.
     * @callback module:api/Gs1128TemplateApi~addGs1128TemplateTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for a gs1128Template.
     * Adds a tag to an existing gs1128Template.
     * @param {Number} gs1128TemplateId Id of the gs1128Template to add a tag to
     * @param {String} gs1128TemplateTag The tag to add
     * @param {module:api/Gs1128TemplateApi~addGs1128TemplateTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addGs1128TemplateTag = function(gs1128TemplateId, gs1128TemplateTag, callback) {
      var postBody = null;

      // verify the required parameter 'gs1128TemplateId' is set
      if (gs1128TemplateId === undefined || gs1128TemplateId === null) {
        throw new Error("Missing the required parameter 'gs1128TemplateId' when calling addGs1128TemplateTag");
      }

      // verify the required parameter 'gs1128TemplateTag' is set
      if (gs1128TemplateTag === undefined || gs1128TemplateTag === null) {
        throw new Error("Missing the required parameter 'gs1128TemplateTag' when calling addGs1128TemplateTag");
      }


      var pathParams = {
        'gs1128TemplateId': gs1128TemplateId,
        'gs1128TemplateTag': gs1128TemplateTag
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
        '/beta/gs1128Template/{gs1128TemplateId}/tag/{gs1128TemplateTag}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteGs1128Template operation.
     * @callback module:api/Gs1128TemplateApi~deleteGs1128TemplateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a gs1128Template
     * Deletes the gs1128Template identified by the specified id.
     * @param {Number} gs1128TemplateId Id of the gs1128Template to be deleted.
     * @param {module:api/Gs1128TemplateApi~deleteGs1128TemplateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteGs1128Template = function(gs1128TemplateId, callback) {
      var postBody = null;

      // verify the required parameter 'gs1128TemplateId' is set
      if (gs1128TemplateId === undefined || gs1128TemplateId === null) {
        throw new Error("Missing the required parameter 'gs1128TemplateId' when calling deleteGs1128Template");
      }


      var pathParams = {
        'gs1128TemplateId': gs1128TemplateId
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
        '/beta/gs1128Template/{gs1128TemplateId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteGs1128TemplateFile operation.
     * @callback module:api/Gs1128TemplateApi~deleteGs1128TemplateFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a file for a gs1128Template.
     * Deletes an existing gs1128Template file using the specified data.
     * @param {Number} gs1128TemplateId Id of the gs1128Template to remove file from
     * @param {Number} fileId Id of the file to delete
     * @param {module:api/Gs1128TemplateApi~deleteGs1128TemplateFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteGs1128TemplateFile = function(gs1128TemplateId, fileId, callback) {
      var postBody = null;

      // verify the required parameter 'gs1128TemplateId' is set
      if (gs1128TemplateId === undefined || gs1128TemplateId === null) {
        throw new Error("Missing the required parameter 'gs1128TemplateId' when calling deleteGs1128TemplateFile");
      }

      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling deleteGs1128TemplateFile");
      }


      var pathParams = {
        'gs1128TemplateId': gs1128TemplateId,
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
        '/beta/gs1128Template/{gs1128TemplateId}/file/{fileId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteGs1128TemplateTag operation.
     * @callback module:api/Gs1128TemplateApi~deleteGs1128TemplateTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for a gs1128Template.
     * Deletes an existing gs1128Template tag using the specified data.
     * @param {Number} gs1128TemplateId Id of the gs1128Template to remove tag from
     * @param {String} gs1128TemplateTag The tag to delete
     * @param {module:api/Gs1128TemplateApi~deleteGs1128TemplateTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteGs1128TemplateTag = function(gs1128TemplateId, gs1128TemplateTag, callback) {
      var postBody = null;

      // verify the required parameter 'gs1128TemplateId' is set
      if (gs1128TemplateId === undefined || gs1128TemplateId === null) {
        throw new Error("Missing the required parameter 'gs1128TemplateId' when calling deleteGs1128TemplateTag");
      }

      // verify the required parameter 'gs1128TemplateTag' is set
      if (gs1128TemplateTag === undefined || gs1128TemplateTag === null) {
        throw new Error("Missing the required parameter 'gs1128TemplateTag' when calling deleteGs1128TemplateTag");
      }


      var pathParams = {
        'gs1128TemplateId': gs1128TemplateId,
        'gs1128TemplateTag': gs1128TemplateTag
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
        '/beta/gs1128Template/{gs1128TemplateId}/tag/{gs1128TemplateTag}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateGs1128TemplateById operation.
     * @callback module:api/Gs1128TemplateApi~getDuplicateGs1128TemplateByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Gs1128Template} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a gs1128Template by id
     * Returns a duplicated gs1128Template identified by the specified id.
     * @param {Number} gs1128TemplateId Id of the gs1128Template to be duplicated.
     * @param {module:api/Gs1128TemplateApi~getDuplicateGs1128TemplateByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Gs1128Template}
     */
    this.getDuplicateGs1128TemplateById = function(gs1128TemplateId, callback) {
      var postBody = null;

      // verify the required parameter 'gs1128TemplateId' is set
      if (gs1128TemplateId === undefined || gs1128TemplateId === null) {
        throw new Error("Missing the required parameter 'gs1128TemplateId' when calling getDuplicateGs1128TemplateById");
      }


      var pathParams = {
        'gs1128TemplateId': gs1128TemplateId
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
      var returnType = Gs1128Template;

      return this.apiClient.callApi(
        '/beta/gs1128Template/duplicate/{gs1128TemplateId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getGs1128TemplateByFilter operation.
     * @callback module:api/Gs1128TemplateApi~getGs1128TemplateByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Gs1128Template>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search gs1128Templates by filter
     * Returns the list of gs1128Templates that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Number} opts.page Result page number.  Defaults to 1.
     * @param {Number} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/Gs1128TemplateApi~getGs1128TemplateByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Gs1128Template>}
     */
    this.getGs1128TemplateByFilter = function(opts, callback) {
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
      var returnType = [Gs1128Template];

      return this.apiClient.callApi(
        '/beta/gs1128Template/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getGs1128TemplateById operation.
     * @callback module:api/Gs1128TemplateApi~getGs1128TemplateByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Gs1128Template} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a gs1128Template by id
     * Returns the gs1128Template identified by the specified id.
     * @param {Number} gs1128TemplateId Id of the gs1128Template to be returned.
     * @param {module:api/Gs1128TemplateApi~getGs1128TemplateByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Gs1128Template}
     */
    this.getGs1128TemplateById = function(gs1128TemplateId, callback) {
      var postBody = null;

      // verify the required parameter 'gs1128TemplateId' is set
      if (gs1128TemplateId === undefined || gs1128TemplateId === null) {
        throw new Error("Missing the required parameter 'gs1128TemplateId' when calling getGs1128TemplateById");
      }


      var pathParams = {
        'gs1128TemplateId': gs1128TemplateId
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
      var returnType = Gs1128Template;

      return this.apiClient.callApi(
        '/beta/gs1128Template/{gs1128TemplateId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getGs1128TemplateFiles operation.
     * @callback module:api/Gs1128TemplateApi~getGs1128TemplateFilesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the files for a gs1128Template.
     * Get all existing gs1128Template files.
     * @param {Number} gs1128TemplateId Id of the gs1128Template to get files for
     * @param {module:api/Gs1128TemplateApi~getGs1128TemplateFilesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getGs1128TemplateFiles = function(gs1128TemplateId, callback) {
      var postBody = null;

      // verify the required parameter 'gs1128TemplateId' is set
      if (gs1128TemplateId === undefined || gs1128TemplateId === null) {
        throw new Error("Missing the required parameter 'gs1128TemplateId' when calling getGs1128TemplateFiles");
      }


      var pathParams = {
        'gs1128TemplateId': gs1128TemplateId
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
        '/beta/gs1128Template/{gs1128TemplateId}/file', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getGs1128TemplateTags operation.
     * @callback module:api/Gs1128TemplateApi~getGs1128TemplateTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for a gs1128Template.
     * Get all existing gs1128Template tags.
     * @param {Number} gs1128TemplateId Id of the gs1128Template to get tags for
     * @param {module:api/Gs1128TemplateApi~getGs1128TemplateTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getGs1128TemplateTags = function(gs1128TemplateId, callback) {
      var postBody = null;

      // verify the required parameter 'gs1128TemplateId' is set
      if (gs1128TemplateId === undefined || gs1128TemplateId === null) {
        throw new Error("Missing the required parameter 'gs1128TemplateId' when calling getGs1128TemplateTags");
      }


      var pathParams = {
        'gs1128TemplateId': gs1128TemplateId
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
        '/beta/gs1128Template/{gs1128TemplateId}/tag', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateGs1128Template operation.
     * @callback module:api/Gs1128TemplateApi~updateGs1128TemplateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a gs1128Template
     * Updates an existing gs1128Template using the specified data.
     * @param {module:model/Gs1128Template} body Gs1128Template to be updated.
     * @param {module:api/Gs1128TemplateApi~updateGs1128TemplateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateGs1128Template = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateGs1128Template");
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
        '/beta/gs1128Template', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));