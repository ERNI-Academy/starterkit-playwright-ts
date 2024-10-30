import { test } from '@playwright/test';
import { TestContext } from '../utils/TestContext'; 

export let globalTextContext: TestContext;

// This will run once before all tests
test.beforeAll(() => {
    globalTextContext = new TestContext();
    console.log('Global setup: TextContext initialized');
});

// This will run before each test
test.beforeEach(async () => {
    globalTextContext.reset(); // Reset the context for each test
    console.log('Global beforeEach: TextContext reset');
});

// Optionally, you can add afterEach and afterAll hooks if needed
test.afterEach(async () => {
    // Clean up actions if needed
});

test.afterAll(async () => {
    // Final clean up actions if needed
});