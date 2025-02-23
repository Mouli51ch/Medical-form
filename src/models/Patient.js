import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    contact: { type: String, required: true },
    // Add other fields as necessary
});

const Patient = mongoose.model('Patient', patientSchema);

export default Patient;