import { Context } from "koa"

const VERIFY_TOKEN = "whatsapp_webhook_token_prof_oak_8735" // same one you’ll use on Meta’s dashboard

export default {
  async verify(ctx: Context) {
    const mode = ctx.query["hub.mode"]
    const token = ctx.query["hub.verify_token"]
    const challenge = ctx.query["hub.challenge"]

    if (mode === "subscribe" && token === VERIFY_TOKEN) {
      ctx.send(challenge)
    } else {
      ctx.status = 403
    }
  },

  async handle(ctx: Context) {
    const relevantContent = ctx.request.body.entry[0].changes[0].value

    const senderUserName = relevantContent.contacts[0].profile.name

    const messageInfo = relevantContent.messages[0]
    const senderPhoneNumber = messageInfo.from
    const message = JSON.parse(JSON.stringify(messageInfo.text.body))

    console.log("MESSAGE INFO", senderUserName, senderPhoneNumber, message)

    ctx.send({ status: "received" })
  },
}
