import json
def safe_city(city, country):
    with open('World Crime Index_updated.json', 'r') as file:
        data = json.load(file)
        result = []
        for entry in data:
            if entry.get("City") == city:
                current_crime = entry["Crime Index"]
        for entry in data:
            if entry.get("Country") == country and current_crime > entry.get("Crime Index") :
                result.append([entry["City"], entry["Crime Index"],entry["Safety Index"]])
    
        return result # returns 2d list of safer cities
    
def visitation(nationality, country):
    with open('passport-index-tidy.json', 'r') as file:
        data = json.load(file)

        if nationality == country:
            return "Domestic Travel"
        
        for entry in data:
            if entry.get("Passport") == nationality and entry.get("Destination") == country: # want to add days after numbers
                return entry["Requirement"]


# print(safe_city("Toronto", "Canada"))
print(visitation("Belgium", "Belgium"))