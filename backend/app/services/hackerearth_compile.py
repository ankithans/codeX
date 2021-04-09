import requests
import json
from decouple import config

def run_code(source, input):
    RUN_URL = u'https://api.hackerearth.com/v3/code/run/'
    CLIENT_SECRET = config("CLIENT_SECRET")

    data = {
        'client_secret': CLIENT_SECRET,
        'async': 0,
        'source': source,
        'input': input,
        'lang': "PYTHON",
        'time_limit': 5,
        'memory_limit': 262144,
    }

    r = requests.post(RUN_URL, data=data)
    json_formatted_str = json.dumps(r.json(), indent=4)

    # print(json_formatted_str)
    return r.json()
