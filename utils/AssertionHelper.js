import { expect } from '@playwright/test';
import logger from '../logger/logger.js';

export default class AssertionHelper {

    static async verifyVisible(locator, elementName = 'Element') {
        logger.info(`Verifying visibility of ${elementName}`);
        await expect(locator).toBeVisible();
        logger.info(`${elementName} is visible`);
    }

    static verifyEquals(actual, expected, fieldName = 'Value') {
        logger.info(`Verifying ${fieldName}`);
        expect(actual).toBe(expected);
        logger.info(`${fieldName} verified successfully`);
    }

    static verifyNotEmpty(value, fieldName = 'Value') {
        logger.info(`Verifying ${fieldName} is not empty`);
        expect(value).not.toBe('');
        logger.info(`${fieldName} is not empty`);
    }

    static verifyContains(actual, expected, fieldName = 'Value') {
        logger.info(`Verifying ${fieldName} contains ${expected}`);
        expect(actual).toContain(expected);
        logger.info(`${fieldName} verified successfully`);
    }
}