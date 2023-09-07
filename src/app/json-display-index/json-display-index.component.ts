import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-json-display-index',
  templateUrl: './json-display-index.component.html',
  styleUrls: ['./json-display-index.component.css']
})

export class JsonDisplayIndexComponent {
  // @Input() jsonData: any;
  formatKey(key: string): string {
    return key.replace(/([a-z])([A-Z])/g, '$1 $2').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }

  isObject(item: any): boolean {
    return typeof item === 'object' && item !== null;
  }
  getObjectKeys(obj: any): string[] {
    return this.isObject(obj) ? Object.keys(obj) : [];
  }
  @Input() jsonDataIndex: any = {
    "generalParameters": {
      "orderTypes": "[\"INBOUND\",\"OUTBOUND\"]",
      "businessUnits": "[\"INBOUND\",\"PAINT\"]",
      "modeTypes": "[\"LTL\",\"TRUCK\",\"INTERMODAL\"]",
      "isCGIDEnabled": "N",
      "performParcelModeUpgrade": "N",
      "notAllowIncludeOthers": "N",
      "useFirstMatchingModeRule": "N",
      "equipmentTypes": "[\"VENTED TRAILER\",\"STD REEFER\",\"STD FLATBED\",\"STD CONTAINER\",\"STD DRY VAN\"]"
    },
    "consolidationRestrictions": {
      "equipmentTypeRules": {
        "rule": "NEVER_CONSOLIDATE",
        "groupedEquipmentTypes": null,
        "resultingEquipmentType": 0,
        "supportedModeTypes": null,
        "requestedEquipmentType": null
      }
    },
    "routingParameters": {
      "INTERMODAL": [
        {
          "MODE_TYPE": "100318",
          "maxOutOfRoute": 200,
          "maxOutOfRouteUom": "MI",
          "maxBetweenPickups": 50,
          "maxBetweenPickupsUom": "MI",
          "maxBetweenDropoffs": 50,
          "maxBetweenDropoffsUom": "MI",
          "loadingTime": 7200000,
          "unloadingTime": 7200000
        }
      ],
      "TRUCK": [
        {
          "MODE_TYPE": "100315",
          "maxOutOfRoute": 200,
          "maxOutOfRouteUom": "MI",
          "maxBetweenPickups": 50,
          "maxBetweenPickupsUom": "MI",
          "maxBetweenDropoffs": 0,
          "maxBetweenDropoffsUom": "MI",
          "loadingTime": 7200000,
          "unloadingTime": 0
        }
      ]
    },
    "stopConstraints": {
      "INTERMODAL": [
        {
          "MODE_TYPE": "100318",
          "maxPickupStops": 0,
          "maxDropoffStops": 0,
          "maxStops": 2,
          "stopoffCharges": "[]",
          "multiStopMinSavingsPercent": null,
          "multiStopMinMeasureLimit": null
        }
      ],
      "TRUCK": [
        {
          "MODE_TYPE": "100315",
          "maxPickupStops": 0,
          "maxDropoffStops": 0,
          "maxStops": 2,
          "stopoffCharges": "[]",
          "multiStopMinSavingsPercent": null,
          "multiStopMinMeasureLimit": null
        }
      ]
    },
    "crossDockParameters": {
      "inboundModes": "[\"LTL\",\"TRUCK\",\"INTERMODAL\"]",
      "maxPct": 100,
      "unsupportedBusinessUnits": "[]",
      "minPct": 0,
      "validationRules": "{\"hazmatCheck\":false}",
      "outboundModes": "[\"TRUCK\"]",
      "handlingCost": 0,
      "crossDockDefinitionLevel": "[\"Origin Based\",\"Origin/Destination Based\"]",
      "unsupportedOrderTypes": "[]",
      "handlingCostUom": "USD",
      "unsupportedEquipmentTypes": "[]"
    },
    "ratingRules": {
      "LTL": [
        {
          "MODE_TYPE": "112692",
          "ratingTypes": [
            "Low Cost Carrier",
            "LTL Rating Engine"
          ],
          "topNSrgCarrier": 0,
          "preferredModeProviders": null,
          "parcelServiceLevel": null,
          "serviceLevels": [

          ]
        }
      ],
      "TRUCK": [
        {
          "MODE_TYPE": "100315",
          "ratingTypes": [
            "SRG Carrier",
            "Benchmark rates"
          ],
          "topNSrgCarrier": 0,
          "preferredModeProviders": null,
          "parcelServiceLevel": null,
          "serviceLevels": [

          ]
        }
      ],
      "INTERMODAL": [
        {
          "MODE_TYPE": "100318",
          "ratingTypes": [
            "SRG Carrier",
            "Benchmark rates"
          ],
          "topNSrgCarrier": 0,
          "preferredModeProviders": null,
          "parcelServiceLevel": null,
          "serviceLevels": [

          ]
        }
      ]
    },
    "transitRules": {
      "INTERMODAL": [
        {
          "MODE_TYPE": "100318",
          "distancePerDay": 450,
          "distancePerDayUom": "MI",
          "distancePerHour": 45,
          "distancePerHourUom": "MI",
          "includeSourceDate": "false",
          "includeTargetDate": "false",
          "includeWeekend": "true",
          "includeHolidays": "true",
          "adjustmentTime": null,
          "calcMethod": "Carrier Transit with Calculation"
        }
      ],
      "LTL": [
        {
          "MODE_TYPE": "112692",
          "distancePerDay": 350,
          "distancePerDayUom": "MI",
          "distancePerHour": 35,
          "distancePerHourUom": "MI",
          "includeSourceDate": "false",
          "includeTargetDate": "true",
          "includeWeekend": "false",
          "includeHolidays": "false",
          "adjustmentTime": null,
          "calcMethod": "Carrier Transit with Calculation"
        }
      ],
      "TRUCK": [
        {
          "MODE_TYPE": "100315",
          "distancePerDay": 500,
          "distancePerDayUom": "MI",
          "distancePerHour": 50,
          "distancePerHourUom": "MI",
          "includeSourceDate": "true",
          "includeTargetDate": "true",
          "includeWeekend": "true",
          "includeHolidays": "true",
          "adjustmentTime": null,
          "calcMethod": "Carrier Transit with Calculation"
        }
      ]
    },
    "productRestrictionRule": {
      "rule": "WITHNON",
      "allowableModes": "[\"LTL\",\"TRUCK\",\"INTERMODAL\"]",
      "includeUNClassRules": "N",
      "unClassRules": null
    },
    "filterConstraints": {

    },
    "appointmentContraintRule": {
      "appointmentRulePriority1": {
        "type": "REGULAR",
        "currentDateCheck": false,
        "honorShipmentDateTimeCheck": false,
        "honorPickup": false,
        "honorDelivery": false,
        "opApptMinMaxUseBusinessDays": false,
        "id": 6203,
        "applyRegularAppointmentRule": false,
        "earliestPickupDateRule": {
          "dateSetTo": "Earliest Pickup Date",
          "padding": 0
        },
        "latestPickupDateRule": {
          "dateSetTo": "Latest Pickup Date",
          "padding": 0
        },
        "earliestDeliveryDateRule": {
          "dateSetTo": "Earliest Delivery Date",
          "padding": 0
        },
        "latestDeliveryDateRule": {
          "dateSetTo": "Latest Delivery Date",
          "padding": 0
        },
        "criteria": {
          "orderTypes": [

          ],
          "businessUnits": [
            "PAINT"
          ],
          "modeTypes": [
            "LTL",
            "TRUCK",
            "INTERMODAL"
          ],
          "consigneeIds": [

          ]
        },
        "calculateDirection": "Backward",
        "version": "V2"
      },
      "appointmentRulePriority2": {
        "type": "REGULAR",
        "currentDateCheck": false,
        "honorShipmentDateTimeCheck": false,
        "honorPickup": false,
        "honorDelivery": false,
        "opApptMinMaxUseBusinessDays": true,
        "id": 351,
        "applyRegularAppointmentRule": false,
        "earliestPickupDateRule": {
          "dateSetTo": "Earliest Pickup Date",
          "padding": 0
        },
        "latestPickupDateRule": {
          "dateSetTo": "Latest Pickup Date",
          "padding": 3
        },
        "earliestDeliveryDateRule": {
          "dateSetTo": "Unrestricted",
          "padding": 0
        },
        "latestDeliveryDateRule": {
          "dateSetTo": "Unrestricted",
          "padding": 0
        },
        "criteria": {
          "orderTypes": [
            "INBOUND"
          ],
          "businessUnits": [
            "INBOUND"
          ],
          "modeTypes": [
            "LTL",
            "TRUCK",
            "INTERMODAL"
          ],
          "consigneeIds": [

          ]
        },
        "calculateDirection": "Forward",
        "version": "V2"
      },
      "appointmentRulePriority3": {
        "type": "CROSS_DOCK",
        "inbound": {
          "allowPickupOnCurrentDay": false,
          "calculationDirection": "Forward"
        },
        "outbound": {
          "crossdockLeadProcessingTime": 2,
          "allowPickupOnCurrentDay": false,
          "calculationDirection": "Forward"
        },
        "id": 4387,
        "applyRegularAppointmentRule": false,
        "criteria": {
          "orderTypes": [
            "INBOUND"
          ],
          "businessUnits": [
            "INBOUND"
          ],
          "modeTypes": [
            "LTL",
            "TRUCK",
            "INTERMODAL"
          ],
          "consigneeIds": [

          ]
        }
      }
    },
    "serviceGroupType": {
      "serviceGrpId": 1
    },
    "accountUnits": {
      "unitType": "IMPERIAL",
      "baseCurrencyType": "USD"
    },
    "crossdockAlgorithmType": "DYNAMIC_XD"
  };

}