const Session = require('../models/session.model');

exports.getSessions = async (req, res) => {
  const sessions = await Session.find({ userId: req.userId });
  res.json(sessions);
};

exports.getSessionById = async (req, res) => {
  const session = await Session.findById(req.params.id);
  if (!session || session.userId.toString() !== req.userId)
    return res.status(404).json({ message: 'Not found' });
  res.json(session);
};

exports.saveSession = async (req, res) => {
  const { sessionId, title, chatHistory, code, css } = req.body;

  if (sessionId) {
    const existing = await Session.findById(sessionId);
    if (existing.userId.toString() !== req.userId)
      return res.status(403).json({ message: 'Unauthorized' });
    existing.title = title;
    existing.chatHistory = chatHistory;
    existing.code = code;
    existing.css = css;
    await existing.save();
    res.json(existing);
  } else {
    const newSession = await Session.create({
      userId: req.userId, title, chatHistory, code, css
    });
    res.status(201).json(newSession);
  }
};
