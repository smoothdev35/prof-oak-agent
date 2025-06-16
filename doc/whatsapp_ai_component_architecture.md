# WhatsApp AI Agent - Component Architecture (Mermaid)

```mermaid
graph TD
    subgraph Messaging Platform
        WA[WhatsApp User]
    end

    subgraph Webhook & Routing Layer
        WH[Webhook Endpoint (Strapi Controller)]
    end

    subgraph Core Application Logic
        Logic[Message Processor]
        CM[Command Mapper]
        AI[Professor Oak Prompt Handler (OpenAI)]
        Poke[PokeAPI Adapter]
    end

    subgraph Database
        DB[(Strapi DB - UserAgent, Conversation, Message)]
    end

    WA-->|Webhook POST|WH
    WH-->|Extract + Dispatch|Logic
    Logic-->|Query + Create|DB
    Logic-->|First-Time|AI
    Logic-->|Pokemon Query|CM
    CM-->|API Call|Poke
    Poke-->|JSON Response|CM
    CM-->|Compose Reply|AI
    AI-->|Final Reply|Logic
    Logic-->|Save Messages|DB
    Logic-->|Send Reply|WH
    WH-->|WhatsApp API|WA
```

> This diagram illustrates the high-level interaction between components in the system. The application core orchestrates user message processing, AI generation, and Pokémon data lookup.

