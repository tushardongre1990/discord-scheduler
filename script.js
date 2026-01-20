// Node 18+ (fetch is built-in)
const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

async function sendMessage() {
  try {
    // Calculate if today is a Dutasteride day
    // Starting date: January 20, 2026 (Monday in your timezone)
    const startDate = new Date("2026-01-20T00:00:00+05:30"); // IST timezone
    const today = new Date();

    // Calculate days since start date
    const daysDiff = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));

    // Check if today is an even day (0, 2, 4, 6... means take Dutasteride)
    const isDutasterideDay = daysDiff >= 0 && daysDiff % 2 === 0;

    // Build the message
    let message = "🏥 **Daily Health Reminder** 🏥\n\n";
    message += "✅ Apply Minoxidil\n";
    message += "✅ Take your medications\n";

    if (isDutasterideDay) {
      message += "💊 **TAKE Dutasteride 0.5mg tablet TODAY**\n";
    } else {
      message += "⏸️ Skip Dutasteride today (take tomorrow)\n";
    }

    message += `\n📅 Date: ${today.toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata" })}`;

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: message,
        username: "Health Reminder Bot",
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    console.log("Message sent successfully!");
  } catch (error) {
    console.error("Error sending message:", error);
    process.exit(1);
  }
}

// Call the async function
sendMessage();
