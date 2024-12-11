import axios from 'axios';
import { URL } from './client';

interface UserData {
    username: string;
    password: string;
    birthday?: string; // Optional, ISO 8601 형식의 문자열로 전달 (예: "2023-12-04")
}

export class UserAPI {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async create(userData: UserData) {
        try {
            const response = await axios.post(
                `${this.baseUrl}/api/auth/register`,
                userData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            return response;
        } catch (error) {
            console.error('Create user failed:', error);
            throw error;
        }
    }

    async login(userData: UserData) {
        try {
            const response = await axios.post(
                `${this.baseUrl}/api/auth/login`,
                userData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            return response;
        } catch (error) {
            console.error('User login failed', error);
            throw error;
        }
    }
}

export const user = new UserAPI(URL);
