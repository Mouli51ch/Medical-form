// src/controllers/authController.js

import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { User } from '../models/User.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { ApiError } from '../utils/ApiError.js';

const authController = express.Router();

// Register a new user
authController.post('/register', asyncHandler(async (req, res) => {
    const { username, email, password, fullName, avatar } = req.body;

    if (!username || !email || !password || !fullName || !avatar) {
        throw new ApiError(400, "All fields (username, email, password, fullName, avatar) are required");
    }

    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
        throw new ApiError(409, "User with this email or username already exists");
    }

    const newUser = new User({
        username,
        email,
        password, // Will be hashed by pre-save hook
        fullName,
        avatar,
        role: "patient"
    });
    
    await newUser.save();
    
    return res.status(201).json(
        new ApiResponse(201, { username, email, fullName }, "User registered successfully")
    );
}));

// Login a user
authController.post('/login', asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        throw new ApiError(400, "Email and password are required");
    }

    const user = await User.findOne({ email });
    if (!user) {
        throw new ApiError(404, "User not found");
    }

    const isMatch = await user.isPasswordCorrect(password);
    if (!isMatch) {
        throw new ApiError(401, "Invalid credentials");
    }

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return res.json(
        new ApiResponse(200, { accessToken, refreshToken, username: user.username }, "Login successful")
    );
}));

// Middleware to protect routes
const authenticateToken = asyncHandler(async (req, res, next) => {
    const authHeader = req.header('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new ApiError(401, "No token provided");
    }

    const token = authHeader.replace('Bearer ', '');
    
    const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = verified;
    next();
});

export { authController, authenticateToken };