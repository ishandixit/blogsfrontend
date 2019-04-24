export default({
    "home": {
        "name": "Dashboard",
        "description": "",
        "path": "/",
        "leftnav": true,
        "leftnavlog": true,
        "leftnavitems": true,
        "leftnavfooter": true,
        "mainnavation": true,
        "subnavigation": true,
        "mainbody": true,
        "mainfooter": true,
        "mainnavigation": [
            {
                name: "Dashboard",
                active: true,
                icon: "fa fa-pie-chart",
                "subnavigation": [
                    {
                        name: "Frequent Used",
                        "description": "",
                        "path": "/",
                        active: true,
                        dataset: [
                            
                        ],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: false,
                            headerpicposition: 'top'
                        },
                        module: "MostUsed"
                    },
                    {
                        name: "Inventory",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: false,
                            headerpicposition: 'top'
                        },
                        module: "InventoryDashboard"
                    }
                ]
            }, {
                name: "Inwarding",
                active: false,
                icon: "fa fa-toggle-down",
                "subnavigation": [
                    {
                        name: "All GRN",
                        "description": "",
                        "path": "/",
                        active: true,
                        dataset: [
                            {
                                datacolumns:[
                                    {
                                        columnClass:'col-sm-12',
                                        columnStyle:{'position':'relative'},
                                        columnDataItem : [
                                            {
                                                elementName : 'table',
                                                headers:[
                                                    'SR. NO',
                                                    'GRN NO',
                                                    'GRN DATE',
                                                    'ORGANISATION',
                                                    'SUPPLIER',
                                                    'TRANSPORTER NAME',
                                                    'IN PROC./TOTAL CARTON',
                                                    'SCANNED/EXPECTED PIECES',
                                                    'ACTION'
                                                ],
                                                dataFromApi:"/api/grn",
                                                apiParams:{actionType: 'GETALL'},
                                                apiCacheState:'latest',
                                                data:[],
                                                output:[
                                                    {value:'key',type:'key'},
                                                    {value:'grnNumber',type:'value'},
                                                    {value:'createdAt',type:'date'},
                                                    {value:'organisationId.name',type:'value'},
                                                    {value:'supplierId.name',type:'value'},
                                                    {value:'transporterId.name',type:'value'},
                                                    {value:'cartonsReceived',type:'value'},
                                                    {value:'piecesReceived',type:'value'},
                                                    {value:'update',type:'button'}
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/banners/unloading.jpg",
                            showheaderpic: true,
                            headerpicposition: 'bottom'
                        },
                        module: "AllGRN"
                    }, {
                        name: "Create Good Receipt Note",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "GoodReceiptNote"
                    }, {
                        name: "Inscan SKU",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "InscanSKU"
                    }
                ]
            }, {
                name: "Tracking",
                active: false,
                icon: "fa fa-barcode",
                "subnavigation": [
                    {
                        name: "Track Order",
                        "description": "",
                        "path": "/",
                        active: true,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "TrackOrder"
                    }, {
                        name: "Track GRN",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "TrackGRN"
                    }, {
                        name: "Track SKU",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "TrackSKU"
                    }, {
                        name: "Location Tracking",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "LocationTracking"
                    }, {
                        name: "Carton Tracking",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "CartonTracking"
                    }
                ]
            }, {
                name: "Utility",
                icon: "fa fa-link",
                "subnavigation": [
                    {
                        name: "Pick Face Mapping",
                        "description": "",
                        "path": "/",
                        active: true,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "PickFaceMapping"
                    }, {
                        name: "Re-map PickLocation",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "ReMapPickLocation"
                    }, {
                        name: "Merge Carton Box",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "MergeCartonBox"
                    }, {
                        name: "Damage SKU",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "DamageSKU"
                    }, {
                        name: "Un-Dirty SKU",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "UnDirtySKU"
                    }, {
                        name: "Adjust Inventory",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "AdjustInventory"
                    }, {
                        name: "Reset PickLocation QTY",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "ResetPickLocationQTY"
                    }, {
                        name: "Re-map PickLocation",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "RemapPickLocation"
                    }, {
                        name: "Add Pcs in PF",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "AddPcsinPF"
                    }, {
                        name: "API Push Manually",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "APIPushManually"
                    }, {
                        name: "Cancel Order",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "CancelOrder"
                    }, {
                        name: "Reset Cartoon",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "ResetCarton"
                    }, {
                        name: "Reopen Cartoon",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "ReopenCarton"
                    }, {
                        name: "Reprint Sheets",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "ReprintSheets"
                    }, {
                        name: "SKU Live Date Upload",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "SKULiveDateUpload"
                    }, {
                        name: "Dispatch Carton Reopen",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "DispatchCartonReopen"
                    }, {
                        name: "Cartoon Close Manually",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "CartonCloseManually"
                    }, {
                        name: "Ready For Dispatch",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "ReadyForDispatch"
                    }
                ]
            }, {
                name: "Order Management",
                active: false,
                icon: "fa fa-credit-card-alt",
                "subnavigation": [
                    {
                        name: "Create Purchase Order",
                        "description": "",
                        "path": "/",
                        active: true,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "CreatePurchaseOrder"
                    }, {
                        name: "Order Upload",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "OrderUpload"
                    }, {
                        name: "Confirm Purchase Order",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "ConfirmPurchaseOrder"
                    }

                ]
            }, {
                name: "Put Away",
                active: false,
                icon: "fa fa-tasks",
                "subnavigation": [
                    {
                        name: "Pending PutAway",
                        "description": "",
                        "path": "/",
                        active: true,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "PendingPutAway"
                    }, {
                        name: "Update PutAway",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "UpdatePutAway"
                    }
                ]
            }, {
                name: "Inventory",
                active: false,
                icon: "fa fa-cubes",
                "subnavigation": [
                    {
                        name: "Replishment Dashboard",
                        "description": "",
                        "path": "/",
                        active: true,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "ReplishmentDashboard",
                        thirdlevelnavigation: [
                            {
                                name: "Order Replenishment",
                                "description": "",
                                "path": "/",
                                active: false,
                                dataset: [],
                                style: {
                                    headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                                    showheaderpic: true,
                                    headerpicposition: 'top'
                                },
                                module: "OrderReplenishment"
                            }, {
                                name: "Replenishment Printout Pendency",
                                "description": "",
                                "path": "/",
                                active: false,
                                dataset: [],
                                style: {
                                    headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                                    showheaderpic: true,
                                    headerpicposition: 'top'
                                },
                                module: "ReplenishmentPrintoutPendency"
                            }, {
                                name: "Update Replenishment",
                                "description": "",
                                "path": "/",
                                active: false,
                                dataset: [],
                                style: {
                                    headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                                    showheaderpic: true,
                                    headerpicposition: 'top'
                                },
                                module: "UpdateReplenishment"
                            }, {
                                name: "Confirmed Orders",
                                "description": "",
                                "path": "/",
                                active: false,
                                dataset: [],
                                style: {
                                    headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                                    showheaderpic: true,
                                    headerpicposition: 'top'
                                },
                                module: "ConfirmedOrders"
                            }
                        ]
                    }, {
                        name: "Transfer",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "Transfer",
                        thirdlevelnavigation: [
                            {
                                name: "Box transfer",
                                "description": "",
                                "path": "/",
                                active: false,
                                dataset: [],
                                style: {
                                    headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                                    showheaderpic: true,
                                    headerpicposition: 'top'
                                },
                                module: "BoxTransfer"
                            }
                        ]
                    }, {
                        name: "Bulk Transfer",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "BulkTransfer",
                        thirdlevelnavigation: [
                            {
                                name: "Bulk To Bulk Transfer",
                                "description": "",
                                "path": "/",
                                active: false,
                                dataset: [],
                                style: {
                                    headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                                    showheaderpic: true,
                                    headerpicposition: 'top'
                                },
                                module: "BulkToBulkTransfer"
                            }
                        ]
                    }
                ]
            }, {
                name: "Dispatch",
                active: false,
                icon: "fa fa-truck",
                "subnavigation": [
                    {
                        name: "Picking",
                        "description": "",
                        "path": "/",
                        active: true,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "Picking"
                    }, {
                        name: "Packing",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "Packing"
                    }, {
                        name: "Ready For Dispatch",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "ReadyForDispatch"
                    }
                ]
            }, {
                name: "Masters",

                active: false,
                icon: "fa fa-server",
                "subnavigation": [
                    {
                        name: "SKU",
                        "description": "",
                        "path": "/",
                        active: true,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "SKU"
                    }, {
                        name: "Store",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "Store"
                    }
                ]
            }, {
                name: "Customer",
                active: false,
                icon: "fa fa-vcard",
                "subnavigation": [
                    {
                        name: "All",
                        "description": "",
                        "path": "/",
                        active: true,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "Customer"
                    }
                ]
            }, {
                name: "Reports",
                active: false,
                icon: "fa fa-line-chart",
                "subnavigation": [
                    {
                        name: "GRN Report",
                        "description": "",
                        "path": "/",
                        active: true,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "GRNReport"
                    }, {
                        name: "GRN Report-Details",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "GRNReportDetails"
                    }, {
                        name: "GRN Report-carton Level",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "GRNReportCartonLevel"
                    }, {
                        name: "Inventory SKU Wise",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "InventorySKUWise"
                    }, {
                        name: "Inventory Location Wise",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "InventoryLocationWise"
                    }, {
                        name: "Inventory Available",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "InventoryAvailable"
                    }, {
                        name: "Inventory Physical",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "InventoryPhysical"
                    }, {
                        name: "PO Report-Summary",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "POReportSummary"
                    }, {
                        name: "PO Wise Report-Details",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "POWiseReportDetails"
                    }, {
                        name: "SKU Ledger Report",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "SKULedgerReport"
                    }, {
                        name: "SKU Ledger Report-Summary",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "SKULedgerReportSummary"
                    }, {
                        name: "Packing Performance- O2P",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "PackingPerformanceO2P"
                    }, {
                        name: "Customer Master Data",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "CustomerMasterData"
                    }, {
                        name: "Pick Location Wise Report",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "PickLocationWiseReport"
                    }, {
                        name: "Reset Carton Report",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "ResetCartonReport"
                    }, {
                        name: "multiple order detail",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "multipleorderdetail"
                    }, {
                        name: "Sku in grn",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "SkuInGrn"
                    }, {
                        name: "Sku Ageing Report",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "SkuAgeingReport"
                    }, {
                        name: "order yet to confirm",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "OrderYetToConfirm"
                    }, {
                        name: "order modification",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "OrderModification"
                    }, {
                        name: "Cartoon close Manually",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "CartoonCloseManually"
                    }, {
                        name: "GRN Datewise Report",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "GRNDatewiseReport"
                    }, {
                        name: "Inventory Short Report",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "InventoryShortReport"
                    }, {
                        name: "Box Transfer Short Report",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "BoxTransferShortReport"
                    }, {
                        name: "Box Transfer Excess",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "BoxTransferExcess"
                    }, {
                        name: "Billing Report",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "BillingReport"
                    }, {
                        name: "Replenishment",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "Replenishment"
                    }, {
                        name: "Picker Performance Report",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "PickerPerformanceReport"
                    }, {
                        name: "Packer Performance Report",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "PackerPerformanceReport"
                    }, {
                        name: "Cycle CountPick & pack",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "CycleCountPick&Pack"
                    }, {
                        name: "Stock Take",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "StockTake"
                    }, {
                        name: "Order Vs Packing",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "OrderVsPacking"
                    }, {
                        name: "Stock Return",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "StockReturn"
                    }, {
                        name: "Inventory Not Found",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "InventoryNotFound"
                    }, {
                        name: "Sample Dispatch",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "SampleDispatch"
                    }, {
                        name: "Arrival to GRN Time Report",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "ArrivalToGRNTimeReport"
                    }, {
                        name: "GRN to Putaway Time",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "GRNToPutawayTime"
                    }, {
                        name: "Order to Picking Time",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "OrderToPickingTime"
                    }, {
                        name: "Picking to Packing Time",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "PickingToPackingTime"
                    }, {
                        name: "Packing to Manifest Time",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "PackingToManifestTime"
                    }, {
                        name: "Manifest to Handler Time",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "ManifestToHandlerTime"
                    }, {
                        name: "Handler to Delivery Time",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "HandlerToDeliveryTime"
                    }, {
                        name: "GRN Productivity",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "GRNProductivity"
                    }, {
                        name: "Putaway Productivity",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "PutawayProductivity"
                    }, {
                        name: "Picking productivity",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "PickingProductivity"
                    }, {
                        name: "GRN Details Excel Download",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "GRNDetailsExcelDownload"
                    }, {
                        name: "GRN Number",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "GRNNumber"
                    }, {
                        name: "GRN NUMBER",
                        "description": "",
                        "path": "/",
                        active: false,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "GRNNUMBER"
                    }
                ]
            }, {
                name: "Employees",
                active: false,
                icon: "fa fa-male",
                "subnavigation": [
                    {
                        name: "All",
                        "description": "",
                        "path": "/",
                        active: true,
                        dataset: [],
                        style: {
                            headerpicurl: "http://purpledrone.oss-ap-south-1.aliyuncs.com/assets/banner.jpg",
                            showheaderpic: true,
                            headerpicposition: 'top'
                        },
                        module: "Employees"
                    }
                ]
            }
        ]
    }
});