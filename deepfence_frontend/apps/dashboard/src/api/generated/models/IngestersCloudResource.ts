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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface IngestersCloudResource
 */
export interface IngestersCloudResource {
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    account_id?: string;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    allow_blob_public_access?: string;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    arn?: string;
    /**
     * 
     * @type {boolean}
     * @memberof IngestersCloudResource
     */
    block_public_acls?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof IngestersCloudResource
     */
    block_public_policy?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof IngestersCloudResource
     */
    bucket_policy_is_public?: boolean;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    cidr_ipv4?: string;
    /**
     * 
     * @type {any}
     * @memberof IngestersCloudResource
     */
    container_definitions?: any | null;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    db_cluster_identifier?: string;
    /**
     * 
     * @type {any}
     * @memberof IngestersCloudResource
     */
    event_notification_configuration?: any | null;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    group_id?: string;
    /**
     * 
     * @type {any}
     * @memberof IngestersCloudResource
     */
    iam_policy?: any | null;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    id?: string;
    /**
     * 
     * @type {boolean}
     * @memberof IngestersCloudResource
     */
    ignore_public_acls?: boolean;
    /**
     * 
     * @type {any}
     * @memberof IngestersCloudResource
     */
    ingress_settings?: any | null;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    instance_id?: string;
    /**
     * 
     * @type {any}
     * @memberof IngestersCloudResource
     */
    ip_configuration?: any | null;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    name?: string;
    /**
     * 
     * @type {any}
     * @memberof IngestersCloudResource
     */
    network_interfaces?: any | null;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    network_mode?: string;
    /**
     * 
     * @type {any}
     * @memberof IngestersCloudResource
     */
    policy?: any | null;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    policy_std?: string;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    public_access?: string;
    /**
     * 
     * @type {any}
     * @memberof IngestersCloudResource
     */
    public_ips?: any | null;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    region?: string;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    resource_id?: string;
    /**
     * 
     * @type {any}
     * @memberof IngestersCloudResource
     */
    resource_vpc_config?: any | null;
    /**
     * 
     * @type {boolean}
     * @memberof IngestersCloudResource
     */
    restrict_public_buckets?: boolean;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    scheme?: string;
    /**
     * 
     * @type {any}
     * @memberof IngestersCloudResource
     */
    security_groups?: any | null;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    service_name?: string;
    /**
     * 
     * @type {any}
     * @memberof IngestersCloudResource
     */
    task_definition?: any | null;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    task_definition_arn?: string;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    vpc_id?: string;
    /**
     * 
     * @type {any}
     * @memberof IngestersCloudResource
     */
    vpc_options?: any | null;
    /**
     * 
     * @type {any}
     * @memberof IngestersCloudResource
     */
    vpc_security_groups?: any | null;
}

export function IngestersCloudResourceFromJSON(json: any): IngestersCloudResource {
    return IngestersCloudResourceFromJSONTyped(json, false);
}

