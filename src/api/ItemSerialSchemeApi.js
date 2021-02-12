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
    define(['ApiClient', 'model/ApiResponse', 'model/ItemSerialScheme', 'model/RecordFile'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiResponse'), require('../model/ItemSerialScheme'), require('../model/RecordFile'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ItemSerialSchemeApi = factory(root.infoplus.ApiClient, root.infoplus.ApiResponse, root.infoplus.ItemSerialScheme, root.infoplus.RecordFile);
  }
}(this, function(ApiClient, ApiResponse, ItemSerialScheme, RecordFile) {
  'use strict';

  /**
   * ItemSerialScheme service.
   * @module api/ItemSerialSchemeApi
   * @version beta
   */

  /**
   * Constructs a new ItemSerialSchemeApi. 
   * @alias module:api/ItemSerialSchemeApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addItemSerialScheme operation.
     * @callback module:api/ItemSerialSchemeApi~addItemSerialSchemeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemSerialScheme} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an itemSerialScheme
     * Inserts a new itemSerialScheme using the specified data.
     * @param {module:model/ItemSerialScheme} body ItemSerialScheme to be inserted.
     * @param {module:api/ItemSerialSchemeApi~addItemSerialSchemeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ItemSerialScheme}
     */
    this.addItemSerialScheme = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addItemSerialScheme");
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
      var returnType = ItemSerialScheme;

      return this.apiClient.callApi(
        '/beta/itemSerialScheme', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addItemSerialSchemeAudit operation.
     * @callback module:api/ItemSerialSchemeApi~addItemSerialSchemeAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for an itemSerialScheme
     * Adds an audit to an existing itemSerialScheme.
     * @param {Number} itemSerialSchemeId Id of the itemSerialScheme to add an audit to
     * @param {String} itemSerialSchemeAudit The audit to add
     * @param {module:api/ItemSerialSchemeApi~addItemSerialSchemeAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addItemSerialSchemeAudit = function(itemSerialSchemeId, itemSerialSchemeAudit, callback) {
      var postBody = null;

      // verify the required parameter 'itemSerialSchemeId' is set
      if (itemSerialSchemeId === undefined || itemSerialSchemeId === null) {
        throw new Error("Missing the required parameter 'itemSerialSchemeId' when calling addItemSerialSchemeAudit");
      }

      // verify the required parameter 'itemSerialSchemeAudit' is set
      if (itemSerialSchemeAudit === undefined || itemSerialSchemeAudit === null) {
        throw new Error("Missing the required parameter 'itemSerialSchemeAudit' when calling addItemSerialSchemeAudit");
      }


      var pathParams = {
        'itemSerialSchemeId': itemSerialSchemeId,
        'itemSerialSchemeAudit': itemSerialSchemeAudit
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
        '/beta/itemSerialScheme/{itemSerialSchemeId}/audit/{itemSerialSchemeAudit}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addItemSerialSchemeFile operation.
     * @callback module:api/ItemSerialSchemeApi~addItemSerialSchemeFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attach a file to an itemSerialScheme
     * Adds a file to an existing itemSerialScheme.
     * @param {Number} itemSerialSchemeId Id of the itemSerialScheme to add a file to
     * @param {String} fileName Name of file
     * @param {module:api/ItemSerialSchemeApi~addItemSerialSchemeFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addItemSerialSchemeFile = function(itemSerialSchemeId, fileName, callback) {
      var postBody = null;

      // verify the required parameter 'itemSerialSchemeId' is set
      if (itemSerialSchemeId === undefined || itemSerialSchemeId === null) {
        throw new Error("Missing the required parameter 'itemSerialSchemeId' when calling addItemSerialSchemeFile");
      }

      // verify the required parameter 'fileName' is set
      if (fileName === undefined || fileName === null) {
        throw new Error("Missing the required parameter 'fileName' when calling addItemSerialSchemeFile");
      }


      var pathParams = {
        'itemSerialSchemeId': itemSerialSchemeId,
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
        '/beta/itemSerialScheme/{itemSerialSchemeId}/file/{fileName}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addItemSerialSchemeFileByURL operation.
     * @callback module:api/ItemSerialSchemeApi~addItemSerialSchemeFileByURLCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attach a file to an itemSerialScheme by URL.
     * Adds a file to an existing itemSerialScheme by URL.
     * @param {module:model/RecordFile} body The url and optionly fileName to be used.
     * @param {Number} itemSerialSchemeId Id of the itemSerialScheme to add an file to
     * @param {module:api/ItemSerialSchemeApi~addItemSerialSchemeFileByURLCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addItemSerialSchemeFileByURL = function(body, itemSerialSchemeId, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addItemSerialSchemeFileByURL");
      }

      // verify the required parameter 'itemSerialSchemeId' is set
      if (itemSerialSchemeId === undefined || itemSerialSchemeId === null) {
        throw new Error("Missing the required parameter 'itemSerialSchemeId' when calling addItemSerialSchemeFileByURL");
      }


      var pathParams = {
        'itemSerialSchemeId': itemSerialSchemeId
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
        '/beta/itemSerialScheme/{itemSerialSchemeId}/file', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addItemSerialSchemeTag operation.
     * @callback module:api/ItemSerialSchemeApi~addItemSerialSchemeTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for an itemSerialScheme.
     * Adds a tag to an existing itemSerialScheme.
     * @param {Number} itemSerialSchemeId Id of the itemSerialScheme to add a tag to
     * @param {String} itemSerialSchemeTag The tag to add
     * @param {module:api/ItemSerialSchemeApi~addItemSerialSchemeTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addItemSerialSchemeTag = function(itemSerialSchemeId, itemSerialSchemeTag, callback) {
      var postBody = null;

      // verify the required parameter 'itemSerialSchemeId' is set
      if (itemSerialSchemeId === undefined || itemSerialSchemeId === null) {
        throw new Error("Missing the required parameter 'itemSerialSchemeId' when calling addItemSerialSchemeTag");
      }

      // verify the required parameter 'itemSerialSchemeTag' is set
      if (itemSerialSchemeTag === undefined || itemSerialSchemeTag === null) {
        throw new Error("Missing the required parameter 'itemSerialSchemeTag' when calling addItemSerialSchemeTag");
      }


      var pathParams = {
        'itemSerialSchemeId': itemSerialSchemeId,
        'itemSerialSchemeTag': itemSerialSchemeTag
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
        '/beta/itemSerialScheme/{itemSerialSchemeId}/tag/{itemSerialSchemeTag}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteItemSerialScheme operation.
     * @callback module:api/ItemSerialSchemeApi~deleteItemSerialSchemeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an itemSerialScheme
     * Deletes the itemSerialScheme identified by the specified id.
     * @param {Number} itemSerialSchemeId Id of the itemSerialScheme to be deleted.
     * @param {module:api/ItemSerialSchemeApi~deleteItemSerialSchemeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteItemSerialScheme = function(itemSerialSchemeId, callback) {
      var postBody = null;

      // verify the required parameter 'itemSerialSchemeId' is set
      if (itemSerialSchemeId === undefined || itemSerialSchemeId === null) {
        throw new Error("Missing the required parameter 'itemSerialSchemeId' when calling deleteItemSerialScheme");
      }


      var pathParams = {
        'itemSerialSchemeId': itemSerialSchemeId
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
        '/beta/itemSerialScheme/{itemSerialSchemeId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteItemSerialSchemeFile operation.
     * @callback module:api/ItemSerialSchemeApi~deleteItemSerialSchemeFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a file for an itemSerialScheme.
     * Deletes an existing itemSerialScheme file using the specified data.
     * @param {Number} itemSerialSchemeId Id of the itemSerialScheme to remove file from
     * @param {Number} fileId Id of the file to delete
     * @param {module:api/ItemSerialSchemeApi~deleteItemSerialSchemeFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteItemSerialSchemeFile = function(itemSerialSchemeId, fileId, callback) {
      var postBody = null;

      // verify the required parameter 'itemSerialSchemeId' is set
      if (itemSerialSchemeId === undefined || itemSerialSchemeId === null) {
        throw new Error("Missing the required parameter 'itemSerialSchemeId' when calling deleteItemSerialSchemeFile");
      }

      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling deleteItemSerialSchemeFile");
      }


      var pathParams = {
        'itemSerialSchemeId': itemSerialSchemeId,
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
        '/beta/itemSerialScheme/{itemSerialSchemeId}/file/{fileId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteItemSerialSchemeTag operation.
     * @callback module:api/ItemSerialSchemeApi~deleteItemSerialSchemeTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for an itemSerialScheme.
     * Deletes an existing itemSerialScheme tag using the specified data.
     * @param {Number} itemSerialSchemeId Id of the itemSerialScheme to remove tag from
     * @param {String} itemSerialSchemeTag The tag to delete
     * @param {module:api/ItemSerialSchemeApi~deleteItemSerialSchemeTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteItemSerialSchemeTag = function(itemSerialSchemeId, itemSerialSchemeTag, callback) {
      var postBody = null;

      // verify the required parameter 'itemSerialSchemeId' is set
      if (itemSerialSchemeId === undefined || itemSerialSchemeId === null) {
        throw new Error("Missing the required parameter 'itemSerialSchemeId' when calling deleteItemSerialSchemeTag");
      }

      // verify the required parameter 'itemSerialSchemeTag' is set
      if (itemSerialSchemeTag === undefined || itemSerialSchemeTag === null) {
        throw new Error("Missing the required parameter 'itemSerialSchemeTag' when calling deleteItemSerialSchemeTag");
      }


      var pathParams = {
        'itemSerialSchemeId': itemSerialSchemeId,
        'itemSerialSchemeTag': itemSerialSchemeTag
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
        '/beta/itemSerialScheme/{itemSerialSchemeId}/tag/{itemSerialSchemeTag}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateItemSerialSchemeById operation.
     * @callback module:api/ItemSerialSchemeApi~getDuplicateItemSerialSchemeByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemSerialScheme} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated an itemSerialScheme by id
     * Returns a duplicated itemSerialScheme identified by the specified id.
     * @param {Number} itemSerialSchemeId Id of the itemSerialScheme to be duplicated.
     * @param {module:api/ItemSerialSchemeApi~getDuplicateItemSerialSchemeByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ItemSerialScheme}
     */
    this.getDuplicateItemSerialSchemeById = function(itemSerialSchemeId, callback) {
      var postBody = null;

      // verify the required parameter 'itemSerialSchemeId' is set
      if (itemSerialSchemeId === undefined || itemSerialSchemeId === null) {
        throw new Error("Missing the required parameter 'itemSerialSchemeId' when calling getDuplicateItemSerialSchemeById");
      }


      var pathParams = {
        'itemSerialSchemeId': itemSerialSchemeId
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
      var returnType = ItemSerialScheme;

      return this.apiClient.callApi(
        '/beta/itemSerialScheme/duplicate/{itemSerialSchemeId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getItemSerialSchemeByFilter operation.
     * @callback module:api/ItemSerialSchemeApi~getItemSerialSchemeByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ItemSerialScheme>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search itemSerialSchemes by filter
     * Returns the list of itemSerialSchemes that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Number} opts.page Result page number.  Defaults to 1.
     * @param {Number} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/ItemSerialSchemeApi~getItemSerialSchemeByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ItemSerialScheme>}
     */
    this.getItemSerialSchemeByFilter = function(opts, callback) {
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
      var returnType = [ItemSerialScheme];

      return this.apiClient.callApi(
        '/beta/itemSerialScheme/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getItemSerialSchemeById operation.
     * @callback module:api/ItemSerialSchemeApi~getItemSerialSchemeByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemSerialScheme} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an itemSerialScheme by id
     * Returns the itemSerialScheme identified by the specified id.
     * @param {Number} itemSerialSchemeId Id of the itemSerialScheme to be returned.
     * @param {module:api/ItemSerialSchemeApi~getItemSerialSchemeByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ItemSerialScheme}
     */
    this.getItemSerialSchemeById = function(itemSerialSchemeId, callback) {
      var postBody = null;

      // verify the required parameter 'itemSerialSchemeId' is set
      if (itemSerialSchemeId === undefined || itemSerialSchemeId === null) {
        throw new Error("Missing the required parameter 'itemSerialSchemeId' when calling getItemSerialSchemeById");
      }


      var pathParams = {
        'itemSerialSchemeId': itemSerialSchemeId
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
      var returnType = ItemSerialScheme;

      return this.apiClient.callApi(
        '/beta/itemSerialScheme/{itemSerialSchemeId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getItemSerialSchemeFiles operation.
     * @callback module:api/ItemSerialSchemeApi~getItemSerialSchemeFilesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the files for an itemSerialScheme.
     * Get all existing itemSerialScheme files.
     * @param {Number} itemSerialSchemeId Id of the itemSerialScheme to get files for
     * @param {module:api/ItemSerialSchemeApi~getItemSerialSchemeFilesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getItemSerialSchemeFiles = function(itemSerialSchemeId, callback) {
      var postBody = null;

      // verify the required parameter 'itemSerialSchemeId' is set
      if (itemSerialSchemeId === undefined || itemSerialSchemeId === null) {
        throw new Error("Missing the required parameter 'itemSerialSchemeId' when calling getItemSerialSchemeFiles");
      }


      var pathParams = {
        'itemSerialSchemeId': itemSerialSchemeId
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
        '/beta/itemSerialScheme/{itemSerialSchemeId}/file', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getItemSerialSchemeTags operation.
     * @callback module:api/ItemSerialSchemeApi~getItemSerialSchemeTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for an itemSerialScheme.
     * Get all existing itemSerialScheme tags.
     * @param {Number} itemSerialSchemeId Id of the itemSerialScheme to get tags for
     * @param {module:api/ItemSerialSchemeApi~getItemSerialSchemeTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getItemSerialSchemeTags = function(itemSerialSchemeId, callback) {
      var postBody = null;

      // verify the required parameter 'itemSerialSchemeId' is set
      if (itemSerialSchemeId === undefined || itemSerialSchemeId === null) {
        throw new Error("Missing the required parameter 'itemSerialSchemeId' when calling getItemSerialSchemeTags");
      }


      var pathParams = {
        'itemSerialSchemeId': itemSerialSchemeId
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
        '/beta/itemSerialScheme/{itemSerialSchemeId}/tag', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateItemSerialScheme operation.
     * @callback module:api/ItemSerialSchemeApi~updateItemSerialSchemeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an itemSerialScheme
     * Updates an existing itemSerialScheme using the specified data.
     * @param {module:model/ItemSerialScheme} body ItemSerialScheme to be updated.
     * @param {module:api/ItemSerialSchemeApi~updateItemSerialSchemeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateItemSerialScheme = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateItemSerialScheme");
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
        '/beta/itemSerialScheme', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
