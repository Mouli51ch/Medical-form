import express from 'express';
import { createDoctor, getAllDoctors, getDoctorById, updateDoctor, deleteDoctor } from '../controllers/doctorController.js';
import { verifyJWT } from '../middlewares/authMiddleware.js'; // Use named import

const router = express.Router();

// Create a new doctor
router.post('/', verifyJWT, createDoctor);

// Get all doctors
router.get('/', verifyJWT, getAllDoctors);

// Get a doctor by ID
router.get('/:id', verifyJWT, getDoctorById);

// Update a doctor by ID
router.put('/:id', verifyJWT, updateDoctor);

// Delete a doctor by ID
router.delete('/:id', verifyJWT, deleteDoctor);

export default router;