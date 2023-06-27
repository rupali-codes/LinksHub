#!/bin/bash

# Global Flag for duplicates
haveDuplicates=0

# Specify the path to the database folder
databaseFolder="database"

# Get the names of staged JSON files within any folder inside the database folder
stagedFiles=$(git diff --cached --name-only --relative="$databaseFolder" -- "**/*.json")

# Find Duplicates and Print them
for file in $stagedFiles; do

    # Read the JSON from staged JSON files
    jsonData=$(cat $databaseFolder/$file) 

    # Get the URLs from the JSON data
    urls=$(echo "$jsonData" |  sed -n 's/.*"url"\s*:\s*"\([^"]*\)".*/\1/p')

    # Get the duplicate URLs from the URLSs list
    duplicates=$(echo "$urls" | uniq -d)

    # Print duplicate URLs if any
    if [[ -n "$duplicates" ]]; then
        haveDuplicates=1
        echo -e "\nDuplicate url values found in $databaseFolder/$file: \n$duplicates"
    fi
done

# Exit the commit process if duplicate URLs found
if [ "$haveDuplicates" -eq 1 ]; then
    echo -e "\n[Error] Duplicates URLs found"
    exit 1
else 
    echo -e "\nNo duplicates URLs found"
fi
