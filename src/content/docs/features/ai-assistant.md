---
title: AI Assistant
description: GPT-4o powered assistant with a curated Polish e-commerce knowledge base of 53+ documents and RAG-based semantic search.
---

## Overview

The AI Assistant is a GPT-4o powered conversational tool built on a curated knowledge base of 53+ documents covering Polish e-commerce topics. It uses Retrieval Augmented Generation (RAG) with Pinecone vector embeddings to deliver precise, contextual answers grounded in verified information rather than generic AI output. Ask about niche finding, Amazon fees, listing conversion, supplier sourcing, and more.

## Key Features

- **GPT-4o backbone** — fast, accurate language model tuned for e-commerce Q&A.
- **53+ curated knowledge documents** — covering Allegro strategy, Amazon selling, supplier sourcing, tax, legal, and logistics topics specific to the Polish market.
- **RAG (Retrieval Augmented Generation)** — every answer is grounded in relevant documents, reducing hallucination and increasing reliability.
- **Pinecone vector embeddings** — semantic search finds the most relevant knowledge chunks even when your question uses different wording than the source material.
- **Suggested questions** — pre-built prompts for common tasks like finding a niche, understanding Amazon fees, improving listing conversion, and sourcing from China.
- **Conversation history** — continue previous chats without losing context.

## How It Works

1. Open the **AI Assistant** from the dashboard or sidebar.
2. Type a question in natural language — for example, "What are the best niches on Allegro under 100 PLN?" or "How do I calculate Amazon FBA fees for Poland?"
3. The system converts your question into a vector embedding and searches the Pinecone index for the most relevant knowledge documents.
4. Retrieved documents are injected into the GPT-4o prompt as context, and the model generates an answer grounded in that information.
5. The response includes source references so you can verify the underlying data.
6. Ask follow-up questions in the same conversation thread to dig deeper.

## Availability

| Feature | Free | Pro | Business |
|---|---|---|---|
| Queries per day | 10 | Unlimited | Unlimited |
| Knowledge base access | Full | Full | Full |
| Conversation history | 7 days | 90 days | Unlimited |
| Suggested questions | Included | Included | Included |
| API access | — | — | Included |
| Priority response speed | — | Included | Included |

## Related Features

- [Legal Guides](/features/legal-guides) — browse the full knowledge base directly when you prefer reading over chatting.
- [Niche Analysis](/features/niche-analysis) — get data-driven niche scores to complement the AI Assistant's strategic advice.
- [Supplier Database](/features/supplier-database) — find suppliers the assistant recommends.
