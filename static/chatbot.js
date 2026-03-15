// ─────────────────────────────────────────────────────────────
//  PixelBot AI  –  chatbot.js
//  Enhanced responses for Login-page specific user questions
// ─────────────────────────────────────────────────────────────

// ── Helper: render a CTA button inside a bot message ─────────
function makeCTA(label, action) {
    return `<button class="bot-cta-btn" onclick="${action}">${label}</button>`;
}

// ── Knowledge Base ────────────────────────────────────────────
const chatResponses = {

    /* ── Greetings ────────────────────────────────────────── */
    "hello": `Hello! 👋 Welcome to <strong>PixelFoodie</strong>. How can I help you today?<br><br>
              You can ask me about:<br>
              • 🔑 Forgot password / account recovery<br>
              • 🔒 Locked account / login trouble<br>
              • 📧 Reset email not received<br>
              • 👤 Finding your username<br>
              • 📱 Lost phone / can't get MFA code<br>
              • 🛡️ Suspicious login / account security<br>
              • 🔐 Staying safe while logged in<br>
              • 🤝 Talk to a real support agent<br>
              • 🛠️ Page not loading / technical issues`,

    "hi there": `Hi there! 😊 I'm PixelBot, your friendly login assistant.<br><br>
                 I can help you get back into your account, answer security questions, or just cheer you on!<br>
                 What's going on today?`,

    "having trouble": `Oh no, I'm sorry to hear that! 😔 I'd love to help.<br><br>
                       Are you seeing an <strong>error message</strong>, or is something else going wrong?<br><br>
                       • Type <em>"error message"</em> to describe what you see<br>
                       • Type <em>"forgot password"</em> if you can't remember it<br>
                       • Type <em>"help"</em> for a full list of what I can do`,

    "trouble logging in": `Oh no, I'm sorry to hear that! 😔 I'd love to help.<br><br>
                            Are you getting an <strong>error message</strong>, or is the Login button just not responding?<br><br>
                            ${makeCTA('🔑 Reset Password', "window.location.href='forgot-password.html'")}
                            ${makeCTA('🛠️ Troubleshooting Tips', "showTroubleshootingGuide()")}`,

    "can't log in": `Let's get you back in! 🔓<br><br>
                     A few things we can check:<br>
                     • Is the email/password correct? (Try copy-pasting to avoid typos)<br>
                     • Is Caps Lock on? 🔠<br>
                     • Did you sign up via <strong>Google</strong> instead?<br><br>
                     ${makeCTA('🔑 Forgot Password?', "window.location.href='forgot-password.html'")}`,

    "login button not working": `Hmm, sounds like the button isn't responding! 🖱️<br><br>
                                  Try these quick fixes:<br>
                                  1. <strong>Refresh</strong> the page (<kbd>Ctrl+R</kbd>)<br>
                                  2. Try a <strong>different browser</strong><br>
                                  3. Disable any <strong>browser extensions</strong> temporarily<br><br>
                                  ${makeCTA('📖 Troubleshooting Guide', "showTroubleshootingGuide()")}`,

    /* ── Password Forgotten (Friendly Tone) ──────────────── */
    "can't remember my password": `It happens to the best of us! 😅 No worries at all.<br><br>
                                    Click below and I'll help you send a reset link straight to your inbox. Easy!<br><br>
                                    ${makeCTA('🔗 Send Reset Link', "window.location.href='forgot-password.html'")}`,

    "can't remember password": `No stress — totally normal! 😄<br><br>
                                  Click the link below, enter your registered email, and we'll send you a fresh password reset link instantly.<br><br>
                                  ${makeCTA('🔗 Reset My Password', "window.location.href='forgot-password.html'")}`,

    "i forgot my password": `It happens to the best of us! 😅 No worries at all.<br><br>
                              Click the button below — enter your email, and I'll get a reset link sent to your inbox right away.<br><br>
                              ${makeCTA('🔗 Forgot Password Link', "window.location.href='forgot-password.html'")}`,

    /* ── Account Not Found ────────────────────────────────── */
    "account doesn't exist": `Hmm, let's double-check the spelling! 🔍<br><br>
                               Sometimes a tiny typo hides the account. Things to try:<br>
                               • Check for a <strong>space</strong> before or after the email<br>
                               • Make sure you're using the correct email — not an alias<br>
                               • Did you sign up using your <strong>Google or Apple ID</strong> instead?<br><br>
                               ${makeCTA('🔍 Try Google Login', "document.getElementById('googleModal') && document.getElementById('googleModal').classList.add('show')")}`,

    "account not found": `Let's track it down! 🔍<br><br>
                          Double-check that you're using the right email — especially if you have multiple addresses.<br><br>
                          If you signed up with <strong>Google</strong>, try the Google sign-in button instead!<br><br>
                          ${makeCTA('🔍 Try Google Login', "document.getElementById('googleModal') && document.getElementById('googleModal').classList.add('show')")}`,

    "doesn't exist": `Hmm, that email might not be registered yet. 🔍<br><br>
                       • Check for any <strong>spelling mistakes</strong><br>
                       • Try your <strong>Google or Apple</strong> account instead<br>
                       • Or create a brand new account!<br><br>
                       ${makeCTA('✨ Sign Up Now', "toggleMode ? toggleMode() : null")}`,

    /* ── Missing 6-Digit Login Code ───────────────────────── */
    "6-digit": `Check your <strong>Promotions</strong> or <strong>Spam</strong> folder — those codes like to play hide-and-seek! 🙈<br><br>
                If it's still missing after a minute, click below to get a fresh one:<br><br>
                ${makeCTA('🔄 Resend Code', "resendResetEmail()")}`,

    "login code": `Your 6-digit code should arrive within a minute. 📬<br><br>
                   If you haven't seen it yet:<br>
                   1. Check your <strong>Spam</strong> or <strong>Promotions</strong> folder<br>
                   2. Make sure the email address is correct<br>
                   3. Still nothing? Click Resend!<br><br>
                   ${makeCTA('🔄 Resend Code', "resendResetEmail()")}`,

    "6 digit code": `Those codes can be sneaky! 🙈 Check your <strong>Spam</strong> or <strong>Promotions</strong> folder first.<br><br>
                     Waited a minute and still nothing?<br><br>
                     ${makeCTA('🔄 Resend My Code', "resendResetEmail()")}`,

    "where is my code": `It's probably hiding in your <strong>Spam</strong> or <strong>Promotions</strong> folder! 🙈<br><br>
                         Allow up to <strong>60 seconds</strong> for delivery. If it still hasn't arrived:<br><br>
                         ${makeCTA('🔄 Resend Code', "resendResetEmail()")}`,

    /* ── Stay Logged In / Safety ──────────────────────────── */
    "stay logged in": `Great question! 💻<br><br>
                        • <strong>Your personal laptop?</strong> Go for it — it's safe to stay logged in!<br>
                        • <strong>Library, work, or a friend's device?</strong> Uncheck the "Stay logged in" box to keep your data safe. 🔐<br><br>
                        Think of it like locking your car — always worth the extra second! 🚗`,

    "safe to stay logged in": `If this is your <strong>personal device</strong>, absolutely — go for it! 💻<br><br>
                                But if you're on a <strong>shared or public computer</strong> (library, school, café), it's much safer to uncheck that box.<br><br>
                                Your data stays extra secure that way. 🔐`,

    "remember me": `The <strong>"Remember Me"</strong> / "Stay logged in" option is safe on your own device. 💻<br><br>
                    However, <strong>never</strong> use it on:<br>
                    • 📚 Library computers<br>
                    • 🏫 School or work machines<br>
                    • 👥 A friend's shared device<br><br>
                    Better safe than sorry! 🔐`,

    /* ── Password Found / Success ─────────────────────────── */
    "found my password": `That's awesome news! 🚀<br><br>
                           Go ahead and jump right back in — you've got this!<br>
                           I'll be right here if you need anything else. <strong>Have a great session!</strong> 🍽️`,

    "never mind": `No problem at all! 😄 I'm always here if you need anything.<br><br>
                    <strong>Enjoy your time on PixelFoodie!</strong> 🍽️`,

    "got it": `Awesome! 🎉 Glad we could sort that out. <strong>Happy cooking!</strong> 👨‍🍳`,

    "i found it": `Woohoo! 🚀 That's the best kind of update!<br><br>
                   Jump back in and enjoy. I'll be here if you need me — <strong>have a wonderful session!</strong> 🍽️`,

    /* ── Talk to a Real Person ────────────────────────────── */
    "real person": `I totally understand — sometimes humans explain things best! 🤝<br><br>
                    I'll connect you to a member of our support team right now.<br><br>
                    ${makeCTA('💬 Contact Support Team', "showSupportContactFlow()")}
                    <br><br><em>Just a moment while we get someone for you...</em>`,

    "talk to a human": `Absolutely! 🤝 I'll connect you to our support team right away.<br><br>
                        ${makeCTA('💬 Reach a Support Agent', "showSupportContactFlow()")}`,

    "speak to someone": `Of course! Let me connect you to a real team member. 🤝<br><br>
                          ${makeCTA('💬 Contact Support Team', "showSupportContactFlow()")}`,

    "human support": `No problem at all! 😊 Our support team is happy to help with anything I can't handle.<br><br>
                      ${makeCTA('💬 Talk to a Real Person', "showSupportContactFlow()")}`,

    "contact support": `Sure! Let me get our support team on the line for you. 🤝<br><br>
                         ${makeCTA('💬 Contact Support Team', "showSupportContactFlow()")}`,

    "hi": `Hi there! 👋 Need help with your login, or looking for a recipe?<br>
           Type your question and I'll do my best to assist!`,

    "hey": `Hey! 🙌 What can I help you with today?`,

    /* ── Forgot Password ──────────────────────────────────── */
    "forgot password": `No problem! Resetting your password is quick and easy. 🔑<br><br>
                        Please enter your registered email address on the reset page and we'll send you a secure link.<br><br>
                        ${makeCTA('🔗 Go to Reset Password', "window.location.href='forgot-password.html'")}`,

    "reset password": `To reset your password, click the link below and enter your registered email address. We'll send you a secure reset link within a few minutes. ✉️<br><br>
                       ${makeCTA('🔗 Reset My Password', "window.location.href='forgot-password.html'")}`,

    "forgot": `Don't worry — it happens! 😊<br>
               Click below to go to the <strong>Forgot Password</strong> page and enter your email address.<br><br>
               ${makeCTA('🔗 Forgot Password?', "window.location.href='forgot-password.html'")}`,

    "change password": `Want to change your password? Click below and follow the instructions on the reset page.<br><br>
                        ${makeCTA('🔗 Change Password', "window.location.href='forgot-password.html'")}`,

    /* ── Account Locked ───────────────────────────────────── */
    "account locked": `It looks like your account was <strong>locked</strong> after too many failed login attempts. 🔒<br><br>
                       To unlock it, we'll need to verify your identity using a <strong>6-digit code</strong> sent to your registered phone or email.<br><br>
                       ${makeCTA('📱 Verify My Identity (2FA)', "showTwoFactorFlow()")}`,

    "locked account": `Your account has been temporarily locked for security. 🔒<br><br>
                       We'll send a 6-digit verification code to your registered contact to confirm it's really you.<br><br>
                       ${makeCTA('📱 Unlock My Account', "showTwoFactorFlow()")}`,

    "too many attempts": `Too many incorrect login attempts lock your account temporarily for your safety. 🔐<br><br>
                          To unlock, please verify your identity via the 2FA code sent to your phone or email.<br><br>
                          ${makeCTA('📱 Verify & Unlock', "showTwoFactorFlow()")}`,

    /* ── Lost Phone / MFA Issues ──────────────────────────── */
    "lost my phone": `I understand how stressful that is! 😟 Here's what you can do:<br><br>
                      <strong>Option 1 — Use Backup Recovery Codes</strong><br>
                      Did you save your backup codes when you set up 2FA? If yes, enter one below.<br><br>
                      <strong>Option 2 — Manual Identity Verification</strong><br>
                      If you don't have backup codes, our security team can verify your identity manually.<br><br>
                      ${makeCTA('🔐 Use a Backup Code', "showBackupCodeFlow()")}
                      ${makeCTA('🛡️ Manual Verification', "showManualVerificationFlow()")}`,

    "can't get the mfa code": `No access to your MFA device? Don't worry! 📵<br><br>
                                • Have your <strong>Backup Recovery Codes</strong>? Use one to log in.<br>
                                • Lost your phone? We can run a <strong>manual identity check</strong> with our security team.<br><br>
                                ${makeCTA('🔐 Use Backup Code', "showBackupCodeFlow()")}
                                ${makeCTA('🛡️ Manual Verification', "showManualVerificationFlow()")}`,

    "can't get mfa": `Unable to receive your MFA code? 📵<br><br>
                      If you've lost your phone or can't access your authenticator app:<br>
                      1. Try using your saved <strong>Backup Recovery Codes</strong><br>
                      2. Request <strong>manual identity verification</strong> from our security team<br><br>
                      ${makeCTA('🔐 Use Backup Code', "showBackupCodeFlow()")}
                      ${makeCTA('🛡️ Manual Verification', "showManualVerificationFlow()")}`,

    "backup code": `Backup Recovery Codes are one-time codes generated when you first set up 2FA. 🔐<br><br>
                    If you saved them (in a notes app, printed sheet, or password manager), enter one below to regain access:<br><br>
                    ${makeCTA('🔐 Enter Backup Code', "showBackupCodeFlow()")}`,

    /* ── Frequent MFA Prompt ──────────────────────────────── */
    "asked for a code every time": `This MFA check happens every login to keep your account safe. 🛡️<br><br>
                                    However, if you're on a <strong>personal / trusted device</strong>, you can skip this step for 30 days!<br><br>
                                    ✅ During your next login, check the box:<br>
                                    <em>"<strong>Trust this device for 30 days</strong>"</em><br><br>
                                    This won't appear on shared or public computers for security.`,

    "why mfa every time": `MFA is requested every login for your security. 🔒<br><br>
                            To avoid this on your personal device:<br>
                            ✅ Check <strong>"Trust this device for 30 days"</strong> during your next login.<br><br>
                            <em>Note: Never use this option on a shared or public computer!</em>`,

    "mfa every login": `You're being asked for an MFA code each time you log in as a security measure. 🛡️<br><br>
                        <strong>To reduce MFA prompts on your personal device:</strong><br>
                        → Check <em>"Trust this device for 30 days"</em> at the next login screen.<br><br>
                        This will skip MFA on that device for 30 days.`,

    "why code every time": `That verification code is your Multi-Factor Authentication (MFA) — it protects your account. 🔐<br><br>
                            On your <strong>own device</strong>, tick the box:<br>
                            ✅ <em>"Trust this device for 30 days"</em><br><br>
                            You won't be asked again for a month on that device.`,

    /* ── Suspicious Login / Account Security ─────────────── */
    "someone else is trying": `🚨 <strong>Security Alert Raised!</strong><br><br>
                               Our security team has been notified. To protect your account right now:<br><br>
                               1. <strong>Log out of all devices immediately</strong><br>
                               2. <strong>Reset your password</strong> using a strong, unique one<br>3. Review your recent login activity<br><br>
                               ${makeCTA('🚪 Log Out All Devices', "logOutAllDevices()")}
                               ${makeCTA('🔑 Reset Password Now', "window.location.href='forgot-password.html'")}`,

    "suspicious login": `⚠️ <strong>Suspicious Activity Detected!</strong><br><br>
                         If you think someone is accessing your account without permission:<br><br>
                         1. <strong>Log out of all active sessions</strong> immediately<br>
                         2. <strong>Reset your password</strong> right away<br>
                         3. Enable or review your <strong>2FA settings</strong><br><br>
                         ${makeCTA('🚪 Log Out All Devices', "logOutAllDevices()")}
                         ${makeCTA('🔑 Reset Password Now', "window.location.href='forgot-password.html'")}`,

    "account hacked": `🚨 <strong>Immediate Action Required!</strong><br><br>
                       If your account has been compromised:<br><br>
                       ✅ Step 1: Log out of all devices<br>
                       ✅ Step 2: Reset your password immediately<br>
                       ✅ Step 3: Check your email for any unauthorised changes<br>
                       ✅ Step 4: Contact our security team<br><br>
                       ${makeCTA('🚪 Log Out All Devices', "logOutAllDevices()")}
                       ${makeCTA('🔑 Reset Password Now', "window.location.href='forgot-password.html'")}`,

    "unauthorized access": `🔴 <strong>Security Alert!</strong><br><br>
                             Unauthorised access is a serious concern. We recommend:<br><br>
                             1. Immediately <strong>log out of all devices</strong><br>
                             2. <strong>Change your password</strong> to a strong, unique one<br>
                             3. Enable <strong>Two-Factor Authentication</strong> if not already active<br><br>
                             ${makeCTA('🚪 Log Out All Devices', "logOutAllDevices()")}
                             ${makeCTA('🔑 Reset Password', "window.location.href='forgot-password.html'")}`,

    /* ── Reset Email Not Received ─────────────────────────── */
    "didn't get": `Sometimes reset emails land in your <strong>Spam</strong> or <strong>Junk</strong> folder. 📬<br><br>
                   Please check there first, or wait <strong>2–3 minutes</strong>. Still nothing?<br><br>
                   ${makeCTA('🔄 Resend Reset Email', "resendResetEmail()")}`,

    "didn't receive": `If you haven't received the reset email, it may be in your <strong>Spam</strong> or <strong>Promotions</strong> folder. 📬<br><br>
                       Still can't find it after 3 minutes? Click below to resend it.<br><br>
                       ${makeCTA('🔄 Resend Email', "resendResetEmail()")}`,

    "not received email": `No email yet? Here's what to try:<br>
                           1. Check your <strong>Spam / Junk</strong> folder<br>
                           2. Make sure you used the correct email address<br>
                           3. Wait up to <strong>3 minutes</strong><br><br>
                           If it still hasn't arrived, click below:<br>
                           ${makeCTA('🔄 Resend Email', "resendResetEmail()")}`,

    "reset email": `Haven't received the password reset email? 📭<br><br>
                    • Check your <strong>Spam/Junk</strong> folder first<br>
                    • Allow up to <strong>2–3 minutes</strong><br>
                    • Make sure the email address is correct<br><br>
                    ${makeCTA('🔄 Resend Reset Email', "resendResetEmail()")}`,

    /* ── Find Username ────────────────────────────────────── */
    "username": `Forgot your username? No worries! 🔍<br><br>
                 Enter the <strong>phone number</strong> or <strong>secondary email</strong> associated with your account and we'll find it for you.<br><br>
                 ${makeCTA('🔍 Find My Username', "showFindUsernameFlow()")}`,

    "forgot username": `Let's find your username! 🔍<br><br>
                        Please provide the <strong>phone number</strong> or <strong>backup email</strong> linked to your account.<br><br>
                        ${makeCTA('🔍 Find My Username', "showFindUsernameFlow()")}`,

    "find username": `To recover your username, enter the email or phone number registered with your account.<br><br>
                      ${makeCTA('🔍 Find Username Tool', "showFindUsernameFlow()")}`,

    /* ── Page Technical Issues ────────────────────────────── */
    "page is frozen": `Sorry to hear the page isn't responding! 😟 Here's what to try:<br><br>
                       1. Press <kbd>Ctrl+R</kbd> (Windows) or <kbd>Cmd+R</kbd> (Mac) to <strong>refresh</strong><br>
                       2. <strong>Clear your browser cache</strong>: Settings → Clear browsing data<br>
                       3. Try a different browser (Chrome, Firefox, Edge)<br>
                       4. Disable browser extensions temporarily<br><br>
                       ${makeCTA('📖 Troubleshooting Guide', "showTroubleshootingGuide()")}`,

    "not loading": `The page seems to be having trouble loading. 😓 Try these steps:<br><br>
                    1. <strong>Refresh</strong> the page (<kbd>Ctrl+R</kbd> / <kbd>Cmd+R</kbd>)<br>
                    2. Check your <strong>internet connection</strong><br>
                    3. Clear your browser <strong>cache and cookies</strong><br>
                    4. Try an <strong>incognito/private</strong> window<br><br>
                    ${makeCTA('📖 Troubleshooting Guide', "showTroubleshootingGuide()")}`,

    "frozen": `If the page is frozen, try refreshing with <kbd>Ctrl+R</kbd> or <kbd>Cmd+R</kbd>. 🔄<br><br>
               Clearing your browser cache often fixes this:<br>
               <strong>Chrome:</strong> Settings → Privacy → Clear browsing data<br><br>
               ${makeCTA('📖 Troubleshooting Guide', "showTroubleshootingGuide()")}`,

    "page not loading": `Having trouble with the page? 🛠️<br><br>
                         • Refresh: <kbd>Ctrl+R</kbd> / <kbd>Cmd+R</kbd><br>
                         • Clear cache & cookies<br>
                         • Try a different browser<br>
                         • Disable ad-blockers temporarily<br><br>
                         ${makeCTA('📖 Troubleshooting Guide', "showTroubleshootingGuide()")}`,

    "not working": `Sorry it's not working! 😔 Let's troubleshoot:<br><br>
                    1. <strong>Hard refresh</strong>: <kbd>Ctrl+Shift+R</kbd><br>
                    2. Check your <strong>internet connection</strong><br>
                    3. Try <strong>Incognito mode</strong><br>
                    4. Check if the issue persists in another browser<br><br>
                    ${makeCTA('📖 Troubleshooting Guide', "showTroubleshootingGuide()")}`,

    /* ── General Login Help ───────────────────────────────── */
    "login": `To log in, enter your <strong>email</strong> and <strong>password</strong> in the fields above and click <strong>Log In</strong>.<br><br>
              Don't have an account? Click <strong>Sign Up</strong> at the bottom of the card.`,

    "password": `Having trouble with your password?<br><br>
                 • If you <strong>forgot</strong> it → ${makeCTA('Reset Password', "window.location.href='forgot-password.html'")}<br>
                 • If your <strong>account is locked</strong>, type <em>"my account is locked"</em> for help.`,

    "sign up": `To create a new account, click the <strong>Sign Up</strong> link at the bottom of the login card. 🎉<br><br>
                It's free and takes less than a minute!`,

    "register": `Registering is easy! Click the <strong>Sign Up</strong> link below the login button to create your account.`,

    /* ── Recipes & General Info ───────────────────────────── */
    "what is pixelfoodie": `PixelFoodie 🍽️ is your <strong>premium culinary destination</strong> for professional recipes, cooking tips, and culinary inspiration.<br><br>
                             Log in to explore our full recipe collection!`,

    "recipes": `We have a huge collection of recipes! 🍳<br><br>
                Try asking: <em>"Do you have butter chicken?"</em> or <em>"Show me vegan recipes"</em><br>
                Log in first to unlock the full recipe library.`,

    "guest": `You can explore PixelFoodie as a <strong>Guest User</strong>! 👀<br><br>
              Click the <strong>Sign in with Google</strong> button and choose <em>"Guest User"</em> from the list.`,

    /* ── Help / Overview ──────────────────────────────────── */
    "help": `Here's what I can help you with: 🤖<br><br>
             • 🔑 <strong>Forgot Password</strong> — type <em>"forgot password"</em><br>
             • 🔒 <strong>Locked Account</strong> — type <em>"account locked"</em><br>
             • 📧 <strong>No Reset Email</strong> — type <em>"didn't get reset email"</em><br>
             • 👤 <strong>Find Username</strong> — type <em>"what is my username"</em><br>
             • 📱 <strong>Lost Phone / No MFA Code</strong> — type <em>"lost my phone"</em><br>
             • 🔁 <strong>MFA Every Login?</strong> — type <em>"why am I asked for a code every time"</em><br>
             • 🚨 <strong>Suspicious Login</strong> — type <em>"someone is trying to log in"</em><br>
             • 💻 <strong>Safe to Stay Logged In?</strong> — type <em>"is it safe to stay logged in"</em><br>
             • 🤝 <strong>Talk to a Real Person</strong> — type <em>"can I talk to a real person"</em><br>
             • 🛠️ <strong>Page Issues</strong> — type <em>"page is frozen"</em><br>
             • 🍽️ <strong>Recipes</strong> — type <em>"show me recipes"</em>`,

    /* ── Default / Fallback ───────────────────────────────── */
    "default": `I'm not sure I understand that. 🤔<br><br>
                Try asking about: <em>forgot password, trouble logging in, account locked, missing code,</em> or <em>page not loading</em>.<br><br>
                Type <strong>"help"</strong> to see everything I can do, or type <strong>"talk to a real person"</strong> to reach our support team.`
};

