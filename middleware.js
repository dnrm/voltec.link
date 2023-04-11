export { default } from "next-auth/middleware";

// ! Protect all routes in the dashboard
export const config = { matcher: ["/dashboard/:path*"] };