export function IngestersCloudResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): IngestersCloudResource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'account_id': !exists(json, 'account_id') ? undefined : json['account_id'],
        'allow_blob_public_access': !exists(json, 'allow_blob_public_access') ? undefined : json['allow_blob_public_access'],
        'arn': !exists(json, 'arn') ? undefined : json['arn'],
        'block_public_acls': !exists(json, 'block_public_acls') ? undefined : json['block_public_acls'],
        'block_public_policy': !exists(json, 'block_public_policy') ? undefined : json['block_public_policy'],
        'bucket_policy_is_public': !exists(json, 'bucket_policy_is_public') ? undefined : json['bucket_policy_is_public'],
        'cidr_ipv4': !exists(json, 'cidr_ipv4') ? undefined : json['cidr_ipv4'],
        'container_definitions': !exists(json, 'container_definitions') ? undefined : json['container_definitions'],
        'db_cluster_identifier': !exists(json, 'db_cluster_identifier') ? undefined : json['db_cluster_identifier'],
        'event_notification_configuration': !exists(json, 'event_notification_configuration') ? undefined : json['event_notification_configuration'],
        'group_id': !exists(json, 'group_id') ? undefined : json['group_id'],
        'iam_policy': !exists(json, 'iam_policy') ? undefined : json['iam_policy'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'ignore_public_acls': !exists(json, 'ignore_public_acls') ? undefined : json['ignore_public_acls'],
        'ingress_settings': !exists(json, 'ingress_settings') ? undefined : json['ingress_settings'],
        'instance_id': !exists(json, 'instance_id') ? undefined : json['instance_id'],
        'ip_configuration': !exists(json, 'ip_configuration') ? undefined : json['ip_configuration'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'network_interfaces': !exists(json, 'network_interfaces') ? undefined : json['network_interfaces'],
        'network_mode': !exists(json, 'network_mode') ? undefined : json['network_mode'],
        'policy': !exists(json, 'policy') ? undefined : json['policy'],
        'policy_std': !exists(json, 'policy_std') ? undefined : json['policy_std'],
        'public_access': !exists(json, 'public_access') ? undefined : json['public_access'],
        'public_ips': !exists(json, 'public_ips') ? undefined : json['public_ips'],
        'region': !exists(json, 'region') ? undefined : json['region'],
        'resource_id': !exists(json, 'resource_id') ? undefined : json['resource_id'],
        'resource_vpc_config': !exists(json, 'resource_vpc_config') ? undefined : json['resource_vpc_config'],
        'restrict_public_buckets': !exists(json, 'restrict_public_buckets') ? undefined : json['restrict_public_buckets'],
        'scheme': !exists(json, 'scheme') ? undefined : json['scheme'],
        'security_groups': !exists(json, 'security_groups') ? undefined : json['security_groups'],
        'service_name': !exists(json, 'service_name') ? undefined : json['service_name'],
        'task_definition': !exists(json, 'task_definition') ? undefined : json['task_definition'],
        'task_definition_arn': !exists(json, 'task_definition_arn') ? undefined : json['task_definition_arn'],
        'vpc_id': !exists(json, 'vpc_id') ? undefined : json['vpc_id'],
        'vpc_options': !exists(json, 'vpc_options') ? undefined : json['vpc_options'],
        'vpc_security_groups': !exists(json, 'vpc_security_groups') ? undefined : json['vpc_security_groups'],
    };
}

export function IngestersCloudResourceToJSON(value?: IngestersCloudResource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'account_id': value.account_id,
        'allow_blob_public_access': value.allow_blob_public_access,
        'arn': value.arn,
        'block_public_acls': value.block_public_acls,
        'block_public_policy': value.block_public_policy,
        'bucket_policy_is_public': value.bucket_policy_is_public,
        'cidr_ipv4': value.cidr_ipv4,
        'container_definitions': value.container_definitions,
        'db_cluster_identifier': value.db_cluster_identifier,
        'event_notification_configuration': value.event_notification_configuration,
        'group_id': value.group_id,
        'iam_policy': value.iam_policy,
        'id': value.id,
        'ignore_public_acls': value.ignore_public_acls,
        'ingress_settings': value.ingress_settings,
        'instance_id': value.instance_id,
        'ip_configuration': value.ip_configuration,
        'name': value.name,
        'network_interfaces': value.network_interfaces,
        'network_mode': value.network_mode,
        'policy': value.policy,
        'policy_std': value.policy_std,
        'public_access': value.public_access,
        'public_ips': value.public_ips,
        'region': value.region,
        'resource_id': value.resource_id,
        'resource_vpc_config': value.resource_vpc_config,
        'restrict_public_buckets': value.restrict_public_buckets,
        'scheme': value.scheme,
        'security_groups': value.security_groups,
        'service_name': value.service_name,
        'task_definition': value.task_definition,
        'task_definition_arn': value.task_definition_arn,
        'vpc_id': value.vpc_id,
        'vpc_options': value.vpc_options,
        'vpc_security_groups': value.vpc_security_groups,
    };
}

