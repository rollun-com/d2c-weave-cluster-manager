import dotenv from 'dotenv';
import { error } from '../utils/throw.js';

dotenv.config();

export const D2C = {
  PASS: process.env.D2C_PASS || error('D2C_PASS is required'),
  USER: process.env.D2C_USER || error('D2C_USER is required'),
}

export const SLACK = {
  ALERT_CHANNEL_WEBHOOK: process.env.SLACK_ALERT_CHANNEL_WEBHOOK || error('SLACK_ALERT_CHANNEL_WEBHOOK is required'),
}

export const DEV = process.env.DEV === 'true';
