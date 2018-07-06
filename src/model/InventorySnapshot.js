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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.InventorySnapshot = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InventorySnapshot model module.
   * @module model/InventorySnapshot
   * @version beta
   */

  /**
   * Constructs a new <code>InventorySnapshot</code>.
   * @alias module:model/InventorySnapshot
   * @class
   * @param lobId {Number} 
   */
  var exports = function(lobId) {
    var _this = this;





    _this['lobId'] = lobId;




















































































  };

  /**
   * Constructs a <code>InventorySnapshot</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InventorySnapshot} obj Optional instance to populate.
   * @return {module:model/InventorySnapshot} The populated <code>InventorySnapshot</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('warehouseLocationId')) {
        obj['warehouseLocationId'] = ApiClient.convertToType(data['warehouseLocationId'], 'Number');
      }
      if (data.hasOwnProperty('itemId')) {
        obj['itemId'] = ApiClient.convertToType(data['itemId'], 'Number');
      }
      if (data.hasOwnProperty('itemDescription')) {
        obj['itemDescription'] = ApiClient.convertToType(data['itemDescription'], 'String');
      }
      if (data.hasOwnProperty('lobId')) {
        obj['lobId'] = ApiClient.convertToType(data['lobId'], 'Number');
      }
      if (data.hasOwnProperty('snapshotDate')) {
        obj['snapshotDate'] = ApiClient.convertToType(data['snapshotDate'], 'Date');
      }
      if (data.hasOwnProperty('isMixedReceipts')) {
        obj['isMixedReceipts'] = ApiClient.convertToType(data['isMixedReceipts'], 'Boolean');
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
      }
      if (data.hasOwnProperty('address')) {
        obj['address'] = ApiClient.convertToType(data['address'], 'String');
      }
      if (data.hasOwnProperty('estimatedInnerPacks')) {
        obj['estimatedInnerPacks'] = ApiClient.convertToType(data['estimatedInnerPacks'], 'Number');
      }
      if (data.hasOwnProperty('estimatedCases')) {
        obj['estimatedCases'] = ApiClient.convertToType(data['estimatedCases'], 'Number');
      }
      if (data.hasOwnProperty('estimatedPallets')) {
        obj['estimatedPallets'] = ApiClient.convertToType(data['estimatedPallets'], 'Number');
      }
      if (data.hasOwnProperty('inventoryValue')) {
        obj['inventoryValue'] = ApiClient.convertToType(data['inventoryValue'], 'Number');
      }
      if (data.hasOwnProperty('inventoryAgeDays')) {
        obj['inventoryAgeDays'] = ApiClient.convertToType(data['inventoryAgeDays'], 'Number');
      }
      if (data.hasOwnProperty('warehouseId')) {
        obj['warehouseId'] = ApiClient.convertToType(data['warehouseId'], 'Number');
      }
      if (data.hasOwnProperty('warehouseName')) {
        obj['warehouseName'] = ApiClient.convertToType(data['warehouseName'], 'String');
      }
      if (data.hasOwnProperty('warehouseZoneId')) {
        obj['warehouseZoneId'] = ApiClient.convertToType(data['warehouseZoneId'], 'Number');
      }
      if (data.hasOwnProperty('warehouseZoneName')) {
        obj['warehouseZoneName'] = ApiClient.convertToType(data['warehouseZoneName'], 'String');
      }
      if (data.hasOwnProperty('warehouseZoneAddress')) {
        obj['warehouseZoneAddress'] = ApiClient.convertToType(data['warehouseZoneAddress'], 'String');
      }
      if (data.hasOwnProperty('warehouseBuildingId')) {
        obj['warehouseBuildingId'] = ApiClient.convertToType(data['warehouseBuildingId'], 'Number');
      }
      if (data.hasOwnProperty('warehouseBuildingName')) {
        obj['warehouseBuildingName'] = ApiClient.convertToType(data['warehouseBuildingName'], 'String');
      }
      if (data.hasOwnProperty('warehouseAisleId')) {
        obj['warehouseAisleId'] = ApiClient.convertToType(data['warehouseAisleId'], 'Number');
      }
      if (data.hasOwnProperty('warehouseAisleAddress')) {
        obj['warehouseAisleAddress'] = ApiClient.convertToType(data['warehouseAisleAddress'], 'String');
      }
      if (data.hasOwnProperty('warehouseLocationOriginId')) {
        obj['warehouseLocationOriginId'] = ApiClient.convertToType(data['warehouseLocationOriginId'], 'Number');
      }
      if (data.hasOwnProperty('warehouseLocationOriginName')) {
        obj['warehouseLocationOriginName'] = ApiClient.convertToType(data['warehouseLocationOriginName'], 'String');
      }
      if (data.hasOwnProperty('warehouseLocationBillingTypeId')) {
        obj['warehouseLocationBillingTypeId'] = ApiClient.convertToType(data['warehouseLocationBillingTypeId'], 'Number');
      }
      if (data.hasOwnProperty('warehouseLocationBillingTypeName')) {
        obj['warehouseLocationBillingTypeName'] = ApiClient.convertToType(data['warehouseLocationBillingTypeName'], 'String');
      }
      if (data.hasOwnProperty('warehouseLocationBehaviorTypeId')) {
        obj['warehouseLocationBehaviorTypeId'] = ApiClient.convertToType(data['warehouseLocationBehaviorTypeId'], 'Number');
      }
      if (data.hasOwnProperty('warehouseLocationBehaviorTypeName')) {
        obj['warehouseLocationBehaviorTypeName'] = ApiClient.convertToType(data['warehouseLocationBehaviorTypeName'], 'String');
      }
      if (data.hasOwnProperty('warehouseLocationFootprintId')) {
        obj['warehouseLocationFootprintId'] = ApiClient.convertToType(data['warehouseLocationFootprintId'], 'Number');
      }
      if (data.hasOwnProperty('warehouseLocationFootprintName')) {
        obj['warehouseLocationFootprintName'] = ApiClient.convertToType(data['warehouseLocationFootprintName'], 'String');
      }
      if (data.hasOwnProperty('warehouseLocationFootprintWidth')) {
        obj['warehouseLocationFootprintWidth'] = ApiClient.convertToType(data['warehouseLocationFootprintWidth'], 'Number');
      }
      if (data.hasOwnProperty('warehouseLocationFootprintHeight')) {
        obj['warehouseLocationFootprintHeight'] = ApiClient.convertToType(data['warehouseLocationFootprintHeight'], 'Number');
      }
      if (data.hasOwnProperty('warehouseLocationFootprintDepth')) {
        obj['warehouseLocationFootprintDepth'] = ApiClient.convertToType(data['warehouseLocationFootprintDepth'], 'Number');
      }
      if (data.hasOwnProperty('warehouseLocationLevel')) {
        obj['warehouseLocationLevel'] = ApiClient.convertToType(data['warehouseLocationLevel'], 'Number');
      }
      if (data.hasOwnProperty('warehouseLocationBay')) {
        obj['warehouseLocationBay'] = ApiClient.convertToType(data['warehouseLocationBay'], 'Number');
      }
      if (data.hasOwnProperty('warehouseLocationNumber')) {
        obj['warehouseLocationNumber'] = ApiClient.convertToType(data['warehouseLocationNumber'], 'Number');
      }
      if (data.hasOwnProperty('warehouseLocationOnline')) {
        obj['warehouseLocationOnline'] = ApiClient.convertToType(data['warehouseLocationOnline'], 'Boolean');
      }
      if (data.hasOwnProperty('warehouseLocationPriorityCode')) {
        obj['warehouseLocationPriorityCode'] = ApiClient.convertToType(data['warehouseLocationPriorityCode'], 'Number');
      }
      if (data.hasOwnProperty('warehouseLocationAllowItemMixing')) {
        obj['warehouseLocationAllowItemMixing'] = ApiClient.convertToType(data['warehouseLocationAllowItemMixing'], 'Boolean');
      }
      if (data.hasOwnProperty('warehouseLocationCost')) {
        obj['warehouseLocationCost'] = ApiClient.convertToType(data['warehouseLocationCost'], 'Number');
      }
      if (data.hasOwnProperty('sku')) {
        obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
      }
      if (data.hasOwnProperty('itemVendorSku')) {
        obj['itemVendorSku'] = ApiClient.convertToType(data['itemVendorSku'], 'String');
      }
      if (data.hasOwnProperty('itemUpc')) {
        obj['itemUpc'] = ApiClient.convertToType(data['itemUpc'], 'String');
      }
      if (data.hasOwnProperty('itemMajorGroup')) {
        obj['itemMajorGroup'] = ApiClient.convertToType(data['itemMajorGroup'], 'Number');
      }
      if (data.hasOwnProperty('itemMajorGroupName')) {
        obj['itemMajorGroupName'] = ApiClient.convertToType(data['itemMajorGroupName'], 'String');
      }
      if (data.hasOwnProperty('itemSubGroup')) {
        obj['itemSubGroup'] = ApiClient.convertToType(data['itemSubGroup'], 'Number');
      }
      if (data.hasOwnProperty('itemSubGroupName')) {
        obj['itemSubGroupName'] = ApiClient.convertToType(data['itemSubGroupName'], 'String');
      }
      if (data.hasOwnProperty('itemProductCode')) {
        obj['itemProductCode'] = ApiClient.convertToType(data['itemProductCode'], 'Number');
      }
      if (data.hasOwnProperty('itemProductCodeName')) {
        obj['itemProductCodeName'] = ApiClient.convertToType(data['itemProductCodeName'], 'String');
      }
      if (data.hasOwnProperty('itemAccountCode')) {
        obj['itemAccountCode'] = ApiClient.convertToType(data['itemAccountCode'], 'String');
      }
      if (data.hasOwnProperty('itemAccountCodeName')) {
        obj['itemAccountCodeName'] = ApiClient.convertToType(data['itemAccountCodeName'], 'String');
      }
      if (data.hasOwnProperty('itemSummaryCode')) {
        obj['itemSummaryCode'] = ApiClient.convertToType(data['itemSummaryCode'], 'Number');
      }
      if (data.hasOwnProperty('itemSummaryCodeName')) {
        obj['itemSummaryCodeName'] = ApiClient.convertToType(data['itemSummaryCodeName'], 'String');
      }
      if (data.hasOwnProperty('itemSector')) {
        obj['itemSector'] = ApiClient.convertToType(data['itemSector'], 'String');
      }
      if (data.hasOwnProperty('poNo')) {
        obj['poNo'] = ApiClient.convertToType(data['poNo'], 'String');
      }
      if (data.hasOwnProperty('receiptDistributionDate')) {
        obj['receiptDistributionDate'] = ApiClient.convertToType(data['receiptDistributionDate'], 'Date');
      }
      if (data.hasOwnProperty('receiptUnitsPerWrap')) {
        obj['receiptUnitsPerWrap'] = ApiClient.convertToType(data['receiptUnitsPerWrap'], 'Number');
      }
      if (data.hasOwnProperty('receiptQuantityPerInnerPack')) {
        obj['receiptQuantityPerInnerPack'] = ApiClient.convertToType(data['receiptQuantityPerInnerPack'], 'Number');
      }
      if (data.hasOwnProperty('receiptQuantityPerCase')) {
        obj['receiptQuantityPerCase'] = ApiClient.convertToType(data['receiptQuantityPerCase'], 'Number');
      }
      if (data.hasOwnProperty('receiptQuantityPerPallet')) {
        obj['receiptQuantityPerPallet'] = ApiClient.convertToType(data['receiptQuantityPerPallet'], 'Number');
      }
      if (data.hasOwnProperty('receiptRevisionDate')) {
        obj['receiptRevisionDate'] = ApiClient.convertToType(data['receiptRevisionDate'], 'String');
      }
      if (data.hasOwnProperty('receiptProductionLot')) {
        obj['receiptProductionLot'] = ApiClient.convertToType(data['receiptProductionLot'], 'String');
      }
      if (data.hasOwnProperty('receiptReceiveDate')) {
        obj['receiptReceiveDate'] = ApiClient.convertToType(data['receiptReceiveDate'], 'Date');
      }
      if (data.hasOwnProperty('receiptStatus')) {
        obj['receiptStatus'] = ApiClient.convertToType(data['receiptStatus'], 'String');
      }
      if (data.hasOwnProperty('receiptStatusName')) {
        obj['receiptStatusName'] = ApiClient.convertToType(data['receiptStatusName'], 'String');
      }
      if (data.hasOwnProperty('receiptUnitCode')) {
        obj['receiptUnitCode'] = ApiClient.convertToType(data['receiptUnitCode'], 'Number');
      }
      if (data.hasOwnProperty('receiptUnitCodeText')) {
        obj['receiptUnitCodeText'] = ApiClient.convertToType(data['receiptUnitCodeText'], 'String');
      }
      if (data.hasOwnProperty('receiptWrapCode')) {
        obj['receiptWrapCode'] = ApiClient.convertToType(data['receiptWrapCode'], 'Number');
      }
      if (data.hasOwnProperty('receiptWrapCodeText')) {
        obj['receiptWrapCodeText'] = ApiClient.convertToType(data['receiptWrapCodeText'], 'String');
      }
      if (data.hasOwnProperty('receiptCaseWeight')) {
        obj['receiptCaseWeight'] = ApiClient.convertToType(data['receiptCaseWeight'], 'Number');
      }
      if (data.hasOwnProperty('receiptProductIdTag')) {
        obj['receiptProductIdTag'] = ApiClient.convertToType(data['receiptProductIdTag'], 'String');
      }
      if (data.hasOwnProperty('alcoholType')) {
        obj['alcoholType'] = ApiClient.convertToType(data['alcoholType'], 'String');
      }
      if (data.hasOwnProperty('alcoholTypeName')) {
        obj['alcoholTypeName'] = ApiClient.convertToType(data['alcoholTypeName'], 'String');
      }
      if (data.hasOwnProperty('alcoholContent')) {
        obj['alcoholContent'] = ApiClient.convertToType(data['alcoholContent'], 'Number');
      }
      if (data.hasOwnProperty('alcoholContainer')) {
        obj['alcoholContainer'] = ApiClient.convertToType(data['alcoholContainer'], 'String');
      }
      if (data.hasOwnProperty('alcoholContainerName')) {
        obj['alcoholContainerName'] = ApiClient.convertToType(data['alcoholContainerName'], 'String');
      }
      if (data.hasOwnProperty('alcoholContainerVolume')) {
        obj['alcoholContainerVolume'] = ApiClient.convertToType(data['alcoholContainerVolume'], 'Number');
      }
      if (data.hasOwnProperty('alcoholVintageYear')) {
        obj['alcoholVintageYear'] = ApiClient.convertToType(data['alcoholVintageYear'], 'String');
      }
      if (data.hasOwnProperty('alcoholCountry')) {
        obj['alcoholCountry'] = ApiClient.convertToType(data['alcoholCountry'], 'String');
      }
      if (data.hasOwnProperty('alcoholCountryName')) {
        obj['alcoholCountryName'] = ApiClient.convertToType(data['alcoholCountryName'], 'String');
      }
      if (data.hasOwnProperty('alcoholState')) {
        obj['alcoholState'] = ApiClient.convertToType(data['alcoholState'], 'String');
      }
      if (data.hasOwnProperty('alcoholRegion')) {
        obj['alcoholRegion'] = ApiClient.convertToType(data['alcoholRegion'], 'String');
      }
      if (data.hasOwnProperty('alcoholBrand')) {
        obj['alcoholBrand'] = ApiClient.convertToType(data['alcoholBrand'], 'String');
      }
      if (data.hasOwnProperty('alcoholUPCCode')) {
        obj['alcoholUPCCode'] = ApiClient.convertToType(data['alcoholUPCCode'], 'String');
      }
      if (data.hasOwnProperty('alcoholNABCACode')) {
        obj['alcoholNABCACode'] = ApiClient.convertToType(data['alcoholNABCACode'], 'String');
      }
      if (data.hasOwnProperty('alcoholUNIMERCCode')) {
        obj['alcoholUNIMERCCode'] = ApiClient.convertToType(data['alcoholUNIMERCCode'], 'String');
      }
      if (data.hasOwnProperty('alcoholSCCCode')) {
        obj['alcoholSCCCode'] = ApiClient.convertToType(data['alcoholSCCCode'], 'String');
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
   * @member {Number} warehouseLocationId
   */
  exports.prototype['warehouseLocationId'] = undefined;
  /**
   * @member {Number} itemId
   */
  exports.prototype['itemId'] = undefined;
  /**
   * @member {String} itemDescription
   */
  exports.prototype['itemDescription'] = undefined;
  /**
   * @member {Number} lobId
   */
  exports.prototype['lobId'] = undefined;
  /**
   * @member {Date} snapshotDate
   */
  exports.prototype['snapshotDate'] = undefined;
  /**
   * @member {Boolean} isMixedReceipts
   * @default false
   */
  exports.prototype['isMixedReceipts'] = false;
  /**
   * @member {Number} quantity
   */
  exports.prototype['quantity'] = undefined;
  /**
   * @member {String} address
   */
  exports.prototype['address'] = undefined;
  /**
   * @member {Number} estimatedInnerPacks
   */
  exports.prototype['estimatedInnerPacks'] = undefined;
  /**
   * @member {Number} estimatedCases
   */
  exports.prototype['estimatedCases'] = undefined;
  /**
   * @member {Number} estimatedPallets
   */
  exports.prototype['estimatedPallets'] = undefined;
  /**
   * @member {Number} inventoryValue
   */
  exports.prototype['inventoryValue'] = undefined;
  /**
   * @member {Number} inventoryAgeDays
   */
  exports.prototype['inventoryAgeDays'] = undefined;
  /**
   * @member {Number} warehouseId
   */
  exports.prototype['warehouseId'] = undefined;
  /**
   * @member {String} warehouseName
   */
  exports.prototype['warehouseName'] = undefined;
  /**
   * @member {Number} warehouseZoneId
   */
  exports.prototype['warehouseZoneId'] = undefined;
  /**
   * @member {String} warehouseZoneName
   */
  exports.prototype['warehouseZoneName'] = undefined;
  /**
   * @member {String} warehouseZoneAddress
   */
  exports.prototype['warehouseZoneAddress'] = undefined;
  /**
   * @member {Number} warehouseBuildingId
   */
  exports.prototype['warehouseBuildingId'] = undefined;
  /**
   * @member {String} warehouseBuildingName
   */
  exports.prototype['warehouseBuildingName'] = undefined;
  /**
   * @member {Number} warehouseAisleId
   */
  exports.prototype['warehouseAisleId'] = undefined;
  /**
   * @member {String} warehouseAisleAddress
   */
  exports.prototype['warehouseAisleAddress'] = undefined;
  /**
   * @member {Number} warehouseLocationOriginId
   */
  exports.prototype['warehouseLocationOriginId'] = undefined;
  /**
   * @member {String} warehouseLocationOriginName
   */
  exports.prototype['warehouseLocationOriginName'] = undefined;
  /**
   * @member {Number} warehouseLocationBillingTypeId
   */
  exports.prototype['warehouseLocationBillingTypeId'] = undefined;
  /**
   * @member {String} warehouseLocationBillingTypeName
   */
  exports.prototype['warehouseLocationBillingTypeName'] = undefined;
  /**
   * @member {Number} warehouseLocationBehaviorTypeId
   */
  exports.prototype['warehouseLocationBehaviorTypeId'] = undefined;
  /**
   * @member {String} warehouseLocationBehaviorTypeName
   */
  exports.prototype['warehouseLocationBehaviorTypeName'] = undefined;
  /**
   * @member {Number} warehouseLocationFootprintId
   */
  exports.prototype['warehouseLocationFootprintId'] = undefined;
  /**
   * @member {String} warehouseLocationFootprintName
   */
  exports.prototype['warehouseLocationFootprintName'] = undefined;
  /**
   * @member {Number} warehouseLocationFootprintWidth
   */
  exports.prototype['warehouseLocationFootprintWidth'] = undefined;
  /**
   * @member {Number} warehouseLocationFootprintHeight
   */
  exports.prototype['warehouseLocationFootprintHeight'] = undefined;
  /**
   * @member {Number} warehouseLocationFootprintDepth
   */
  exports.prototype['warehouseLocationFootprintDepth'] = undefined;
  /**
   * @member {Number} warehouseLocationLevel
   */
  exports.prototype['warehouseLocationLevel'] = undefined;
  /**
   * @member {Number} warehouseLocationBay
   */
  exports.prototype['warehouseLocationBay'] = undefined;
  /**
   * @member {Number} warehouseLocationNumber
   */
  exports.prototype['warehouseLocationNumber'] = undefined;
  /**
   * @member {Boolean} warehouseLocationOnline
   * @default false
   */
  exports.prototype['warehouseLocationOnline'] = false;
  /**
   * @member {Number} warehouseLocationPriorityCode
   */
  exports.prototype['warehouseLocationPriorityCode'] = undefined;
  /**
   * @member {Boolean} warehouseLocationAllowItemMixing
   * @default false
   */
  exports.prototype['warehouseLocationAllowItemMixing'] = false;
  /**
   * @member {Number} warehouseLocationCost
   */
  exports.prototype['warehouseLocationCost'] = undefined;
  /**
   * @member {String} sku
   */
  exports.prototype['sku'] = undefined;
  /**
   * @member {String} itemVendorSku
   */
  exports.prototype['itemVendorSku'] = undefined;
  /**
   * @member {String} itemUpc
   */
  exports.prototype['itemUpc'] = undefined;
  /**
   * @member {Number} itemMajorGroup
   */
  exports.prototype['itemMajorGroup'] = undefined;
  /**
   * @member {String} itemMajorGroupName
   */
  exports.prototype['itemMajorGroupName'] = undefined;
  /**
   * @member {Number} itemSubGroup
   */
  exports.prototype['itemSubGroup'] = undefined;
  /**
   * @member {String} itemSubGroupName
   */
  exports.prototype['itemSubGroupName'] = undefined;
  /**
   * @member {Number} itemProductCode
   */
  exports.prototype['itemProductCode'] = undefined;
  /**
   * @member {String} itemProductCodeName
   */
  exports.prototype['itemProductCodeName'] = undefined;
  /**
   * @member {String} itemAccountCode
   */
  exports.prototype['itemAccountCode'] = undefined;
  /**
   * @member {String} itemAccountCodeName
   */
  exports.prototype['itemAccountCodeName'] = undefined;
  /**
   * @member {Number} itemSummaryCode
   */
  exports.prototype['itemSummaryCode'] = undefined;
  /**
   * @member {String} itemSummaryCodeName
   */
  exports.prototype['itemSummaryCodeName'] = undefined;
  /**
   * @member {String} itemSector
   */
  exports.prototype['itemSector'] = undefined;
  /**
   * @member {String} poNo
   */
  exports.prototype['poNo'] = undefined;
  /**
   * @member {Date} receiptDistributionDate
   */
  exports.prototype['receiptDistributionDate'] = undefined;
  /**
   * @member {Number} receiptUnitsPerWrap
   */
  exports.prototype['receiptUnitsPerWrap'] = undefined;
  /**
   * @member {Number} receiptQuantityPerInnerPack
   */
  exports.prototype['receiptQuantityPerInnerPack'] = undefined;
  /**
   * @member {Number} receiptQuantityPerCase
   */
  exports.prototype['receiptQuantityPerCase'] = undefined;
  /**
   * @member {Number} receiptQuantityPerPallet
   */
  exports.prototype['receiptQuantityPerPallet'] = undefined;
  /**
   * @member {String} receiptRevisionDate
   */
  exports.prototype['receiptRevisionDate'] = undefined;
  /**
   * @member {String} receiptProductionLot
   */
  exports.prototype['receiptProductionLot'] = undefined;
  /**
   * @member {Date} receiptReceiveDate
   */
  exports.prototype['receiptReceiveDate'] = undefined;
  /**
   * @member {String} receiptStatus
   */
  exports.prototype['receiptStatus'] = undefined;
  /**
   * @member {String} receiptStatusName
   */
  exports.prototype['receiptStatusName'] = undefined;
  /**
   * @member {Number} receiptUnitCode
   */
  exports.prototype['receiptUnitCode'] = undefined;
  /**
   * @member {String} receiptUnitCodeText
   */
  exports.prototype['receiptUnitCodeText'] = undefined;
  /**
   * @member {Number} receiptWrapCode
   */
  exports.prototype['receiptWrapCode'] = undefined;
  /**
   * @member {String} receiptWrapCodeText
   */
  exports.prototype['receiptWrapCodeText'] = undefined;
  /**
   * @member {Number} receiptCaseWeight
   */
  exports.prototype['receiptCaseWeight'] = undefined;
  /**
   * @member {String} receiptProductIdTag
   */
  exports.prototype['receiptProductIdTag'] = undefined;
  /**
   * @member {String} alcoholType
   */
  exports.prototype['alcoholType'] = undefined;
  /**
   * @member {String} alcoholTypeName
   */
  exports.prototype['alcoholTypeName'] = undefined;
  /**
   * @member {Number} alcoholContent
   */
  exports.prototype['alcoholContent'] = undefined;
  /**
   * @member {String} alcoholContainer
   */
  exports.prototype['alcoholContainer'] = undefined;
  /**
   * @member {String} alcoholContainerName
   */
  exports.prototype['alcoholContainerName'] = undefined;
  /**
   * @member {Number} alcoholContainerVolume
   */
  exports.prototype['alcoholContainerVolume'] = undefined;
  /**
   * @member {String} alcoholVintageYear
   */
  exports.prototype['alcoholVintageYear'] = undefined;
  /**
   * @member {String} alcoholCountry
   */
  exports.prototype['alcoholCountry'] = undefined;
  /**
   * @member {String} alcoholCountryName
   */
  exports.prototype['alcoholCountryName'] = undefined;
  /**
   * @member {String} alcoholState
   */
  exports.prototype['alcoholState'] = undefined;
  /**
   * @member {String} alcoholRegion
   */
  exports.prototype['alcoholRegion'] = undefined;
  /**
   * @member {String} alcoholBrand
   */
  exports.prototype['alcoholBrand'] = undefined;
  /**
   * @member {String} alcoholUPCCode
   */
  exports.prototype['alcoholUPCCode'] = undefined;
  /**
   * @member {String} alcoholNABCACode
   */
  exports.prototype['alcoholNABCACode'] = undefined;
  /**
   * @member {String} alcoholUNIMERCCode
   */
  exports.prototype['alcoholUNIMERCCode'] = undefined;
  /**
   * @member {String} alcoholSCCCode
   */
  exports.prototype['alcoholSCCCode'] = undefined;
  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;



  return exports;
}));


