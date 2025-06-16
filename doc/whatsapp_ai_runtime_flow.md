# WhatsApp AI Agent - Runtime Request Flow (Mermaid)

```mermaid
sequenceDiagram
    participant WA as WhatsApp User
    participant WH as Webhook (Strapi)
    participant MP as Message Processor
    participant DB as Database
    participant CM as Command Mapper
    participant PK as PokeAPI
    participant AI as OpenAI (Professor Oak)

    WA->>WH: Sends message via webhook
    WH->>MP: Normalize + Dispatch message
    MP->>DB: Lookup or create UserAgent
    MP->>DB: Find or start Conversation
    MP->>DB: Save User Message

    alt First time
        MP->>AI: Generate welcome message
        AI-->>MP: Oak-style welcome
    else Pokémon question
        MP->>CM: Parse intent
        CM->>PK: Query PokeAPI
        PK-->>CM: Return JSON data
        CM->>AI: Format reply in Oak style
        AI-->>MP: Oak-style answer
    end

    MP->>DB: Save Agent Message
    MP->>WH: Return reply to user
    WH->>WA: Deliver message
```

> This sequence diagram represents the standard message flow, from incoming WhatsApp input to AI-powered response delivery, covering both first-time and returning user logic.

