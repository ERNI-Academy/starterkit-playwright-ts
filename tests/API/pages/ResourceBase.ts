import { APIRequestContext, APIResponse } from '@playwright/test';

export class ResourceBase {
    protected requestContext: APIRequestContext;

    constructor(requestContext: APIRequestContext) {
        this.requestContext = requestContext;
    }

    // Perform a GET request
    protected async executeGet(url: string, headers: Record<string, string> = {}): Promise<APIResponse> {
        const response = await this.requestContext.get(url, {
            headers,
        });
        return response;
    }

    // Perform a POST request
    protected async executePost(url: string, body: any, headers: Record<string, string> = {}): Promise<APIResponse> {
        const response = await this.requestContext.post(url, {
            headers,
            data: body,
        });
        return response;
    }

    // General method to execute a PUT request
    protected async executePut(url: string, body: any, headers: Record<string, string> = {}): Promise<APIResponse> {
        return this.requestContext.put(url, {
            headers,
            data: body,
        });
    }

    // General method to execute a DELETE request
    protected async executeDelete(url: string, headers: Record<string, string> = {}): Promise<APIResponse> {
        return this.requestContext.delete(url, { headers });
    }

    // Get response body as JSON or text
    protected async getBody(response: APIResponse): Promise<any> {
        try {
            return await response.json();
        } catch (error) {
            return await response.text();
        }
    }

    // Get status code from the response
    getStatusCode(response: APIResponse): number {
        return response.status();
    }

    // Check if the response status code is 2xx (Success)
    isSuccessful(response: APIResponse): boolean {
        const status = response.status();
        return status >= 200 && status < 300;
    }
}