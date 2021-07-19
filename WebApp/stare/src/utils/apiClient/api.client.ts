import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { api } from '../../environment';

const client = axios.create({
    baseURL: api,
    withCredentials: true,
});

export class APIclient {
    

    public static async get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return client.get<T>(`/${url}`, config);
    }

    public static async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return client.put<T>(`/${url}`, data, config);
    }

    public static async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return client.post<T>(`/${url}`, data, config);
    }

    public static async delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return client.delete<T>(`/${url}`, config);
    }
}