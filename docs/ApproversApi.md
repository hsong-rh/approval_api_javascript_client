# InsightsServiceApprovalApIs.ApproversApi

All URIs are relative to *https://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addAction**](ApproversApi.md#addAction) | **POST** /stages/{stage_id}/actions | Add an action
[**fetchActionById**](ApproversApi.md#fetchActionById) | **GET** /actions/{id} | Finds approver action by id
[**fetchActions**](ApproversApi.md#fetchActions) | **GET** /actions | Returns list of approver actions
[**fetchStageById**](ApproversApi.md#fetchStageById) | **GET** /stages/{id} | Retrieves approval stages by given id
[**removeAction**](ApproversApi.md#removeAction) | **DELETE** /actions/{id} | Delete action by id
[**updateAction**](ApproversApi.md#updateAction) | **PUT** /actions/{id} | Update an existing action
[**updateStage**](ApproversApi.md#updateStage) | **PUT** /stages/{id} | Update an existing approval stage


<a name="addAction"></a>
# **addAction**
> addAction(stageId, body)

Add an action



### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';
let defaultClient = InsightsServiceApprovalApIs.ApiClient.instance;

// Configure HTTP basic authorization: approval_auth
let approval_auth = defaultClient.authentications['approval_auth'];
approval_auth.username = 'YOUR USERNAME';
approval_auth.password = 'YOUR PASSWORD';

let apiInstance = new InsightsServiceApprovalApIs.ApproversApi();

let stageId = 56; // Number | id of stage

let body = new InsightsServiceApprovalApIs.Action(); // Action | Action object that will be added

apiInstance.addAction(stageId, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stageId** | **Number**| id of stage | 
 **body** | [**Action**](Action.md)| Action object that will be added | 

### Return type

null (empty response body)

### Authorization

[approval_auth](../README.md#approval_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="fetchActionById"></a>
# **fetchActionById**
> Action fetchActionById(id)

Finds approver action by id



### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';

let apiInstance = new InsightsServiceApprovalApIs.ApproversApi();

let id = 56; // Number | query by id

apiInstance.fetchActionById(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| query by id | 

### Return type

[**Action**](Action.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="fetchActions"></a>
# **fetchActions**
> [Action] fetchActions(opts)

Returns list of approver actions

Returns a list of approver actions

### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';
let defaultClient = InsightsServiceApprovalApIs.ApiClient.instance;

// Configure HTTP basic authorization: approval_auth
let approval_auth = defaultClient.authentications['approval_auth'];
approval_auth.username = 'YOUR USERNAME';
approval_auth.password = 'YOUR PASSWORD';

let apiInstance = new InsightsServiceApprovalApIs.ApproversApi();

let opts = { 
  'limit': 20, // Number | How many items to return at one time (max 1000)
  'offset': 0 // Number | Starting Offset
};
apiInstance.fetchActions(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| How many items to return at one time (max 1000) | [optional] [default to 20]
 **offset** | **Number**| Starting Offset | [optional] [default to 0]

### Return type

[**[Action]**](Action.md)

### Authorization

[approval_auth](../README.md#approval_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="fetchStageById"></a>
# **fetchStageById**
> Request fetchStageById(id)

Retrieves approval stages by given id



### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';

let apiInstance = new InsightsServiceApprovalApIs.ApproversApi();

let id = 56; // Number | query by id

apiInstance.fetchStageById(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| query by id | 

### Return type

[**Request**](Request.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="removeAction"></a>
# **removeAction**
> removeAction(id)

Delete action by id



### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';

let apiInstance = new InsightsServiceApprovalApIs.ApproversApi();

let id = 56; // Number | query by id

apiInstance.removeAction(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| query by id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateAction"></a>
# **updateAction**
> updateAction(idbody)

Update an existing action



### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';
let defaultClient = InsightsServiceApprovalApIs.ApiClient.instance;

// Configure HTTP basic authorization: approval_auth
let approval_auth = defaultClient.authentications['approval_auth'];
approval_auth.username = 'YOUR USERNAME';
approval_auth.password = 'YOUR PASSWORD';

let apiInstance = new InsightsServiceApprovalApIs.ApproversApi();

let id = 56; // Number | query by id

let body = new InsightsServiceApprovalApIs.Action(); // Action | Action object that needs to be updated

apiInstance.updateAction(idbody).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| query by id | 
 **body** | [**Action**](Action.md)| Action object that needs to be updated | 

### Return type

null (empty response body)

### Authorization

[approval_auth](../README.md#approval_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateStage"></a>
# **updateStage**
> updateStage(idbody)

Update an existing approval stage



### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';
let defaultClient = InsightsServiceApprovalApIs.ApiClient.instance;

// Configure HTTP basic authorization: approval_auth
let approval_auth = defaultClient.authentications['approval_auth'];
approval_auth.username = 'YOUR USERNAME';
approval_auth.password = 'YOUR PASSWORD';

let apiInstance = new InsightsServiceApprovalApIs.ApproversApi();

let id = 56; // Number | query by id

let body = new InsightsServiceApprovalApIs.Stage(); // Stage | new stage

apiInstance.updateStage(idbody).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| query by id | 
 **body** | [**Stage**](Stage.md)| new stage | 

### Return type

null (empty response body)

### Authorization

[approval_auth](../README.md#approval_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

