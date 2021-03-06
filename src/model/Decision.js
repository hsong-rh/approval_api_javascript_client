/**
 * Insights Service Approval APIs
 * APIs to query approval service
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';


/**
* Enum class Decision.
* @enum {}
* @readonly
*/
export default class Decision {
    
        /**
         * value: "unknown"
         * @const
         */
        unknown = "unknown";

    
        /**
         * value: "approved"
         * @const
         */
        approved = "approved";

    
        /**
         * value: "denied"
         * @const
         */
        denied = "denied";

    

    /**
    * Returns a <code>Decision</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/Decision} The enum <code>Decision</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}


