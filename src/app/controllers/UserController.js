import User from '../models/User';

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists)
      return res.status(400).json({ error: 'User already exists' });

    const { id, name, email, provider } = await User.create(req.body);

    return res.json({ id, name, email, provider });
  }

  async update(req, res) {
    const { email, oldPassword } = req.body;

    const loggedUser = await User.findByPk(req.userId);

    if (email !== loggedUser.email) {
      const userExists = await User.findOne({ where: { email } });

      if (userExists) {
        return res.status(400).json({ error: 'User already exists' });
      }
    }

    if (oldPassword && !(await loggedUser.checkPassword(oldPassword))) {
      return res.status(400).json({ error: 'Password does not match' });
    }

    const { name, provider } = await loggedUser.update(req.body);

    return res.json({
      id: req.userId,
      name,
      provider,
      email,
    });
  }
}

export default new UserController();
