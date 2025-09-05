import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';

// Gmail API configuration
export const GMAIL_SCOPES = [
  'https://www.googleapis.com/auth/gmail.send',
  'https://www.googleapis.com/auth/gmail.readonly',
  'https://www.googleapis.com/auth/gmail.modify',
  'https://www.googleapis.com/auth/userinfo.email',
  'https://www.googleapis.com/auth/userinfo.profile',
];

export const GMAIL_REDIRECT_URI = `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/gmail/callback`;

// Create OAuth2 client
export const createOAuth2Client = () => {
  return new OAuth2Client(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    GMAIL_REDIRECT_URI
  );
};

// Generate OAuth2 URL
export const generateAuthUrl = (userId: string) => {
  const oauth2Client = createOAuth2Client();
  
  return oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: GMAIL_SCOPES,
    state: userId, // Pass Clerk user ID in state
    prompt: 'consent', // Force consent screen to get refresh token
  });
};

// Exchange code for tokens
export const exchangeCodeForTokens = async (code: string) => {
  const oauth2Client = createOAuth2Client();
  
  try {
    const { tokens } = await oauth2Client.getToken(code);
    return tokens;
  } catch (error) {
    console.error('Error exchanging code for tokens:', error);
    throw new Error('Failed to exchange code for tokens');
  }
};

// Get user info from Google
export const getUserInfo = async (accessToken: string) => {
  const oauth2Client = createOAuth2Client();
  
  oauth2Client.setCredentials({
    access_token: accessToken,
  });
  
  try {
    const oauth2 = google.oauth2({ version: 'v2', auth: oauth2Client });
    const response = await oauth2.userinfo.get();
    return response.data;
  } catch (error) {
    console.error('Error getting user info:', error);
    throw new Error('Failed to get user info');
  }
};

// Create Gmail API client with tokens
export const createGmailClient = (accessToken: string, refreshToken: string) => {
  const oauth2Client = createOAuth2Client();
  
  oauth2Client.setCredentials({
    access_token: accessToken,
    refresh_token: refreshToken,
  });
  
  return google.gmail({ version: 'v1', auth: oauth2Client });
};

// Send email via Gmail API with attachments
export const sendEmail = async (
  gmailClient: any, // eslint-disable-line @typescript-eslint/no-explicit-any
  to: string,
  subject: string,
  body: string,
  from: string,
  attachments: Array<{ filename: string; content: string; contentType: string }> = []
) => {
  const boundary = '----=_Part_' + Math.random().toString(36).substr(2, 9);
  
  // Create multipart message
  let message = [
    `To: ${to}`,
    `From: ${from}`,
    `Subject: ${subject}`,
    `MIME-Version: 1.0`,
    `Content-Type: multipart/mixed; boundary="${boundary}"`,
    '',
    `--${boundary}`,
    `Content-Type: text/plain; charset=UTF-8`,
    `Content-Transfer-Encoding: 7bit`,
    '',
    body,
  ].join('\n');

  // Add attachments if any
  for (const attachment of attachments) {
    message += [
      '',
      `--${boundary}`,
      `Content-Type: ${attachment.contentType}`,
      `Content-Disposition: attachment; filename="${attachment.filename}"`,
      `Content-Transfer-Encoding: base64`,
      '',
      attachment.content,
    ].join('\n');
  }

  // Close the multipart message
  message += `\n--${boundary}--`;

  const encodedMessage = Buffer.from(message).toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
  
  try {
    const response = await gmailClient.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: encodedMessage,
      },
    });
    
    return response.data;
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
};

// Set up Gmail push notifications (watch request)
export const setupGmailWatch = async (
  gmailClient: any, // eslint-disable-line @typescript-eslint/no-explicit-any
  topicName: string,
  _webhookUrl: string // eslint-disable-line @typescript-eslint/no-unused-vars
) => {
  try {
    const response = await gmailClient.users.watch({
      userId: 'me',
      requestBody: {
        topicName: topicName,
        labelIds: ['INBOX'], // Watch for messages in INBOX
      },
    });
    
    console.log('Gmail watch setup successful:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error setting up Gmail watch:', error);
    throw new Error('Failed to setup Gmail watch');
  }
};

// Get recent messages from Gmail
export const getRecentMessages = async (
  gmailClient: any, // eslint-disable-line @typescript-eslint/no-explicit-any
  maxResults: number = 10,
  query: string = 'is:unread'
) => {
  try {
    const response = await gmailClient.users.messages.list({
      userId: 'me',
      maxResults: maxResults,
      q: query,
    });
    
    return response.data;
  } catch (error) {
    console.error('Error fetching recent messages:', error);
    throw new Error('Failed to fetch recent messages');
  }
};

// Get full message details
export const getMessageDetails = async (
  gmailClient: any, // eslint-disable-line @typescript-eslint/no-explicit-any
  messageId: string
) => {
  try {
    const response = await gmailClient.users.messages.get({
      userId: 'me',
      id: messageId,
      format: 'full',
    });
    
    return response.data;
  } catch (error) {
    console.error('Error fetching message details:', error);
    throw new Error('Failed to fetch message details');
  }
};
