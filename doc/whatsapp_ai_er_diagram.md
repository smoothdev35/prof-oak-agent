# WhatsApp AI Agent - Entity Relationship Diagram

```mermaid
erDiagram
    UserAgent ||--o{ Conversation : has
    Conversation ||--o{ Message : contains
    UserAgent {
        string countryCode
        string localNumber
        string fullNumber
    }
    Conversation {
        datetime startedAt
        datetime endedAt
        string title
    }
    Message {
        enum role
        string content
        datetime timestamp
    }
```