// ── Core Matching Logic ───────────────────────────────────────
function generateAIResponse(message) {
    const lowerMsg = message.toLowerCase().trim();

    // --- PRIORITY 1: Multi-word / phrase matching (longest match wins) ---
    const phrases = Object.keys(chatResponses)
        .filter(k => k !== 'default')
        .sort((a, b) => b.length - a.length); // longest first

    for (const phrase of phrases) {
        if (lowerMsg.includes(phrase)) {
            return chatResponses[phrase];
        }
    }

    // --- PRIORITY 2: Recipe search (smart feature) ---
    if (typeof recipes !== 'undefined' && Array.isArray(recipes)) {
        const foundRecipes = recipes.filter(r =>
            lowerMsg.includes(r.title.toLowerCase()) ||
            (r.categories && r.categories.some(c => lowerMsg.includes(c.toLowerCase()))) ||
            lowerMsg.includes("recommend") || lowerMsg.includes("suggest")
        );

        if (foundRecipes.length > 0) {
            const top = foundRecipes.slice(0, 3);
            let response = "🍽️ I found some recipes you might like:<br>";
            top.forEach(r => {
                response += `• <b>${r.title}</b> (${r.time})<br>`;
            });
            if (foundRecipes.length > 3) {
                response += `...and <strong>${foundRecipes.length - 3} more!</strong> Log in to see them all.`;
            }
            return response;
        }
    }

    // --- PRIORITY 3: Default fallback ---
    return chatResponses['default'];
}

