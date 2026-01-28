import requests
import re
import json

projects = {
    "keystone-select": "https://maps.app.goo.gl/t8Q5fmD4QnpWh8PX9",
    "keystone-51": "https://maps.app.goo.gl/sD4r5HMVSKKNc9Bf7",
    "keystone-niwa": "https://maps.app.goo.gl/q7Qe3jmrayCdRUB97",
    "keystone-clermont": "https://maps.app.goo.gl/mz3qF5vJmggUhcLh6",
    "keystone-skyvillas-xl": "https://maps.app.goo.gl/1oYuPeMCJmP46XMCA",
    "keystone-48": "https://maps.app.goo.gl/kA3gQCxFgQA83ysHA",
    "vihav-spring-woods": "https://maps.app.goo.gl/btNtHsGiJ6xD9dSi9",
    "vihav-elinor": "https://maps.app.goo.gl/13KVSfMHAUrVxKQe6",
    "vihav-parvarish-res": "https://maps.app.goo.gl/cjM8euVkXBJsRiGP8",
    "vihav-skymont": "https://maps.app.goo.gl/VchgubLxxsxWh5SA9",
    "keystone-72": "https://maps.app.goo.gl/33d2kZFSwYKMpFWW9",
    "keystone-skyvillas": "https://maps.app.goo.gl/Yafkpt8nesB8xYAs5",
    "skyone": "https://maps.app.goo.gl/uSz1uRwreZayf9ED9",
    "keystone-mansion": "https://maps.app.goo.gl/WED1irf4qafEZ2rM6",
    "keystone-mansion-2": "https://maps.app.goo.gl/vNPjQngkB8L41rYA7",
    "vs-monolith": "https://maps.app.goo.gl/YiMpLGx79fqJoZ64A",
    "supremus-iii": "https://maps.app.goo.gl/9BZyWiigVg18ZAuAA",
    "vihav-supremus-2": "https://maps.app.goo.gl/gkhaX4AYTM1Magzr8",
    "wealth-square": "https://maps.app.goo.gl/pzqifFZQ5hDbAViw8",
    "vtc": "https://maps.app.goo.gl/N1kvb4f7jpkLrbYj7",
    "vbs": "https://maps.app.goo.gl/twr3V6bTg8sAZH4u9",
    "supremus": "https://maps.app.goo.gl/vfongeqjRR5zFJteA",
    "elite-square": "https://maps.app.goo.gl/toBT1sk6DoXa5jtG6",
    "ensign": "https://maps.app.goo.gl/7wFvVWPpZvjXgyUw6",
    "excellus": "https://maps.app.goo.gl/5ipyfQkJ28qvHjEN7"
}

results = {}

for pid, url in projects.items():
    try:
        response = requests.head(url, allow_redirects=True, timeout=10)
        final_url = response.url
        print(f"Project: {pid}")
        print(f"Final URL: {final_url}")
        
        # Regex to find coordinates in URL (e.g. @22.3144,73.1379)
        # Format often: /@lat,lng,
        match = re.search(r'@(-?\d+\.\d+),(-?\d+\.\d+)', final_url)
        if match:
            lat, lng = match.groups()
            results[pid] = {"lat": float(lat), "lng": float(lng)}
            print(f"Found: {lat}, {lng}")
        else:
            # Sometimes it's in the query params ?q=lat,lng or similar? 
            # Or !3d LAT !4d LNG
            # Let's check !3d and !4d which are often in Google Maps long URLs
            match_3d = re.search(r'!3d(-?\d+\.\d+)', final_url)
            match_4d = re.search(r'!4d(-?\d+\.\d+)', final_url)
            if match_3d and match_4d:
                 lat = match_3d.group(1)
                 lng = match_4d.group(1)
                 results[pid] = {"lat": float(lat), "lng": float(lng)}
                 print(f"Found (3d/4d): {lat}, {lng}")
            else:
                print("Could not extract coordinates")
                
    except Exception as e:
        print(f"Error for {pid}: {e}")

print(json.dumps(results, indent=2))
