import express from 'express';
import { createPatient, getAllPatients, getPatientById, updatePatient, deletePatient } from '../controllers/patientController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

// Create a new patient
router.post('/', authMiddleware, createPatient);

// Get all patients
router.get('/', authMiddleware, getAllPatients);

// Get a patient by ID
router.get('/:id', authMiddleware, getPatientById);

// Update a patient by ID
router.put('/:id', authMiddleware, updatePatient);

// Delete a patient by ID
router.delete('/:id', authMiddleware, deletePatient);

export default router;