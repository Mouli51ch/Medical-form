import express from 'express';
import { createPatient, getAllPatients, getPatientById, updatePatient, deletePatient } from '../controllers/patientController.js';
import { verifyJWT } from '../middlewares/authMiddleware.js'; // Use named import

const router = express.Router();

// Create a new patient
router.post('/', verifyJWT, createPatient);

// Get all patients
router.get('/', verifyJWT, getAllPatients);

// Get a patient by ID
router.get('/:id', verifyJWT, getPatientById);

// Update a patient by ID
router.put('/:id', verifyJWT, updatePatient);

// Delete a patient by ID
router.delete('/:id', verifyJWT, deletePatient);

export default router;