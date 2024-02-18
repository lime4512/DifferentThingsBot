import { Telegraf } from 'telegraf'
import { TelegramToken } from './config.js'

const bot = new Telegraf(TelegramToken)

bot.start(ctx => ctx.reply('Добро пожаловать в мой Бот :))'))

bot.launch()
