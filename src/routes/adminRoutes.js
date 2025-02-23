import express from 'express';
import { getAllUsers, updateUserRole, deleteUser } from '../controllers/adminController.js';
import { verifyJWT } from '../middlewares/authMiddleware.js'; // Use named import

const router = express.Router();

// Get all users (only accessible by admin)
router.get('/users', verifyJWT, getAllUsers);

// Update user role (only accessible by admin)
router.put('/users/:id/role', verifyJWT, updateUserRole);

// Delete a user (only accessible by admin)
router.delete('/users/:id', verifyJWT, deleteUser);

export default router;