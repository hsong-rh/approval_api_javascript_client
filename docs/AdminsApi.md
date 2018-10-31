# InsightsServiceApprovalApIs.AdminsApi

All URIs are relative to *https://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addAction**](AdminsApi.md#addAction) | **POST** /stages/{stage_id}/actions | Add an action
[**addGroup**](AdminsApi.md#addGroup) | **POST** /groups | Add a new approver group
[**addStage**](AdminsApi.md#addStage) | **POST** /requests/{request_id}/stages | Add a new stage
[**addTemplate**](AdminsApi.md#addTemplate) | **POST** /templates | Add a new template to the orgnization
[**addWorkflow**](AdminsApi.md#addWorkflow) | **POST** /templates/{template_id}/workflows | Add a new workflow
[**fetchActionById**](AdminsApi.md#fetchActionById) | **GET** /actions/{id} | Finds approver action by id
[**fetchActions**](AdminsApi.md#fetchActions) | **GET** /actions | Returns list of approver actions
[**fetchGroupById**](AdminsApi.md#fetchGroupById) | **GET** /groups/{id} | Finds approver group by id
[**fetchGroups**](AdminsApi.md#fetchGroups) | **GET** /groups | Returns list of approver groups
[**fetchRequests**](AdminsApi.md#fetchRequests) | **GET** /requests | List approval requests
[**fetchStageById**](AdminsApi.md#fetchStageById) | **GET** /stages/{id} | Retrieves approval stages by given id
[**fetchStages**](AdminsApi.md#fetchStages) | **GET** /stages | List approval stages
[**fetchTemplateById**](AdminsApi.md#fetchTemplateById) | **GET** /templates/{id} | Finds template by id
[**fetchTemplateWorkflows**](AdminsApi.md#fetchTemplateWorkflows) | **GET** /templates/{template_id}/workflows | Returns list of workflows by given template id
[**fetchTemplates**](AdminsApi.md#fetchTemplates) | **GET** /templates | Returns list of templates
[**fetchWorkflowById**](AdminsApi.md#fetchWorkflowById) | **GET** /workflows/{id} | List all approval workflow by id
[**fetchWorkflowRequests**](AdminsApi.md#fetchWorkflowRequests) | **GET** /workflows/{workflow_id}/requests | List of all approval requests
[**fetchWorkflows**](AdminsApi.md#fetchWorkflows) | **GET** /workflows | List all approval workflows
[**removeAction**](AdminsApi.md#removeAction) | **DELETE** /actions/{id} | Delete action by id
[**removeGroup**](AdminsApi.md#removeGroup) | **DELETE** /groups/{id} | Delete approver group by id
[**removeRequest**](AdminsApi.md#removeRequest) | **DELETE** /requests/{id} | Delete approval request by id
[**removeStage**](AdminsApi.md#removeStage) | **DELETE** /stages/{id} | Delete approval stage by id
[**removeTemplate**](AdminsApi.md#removeTemplate) | **DELETE** /templates/{id} | Delete template by id
[**removeWorkflow**](AdminsApi.md#removeWorkflow) | **DELETE** /workflows/{id} | Delete approval workflow by id
[**updateAction**](AdminsApi.md#updateAction) | **PUT** /actions/{id} | Update an existing action
[**updateGroup**](AdminsApi.md#updateGroup) | **PUT** /groups/{id} | Update an existing approver group
[**updateRequest**](AdminsApi.md#updateRequest) | **PUT** /requests/{id} | Update an existing approval request status
[**updateStage**](AdminsApi.md#updateStage) | **PUT** /stages/{id} | Update an existing approval stage
[**updateTemplate**](AdminsApi.md#updateTemplate) | **PUT** /templates/{id} | Update an existing template
[**updateWorkflow**](AdminsApi.md#updateWorkflow) | **PUT** /workflows/{id} | Update an existing approval workflow


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

let apiInstance = new InsightsServiceApprovalApIs.AdminsApi();

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

<a name="addGroup"></a>
# **addGroup**
> addGroup(body)

Add a new approver group



### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';
let defaultClient = InsightsServiceApprovalApIs.ApiClient.instance;

// Configure HTTP basic authorization: approval_auth
let approval_auth = defaultClient.authentications['approval_auth'];
approval_auth.username = 'YOUR USERNAME';
approval_auth.password = 'YOUR PASSWORD';

let apiInstance = new InsightsServiceApprovalApIs.AdminsApi();

let body = new InsightsServiceApprovalApIs.Group(); // Group | Approver group object that needs to be added to the orgnization

apiInstance.addGroup(body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Group**](Group.md)| Approver group object that needs to be added to the orgnization | 

### Return type

null (empty response body)

### Authorization

[approval_auth](../README.md#approval_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addStage"></a>
# **addStage**
> addStage(requestId, body)

Add a new stage



### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';
let defaultClient = InsightsServiceApprovalApIs.ApiClient.instance;

// Configure HTTP basic authorization: approval_auth
let approval_auth = defaultClient.authentications['approval_auth'];
approval_auth.username = 'YOUR USERNAME';
approval_auth.password = 'YOUR PASSWORD';

let apiInstance = new InsightsServiceApprovalApIs.AdminsApi();

let requestId = 56; // Number | id of request

let body = new InsightsServiceApprovalApIs.Stage(); // Stage | Stage that needs to be added

apiInstance.addStage(requestId, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestId** | **Number**| id of request | 
 **body** | [**Stage**](Stage.md)| Stage that needs to be added | 

### Return type

null (empty response body)

### Authorization

[approval_auth](../README.md#approval_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addTemplate"></a>
# **addTemplate**
> addTemplate(body)

Add a new template to the orgnization



### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';
let defaultClient = InsightsServiceApprovalApIs.ApiClient.instance;

// Configure HTTP basic authorization: approval_auth
let approval_auth = defaultClient.authentications['approval_auth'];
approval_auth.username = 'YOUR USERNAME';
approval_auth.password = 'YOUR PASSWORD';

let apiInstance = new InsightsServiceApprovalApIs.AdminsApi();

let body = new InsightsServiceApprovalApIs.Template(); // Template | Approval template object that needs to be added to the orgnization

apiInstance.addTemplate(body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Template**](Template.md)| Approval template object that needs to be added to the orgnization | 

### Return type

null (empty response body)

### Authorization

[approval_auth](../README.md#approval_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addWorkflow"></a>
# **addWorkflow**
> addWorkflow(templateId, body)

Add a new workflow



### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';
let defaultClient = InsightsServiceApprovalApIs.ApiClient.instance;

// Configure HTTP basic authorization: approval_auth
let approval_auth = defaultClient.authentications['approval_auth'];
approval_auth.username = 'YOUR USERNAME';
approval_auth.password = 'YOUR PASSWORD';

let apiInstance = new InsightsServiceApprovalApIs.AdminsApi();

let templateId = 56; // Number | id of template

let body = new InsightsServiceApprovalApIs.Workflow(); // Workflow | Workflow that needs to be added

apiInstance.addWorkflow(templateId, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | **Number**| id of template | 
 **body** | [**Workflow**](Workflow.md)| Workflow that needs to be added | 

### Return type

null (empty response body)

### Authorization

[approval_auth](../README.md#approval_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fetchActionById"></a>
# **fetchActionById**
> Action fetchActionById(id)

Finds approver action by id



### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';

let apiInstance = new InsightsServiceApprovalApIs.AdminsApi();

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

let apiInstance = new InsightsServiceApprovalApIs.AdminsApi();

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

<a name="fetchGroupById"></a>
# **fetchGroupById**
> Group fetchGroupById(id)

Finds approver group by id



### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';

let apiInstance = new InsightsServiceApprovalApIs.AdminsApi();

let id = 56; // Number | query by id

apiInstance.fetchGroupById(id).then((data) => {
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

[**Group**](Group.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="fetchGroups"></a>
# **fetchGroups**
> [Group] fetchGroups(opts)

Returns list of approver groups

Returns a list of approver groups

### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';
let defaultClient = InsightsServiceApprovalApIs.ApiClient.instance;

// Configure HTTP basic authorization: approval_auth
let approval_auth = defaultClient.authentications['approval_auth'];
approval_auth.username = 'YOUR USERNAME';
approval_auth.password = 'YOUR PASSWORD';

let apiInstance = new InsightsServiceApprovalApIs.AdminsApi();

let opts = { 
  'limit': 20, // Number | How many items to return at one time (max 1000)
  'offset': 0 // Number | Starting Offset
};
apiInstance.fetchGroups(opts).then((data) => {
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

[**[Group]**](Group.md)

### Authorization

[approval_auth](../README.md#approval_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="fetchRequests"></a>
# **fetchRequests**
> [Request] fetchRequests(opts)

List approval requests



### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';

let apiInstance = new InsightsServiceApprovalApIs.AdminsApi();

let opts = { 
  'decision': ["decision_example"], // [String] | fetch item by given decision (unknown, approved, denied)
  'state': ["state_example"], // [String] | fetch item by given state (pending, skipped, notified, finished)
  'requester': "requester_example", // String | fetch item by given requester
  'limit': 20, // Number | How many items to return at one time (max 1000)
  'offset': 0 // Number | Starting Offset
};
apiInstance.fetchRequests(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **decision** | [**[String]**](String.md)| fetch item by given decision (unknown, approved, denied) | [optional] 
 **state** | [**[String]**](String.md)| fetch item by given state (pending, skipped, notified, finished) | [optional] 
 **requester** | **String**| fetch item by given requester | [optional] 
 **limit** | **Number**| How many items to return at one time (max 1000) | [optional] [default to 20]
 **offset** | **Number**| Starting Offset | [optional] [default to 0]

### Return type

[**[Request]**](Request.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fetchStageById"></a>
# **fetchStageById**
> Request fetchStageById(id)

Retrieves approval stages by given id



### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';

let apiInstance = new InsightsServiceApprovalApIs.AdminsApi();

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

<a name="fetchStages"></a>
# **fetchStages**
> [Stage] fetchStages(opts)

List approval stages



### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';

let apiInstance = new InsightsServiceApprovalApIs.AdminsApi();

let opts = { 
  'limit': 20, // Number | How many items to return at one time (max 1000)
  'offset': 0 // Number | Starting Offset
};
apiInstance.fetchStages(opts).then((data) => {
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

[**[Stage]**](Stage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="fetchTemplateById"></a>
# **fetchTemplateById**
> Template fetchTemplateById(id)

Finds template by id



### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';

let apiInstance = new InsightsServiceApprovalApIs.AdminsApi();

let id = 56; // Number | query by id

apiInstance.fetchTemplateById(id).then((data) => {
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

[**Template**](Template.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="fetchTemplateWorkflows"></a>
# **fetchTemplateWorkflows**
> [Workflow] fetchTemplateWorkflows(templateId, , opts)

Returns list of workflows by given template id

Returns a list of workflows

### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';
let defaultClient = InsightsServiceApprovalApIs.ApiClient.instance;

// Configure HTTP basic authorization: approval_auth
let approval_auth = defaultClient.authentications['approval_auth'];
approval_auth.username = 'YOUR USERNAME';
approval_auth.password = 'YOUR PASSWORD';

let apiInstance = new InsightsServiceApprovalApIs.AdminsApi();

let templateId = 56; // Number | id of template

let opts = { 
  'limit': 20, // Number | How many items to return at one time (max 1000)
  'offset': 0 // Number | Starting Offset
};
apiInstance.fetchTemplateWorkflows(templateId, , opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | **Number**| id of template | 
 **limit** | **Number**| How many items to return at one time (max 1000) | [optional] [default to 20]
 **offset** | **Number**| Starting Offset | [optional] [default to 0]

### Return type

[**[Workflow]**](Workflow.md)

### Authorization

[approval_auth](../README.md#approval_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="fetchTemplates"></a>
# **fetchTemplates**
> Template fetchTemplates(opts)

Returns list of templates

Returns list of templates

### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';
let defaultClient = InsightsServiceApprovalApIs.ApiClient.instance;

// Configure HTTP basic authorization: approval_auth
let approval_auth = defaultClient.authentications['approval_auth'];
approval_auth.username = 'YOUR USERNAME';
approval_auth.password = 'YOUR PASSWORD';

let apiInstance = new InsightsServiceApprovalApIs.AdminsApi();

let opts = { 
  'limit': 20, // Number | How many items to return at one time (max 1000)
  'offset': 0 // Number | Starting Offset
};
apiInstance.fetchTemplates(opts).then((data) => {
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

[**Template**](Template.md)

### Authorization

[approval_auth](../README.md#approval_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="fetchWorkflowById"></a>
# **fetchWorkflowById**
> Workflow fetchWorkflowById(id)

List all approval workflow by id



### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';
let defaultClient = InsightsServiceApprovalApIs.ApiClient.instance;

// Configure HTTP basic authorization: approval_auth
let approval_auth = defaultClient.authentications['approval_auth'];
approval_auth.username = 'YOUR USERNAME';
approval_auth.password = 'YOUR PASSWORD';

let apiInstance = new InsightsServiceApprovalApIs.AdminsApi();

let id = 56; // Number | query by id

apiInstance.fetchWorkflowById(id).then((data) => {
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

[**Workflow**](Workflow.md)

### Authorization

[approval_auth](../README.md#approval_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="fetchWorkflowRequests"></a>
# **fetchWorkflowRequests**
> [Request] fetchWorkflowRequests(workflowId, , opts)

List of all approval requests

Returns a list of approval requests

### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';
let defaultClient = InsightsServiceApprovalApIs.ApiClient.instance;

// Configure HTTP basic authorization: approval_auth
let approval_auth = defaultClient.authentications['approval_auth'];
approval_auth.username = 'YOUR USERNAME';
approval_auth.password = 'YOUR PASSWORD';

let apiInstance = new InsightsServiceApprovalApIs.AdminsApi();

let workflowId = 56; // Number | id of workflow

let opts = { 
  'limit': 20, // Number | How many items to return at one time (max 1000)
  'offset': 0 // Number | Starting Offset
};
apiInstance.fetchWorkflowRequests(workflowId, , opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflowId** | **Number**| id of workflow | 
 **limit** | **Number**| How many items to return at one time (max 1000) | [optional] [default to 20]
 **offset** | **Number**| Starting Offset | [optional] [default to 0]

### Return type

[**[Request]**](Request.md)

### Authorization

[approval_auth](../README.md#approval_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="fetchWorkflows"></a>
# **fetchWorkflows**
> [Workflow] fetchWorkflows(opts)

List all approval workflows



### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';

let apiInstance = new InsightsServiceApprovalApIs.AdminsApi();

let opts = { 
  'limit': 20, // Number | How many items to return at one time (max 1000)
  'offset': 0 // Number | Starting Offset
};
apiInstance.fetchWorkflows(opts).then((data) => {
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

[**[Workflow]**](Workflow.md)

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

let apiInstance = new InsightsServiceApprovalApIs.AdminsApi();

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

<a name="removeGroup"></a>
# **removeGroup**
> removeGroup(id)

Delete approver group by id



### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';

let apiInstance = new InsightsServiceApprovalApIs.AdminsApi();

let id = 56; // Number | query by id

apiInstance.removeGroup(id).then(() => {
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

<a name="removeRequest"></a>
# **removeRequest**
> removeRequest(id)

Delete approval request by id



### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';

let apiInstance = new InsightsServiceApprovalApIs.AdminsApi();

let id = 56; // Number | query by id

apiInstance.removeRequest(id).then(() => {
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

<a name="removeStage"></a>
# **removeStage**
> removeStage(id)

Delete approval stage by id



### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';

let apiInstance = new InsightsServiceApprovalApIs.AdminsApi();

let id = 56; // Number | query by id

apiInstance.removeStage(id).then(() => {
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

<a name="removeTemplate"></a>
# **removeTemplate**
> removeTemplate(id)

Delete template by id



### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';

let apiInstance = new InsightsServiceApprovalApIs.AdminsApi();

let id = 56; // Number | query by id

apiInstance.removeTemplate(id).then(() => {
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

<a name="removeWorkflow"></a>
# **removeWorkflow**
> removeWorkflow(id)

Delete approval workflow by id



### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';

let apiInstance = new InsightsServiceApprovalApIs.AdminsApi();

let id = 56; // Number | query by id

apiInstance.removeWorkflow(id).then(() => {
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

let apiInstance = new InsightsServiceApprovalApIs.AdminsApi();

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

<a name="updateGroup"></a>
# **updateGroup**
> updateGroup(idbody)

Update an existing approver group



### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';
let defaultClient = InsightsServiceApprovalApIs.ApiClient.instance;

// Configure HTTP basic authorization: approval_auth
let approval_auth = defaultClient.authentications['approval_auth'];
approval_auth.username = 'YOUR USERNAME';
approval_auth.password = 'YOUR PASSWORD';

let apiInstance = new InsightsServiceApprovalApIs.AdminsApi();

let id = 56; // Number | query by id

let body = new InsightsServiceApprovalApIs.Group(); // Group | Approver group object that needs to be updated

apiInstance.updateGroup(idbody).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| query by id | 
 **body** | [**Group**](Group.md)| Approver group object that needs to be updated | 

### Return type

null (empty response body)

### Authorization

[approval_auth](../README.md#approval_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateRequest"></a>
# **updateRequest**
> updateRequest(idbody)

Update an existing approval request status



### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';
let defaultClient = InsightsServiceApprovalApIs.ApiClient.instance;

// Configure HTTP basic authorization: approval_auth
let approval_auth = defaultClient.authentications['approval_auth'];
approval_auth.username = 'YOUR USERNAME';
approval_auth.password = 'YOUR PASSWORD';

let apiInstance = new InsightsServiceApprovalApIs.AdminsApi();

let id = 56; // Number | query by id

let body = new InsightsServiceApprovalApIs.Request(); // Request | new status

apiInstance.updateRequest(idbody).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| query by id | 
 **body** | [**Request**](Request.md)| new status | 

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

let apiInstance = new InsightsServiceApprovalApIs.AdminsApi();

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

<a name="updateTemplate"></a>
# **updateTemplate**
> updateTemplate(idbody)

Update an existing template



### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';
let defaultClient = InsightsServiceApprovalApIs.ApiClient.instance;

// Configure HTTP basic authorization: approval_auth
let approval_auth = defaultClient.authentications['approval_auth'];
approval_auth.username = 'YOUR USERNAME';
approval_auth.password = 'YOUR PASSWORD';

let apiInstance = new InsightsServiceApprovalApIs.AdminsApi();

let id = 56; // Number | query by id

let body = new InsightsServiceApprovalApIs.Template(); // Template | Template needs to be updated

apiInstance.updateTemplate(idbody).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| query by id | 
 **body** | [**Template**](Template.md)| Template needs to be updated | 

### Return type

null (empty response body)

### Authorization

[approval_auth](../README.md#approval_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateWorkflow"></a>
# **updateWorkflow**
> updateWorkflow(idbody)

Update an existing approval workflow



### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';
let defaultClient = InsightsServiceApprovalApIs.ApiClient.instance;

// Configure HTTP basic authorization: approval_auth
let approval_auth = defaultClient.authentications['approval_auth'];
approval_auth.username = 'YOUR USERNAME';
approval_auth.password = 'YOUR PASSWORD';

let apiInstance = new InsightsServiceApprovalApIs.AdminsApi();

let id = 56; // Number | query by id

let body = new InsightsServiceApprovalApIs.Workflow(); // Workflow | Approval workflow object that needs to be updated

apiInstance.updateWorkflow(idbody).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| query by id | 
 **body** | [**Workflow**](Workflow.md)| Approval workflow object that needs to be updated | 

### Return type

null (empty response body)

### Authorization

[approval_auth](../README.md#approval_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

