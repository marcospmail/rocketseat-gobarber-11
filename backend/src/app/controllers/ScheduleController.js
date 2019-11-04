import { startOfDay, endOfDay, parseISO } from 'date-fns';
import { Op } from 'sequelize';

import Appointment from '../models/Appointment';
import User from '../models/User';

class SchedulerController {
  async index(req, res) {
    const providerExists = await User.findOne({
      where: { id: req.userId, provider: true },
    });

    if (!providerExists) {
      return res.status(400).json({ error: 'provider does not exists' });
    }

    const { date } = req.query;

    const parsedDate = parseISO(date);

    const schedules = await Appointment.findAll({
      where: {
        provider_id: req.userId,
        canceled_at: null,
        date: {
          [Op.between]: [startOfDay(parsedDate), endOfDay(parsedDate)],
        },
      },
      include: {
        model: User,
        as: 'user',
        attributes: ['id', 'name', 'email'],
      },
      order: ['date'],
    });

    return res.json(schedules);
  }
}

export default new SchedulerController();
