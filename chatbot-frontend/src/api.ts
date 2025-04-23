export const askQuestion = async (question: string): Promise<string> => {
    const response = await fetch('http://localhost:8000/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
    });

    if (!response.ok) {
        throw new Error('Failed to fetch response');
    }

    return response.text();
};
