# WhatsApp AI Agent for Pokémon - User Stories

### 1. User Registration via WhatsApp Message
**As** a new user contacting the WhatsApp bot for the first time,  
**I want** my phone number (split into `countryCode` and `localNumber`) to be saved,  
**So that** the system can associate all my future messages with my identity and conversations.

- Store phone number split in two fields: `countryCode` and `localNumber`.
- Normalize phone numbers to prevent duplicates.
- Create a `UserAgent` entity if not existing.

### 2. Conversation History Persistence
**As** a user returning to the chatbot from a new phone number or different session,  
**I want** my old conversation history to still be accessible,  
**So that** I can continue the chat as if nothing changed.

- Match new phone numbers to existing users based on profile information if possible (optional fallback for later).
- Create or continue a `Conversation` thread for the user.
- Store and retrieve `Messages` within each conversation.

### 3. Welcome Message in Professor Oak’s Tone
**As** a first-time user,  
**I want** to receive a warm, friendly welcome from "Professor Oak",  
**So that** I feel like I’m in the Pokémon universe.

- Auto-reply using Professor Oak’s tone.
- Use AI to generate the message (prompted with tone, persona, example quotes).
- Save the user’s first message and the welcome message in the conversation.

### 4. Pokémon Question Answering (via PokeAPI)
**As** a user,  
**I want** to ask Pokémon-related questions in natural language,  
**So that** I can receive intelligent responses based on public data.

- Parse messages for Pokémon topics.
- Generate a structured query (intent + entities).
- Call [https://pokeapi.co](https://pokeapi.co) to retrieve relevant information.
- Respond with AI-generated phrasing using Professor Oak's style.

### 5. Command and Query Mapping System
**As** a system maintainer,  
**I want** to define and store various command-query mappings,  
**So that** the system can interpret a wide range of natural questions.

- Build a flexible command definition format (e.g., JSON or database entries).
- Associate natural language patterns with queries to the PokeAPI.
- Include fallback responses for unsupported or ambiguous queries.

