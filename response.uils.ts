// response.utils.ts
export function createResponse(status: number, message: string, items?: any, state?: any, path?: string, method?: string) {
    return {
      status,
      timestamp: new Date().toISOString(),
      ServerType: "UAT",
      version: "1.0.0.0",
      path,
      method,
      message,
      displaytotal: items ? items.length : 0,
      total: items ? items.length : 0,
      state,
      items
    };
  }
  