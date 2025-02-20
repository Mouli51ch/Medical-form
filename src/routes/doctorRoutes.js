import express from 'express';
import { createDoctor, getAllDoctors, getDoctorById, updateDoctor, deleteDoctor } from '../controllers/doctorController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

// Create a new doctor
router.post('/', authMiddleware, createDoctor);

// Get all doctors
router.get('/', authMiddleware, getAllDoctors);

// Get a doctor by ID
router.get('/:id', authMiddleware, getDoctorById);

// Update a doctor by ID
router.put('/:id', authMiddleware, updateDoctor);

// Delete a doctor by ID
router.delete('/:id', authMiddleware, deleteDoctor);

export default router;