// ── Interactive Flow Handlers ─────────────────────────────────

/** Show a simple 2FA simulation prompt inside chat */
function showTwoFactorFlow() {
    addMessageToChat('bot',
        `📱 <strong>Identity Verification</strong><br><br>
         A 6-digit code has been sent to your registered phone/email.<br>
         Enter the code below to unlock your account:<br><br>
         <input id="twoFactorInput" type="text" maxlength="6" placeholder="Enter 6-digit code"
                style="padding:0.5rem 0.8rem; border-radius:8px; border:1px solid #555;
                       background:#2a2a2a; color:white; font-size:1rem; width:160px; text-align:center; letter-spacing:4px;">
         &nbsp;
         <button class="bot-cta-btn" onclick="verifyTwoFactorCode()" style="margin-top:8px;">✅ Verify</button>`
    );
}

function verifyTwoFactorCode() {
    const input = document.getElementById('twoFactorInput');
    const code = input ? input.value.trim() : '';
    if (code.length === 6 && /^\d{6}$/.test(code)) {
        addMessageToChat('bot',
            `✅ <strong>Identity Verified!</strong><br><br>
             Your account has been unlocked. Please log in with your credentials.`
        );
    } else {
        addMessageToChat('bot',
            `⚠️ Please enter a valid <strong>6-digit numeric code</strong>.`
        );
    }
}

