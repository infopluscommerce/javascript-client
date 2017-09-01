(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ProcessOutputAPIModel = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ProcessOutputAPIModel model module.
   * @module model/ProcessOutputAPIModel
   * @version beta
   */

  /**
   * Constructs a new <code>ProcessOutputAPIModel</code>.
   * @alias module:model/ProcessOutputAPIModel
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>ProcessOutputAPIModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProcessOutputAPIModel} obj Optional instance to populate.
   * @return {module:model/ProcessOutputAPIModel} The populated <code>ProcessOutputAPIModel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], Object);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('messageList')) {
        obj['messageList'] = ApiClient.convertToType(data['messageList'], ['String']);
      }
    }
    return obj;
  }


  /**
   * @member {Object} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;

  /**
   * @member {Array.<String>} messageList
   */
  exports.prototype['messageList'] = undefined;




  return exports;
}));
