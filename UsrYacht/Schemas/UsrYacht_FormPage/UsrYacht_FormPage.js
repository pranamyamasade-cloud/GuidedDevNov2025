define("UsrYacht_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTabContainer",
				"values": {
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrYacht"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "f22ad443-a373-4613-93dd-2ad32101c072",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "Button_cii7pgp",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_cii7pgp_caption)#",
					"color": "outline",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "actions-button-icon",
					"menuItems": [],
					"clickMode": "menu"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RunCalcTicketPriceMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(RunCalcTicketPriceMenuItem_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrCalcAverageTicketPriceProcess",
							"processRunType": "ForTheSelectedPage",
							"saveAtProcessStart": true,
							"showNotification": true,
							"recordIdProcessParameterName": "YachtIdParameter"
						}
					},
					"icon": "pen-icon"
				},
				"parentName": "Button_cii7pgp",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RunMaxPriceWebServiceMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(RunMaxPriceWebServiceMenuItem_caption)#",
					"visible": true,
					"clicked": {
						"request": "usr.RunWebServiceRequest"
					},
					"icon": "calculator-icon"
				},
				"parentName": "Button_cii7pgp",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "CalculateAvgPrice",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(CalculateAvgPrice_caption)#",
					"visible": true,
					"clicked": {
						"request": "usr.AvgRunWebServiceRequest"
					},
					"icon": "sum-icon"
				},
				"parentName": "Button_cii7pgp",
				"propertyName": "menuItems",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "PushMeButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(PushMeButton_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "warning-filled-icon",
					"clicked": {
						"request": "usr.PushButtonRequest"
					},
					"clickMode": "default"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RegCode",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrRegCode_qyhwd4z",
					"labelPosition": "auto",
					"control": "$PDS_UsrRegCode_qyhwd4z",
					"multiline": false,
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Price",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPrice_s6b8f31",
					"labelPosition": "auto",
					"control": "$PDS_UsrPrice_s6b8f31"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "TicketPrice",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrTicketPrice_l91oxek",
					"labelPosition": "auto",
					"control": "$PDS_UsrTicketPrice_l91oxek",
					"visible": false,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "DriveType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrDriveType_ov4xr4y",
					"labelPosition": "auto",
					"control": "$PDS_UsrDriveType_ov4xr4y",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Status",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrStatus_xqgnics",
					"labelPosition": "auto",
					"control": "$PDS_UsrStatus_xqgnics",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "PassengersCount",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPassengersCount_dzq2xx8",
					"labelPosition": "auto",
					"control": "$PDS_UsrPassengersCount_dzq2xx8"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Manager",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrManager_ai6aq1g",
					"labelPosition": "auto",
					"control": "$PDS_UsrManager_ai6aq1g",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Length",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrLength_jm7dqt1",
					"labelPosition": "auto",
					"control": "$PDS_UsrLength_jm7dqt1"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "EmailInput_dzibkdw",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.EmailInput",
					"label": "#ResourceString(EmailInput_dzibkdw_label)#",
					"control": "$PDS_UsrManagerEmail_eg3zc08",
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"needHandleSave": false,
					"caption": "#ResourceString(EmailInput_dzibkdw_caption)#",
					"readonly": true,
					"visible": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "CrewCount",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrCrewCount_rtrdx40",
					"labelPosition": "auto",
					"control": "$PDS_UsrCrewCount_rtrdx40"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Comment",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrComment_mjrn52t",
					"labelPosition": "auto",
					"control": "$PDS_UsrComment_mjrn52t",
					"multiline": false
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "Country",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCountry_i11ue98",
					"labelPosition": "auto",
					"control": "$PDS_UsrCountry_i11ue98",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "Input_q24w8g1",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "#ResourceString(Input_q24w8g1_label)#",
					"control": "",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto",
					"visible": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "City",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCity_kbfwneb",
					"labelPosition": "auto",
					"control": "$PDS_UsrCity_kbfwneb",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "Captain",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 6,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCaptain_ay867u1",
					"labelPosition": "auto",
					"control": "$PDS_UsrCaptain_ay867u1",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 11
			},
			{
				"operation": "insert",
				"name": "addRecord_y4lzvnj",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_y4lzvnj_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Captain",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MultiSelectCategory",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 7,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.MultiSelect",
					"label": "#ResourceString(MultiSelectCategory_label)#",
					"recordId": "$Id",
					"recordRelationColumnName": "UsrParentYacht",
					"selectSchemaName": "UsrYachtCategoryStorage",
					"selectColumnName": "UsrCategory",
					"visible": true,
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 12
			},
			{
				"operation": "insert",
				"name": "Button_9z1r9yj",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_9z1r9yj_caption)#",
					"color": "outline",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrYachtAddRentals",
							"processRunType": "ForTheSelectedPage",
							"saveAtProcessStart": true,
							"showNotification": true,
							"recordIdProcessParameterName": "YachtId"
						}
					},
					"clickMode": "default",
					"icon": "open-button-icon"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_gz5jl73",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_gz5jl73_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_8qcfeey",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_gz5jl73",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_m5quo7q",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_8qcfeey",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_pk3215h",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_pk3215h_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrYachtRental",
							"defaultValues": [
								{
									"attributeName": "UsrParentYacht",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_m5quo7q",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_a04sfae",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_a04sfae_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_qxr0tmkDS"
						}
					}
				},
				"parentName": "FlexContainer_m5quo7q",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_leb2oo9",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_leb2oo9_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_m5quo7q",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_8kfkt1d",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_8kfkt1d_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_qxr0tmk"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_leb2oo9",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_z2zjl1w",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_z2zjl1w_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrYachtRental"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_leb2oo9",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_ezali8e",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_ezali8e_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_ezali8e_GridDetail_qxr0tmk",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_qxr0tmk"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_ezali8e_SearchValue",
							"GridDetailSearchFilter_ezali8e_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_m5quo7q",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_7r78osp",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_gz5jl73",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_qxr0tmk",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_qxr0tmk",
					"primaryColumnName": "GridDetail_qxr0tmkDS_Id",
					"columns": [
						{
							"id": "c0b71bbc-0e2b-43a9-540b-d5bba7e774e5",
							"code": "GridDetail_qxr0tmkDS_UsrStartDate",
							"caption": "#ResourceString(GridDetail_qxr0tmkDS_UsrStartDate)#",
							"dataValueType": 8,
							"width": 156
						},
						{
							"id": "ccb7757f-27d4-f868-9a94-94f7044ba262",
							"code": "GridDetail_qxr0tmkDS_UsrEndDate",
							"caption": "#ResourceString(GridDetail_qxr0tmkDS_UsrEndDate)#",
							"dataValueType": 8,
							"width": 148
						},
						{
							"id": "2cdecd8f-32fb-f732-596a-4d0ad2953709",
							"code": "GridDetail_qxr0tmkDS_UsrCustomer",
							"caption": "#ResourceString(GridDetail_qxr0tmkDS_UsrCustomer)#",
							"dataValueType": 10,
							"width": 166
						},
						{
							"id": "cf1f1f7f-471e-259e-b418-2a0ccdbbb3a6",
							"code": "GridDetail_qxr0tmkDS_UsrParentYacht",
							"caption": "#ResourceString(GridDetail_qxr0tmkDS_UsrParentYacht)#",
							"dataValueType": 10,
							"width": 166
						},
						{
							"id": "9842e3a6-18d1-331c-e9ef-c00ba7f9044c",
							"code": "GridDetail_qxr0tmkDS_CreatedOn",
							"caption": "#ResourceString(GridDetail_qxr0tmkDS_CreatedOn)#",
							"dataValueType": 7
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_7r78osp",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrPrice_s6b8f31": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 300,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrDriveType_ov4xr4y": {
						"modelConfig": {
							"path": "PDS.UsrDriveType"
						}
					},
					"PDS_UsrStatus_xqgnics": {
						"modelConfig": {
							"path": "PDS.UsrStatus"
						}
					},
					"PDS_UsrPassengersCount_dzq2xx8": {
						"modelConfig": {
							"path": "PDS.UsrPassengersCount"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 1,
									"message": "#ResourceString(PassengersCountCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrCrewCount_rtrdx40": {
						"modelConfig": {
							"path": "PDS.UsrCrewCount"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 1,
									"message": "#ResourceString(CrewCountCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrManager_ai6aq1g": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrComment_mjrn52t": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						},
						"validators": {
							"required": {
								"type": "crt.Required"
							}
						}
					},
					"PDS_UsrRegCode_qyhwd4z": {
						"modelConfig": {
							"path": "PDS.UsrRegCode"
						}
					},
					"PDS_UsrCountry_i11ue98": {
						"modelConfig": {
							"path": "PDS.UsrCountry"
						}
					},
					"PDS_UsrCity_kbfwneb": {
						"modelConfig": {
							"path": "PDS.UsrCity"
						}
					},
					"PDS_UsrTicketPrice_l91oxek": {
						"modelConfig": {
							"path": "PDS.UsrTicketPrice"
						}
					},
					"PDS_UsrManagerEmail_eg3zc08": {
						"modelConfig": {
							"path": "PDS.UsrManagerEmail_eg3zc08"
						}
					},
					"GridDetail_qxr0tmk": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_qxr0tmkDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_ezali8e_GridDetail_qxr0tmk",
									"loadOnChange": true
								},
								{
									"loadOnChange": true,
									"name": "GridDetail_qxr0tmk_PredefinedFilter"
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "UsrStartDate"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_qxr0tmkDS_UsrStartDate": {
									"modelConfig": {
										"path": "GridDetail_qxr0tmkDS.UsrStartDate"
									}
								},
								"GridDetail_qxr0tmkDS_UsrEndDate": {
									"modelConfig": {
										"path": "GridDetail_qxr0tmkDS.UsrEndDate"
									}
								},
								"GridDetail_qxr0tmkDS_UsrCustomer": {
									"modelConfig": {
										"path": "GridDetail_qxr0tmkDS.UsrCustomer"
									}
								},
								"GridDetail_qxr0tmkDS_UsrParentYacht": {
									"modelConfig": {
										"path": "GridDetail_qxr0tmkDS.UsrParentYacht"
									}
								},
								"GridDetail_qxr0tmkDS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_qxr0tmkDS.CreatedOn"
									}
								},
								"GridDetail_qxr0tmkDS_Id": {
									"modelConfig": {
										"path": "GridDetail_qxr0tmkDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_qxr0tmk_PredefinedFilter": {
						"value": null
					},
					"PDS_UsrLength_jm7dqt1": {
						"modelConfig": {
							"path": "PDS.UsrLength"
						}
					},
					"PDS_UsrCaptain_ay867u1": {
						"modelConfig": {
							"path": "PDS.UsrCaptain"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_qxr0tmkDS": [
							{
								"attributePath": "UsrParentYacht",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrYacht",
							"attributes": {
								"UsrManagerEmail_eg3zc08": {
									"path": "UsrManager.Email",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_qxr0tmkDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrYachtRental",
							"attributes": {
								"UsrStartDate": {
									"path": "UsrStartDate"
								},
								"UsrEndDate": {
									"path": "UsrEndDate"
								},
								"UsrCustomer": {
									"path": "UsrCustomer"
								},
								"UsrParentYacht": {
									"path": "UsrParentYacht"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
                request: "usr.PushButtonRequest",
                /* Implementation of the custom query handler. */
                handler: async (request, next) => {
                console.log("Button works...");
                Terrasoft.showInformation("My button was pressed.");
               var price = await request.$context.PDS_UsrPrice_s6b8f31;
               console.log("Price = " + price);
               request.$context.PDS_UsrComment_mjrn52t = "comment from JS code!";
               /* Call the next handler if it exists and return its result. */
               return next?.handle(request);
               }
				

			},
			{

				request: "crt.HandleViewModelAttributeChangeRequest",
                /* The custom implementation of the system query handler. */
                 handler: async (request, next) => {
                if (request.attributeName === 'PDS_UsrPrice_s6b8f31' || 		        // if price changed
                request.attributeName === 'PDS_UsrPassengersCount_dzq2xx8' ) { 		// or Passengers count changed
                let price = await request.$context.PDS_UsrPrice_s6b8f31;
                let passengers = await request.$context.PDS_UsrPassengersCount_dzq2xx8;
                let ticket_price = price / passengers;
                 request.$context.PDS_UsrTicketPrice_l91oxek = ticket_price;
                   }
                /* Call the next handler if it exists and return its result. */
                   return next?.handle(request);

				}

			},
		{
             /* The custom implementation of comment required when price is greater than system setting value request handler. */
            request: "crt.HandleViewModelAttributeChangeRequest",
            handler: async (request, next) => {
            /* Check the request status. */
            if (request.attributeName === 'PDS_UsrPrice_s6b8f31') {
                price = await request.$context.PDS_UsrPrice_s6b8f31;
                const sysSettingsService = new sdk.SysSettingsService();
                const SystemSetting = await sysSettingsService.getByCode('MinPriceToRequireYachtComment');
                    const sysvalue=SystemSetting.value;
                console.log("price"+ price);                console.log("sysvalue "+ sysvalue);
                /* Check the request description. */
                if (price >= sysvalue) {
                    /* If the request status is "New," apply the validator to the "UsrDescription" attribute. */
                    request.$context.enableAttributeValidator('PDS_UsrComment_mjrn52t', 'required');
                    } 
                else {
                    /* If the request status differs from the "New," do not apply the validator to the "UsrDescription" attribute. */
                    request.$context.disableAttributeValidator('PDS_UsrComment_mjrn52t', 'required');
                     }
                }
            /* Call the next handler if it exists and return its result. */
            return next?.handle(request);
            }
        },
			
			{
               request: "usr.RunWebServiceRequest",
               /* Implementation of the custom query handler. */
               handler: async (request, next) => {
               console.log("Run web service button works...");

               // get id from drive type lookup type object
               var typeObject = await request.$context.PDS_UsrDriveType_ov4xr4y;
               var driveTypeId = "";
               if (typeObject) {
               driveTypeId = typeObject.value;
                         }
               /* Create an instance of the HTTP client from @creatio-devkit/common. */
              const httpClientService = new sdk.HttpClientService();
				   
              /* Specify the URL to run web service method. */
              const baseUrl = Terrasoft.utils.uri.getConfigurationWebServiceBaseUrl();
              const transferName = "rest";
              const serviceName = "MaxYachtService";
              const methodName = "GetMaxPriceByDriveTypeId";
              const endpoint = Terrasoft.combinePath(baseUrl, transferName, serviceName, methodName);
				   
              //const endpoint = "http://localhost/D1_Studio/0/rest/MaxYachtService/GetMaxPriceByDriveTypeId";
             /* Send a POST HTTP request. The HTTP client converts the response body from JSON to a JS object automatically. */
             var params = {
             driveTypeId: driveTypeId
                    	};
             const response = await httpClientService.post(endpoint, params);
    		console.log("response max price = " + response.body.GetMaxPriceByDriveTypeIdResult);
		   /* Call the next handler if it exists and return its result. */
            return next?.handle(request);

				}

			},
				{
               request: "usr.AvgRunWebServiceRequest",
               /* Implementation of the custom query handler. */
               handler: async (request, next) => {
               console.log("Run web service button works...");

               // get id from drive type lookup type object
               var typeObject = await request.$context.PDS_UsrDriveType_ov4xr4y;
               var driveTypeId = "";
               if (typeObject) {
               driveTypeId = typeObject.value;
                         }
               /* Create an instance of the HTTP client from @creatio-devkit/common. */
              const httpClientService = new sdk.HttpClientService();
				   
              /* Specify the URL to run web service method. */
              const baseUrl = Terrasoft.utils.uri.getConfigurationWebServiceBaseUrl();
              const transferName = "rest";
              const serviceName = "AvgYachtService";
              const methodName = "GetAvgPriceByDriveTypeId";
              const endpoint = Terrasoft.combinePath(baseUrl, transferName, serviceName, methodName);
				   
              //const endpoint = "http://localhost/D1_Studio/0/rest/AvgYachtService/GetPriceByDriveTypeId";
             /* Send a POST HTTP request. The HTTP client converts the response body from JSON to a JS object automatically. */
             var params = {
             driveTypeId: driveTypeId
                    	};
             const response = await httpClientService.post(endpoint, params);
    		console.log("response avg price = " + response.body.GetAvgPriceByDriveTypeIdResult);
		   /* Call the next handler if it exists and return its result. */
            return next?.handle(request);

				}

			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			/* The validator type must contain a vendor prefix.
            Format the validator type in PascalCase. */
               "usr.DGValidator": {
                validator: function (config) {
                return function (control) {
                let value = control.value;
                let minValue = config.minValue;
                let valueIsCorrect = value >= minValue;
                var result;
                 if (valueIsCorrect) {
                    result = null;
                        	} else {
                        result = {
                                   "usr.DGValidator": { 
                                    message: config.message
                                                	}
						          };
                           }
                             return result;
                      };

				},
                  params: [
                         {
                            name: "minValue"
                         },
                         {
						    name: "message"
                         }
                    ],
                    async: false
             }
		}/**SCHEMA_VALIDATORS*/
	};
});