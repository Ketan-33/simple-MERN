import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { BlogCreatePage } from "../pages/BlogCreatePage";
import { BlogDetails } from "../pages/BlogDetails";
import { BlogEditPage } from "../pages/BlogEditPage";
import { BlogListPage } from "../pages/BlogListPage";
import  Login  from "../pages/Login"; // Import LoginPage component
import  Register  from "../pages/Register"; // Import RegisterPage component
import { NotFoundPage } from "../pages/NotFoundPage";

export const APP_ROUTE = {
    HOME_PAGE: "/",
    BLOG_LIST: "/blog/list",
    BLOG_DETAILS: "/blog/:id/details",
    BLOG_EDIT: "/blog/:id/edit",
    BLOG_CREATE: "/blog/create",
    LOGIN: "/login", // Add login route path
    REGISTER: "/register", // Add register route path
};

export const AppRouter = () => {
    return (
        <Routes>
            <Route
                path={APP_ROUTE.HOME_PAGE}
                element={<Navigate to={APP_ROUTE.BLOG_LIST} />}
            />
            <Route path={APP_ROUTE.BLOG_LIST} element={<BlogListPage />} />
            <Route path={APP_ROUTE.BLOG_DETAILS} element={<BlogDetails />} />
            <Route path={APP_ROUTE.BLOG_EDIT} element={<BlogEditPage />} />
            <Route path={APP_ROUTE.BLOG_CREATE} element={<BlogCreatePage />} />
            <Route path={APP_ROUTE.LOGIN} element={<Login />} /> {/* Add login route */}
            <Route path={APP_ROUTE.REGISTER} element={<Register/>} /> {/* Add register route */}

            {/* Not found page */}
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};
