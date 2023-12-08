const discordStatusDiv = document.getElementById('discord-status');
const token = 'MTE4MjQzMjkwODU0ODUwOTc4Ng.GMjCas.dgeIauPl7hGOeZMQqv_dSCrXCqC6fh-tSJA3xU';
const channelId = '1182434107658092565'; // Replace with your Discord channel ID

const fetchDiscordMessages = async () => {
    try {
        console.log('Fetching Discord messages...');
        const response = await fetch(`https://discord.com/api/v10/channels/${channelId}/messages`, {
            method: 'GET',
            headers: {
                'Authorization': `Bot ${token}`,
            },
        });

        console.log('Response:', response);

        const messages = await response.json();

        console.log('Fetched messages:', messages);

        // Display messages in the div
        displayMessages(messages);
    } catch (error) {
        console.error('Error fetching Discord messages:', error);
    }
};

const displayMessages = (messages) => {
    discordStatusDiv.innerHTML = ''; // Clear previous messages

    messages.forEach((message) => {
        // Limit message to 175 characters
        const truncatedMessage = message.content.slice(0, 175);

        // Create a new paragraph element for each message
        const messageElement = document.createElement('p');
        messageElement.textContent = truncatedMessage;

        // Append the message to the div
        discordStatusDiv.appendChild(messageElement);
    });
};

// Fetch messages when the page loads
fetchDiscordMessages();