/** Simulate resending the reset email */
function resendResetEmail() {
    const email = document.getElementById('email') ? document.getElementById('email').value.trim() : '';
    if (email) {
        addMessageToChat('bot',
            `✅ Reset email <strong>resent</strong> to <em>${email}</em>!<br><br>
             Please check your inbox (and Spam/Junk folder) in a few minutes.`
        );
    } else {
        addMessageToChat('bot',
            `📧 Please enter the email address you registered with in the <strong>Email</strong> field above, then click Resend.<br><br>
             ${makeCTA('🔗 Go to Reset Password Page', "window.location.href='forgot-password.html'")}`
        );
    }
}

/** Show a find-username flow */
function showFindUsernameFlow() {
    addMessageToChat('bot',
        `🔍 <strong>Find Your Username</strong><br><br>
         Please enter the phone number or backup email linked to your account:<br><br>
         <input id="usernameRecoveryInput" type="text" placeholder="Phone or backup email"
                style="padding:0.5rem 0.8rem; border-radius:8px; border:1px solid #555;
                       background:#2a2a2a; color:white; font-size:0.9rem; width:220px;">
         &nbsp;
         <button class="bot-cta-btn" onclick="lookupUsername()" style="margin-top:8px;">🔍 Find</button>`
    );
}

function lookupUsername() {
    const input = document.getElementById('usernameRecoveryInput');
    const val = input ? input.value.trim() : '';
    if (val.length > 3) {
        addMessageToChat('bot',
            `✅ We've triggered a username lookup for <em>${val}</em>.<br><br>
             Your username will be sent to your registered contact within a few minutes.`
        );
    } else {
        addMessageToChat('bot',
            `⚠️ Please enter a valid phone number or email address to proceed.`
        );
    }
}

