#!/bin/bash

# Define projects and their URLs
projects=(
    "keystone-select|https://maps.app.goo.gl/t8Q5fmD4QnpWh8PX9"
    "keystone-51|https://maps.app.goo.gl/sD4r5HMVSKKNc9Bf7"
    "keystone-niwa|https://maps.app.goo.gl/q7Qe3jmrayCdRUB97"
    "keystone-clermont|https://maps.app.goo.gl/mz3qF5vJmggUhcLh6"
    "keystone-skyvillas-xl|https://maps.app.goo.gl/1oYuPeMCJmP46XMCA"
    "keystone-48|https://maps.app.goo.gl/kA3gQCxFgQA83ysHA"
    "vihav-spring-woods|https://maps.app.goo.gl/btNtHsGiJ6xD9dSi9"
    "vihav-elinor|https://maps.app.goo.gl/13KVSfMHAUrVxKQe6"
    "vihav-parvarish-res|https://maps.app.goo.gl/cjM8euVkXBJsRiGP8"
    "vihav-skymont|https://maps.app.goo.gl/VchgubLxxsxWh5SA9"
    "keystone-72|https://maps.app.goo.gl/33d2kZFSwYKMpFWW9"
    "keystone-skyvillas|https://maps.app.goo.gl/Yafkpt8nesB8xYAs5"
    "skyone|https://maps.app.goo.gl/uSz1uRwreZayf9ED9"
    "keystone-mansion|https://maps.app.goo.gl/WED1irf4qafEZ2rM6"
    "keystone-mansion-2|https://maps.app.goo.gl/vNPjQngkB8L41rYA7"
    "vs-monolith|https://maps.app.goo.gl/YiMpLGx79fqJoZ64A"
    "supremus-iii|https://maps.app.goo.gl/9BZyWiigVg18ZAuAA"
    "vihav-supremus-2|https://maps.app.goo.gl/gkhaX4AYTM1Magzr8"
    "wealth-square|https://maps.app.goo.gl/pzqifFZQ5hDbAViw8"
    "vtc|https://maps.app.goo.gl/N1kvb4f7jpkLrbYj7"
    "vbs|https://maps.app.goo.gl/twr3V6bTg8sAZH4u9"
    "supremus|https://maps.app.goo.gl/vfongeqjRR5zFJteA"
    "elite-square|https://maps.app.goo.gl/toBT1sk6DoXa5jtG6"
    "ensign|https://maps.app.goo.gl/7wFvVWPpZvjXgyUw6"
    "excellus|https://maps.app.goo.gl/5ipyfQkJ28qvHjEN7"
)

echo "{"
first=true

for entry in "${projects[@]}"; do
    pid="${entry%%|*}"
    url="${entry##*|}"
    
    # Resolve URL
    final_url=$(curl -Ls -o /dev/null -w %{url_effective} "$url")
    
    # Extract coordinates using regex (simple text processing)
    # Look for @lat,lng
    coords=$(echo "$final_url" | grep -oE '@-?[0-9]+\.[0-9]+,-?[0-9]+\.[0-9]+')
    
    if [ ! -z "$coords" ]; then
        lat=$(echo "$coords" | cut -d',' -f1 | tr -d '@')
        lng=$(echo "$coords" | cut -d',' -f2)
        
        if [ "$first" = true ]; then
            first=false
        else
            echo ","
        fi
        echo "\"$pid\": {\"lat\": $lat, \"lng\": $lng}"
    else
        # Try !3d and !4d format
        lat=$(echo "$final_url" | grep -oE '!3d-?[0-9]+\.[0-9]+' | cut -c 4-)
        lng=$(echo "$final_url" | grep -oE '!4d-?[0-9]+\.[0-9]+' | cut -c 4-)
        
        if [ ! -z "$lat" ] && [ ! -z "$lng" ]; then
            if [ "$first" = true ]; then
                first=false
            else
                echo ","
            fi
            echo "\"$pid\": {\"lat\": $lat, \"lng\": $lng}"
        fi
    fi
done

echo "}"
