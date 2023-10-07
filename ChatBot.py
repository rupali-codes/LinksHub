import re

class SimpleChatBot:
    def __init__(self):
        self.intents = [
            {"pattern": r"hello|hi|hey", "response": "Hello! How can I assist you today?"},
            {"pattern": r"bye|exit|goodbye", "response": "Goodbye! If you have other questions, feel free to ask."},
            {"pattern": r"how are you", "response": "I'm just a bot, so I don't have feelings, but thanks for asking! How can I assist you?"},
            {"pattern": r"thanks|thank you", "response": "You're welcome! Let me know if there's any other way I can help."}
        ]

    def get_response(self, user_input):
        for intent in self.intents:
            if re.search(intent["pattern"], user_input, re.IGNORECASE):
                return intent["response"]
        return "I'm sorry, I didn't understand that. Can you rephrase?"

    def start(self):
        print("SimpleChatBot: Hello! Type 'bye' to exit.")
        while True:
            user_input = input("You: ")
            if user_input.lower() in ["bye", "exit", "goodbye"]:
                print("SimpleChatBot: Goodbye!")
                break
            response = self.get_response(user_input)
            print(f"SimpleChatBot: {response}")

# Run the chatbot
bot = SimpleChatBot()
bot.start()
