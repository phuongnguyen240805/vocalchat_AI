├── ./COMMIT_GUIDE.md
├── ./README.md
├── ./client
│   ├── ./client/components.json
│   ├── ./client/electron
│   │   ├── ./client/electron/main.ts
│   │   └── ./client/electron/preload.ts
│   ├── ./client/eslint.config.js
│   ├── ./client/index.html
│   ├── ./client/package-lock.json
│   ├── ./client/package.json
│   ├── ./client/public
│   │   ├── ./client/public/logo.ico
│   │   ├── ./client/public/logo.png
│   │   └── ./client/public/vite.svg
│   ├── ./client/src
│   │   ├── ./client/src/app
│   │   │   ├── ./client/src/app/App.tsx
│   │   │   ├── ./client/src/app/api
│   │   │   │   ├── ./client/src/app/api/auth.ts
│   │   │   │   ├── ./client/src/app/api/index.ts
│   │   │   │   ├── ./client/src/app/api/message.ts
│   │   │   │   ├── ./client/src/app/api/request.ts
│   │   │   │   └── ./client/src/app/api/user.ts
│   │   │   ├── ./client/src/app/layout
│   │   │   │   ├── ./client/src/app/layout/AuthLayout.tsx
│   │   │   │   └── ./client/src/app/layout/ChatLayout.tsx
│   │   │   ├── ./client/src/app/router.ts
│   │   │   └── ./client/src/app/routes.ts
│   │   ├── ./client/src/assets
│   │   │   ├── ./client/src/assets/logo.ico
│   │   │   └── ./client/src/assets/react.svg
│   │   ├── ./client/src/components
│   │   │   ├── ./client/src/components/chat
│   │   │   │   ├── ./client/src/components/chat/ChatArea.tsx
│   │   │   │   ├── ./client/src/components/chat/ChatMessage.tsx
│   │   │   │   ├── ./client/src/components/chat/ConversationDetails.tsx
│   │   │   │   ├── ./client/src/components/chat/Header.tsx
│   │   │   │   ├── ./client/src/components/chat/InputSearch.tsx
│   │   │   │   ├── ./client/src/components/chat/MessageItem.tsx
│   │   │   │   ├── ./client/src/components/chat/MessageList.tsx
│   │   │   │   └── ./client/src/components/chat/Sidebar.tsx
│   │   │   ├── ./client/src/components/common
│   │   │   │   ├── ./client/src/components/common/card
│   │   │   │   │   ├── ./client/src/components/common/card/FriendCard.tsx
│   │   │   │   │   └── ./client/src/components/common/card/UserCard.tsx
│   │   │   │   └── ./client/src/components/common/modal
│   │   │   │       ├── ./client/src/components/common/modal/AddMemberModal.tsx
│   │   │   │       ├── ./client/src/components/common/modal/CreateGroupModal.tsx
│   │   │   │       └── ./client/src/components/common/modal/VoiceModal.tsx
│   │   │   ├── ./client/src/components/ui
│   │   │   │   ├── ./client/src/components/ui/button
│   │   │   │   │   └── ./client/src/components/ui/button/Button.tsx
│   │   │   │   ├── ./client/src/components/ui/input
│   │   │   │   │   └── ./client/src/components/ui/input/input.tsx
│   │   │   │   ├── ./client/src/components/ui/splashcursor
│   │   │   │   │   └── ./client/src/components/ui/splashcursor/SplashCursor.tsx
│   │   │   │   └── ./client/src/components/ui/toast
│   │   │   │       └── ./client/src/components/ui/toast/Toast.tsx
│   │   │   └── ./client/src/components/view
│   │   │       ├── ./client/src/components/view/friends
│   │   │       │   └── ./client/src/components/view/friends/FriendsView.tsx
│   │   │       └── ./client/src/components/view/setting
│   │   │           └── ./client/src/components/view/setting/SettingsView.tsx
│   │   ├── ./client/src/hooks
│   │   │   ├── ./client/src/hooks/useAuth.ts
│   │   │   └── ./client/src/hooks/useToast.ts
│   │   ├── ./client/src/index.css
│   │   ├── ./client/src/main.tsx
│   │   ├── ./client/src/pages
│   │   │   ├── ./client/src/pages/auth
│   │   │   │   ├── ./client/src/pages/auth/Login.tsx
│   │   │   │   ├── ./client/src/pages/auth/ProfileInfo.tsx
│   │   │   │   ├── ./client/src/pages/auth/Register.tsx
│   │   │   │   └── ./client/src/pages/auth/VerifyCode.tsx
│   │   │   └── ./client/src/pages/chat
│   │   │       └── ./client/src/pages/chat/Chat.tsx
│   │   ├── ./client/src/services
│   │   │   ├── ./client/src/services/authService.ts
│   │   │   ├── ./client/src/services/chatService.ts
│   │   │   └── ./client/src/services/socketService.ts
│   │   ├── ./client/src/types
│   │   │   ├── ./client/src/types/api.ts
│   │   │   ├── ./client/src/types/global.d.ts
│   │   │   ├── ./client/src/types/message.ts
│   │   │   ├── ./client/src/types/socket.ts
│   │   │   ├── ./client/src/types/threejs-toys.d.ts
│   │   │   └── ./client/src/types/user.ts
│   │   └── ./client/src/utils
│   │       ├── ./client/src/utils/auth.ts
│   │       └── ./client/src/utils/formatTime.ts
│   ├── ./client/tsconfig.app.json
│   ├── ./client/tsconfig.json
│   ├── ./client/tsconfig.main.json
│   ├── ./client/tsconfig.node.json
│   ├── ./client/tsconfig.preload.json
│   └── ./client/vite.config.ts
├── ./server
│   ├── ./server/eslint.config.js
│   ├── ./server/package-lock.json
│   ├── ./server/package.json
│   ├── ./server/prettier.config.js
│   ├── ./server/src
│   │   ├── ./server/src/config
│   │   │   └── ./server/src/config/env.config.ts
│   │   ├── ./server/src/controllers
│   │   │   ├── ./server/src/controllers/auth.controller.ts
│   │   │   ├── ./server/src/controllers/message.controller.ts
│   │   │   └── ./server/src/controllers/user.controller.ts
│   │   ├── ./server/src/libs
│   │   │   ├── ./server/src/libs/ai
│   │   │   │   ├── ./server/src/libs/ai/speechToText.ts
│   │   │   │   └── ./server/src/libs/ai/textToSpeech.ts
│   │   │   ├── ./server/src/libs/db.ts
│   │   │   ├── ./server/src/libs/hash.ts
│   │   │   ├── ./server/src/libs/mail.ts
│   │   │   └── ./server/src/libs/otp.ts
│   │   ├── ./server/src/middlewares
│   │   │   ├── ./server/src/middlewares/auth.middleware.ts
│   │   │   └── ./server/src/middlewares/upload.middleware.ts
│   │   ├── ./server/src/models
│   │   │   ├── ./server/src/models/conversation.model.ts
│   │   │   ├── ./server/src/models/friend.model.ts
│   │   │   ├── ./server/src/models/message.model.ts
│   │   │   ├── ./server/src/models/otp.model.ts
│   │   │   └── ./server/src/models/user.model.ts
│   │   ├── ./server/src/routes
│   │   │   ├── ./server/src/routes/auth.route.ts
│   │   │   ├── ./server/src/routes/index.route.ts
│   │   │   ├── ./server/src/routes/message.route.ts
│   │   │   └── ./server/src/routes/user.route.ts
│   │   ├── ./server/src/server.ts
│   │   ├── ./server/src/services
│   │   │   ├── ./server/src/services/auth.service.ts
│   │   │   ├── ./server/src/services/message.service.ts
│   │   │   ├── ./server/src/services/socket.service.ts
│   │   │   └── ./server/src/services/user.service.ts
│   │   └── ./server/src/types
│   │       ├── ./server/src/types/data.ts
│   │       ├── ./server/src/types/express.d.ts
│   │       ├── ./server/src/types/message.ts
│   │       ├── ./server/src/types/socket.ts
│   │       └── ./server/src/types/user.ts
│   ├── ./server/tsconfig.json
│   └── ./server/uploads
└── ./whisper-local
    ├── ./whisper-local/Dockerfile
    ├── ./whisper-local/__pycache__
    │   └── ./whisper-local/__pycache__/app.cpython-312.pyc
    ├── ./whisper-local/app.py
    └── ./whisper-local/requirements.txt