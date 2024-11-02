// cho phép những đường dẫn nào
const allowedOrigins = [];

//cho phép nhưng phương thức, thuộc tính , đường dẫn nào được cho phép
const corsOption = {
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
};
export function middleware() {
    // middleware
}
