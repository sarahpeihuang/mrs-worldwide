import cohere
co = cohere.Client('sUfIRTQomXZFFdwNCggfI2Xy01qvmaw8QpTlQJf2')

def itinerary_generation(city, days):
    city = 'Toronto' #replace
    days = 1 #replace
    prompt='Travelling to %s, create an itinerary for %f days.' % (city, days)

    response = co.generate(prompt)

    return response.generations[0].text

def precaution_generation(city):
    prompt='A list of three safety precautions and considerations for solo female travelers visiting %s' % (city)
    response = co.generate(prompt)

    return response.generations[0].text
