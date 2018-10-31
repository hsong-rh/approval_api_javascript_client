# InsightsServiceApprovalApIs.UsersApi

All URIs are relative to *https://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addRequest**](UsersApi.md#addRequest) | **POST** /workflows/{workflow_id}/requests | Add a new approval request
[**fetchRequestById**](UsersApi.md#fetchRequestById) | **GET** /requests/{id} | Retrieves approval request by given id
[**fetchRequestStages**](UsersApi.md#fetchRequestStages) | **GET** /requests/{request_id}/stages | Returns stages by given request id


<a name="addRequest"></a>
# **addRequest**
> addRequest(workflowId, body)

Add a new approval request

request creation may not be via rest

### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';
let defaultClient = InsightsServiceApprovalApIs.ApiClient.instance;

// Configure HTTP basic authorization: approval_auth
let approval_auth = defaultClient.authentications['approval_auth'];
approval_auth.username = 'YOUR USERNAME';
approval_auth.password = 'YOUR PASSWORD';

let apiInstance = new InsightsServiceApprovalApIs.UsersApi();

let workflowId = 56; // Number | id of workflow

let body = new InsightsServiceApprovalApIs.Request(); // Request | Approval request object that needs to be added

apiInstance.addRequest(workflowId, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflowId** | **Number**| id of workflow | 
 **body** | [**Request**](Request.md)| Approval request object that needs to be added | 

### Return type

null (empty response body)

### Authorization

[approval_auth](../README.md#approval_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fetchRequestById"></a>
# **fetchRequestById**
> Request fetchRequestById(id)

Retrieves approval request by given id



### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';

let apiInstance = new InsightsServiceApprovalApIs.UsersApi();

let id = 56; // Number | query by id

apiInstance.fetchRequestById(id).then((data) => {
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

<a name="fetchRequestStages"></a>
# **fetchRequestStages**
> [Stage] fetchRequestStages(requestId, )

Returns stages by given request id

Returns stages by request id

### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';
let defaultClient = InsightsServiceApprovalApIs.ApiClient.instance;

// Configure HTTP basic authorization: approval_auth
let approval_auth = defaultClient.authentications['approval_auth'];
approval_auth.username = 'YOUR USERNAME';
approval_auth.password = 'YOUR PASSWORD';

let apiInstance = new InsightsServiceApprovalApIs.UsersApi();

let requestId = 56; // Number | id of request

apiInstance.fetchRequestStages(requestId, ).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestId** | **Number**| id of request | 

### Return type

[**[Stage]**](Stage.md)

### Authorization

[approval_auth](../README.md#approval_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

