import express from 'express';
import { createAppointment, getAllAppointments, getAppointmentById, updateAppointment, deleteAppointment } from '../controllers/appointmentController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

// Create a new appointment
router.post('/', authMiddleware, createAppointment);

// Get all appointments
router.get('/', authMiddleware, getAllAppointments);

// Get an appointment by ID
router.get('/:id', authMiddleware, getAppointmentById);

// Update an appointment by ID
router.put('/:id', authMiddleware, updateAppointment);

// Delete an appointment by ID
router.delete('/:id', authMiddleware, deleteAppointment);

export default router;