/** Show a troubleshooting guide overlay in chat */
function showTroubleshootingGuide() {
    addMessageToChat('bot',
        `📖 <strong>Troubleshooting Guide</strong><br><br>
         <strong>1. Refresh the page</strong><br>
         &nbsp;&nbsp;Windows: <kbd>Ctrl+R</kbd> &nbsp;|&nbsp; Mac: <kbd>Cmd+R</kbd><br><br>
         <strong>2. Hard refresh (bypass cache)</strong><br>
         &nbsp;&nbsp;Windows: <kbd>Ctrl+Shift+R</kbd> &nbsp;|&nbsp; Mac: <kbd>Cmd+Shift+R</kbd><br><br>
         <strong>3. Clear cache & cookies</strong><br>
         &nbsp;&nbsp;Chrome → Settings → Privacy → Clear browsing data<br><br>
         <strong>4. Try Incognito mode</strong><br>
         &nbsp;&nbsp;Chrome: <kbd>Ctrl+Shift+N</kbd><br><br>
         <strong>5. Switch browsers</strong><br>
         &nbsp;&nbsp;Try Chrome, Firefox, or Edge<br><br>
         <strong>6. Check internet connection</strong><br>
         &nbsp;&nbsp;Make sure you're connected to a stable network.<br><br>
         Still having issues? Refresh and try again! 🔄`
    );
}

