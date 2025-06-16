# WhatsApp AI Agent - Unit Test Guidelines (Behavior-Driven)

> These pseudo-code guidelines describe unit testing strategies focused on **behavior** rather than implementation. A "unit" is considered a functional workflow (e.g., user registration or Pokémon question handling), and tests should remain stable unless business rules change.

---

## Feature 1: User Registration via WhatsApp Message

### Test Case: Registers a new user on first message

```pseudo
GIVEN a WhatsApp message from an unknown number
WHEN the message is received by the system
THEN a UserAgent should be created with countryCode and localNumber extracted
AND no duplicate UserAgent should be created on repeated calls
```

### Test Case: Does not create duplicate users

```pseudo
GIVEN a WhatsApp message from a number already linked to a UserAgent
WHEN the message is received
THEN no new UserAgent is created
AND the existing UserAgent is reused
```

---

## Feature 2: Conversation History Persistence

### Test Case: Starts a new conversation if none exists

```pseudo
GIVEN a message from a known UserAgent with no open conversations
WHEN the message is processed
THEN a new Conversation should be created
AND the message saved in that conversation
```

### Test Case: Reuses ongoing conversation

```pseudo
GIVEN a UserAgent with an ongoing (not ended) conversation
WHEN a new message is received
THEN it is appended to the existing conversation
```

### Test Case: Can retrieve full conversation history

```pseudo
GIVEN a UserAgent with multiple conversations
WHEN requesting the conversation history
THEN the system should return all user-agent-linked messages in correct order
```

---

## Feature 3: Welcome Message in Professor Oak’s Tone

### Test Case: Sends welcome message on first contact

```pseudo
GIVEN a new UserAgent has just been created
WHEN their first message is saved
THEN an AI-generated welcome message in Professor Oak’s tone is sent back
AND that message is stored in the same conversation with role = "agent"
```

### Test Case: No welcome message for existing users

```pseudo
GIVEN an existing UserAgent
WHEN a new message is received
THEN no welcome message is generated
```

---

## Feature 4: Pokémon Question Answering (via PokeAPI)

### Test Case: Answers a basic Pokémon question

```pseudo
GIVEN a user asks a supported Pokémon question
WHEN the system parses the intent
AND retrieves data from the PokeAPI
THEN it should return a relevant response paraphrased in Professor Oak’s voice
AND store both question and response as messages
```

### Test Case: Handles unsupported Pokémon queries gracefully

```pseudo
GIVEN a question that cannot be mapped to any known intent or entity
WHEN the message is processed
THEN the system should return a default “I don’t know” style response
```

---

## Feature 5: Command and Query Mapping System

### Test Case: Matches user query to command pattern

```pseudo
GIVEN a message like “What type is Charizard?”
WHEN processed
THEN the system should match it to a command pattern like get_pokemon_type
AND call the correct PokeAPI endpoint with parameters filled in
```

### Test Case: Handles ambiguous queries with fallback

```pseudo
GIVEN a vague or confusing query
WHEN processed
THEN the system should return a polite clarification request
```

### Test Case: Can extend mappings without breaking existing logic

```pseudo
GIVEN a new mapping is added to the CommandMapping config
WHEN the system runs
THEN previously working queries still behave correctly
AND new queries are matched and resolved
```

---

> ✅ These guidelines should be used to define BDD-style test cases using your test framework of choice (e.g., Jest + Supertest, Vitest, or Mocha). Let me know if you want real code examples for each!

