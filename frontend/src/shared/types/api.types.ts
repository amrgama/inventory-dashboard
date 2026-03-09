export interface ApiResponse<T> {
  success: boolean;
  data: T;
  timestamp: string;
}

export interface ApiError {
  success: boolean;
  statusCode: number;
  message: string;
  timestamp: string;
}
