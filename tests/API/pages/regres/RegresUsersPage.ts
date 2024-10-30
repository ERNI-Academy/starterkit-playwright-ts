import { APIRequestContext, APIResponse, expect } from '@playwright/test';
import { ResourceBase } from "../ResourceBase";

export default class RegresUsersPage extends ResourceBase {

    private readonly baseUrl: string = "https://reqres.in/api";

    constructor(requestContext: APIRequestContext) {
        super(requestContext)
        this.requestContext = requestContext;
    }

    // Method to get all user details
    async getUserDetails(headers: Record<string, string> = {}): Promise<APIResponse> {
        const url = this.baseUrl + `/users?page=2`;
        const response = await this.executeGet(url, headers);
        return response;
    }

    // Method to get user by ID
    async getUserById(userId: string, headers: Record<string, string> = {}): Promise<APIResponse> {
        const url = this.baseUrl + `/users/${userId}`;
        const response = await this.executeGet(url, headers);
        return response;
    }

    // Method to create a user
    async postCreateUser(userData: any, headers: Record<string, string> = {}): Promise<APIResponse> {
        const url = this.baseUrl + `/users`;
        const response = await this.executePost(url, userData, headers);
        return response;
    }

    // Method to update a user by ID
    async putUpdateUser(userId: string, userData: any, headers: Record<string, string> = {}): Promise<APIResponse> {
        const url = this.baseUrl + `/users/${userId}`;
        const response = await this.executePut(url, userData, headers);
        return response;
    }

    // Method to delete a user by ID
    async deleteUser(userId: string, headers: Record<string, string> = {}): Promise<APIResponse> {
        const url = this.baseUrl + `/users/${userId}`;
        const response = await this.executeDelete(url, headers);
        return response;
    }
}
