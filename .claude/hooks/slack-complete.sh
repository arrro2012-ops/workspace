#!/bin/bash
# Claude Code 작업 완료 시 Slack 알림 전송

# .env.local에서 환경변수 로드
if [ -f "$CLAUDE_PROJECT_DIR/.env.local" ]; then
  export $(grep SLACK_WEBHOOK_URL "$CLAUDE_PROJECT_DIR/.env.local" | xargs)
fi

WEBHOOK_URL="${SLACK_WEBHOOK_URL:-}"

INPUT=$(cat)

# 무한 루프 방지: stop_hook_active가 true이면 종료
STOP_HOOK_ACTIVE=$(echo "$INPUT" | jq -r '.stop_hook_active // false')
if [ "$STOP_HOOK_ACTIVE" = "true" ]; then
  exit 0
fi

LAST_MESSAGE=$(echo "$INPUT" | jq -r '.last_assistant_message // ""' | head -c 100)

if [ -n "$LAST_MESSAGE" ]; then
  TEXT="✅ *[작업 완료]* Claude Code 작업이 끝났어요!\n> ${LAST_MESSAGE}..."
else
  TEXT="✅ *[작업 완료]* Claude Code 작업이 끝났어요!"
fi

curl -s -X POST "$WEBHOOK_URL" \
  -H "Content-Type: application/json" \
  -d "{\"text\": \"${TEXT}\"}"

exit 0
