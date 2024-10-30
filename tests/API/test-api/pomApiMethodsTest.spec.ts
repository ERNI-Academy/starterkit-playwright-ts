import { test, expect, APIRequestContext } from '@playwright/test';
import RegresUsersPage from '../pages/regres/RegresUsersPage';

test.describe('User API tests', () => {
    let regresUsersPage: RegresUsersPage;
    let requestContext: APIRequestContext;
    var userId;

    // Initialize the request context and user API object
    test.beforeAll(async ({ playwright }) => {
        requestContext = await playwright.request.newContext();
        regresUsersPage = new RegresUsersPage(requestContext);
    });

    // Close request context after tests
    test.afterAll(async () => {
        await requestContext.dispose();
    });

    test('POM Get user Details using GET API', async ({ request }) => {
        const response = await regresUsersPage.getUserDetails();
        var responseJson = await response.json();
        console.log(responseJson);
        expect(response.status()).toBe(200);
        expect(responseJson.data[0].first_name).toBe('Michael');
    });


    test('Create User using POST API', async ({ request }) => {
        var user = {
            "name": "playwright",
            "job": "udemy"
        }

        var headers = { "ACCEPT": "applications/JSON" }

        const response = await regresUsersPage.postCreateUser(user, headers);

        var responseJson = await response.json();
        expect(response.status()).toBe(201);
        expect(responseJson.name).toBe(`${user.name}`);
        expect(responseJson.job).toBe(`${user.job}`);
        userId = responseJson.id;
    });

    test('Update User using PUT API', async ({ request }) => {
        var user = {
            "name": "automation",
            "job": "course"
        }

        var headers = { "ACCEPT": "applications/JSON" }

        const response = await regresUsersPage.putUpdateUser(userId, user, headers);

        var responseJson = await response.json();
        expect(response.status()).toBe(200);
        expect(responseJson.name).toBe(`${user.name}`);
        expect(responseJson.job).toBe(`${user.job}`);
        userId = responseJson.id;
    });

    test('Delete User using DELETE API', async ({ request }) => {
        const response = await regresUsersPage.deleteUser(userId);
        expect(response.status()).toBe(204);
    });
})