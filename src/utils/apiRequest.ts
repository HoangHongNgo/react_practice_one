import { HttpMethod } from "./enums";

// Function signature for GET requests
export async function apiRequest<T>(
  url: string,
  method: HttpMethod.GET,
  token?: string
): Promise<T>;

// Function signature for other HTTP methods
export async function apiRequest<T, U>(
  url: string,
  method: Exclude<HttpMethod, HttpMethod.GET>,
  body: U,
  token?: string
): Promise<T>;

// Implementation of the function
export async function apiRequest<T, U>(
  url: string,
  method: HttpMethod,
  body?: U,
  token?: string
): Promise<T> {
  try {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const request: RequestInit = {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    };

    const response: Response = await fetch(url, request);

    const data = (await response.json()) as T;
    return data;
  } catch (err) {
    throw err;
  }
}
