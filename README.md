# Lochagos Voice

Real-time conversational AI phone system for Lochagos, powered by ElevenLabs Conversational AI + Twilio.

## Architecture

```
Caller → Twilio (+1 945-300-2848) → ElevenLabs ConvAI → Lochagos Agent
                                         ↕
                                    Claude (LLM)
                                         ↕
                                  ElevenLabs TTS
                                  (Lochagos voice)
```

No server needed. ElevenLabs handles:
- Real-time speech-to-text (ASR)
- LLM reasoning via Claude
- Text-to-speech with Lochagos voice
- Natural turn-taking and interruption handling
- Twilio integration for phone calls

## Phone Number

**+1 (945) 300-2848** — Call anytime to talk to Lochagos.

## Outbound Calls

```bash
# Call someone
node call.js +19454442992

# Call with custom greeting
node call.js +19454442992 Hey, this is Lochagos calling about the project update.
```

## Web Widget

Embed on any website:
```html
<elevenlabs-convai agent-id="agent_8601kh74vhzxene9bk4dzm26xtp8"></elevenlabs-convai>
<script src="https://elevenlabs.io/convai-widget/index.js" async type="text/javascript"></script>
```

## Configuration

| Key | Value |
|-----|-------|
| Agent ID | `agent_8601kh74vhzxene9bk4dzm26xtp8` |
| Phone Number ID | `phnum_1901kh74whpqea69wxp6b0f0mk35` |
| Voice | Lochagos (custom ElevenLabs voice) |
| Phone | +1 (945) 300-2848 |
| Provider | Twilio → ElevenLabs ConvAI |

## Costs

- Twilio: ~$1.15/mo (number) + $0.02/min (calls)
- ElevenLabs: Free tier includes conversational AI minutes
- No server hosting costs (fully managed by ElevenLabs)
