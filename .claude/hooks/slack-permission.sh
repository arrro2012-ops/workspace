#!/bin/bash
# Claude Code 권한 요청 시 Slack 알림 전송

# .env.local에서 환경변수 로드
if [ -f "$CLAUDE_PROJECT_DIR/.env.local" ]; then
  export $(grep SLACK_WEBHOOK_URL "$CLAUDE_PROJECT_DIR/.env.local" | xargs)
fi

WEBHOOK_URL="${SLACK_WEBHOOK_URL:-}"

INPUT=$(cat)

TOOL_NAME=$(echo "$INPUT" | jq -r '.tool_name // "알 수 없음"')
COMMAND=$(echo "$INPUT" | jq -r '.tool_input.command // .tool_input.file_path // ""')

if [ -n "$COMMAND" ]; then
  TEXT="🔐 *[권한 요청]* Claude Code가 허가를 기다리고 있어요!\n*도구*: \`${TOOL_NAME}\`\n*내용*: \`${COMMAND}\`"
else
  TEXT="🔐 *[권한 요청]* Claude Code가 \`${TOOL_NAME}\` 도구 사용 허가를 요청합니다."
fi

curl -s -X POST "$WEBHOOK_URL" \
  -H "Content-Type: application/json" \
  -d "{\"text\": \"${TEXT}\"}"

exit 0