/** Show a Backup Recovery Code entry form inside chat */
function showBackupCodeFlow() {
    addMessageToChat('bot',
        `🔐 <strong>Enter Backup Recovery Code</strong><br><br>
         Backup codes are one-time-use codes you saved when setting up 2FA.<br>
         Enter one of your saved codes below:<br><br>
         <input id="backupCodeInput" type="text" maxlength="12" placeholder="e.g. A1B2-C3D4-E5F6"
                style="padding:0.5rem 0.8rem; border-radius:8px; border:1px solid #555;
                       background:#2a2a2a; color:white; font-size:0.95rem; width:200px; text-align:center; letter-spacing:2px;">
         &nbsp;
         <button class="bot-cta-btn" onclick="verifyBackupCode()" style="margin-top:8px;">✅ Submit Code</button>`
    );
}

function verifyBackupCode() {
    const input = document.getElementById('backupCodeInput');
    const code = input ? input.value.trim() : '';
    if (code.length >= 6) {
        addMessageToChat('bot',
            `✅ <strong>Backup code accepted!</strong><br><br>
             You're now being verified. Please log in with your email and password to regain full access.`
        );
    } else {
        addMessageToChat('bot',
            `⚠️ That doesn't look like a valid backup code. Please check and try again, or request <strong>Manual Verification</strong>.`
        );
    }
}

