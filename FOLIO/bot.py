import requests
from datetime import datetime

def get_weather(city="Kochi"):
    try:
        url = f"https://wttr.in/{city}?format=j1"
        response = requests.get(url, timeout=10)
        data = response.json()

        current = data["current_condition"][0]

        return {
            "city": city,
            "temperature": current["temp_C"],
            "description": current["weatherDesc"][0]["value"]
        }

    except Exception as e:
        return {"error": str(e)}

def get_quote():
    try:
        url = "https://zenquotes.io/api/random"
        response = requests.get(url, timeout=10)
        data = response.json()[0]

        return {
            "quote": data["q"],
            "author": data["a"]
        }

    except Exception as e:
        return {"error": str(e)}

def build_summary():
    weather = get_weather()
    quote = get_quote()

    today = datetime.now().strftime("%d-%m-%Y")

    summary = f"""
PULSE DAILY SUMMARY
===================

Date: {today}

Weather:
{weather.get('temperature', 'N/A')}°C
{weather.get('description', 'N/A')}

Quote:
"{quote.get('quote', 'No quote available')}"
- {quote.get('author', 'Unknown')}

===================
"""
    return summary

def run():
    summary = build_summary()

    with open("daily_summary.txt", "w", encoding="utf-8") as file:
        file.write(summary)

    print(summary)
    print("Pulse ran successfully!")

if __name__ == "__main__":
    run()