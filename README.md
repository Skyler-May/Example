# Welcome to your Expo app 👋

# Get started

1. Install dependencies

   ```bash
   pnpm install
   ```

2. Start the app

   ```bash
   pnpm expo start
   ```

# Detailed description:

Problem 1
This project uses a nested navigation structure: top-level Stack → middle-level Tabs → inner Stack.
In this sample project, I rely on the innermost stack layout to display a back button in the header. However, the header's back icon is rendered incompletely.
I'm not sure whether this is a bug in SDK 53.0.7 or caused by something else.
Notably, this issue did not appear in SDK 52. (See screenshots 1–4 in the project.)

Problem 2
When using the innermost stack layout, after initializing the project, switching between Tabs screens causes the header to visibly shake (jitter) vertically.
(See the video in the bug folder of the project repository.)

Request
Please help provide solutions or workarounds for the two issues described above.
Thank you!

Problem 3
The issues mentioned above occur consistently across multiple platforms, including:

Android emulator (Expo Go SDK 53)

iOS physical device (Expo Go SDK 53)

Android physical device (Expo Go SDK 53)

```
├─ bug    # The pictures, texts and videos related to the problem are in this folder
│  ├─ Android Emulator - Pixel_8_5554 2025-05-06 23-56-15.mp4
│  ├─ Game.png
│  ├─ Home.png
│  ├─ Profile.png
│  └─ Wallet.png

```
