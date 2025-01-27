const BASE_URL = 'https://buzzsurround.com';

const getHeaders = (contentType: string = 'application/json') => {
  const getToken = () => {
    return 'Bearer ' + '';
  };

  return {
    'Content-Type': contentType,
    Authorization: getToken(),
  };
};

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export default class ApiCalls {
  static apiRequest<T>(
    method: HttpMethod,
    url: string,
    body?: any,
    isFormData: boolean = false,
  ) {
    return new Promise<T>((resolve, reject) => {
      const headers = getHeaders(
        isFormData ? 'multipart/form-data' : 'application/json',
      );

      const requestOptions: RequestInit = {
        method: method,
        headers: headers,
      };

      if (body) {
        if (isFormData) {
          requestOptions.body = body;
        } else {
          requestOptions.body = JSON.stringify(body);
        }
      }

      console.log('>>>', BASE_URL + url, requestOptions);

      fetch(BASE_URL + url, requestOptions)
        .then(res => res.json())
        .then((data: T) => resolve(data))
        .catch(err => reject(err));
    });
  }

  static get<T>(url: string) {
    return this.apiRequest<T>('GET', url);
  }

  static post<T>(url: string, body?: any, isFormData: boolean = false) {
    return this.apiRequest<T>('POST', url, body, isFormData);
  }

  static put<T>(url: string, body?: any, isFormData: boolean = false) {
    return this.apiRequest<T>('PUT', url, body, isFormData);
  }

  static delete<T>(url: string) {
    return this.apiRequest<T>('DELETE', url);
  }

  static postFormData<T>(url: string, formData: FormData) {
    return this.post<T>(url, formData, true);
  }
}
