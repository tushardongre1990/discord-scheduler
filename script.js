// Node 18+ (fetch is built-in)
const webhookUrl =
  "https://discord.com/api/webhooks/1462860202268430380/2r3eNxy2PFLSUC1pb0GLk4WWRQF89GsP1uNB8xVDOfvzljrdtSVPUGHHPlYBxrTdZPpB";

async function sendMesage() {
  await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: "Hello from JavaScript 🚀",
    }),
  });
}

sendMesage();
