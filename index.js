import { Telegraf } from 'telegraf'
import { TelegramToken, RsnChatToken } from './config.js'
import { RsnChat } from 'rsnchat'

const bot = new Telegraf(TelegramToken)

const rsnchat = new RsnChat(RsnChatToken)

bot.start(ctx =>
	ctx.reply('Добро пожаловать я Бот, можете задавать мне любые вопросы :))')
)

bot.on('message', async ctx =>
	ctx.replyWithChatAction('typing').then(() => {
		rsnchat.gpt(ctx.message.text).then(response => {
			ctx.reply(response.message)
		})
	})
)

bot.launch()