/** Trigger a manual identity verification request */
function showManualVerificationFlow() {
    addMessageToChat('bot',
        `🛡️ <strong>Manual Identity Verification</strong><br><br>
         Our security team will verify your identity manually. Please provide your details:<br><br>
         <input id="manualVerifyName" type="text" placeholder="Full Name"
                style="padding:0.5rem 0.8rem; border-radius:8px; border:1px solid #555;
                       background:#2a2a2a; color:white; font-size:0.9rem; width:220px; margin-bottom:6px;"><br>
         <input id="manualVerifyEmail" type="email" placeholder="Registered Email"
                style="padding:0.5rem 0.8rem; border-radius:8px; border:1px solid #555;
                       background:#2a2a2a; color:white; font-size:0.9rem; width:220px;">
         &nbsp;
         <button class="bot-cta-btn" onclick="submitManualVerification()" style="margin-top:8px;">📨 Submit Request</button>`
    );
}

function submitManualVerification() {
    const name = document.getElementById('manualVerifyName') ? document.getElementById('manualVerifyName').value.trim() : '';
    const email = document.getElementById('manualVerifyEmail') ? document.getElementById('manualVerifyEmail').value.trim() : '';
    if (name.length > 1 && email.includes('@')) {
        addMessageToChat('bot',
            `✅ <strong>Request submitted!</strong><br><br>
             Our security team has received your identity verification request for <em>${email}</em>.<br><br>
             You'll receive a confirmation email within <strong>24 hours</strong>. Thank you for your patience!`
        );
    } else {
        addMessageToChat('bot',
            `⚠️ Please fill in both your <strong>Full Name</strong> and <strong>Registered Email</strong> to submit.`
        );
    }
}

