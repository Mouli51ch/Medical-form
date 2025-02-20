import express from 'express';
import { getAllUsers, updateUserRole, deleteUser } from '../controllers/adminController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

// Get all users (only accessible by admin)
router.get('/users', authMiddleware, getAllUsers);

// Update user role (only accessible by admin)
router.put('/users/:id/role', authMiddleware, updateUserRole);

// Delete a user (only accessible by admin)
router.delete('/users/:id', authMiddleware, deleteUser);

export default router;