/* tslint:disable */
/* eslint-disable */
/**
 * Deepfence ThreatMapper
 * Deepfence Runtime API provides programmatic control over Deepfence microservice securing your container, kubernetes and cloud deployments. The API abstracts away underlying infrastructure details like cloud provider,  container distros, container orchestrator and type of deployment. This is one uniform API to manage and control security alerts, policies and response to alerts for microservices running anywhere i.e. managed pure greenfield container deployments or a mix of containers, VMs and serverless paradigms like AWS Fargate.
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: community@deepfence.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    ApiDocsBadRequestResponse,
    ApiDocsBadRequestResponseFromJSON,
    ApiDocsBadRequestResponseToJSON,
    ApiDocsFailureResponse,
    ApiDocsFailureResponseFromJSON,
    ApiDocsFailureResponseToJSON,
    ModelApiAuthRequest,
    ModelApiAuthRequestFromJSON,
    ModelApiAuthRequestToJSON,
    ModelLoginRequest,
    ModelLoginRequestFromJSON,
    ModelLoginRequestToJSON,
    ModelResponse,
    ModelResponseFromJSON,
    ModelResponseToJSON,
} from '../models';

export interface AuthTokenRequest {
    modelApiAuthRequest?: ModelApiAuthRequest;
}

export interface LoginRequest {
    modelLoginRequest?: ModelLoginRequest;
}

/**
 * AuthenticationApi - interface
 * 
 * @export
 * @interface AuthenticationApiInterface
 */
export interface AuthenticationApiInterface {
    /**
     * Get auth token for API access
     * @summary API Auth Token
     * @param {ModelApiAuthRequest} [modelApiAuthRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApiInterface
     */
    authTokenRaw(requestParameters: AuthTokenRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ModelResponse>>;

    /**
     * Get auth token for API access
     * API Auth Token
     */
    authToken(requestParameters: AuthTokenRequest, initOverrides?: RequestInit): Promise<ModelResponse>;

    /**
     * Login API
     * @summary Login API
     * @param {ModelLoginRequest} [modelLoginRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApiInterface
     */
    loginRaw(requestParameters: LoginRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ModelResponse>>;

    /**
     * Login API
     * Login API
     */
    login(requestParameters: LoginRequest, initOverrides?: RequestInit): Promise<ModelResponse>;

    /**
     * Logout API
     * @summary Logout API
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApiInterface
     */
    logoutRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>>;

    /**
     * Logout API
     * Logout API
     */
    logout(initOverrides?: RequestInit): Promise<void>;

}

/**
 * 
 */
export class AuthenticationApi extends runtime.BaseAPI implements AuthenticationApiInterface {

    /**
     * Get auth token for API access
     * API Auth Token
     */
    async authTokenRaw(requestParameters: AuthTokenRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ModelResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/deepfence/auth/token`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelApiAuthRequestToJSON(requestParameters.modelApiAuthRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelResponseFromJSON(jsonValue));
    }

    /**
     * Get auth token for API access
     * API Auth Token
     */
    async authToken(requestParameters: AuthTokenRequest = {}, initOverrides?: RequestInit): Promise<ModelResponse> {
        const response = await this.authTokenRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Login API
     * Login API
     */
    async loginRaw(requestParameters: LoginRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ModelResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/deepfence/user/login`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelLoginRequestToJSON(requestParameters.modelLoginRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelResponseFromJSON(jsonValue));
    }

    /**
     * Login API
     * Login API
     */
    async login(requestParameters: LoginRequest = {}, initOverrides?: RequestInit): Promise<ModelResponse> {
        const response = await this.loginRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Logout API
     * Logout API
     */
    async logoutRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/user/logout`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Logout API
     * Logout API
     */
    async logout(initOverrides?: RequestInit): Promise<void> {
        await this.logoutRaw(initOverrides);
    }

}
