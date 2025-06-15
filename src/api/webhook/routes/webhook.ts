export default {
  routes: [
    {
      method: "GET",
      path: "/webhook",
      handler: "webhook.verify",
      config: {
        auth: false,
      },
    },
    {
      method: "POST",
      path: "/webhook",
      handler: "webhook.handle",
      config: {
        auth: false,
      },
    },
  ],
}
