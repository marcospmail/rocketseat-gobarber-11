import { startOfDay, endOfDay } from 'date-fns';
import Appointment from '../models/Appointment'

class AvailableController {
  async index(req, res) {
    const { date } = req.params;

    if (!date) {
      return res.status(400).json({ error: 'Missing date' });
    }

    const searchDate = Number(date);

    const appointments = await

    return res.json();
  }
}

export default new AvailableController();
