export default {
  async findOrCreateByPhoneNumber(phoneNumber: string, userName = null) {
    // Try to find existing user with findOne (not findMany)
    const existingUser = await strapi
      .documents("api::agent-user.agent-user")
      .findMany({
        filters: {
          phoneNumber: phoneNumber,
        },
        limit: 1,
      })
      .then((results) => results[0] || null)

    // Return existing user if found
    if (existingUser) {
      return existingUser
    }

    // Create new user if not found
    const newUser = await strapi.entityService.create(
      "api::agent-user.agent-user",
      {
        data: {
          phoneNumber,
          userName: userName || `WhatsApp User ${phoneNumber}`,
          publishedAt: new Date(), // Auto-publish the user
        },
      }
    )

    return newUser
  },
}
