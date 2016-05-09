(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './BillOfLadingCarrierInfoLine', './BillOfLadingOrderInfoLine'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BillOfLadingCarrierInfoLine'), require('./BillOfLadingOrderInfoLine'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.BillOfLading = factory(root.infoplus.ApiClient, root.infoplus.BillOfLadingCarrierInfoLine, root.infoplus.BillOfLadingOrderInfoLine);
  }
}(this, function(ApiClient, BillOfLadingCarrierInfoLine, BillOfLadingOrderInfoLine) {
  'use strict';

  /**
   * The BillOfLading model module.
   * @module model/BillOfLading
   * @version 1.0
   */

  /**
   * Constructs a new <code>BillOfLading</code>.
   * @alias module:model/BillOfLading
   * @class
   * @param lobId
   * @param bolNo
   */
  var exports = function(lobId, bolNo) {




    this['lobId'] = lobId;
    this['bolNo'] = bolNo;











































  };

  /**
   * Constructs a <code>BillOfLading</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BillOfLading} obj Optional instance to populate.
   * @return {module:model/BillOfLading} The populated <code>BillOfLading</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('createDate')) {
        obj['createDate'] = ApiClient.convertToType(data['createDate'], 'Date');
      }
      if (data.hasOwnProperty('modifyDate')) {
        obj['modifyDate'] = ApiClient.convertToType(data['modifyDate'], 'Date');
      }
      if (data.hasOwnProperty('lobId')) {
        obj['lobId'] = ApiClient.convertToType(data['lobId'], 'Integer');
      }
      if (data.hasOwnProperty('bolNo')) {
        obj['bolNo'] = ApiClient.convertToType(data['bolNo'], 'String');
      }
      if (data.hasOwnProperty('bolDate')) {
        obj['bolDate'] = ApiClient.convertToType(data['bolDate'], 'Date');
      }
      if (data.hasOwnProperty('shipFromName')) {
        obj['shipFromName'] = ApiClient.convertToType(data['shipFromName'], 'String');
      }
      if (data.hasOwnProperty('shipFromAddress')) {
        obj['shipFromAddress'] = ApiClient.convertToType(data['shipFromAddress'], 'String');
      }
      if (data.hasOwnProperty('shipFromCity')) {
        obj['shipFromCity'] = ApiClient.convertToType(data['shipFromCity'], 'String');
      }
      if (data.hasOwnProperty('shipFromState')) {
        obj['shipFromState'] = ApiClient.convertToType(data['shipFromState'], 'String');
      }
      if (data.hasOwnProperty('shipFromZip')) {
        obj['shipFromZip'] = ApiClient.convertToType(data['shipFromZip'], 'String');
      }
      if (data.hasOwnProperty('sid')) {
        obj['sid'] = ApiClient.convertToType(data['sid'], 'String');
      }
      if (data.hasOwnProperty('isShipFromFOB')) {
        obj['isShipFromFOB'] = ApiClient.convertToType(data['isShipFromFOB'], 'Boolean');
      }
      if (data.hasOwnProperty('shipToName')) {
        obj['shipToName'] = ApiClient.convertToType(data['shipToName'], 'String');
      }
      if (data.hasOwnProperty('shipToAddress')) {
        obj['shipToAddress'] = ApiClient.convertToType(data['shipToAddress'], 'String');
      }
      if (data.hasOwnProperty('shipToCity')) {
        obj['shipToCity'] = ApiClient.convertToType(data['shipToCity'], 'String');
      }
      if (data.hasOwnProperty('shipToState')) {
        obj['shipToState'] = ApiClient.convertToType(data['shipToState'], 'String');
      }
      if (data.hasOwnProperty('shipToZip')) {
        obj['shipToZip'] = ApiClient.convertToType(data['shipToZip'], 'String');
      }
      if (data.hasOwnProperty('shipToLocationNo')) {
        obj['shipToLocationNo'] = ApiClient.convertToType(data['shipToLocationNo'], 'String');
      }
      if (data.hasOwnProperty('cid')) {
        obj['cid'] = ApiClient.convertToType(data['cid'], 'String');
      }
      if (data.hasOwnProperty('isShipToFOB')) {
        obj['isShipToFOB'] = ApiClient.convertToType(data['isShipToFOB'], 'Boolean');
      }
      if (data.hasOwnProperty('billToName')) {
        obj['billToName'] = ApiClient.convertToType(data['billToName'], 'String');
      }
      if (data.hasOwnProperty('billToAddress')) {
        obj['billToAddress'] = ApiClient.convertToType(data['billToAddress'], 'String');
      }
      if (data.hasOwnProperty('billToCity')) {
        obj['billToCity'] = ApiClient.convertToType(data['billToCity'], 'String');
      }
      if (data.hasOwnProperty('billToState')) {
        obj['billToState'] = ApiClient.convertToType(data['billToState'], 'String');
      }
      if (data.hasOwnProperty('billToZip')) {
        obj['billToZip'] = ApiClient.convertToType(data['billToZip'], 'String');
      }
      if (data.hasOwnProperty('isTrailerLoadedByShipper')) {
        obj['isTrailerLoadedByShipper'] = ApiClient.convertToType(data['isTrailerLoadedByShipper'], 'Boolean');
      }
      if (data.hasOwnProperty('byDriver')) {
        obj['byDriver'] = ApiClient.convertToType(data['byDriver'], 'Boolean');
      }
      if (data.hasOwnProperty('codAmount')) {
        obj['codAmount'] = ApiClient.convertToType(data['codAmount'], 'Number');
      }
      if (data.hasOwnProperty('feeTermsCollect')) {
        obj['feeTermsCollect'] = ApiClient.convertToType(data['feeTermsCollect'], 'Boolean');
      }
      if (data.hasOwnProperty('feeTermsPrepaid')) {
        obj['feeTermsPrepaid'] = ApiClient.convertToType(data['feeTermsPrepaid'], 'Boolean');
      }
      if (data.hasOwnProperty('customerCheckAcceptable')) {
        obj['customerCheckAcceptable'] = ApiClient.convertToType(data['customerCheckAcceptable'], 'Boolean');
      }
      if (data.hasOwnProperty('carrierName')) {
        obj['carrierName'] = ApiClient.convertToType(data['carrierName'], 'String');
      }
      if (data.hasOwnProperty('trailerNo')) {
        obj['trailerNo'] = ApiClient.convertToType(data['trailerNo'], 'String');
      }
      if (data.hasOwnProperty('sealNo')) {
        obj['sealNo'] = ApiClient.convertToType(data['sealNo'], 'String');
      }
      if (data.hasOwnProperty('scac')) {
        obj['scac'] = ApiClient.convertToType(data['scac'], 'String');
      }
      if (data.hasOwnProperty('proNo')) {
        obj['proNo'] = ApiClient.convertToType(data['proNo'], 'String');
      }
      if (data.hasOwnProperty('prepaid')) {
        obj['prepaid'] = ApiClient.convertToType(data['prepaid'], 'Boolean');
      }
      if (data.hasOwnProperty('collect')) {
        obj['collect'] = ApiClient.convertToType(data['collect'], 'Boolean');
      }
      if (data.hasOwnProperty('thirdParty')) {
        obj['thirdParty'] = ApiClient.convertToType(data['thirdParty'], 'Boolean');
      }
      if (data.hasOwnProperty('isThisAMasterBOL')) {
        obj['isThisAMasterBOL'] = ApiClient.convertToType(data['isThisAMasterBOL'], 'Boolean');
      }
      if (data.hasOwnProperty('masterBOLId')) {
        obj['masterBOLId'] = ApiClient.convertToType(data['masterBOLId'], 'Integer');
      }
      if (data.hasOwnProperty('isFreightCountedByShipper')) {
        obj['isFreightCountedByShipper'] = ApiClient.convertToType(data['isFreightCountedByShipper'], 'Boolean');
      }
      if (data.hasOwnProperty('byDriverPallets')) {
        obj['byDriverPallets'] = ApiClient.convertToType(data['byDriverPallets'], 'Boolean');
      }
      if (data.hasOwnProperty('byDriverPieces')) {
        obj['byDriverPieces'] = ApiClient.convertToType(data['byDriverPieces'], 'Boolean');
      }
      if (data.hasOwnProperty('specialInstructions')) {
        obj['specialInstructions'] = ApiClient.convertToType(data['specialInstructions'], 'String');
      }
      if (data.hasOwnProperty('orderInfoLines')) {
        obj['orderInfoLines'] = ApiClient.convertToType(data['orderInfoLines'], [BillOfLadingOrderInfoLine]);
      }
      if (data.hasOwnProperty('carrierInfoLines')) {
        obj['carrierInfoLines'] = ApiClient.convertToType(data['carrierInfoLines'], [BillOfLadingCarrierInfoLine]);
      }
    }
    return obj;
  }


  /**
   * @member {Integer} id
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
   * @member {Integer} lobId
   */
  exports.prototype['lobId'] = undefined;

  /**
   * @member {String} bolNo
   */
  exports.prototype['bolNo'] = undefined;

  /**
   * @member {Date} bolDate
   */
  exports.prototype['bolDate'] = undefined;

  /**
   * @member {String} shipFromName
   */
  exports.prototype['shipFromName'] = undefined;

  /**
   * @member {String} shipFromAddress
   */
  exports.prototype['shipFromAddress'] = undefined;

  /**
   * @member {String} shipFromCity
   */
  exports.prototype['shipFromCity'] = undefined;

  /**
   * @member {String} shipFromState
   */
  exports.prototype['shipFromState'] = undefined;

  /**
   * @member {String} shipFromZip
   */
  exports.prototype['shipFromZip'] = undefined;

  /**
   * @member {String} sid
   */
  exports.prototype['sid'] = undefined;

  /**
   * @member {Boolean} isShipFromFOB
   * @default false
   */
  exports.prototype['isShipFromFOB'] = false;

  /**
   * @member {String} shipToName
   */
  exports.prototype['shipToName'] = undefined;

  /**
   * @member {String} shipToAddress
   */
  exports.prototype['shipToAddress'] = undefined;

  /**
   * @member {String} shipToCity
   */
  exports.prototype['shipToCity'] = undefined;

  /**
   * @member {String} shipToState
   */
  exports.prototype['shipToState'] = undefined;

  /**
   * @member {String} shipToZip
   */
  exports.prototype['shipToZip'] = undefined;

  /**
   * @member {String} shipToLocationNo
   */
  exports.prototype['shipToLocationNo'] = undefined;

  /**
   * @member {String} cid
   */
  exports.prototype['cid'] = undefined;

  /**
   * @member {Boolean} isShipToFOB
   * @default false
   */
  exports.prototype['isShipToFOB'] = false;

  /**
   * @member {String} billToName
   */
  exports.prototype['billToName'] = undefined;

  /**
   * @member {String} billToAddress
   */
  exports.prototype['billToAddress'] = undefined;

  /**
   * @member {String} billToCity
   */
  exports.prototype['billToCity'] = undefined;

  /**
   * @member {String} billToState
   */
  exports.prototype['billToState'] = undefined;

  /**
   * @member {String} billToZip
   */
  exports.prototype['billToZip'] = undefined;

  /**
   * @member {Boolean} isTrailerLoadedByShipper
   * @default false
   */
  exports.prototype['isTrailerLoadedByShipper'] = false;

  /**
   * @member {Boolean} byDriver
   * @default false
   */
  exports.prototype['byDriver'] = false;

  /**
   * @member {Number} codAmount
   */
  exports.prototype['codAmount'] = undefined;

  /**
   * @member {Boolean} feeTermsCollect
   * @default false
   */
  exports.prototype['feeTermsCollect'] = false;

  /**
   * @member {Boolean} feeTermsPrepaid
   * @default false
   */
  exports.prototype['feeTermsPrepaid'] = false;

  /**
   * @member {Boolean} customerCheckAcceptable
   * @default false
   */
  exports.prototype['customerCheckAcceptable'] = false;

  /**
   * @member {String} carrierName
   */
  exports.prototype['carrierName'] = undefined;

  /**
   * @member {String} trailerNo
   */
  exports.prototype['trailerNo'] = undefined;

  /**
   * @member {String} sealNo
   */
  exports.prototype['sealNo'] = undefined;

  /**
   * @member {String} scac
   */
  exports.prototype['scac'] = undefined;

  /**
   * @member {String} proNo
   */
  exports.prototype['proNo'] = undefined;

  /**
   * @member {Boolean} prepaid
   * @default false
   */
  exports.prototype['prepaid'] = false;

  /**
   * @member {Boolean} collect
   * @default false
   */
  exports.prototype['collect'] = false;

  /**
   * @member {Boolean} thirdParty
   * @default false
   */
  exports.prototype['thirdParty'] = false;

  /**
   * @member {Boolean} isThisAMasterBOL
   * @default false
   */
  exports.prototype['isThisAMasterBOL'] = false;

  /**
   * @member {Integer} masterBOLId
   */
  exports.prototype['masterBOLId'] = undefined;

  /**
   * @member {Boolean} isFreightCountedByShipper
   * @default false
   */
  exports.prototype['isFreightCountedByShipper'] = false;

  /**
   * @member {Boolean} byDriverPallets
   * @default false
   */
  exports.prototype['byDriverPallets'] = false;

  /**
   * @member {Boolean} byDriverPieces
   * @default false
   */
  exports.prototype['byDriverPieces'] = false;

  /**
   * @member {String} specialInstructions
   */
  exports.prototype['specialInstructions'] = undefined;

  /**
   * @member {Array.<module:model/BillOfLadingOrderInfoLine>} orderInfoLines
   */
  exports.prototype['orderInfoLines'] = undefined;

  /**
   * @member {Array.<module:model/BillOfLadingCarrierInfoLine>} carrierInfoLines
   */
  exports.prototype['carrierInfoLines'] = undefined;




  return exports;
}));