/** Log out of all devices (security action) */
function logOutAllDevices() {
    // Clear all session/local auth data
    sessionStorage.removeItem('pixelFoodie_auth');
    sessionStorage.removeItem('pixelFoodie_email');
    sessionStorage.removeItem('pixelFoodie_role');
    sessionStorage.removeItem('pixelFoodie_user');

    addMessageToChat('bot',
        `🚪 <strong>All Sessions Terminated!</strong><br><br>
         You have been logged out of all active devices for your safety. 🔐<br><br>
         Next Step: Please <strong>reset your password immediately</strong> to secure your account.<br><br>
         ${makeCTA('🔑 Reset Password Now', "window.location.href='forgot-password.html'")}`
    );
}

/** Show a Support Contact form — connects user to a real person */
function showSupportContactFlow() {
    addMessageToChat('bot',
        `🤝 <strong>Connect to Support Team</strong><br><br>
         Please fill in your details below and our team will get back to you shortly:<br><br>
         <input id="supportName" type="text" placeholder="Your Name"
                style="padding:0.5rem 0.8rem; border-radius:8px; border:1px solid #555;
                       background:#2a2a2a; color:white; font-size:0.9rem; width:220px; margin-bottom:6px;"><br>
         <input id="supportEmail" type="email" placeholder="Your Email"
                style="padding:0.5rem 0.8rem; border-radius:8px; border:1px solid #555;
                       background:#2a2a2a; color:white; font-size:0.9rem; width:220px; margin-bottom:6px;"><br>
         <textarea id="supportMessage" placeholder="Describe your issue..."
                   style="padding:0.5rem 0.8rem; border-radius:8px; border:1px solid #555;
                          background:#2a2a2a; color:white; font-size:0.9rem; width:220px;
                          height:70px; resize:none;"></textarea>
         <br>
         <button class="bot-cta-btn" onclick="submitSupportRequest()" style="margin-top:8px;">📨 Send to Support</button>`
    );
}

function submitSupportRequest() {
    const name = document.getElementById('supportName') ? document.getElementById('supportName').value.trim() : '';
    const email = document.getElementById('supportEmail') ? document.getElementById('supportEmail').value.trim() : '';
    const message = document.getElementById('supportMessage') ? document.getElementById('supportMessage').value.trim() : '';

    if (name.length > 1 && email.includes('@') && message.length > 5) {
        addMessageToChat('bot',
            `✅ <strong>Support request sent!</strong><br><br>
             Hi <strong>${name}</strong>, a member of our support team will reach out to <em>${email}</em> very soon.<br><br>
             ⏱️ Average response time: <strong>under 24 hours</strong>.<br><br>
             In the meantime, feel free to ask me anything else! 😊`
        );
    } else {
        addMessageToChat('bot',
            `⚠️ Please fill in your <strong>Name</strong>, <strong>Email</strong>, and a brief <strong>description</strong> of the issue before submitting.`
        );
    }
}

// ── UI Helpers ────────────────────────────────────────────────
function toggleChat() {
    const chatWindow = document.getElementById('chatWindow');
    chatWindow.classList.toggle('active');
    if (chatWindow.classList.contains('active')) {
        document.getElementById('chatInput').focus();
    }
}

function handleUserMessage(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    if (message === "") return;

    addMessageToChat('user', message);
    input.value = '';

    showTypingIndicator();
    setTimeout(() => {
        removeTypingIndicator();
        const response = generateAIResponse(message);
        addMessageToChat('bot', response);
    }, 900 + Math.random() * 400);
}

function addMessageToChat(sender, text) {
    const messagesContainer = document.getElementById('chatMessages');
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('chat-message', sender === 'user' ? 'user-msg' : 'bot-msg');
    msgDiv.innerHTML = text;
    messagesContainer.appendChild(msgDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function showTypingIndicator() {
    const messagesContainer = document.getElementById('chatMessages');
    const typingDiv = document.createElement('div');
    typingDiv.id = 'typingIndicator';
    typingDiv.classList.add('chat-message', 'bot-msg', 'typing');
    typingDiv.innerHTML = '<span>.</span><span>.</span><span>.</span>';
    messagesContainer.appendChild(typingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function removeTypingIndicator() {
    const typingDiv = document.getElementById('typingIndicator');
    if (typingDiv) typingDiv.remove();
}
