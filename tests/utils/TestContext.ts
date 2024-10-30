export class TestContext {
    private apiResponse: any;
    private authToken: string | null = null;

    public setApiResponse(response: any) {
        this.apiResponse = response;
    }

    public getApiResponse() {
        return this.apiResponse;
    }

    public setAuthToken(token: string) {
        this.authToken = token;
    }

    public getAuthToken() {
        return this.authToken;
    }

    public reset() {
        
    }
}