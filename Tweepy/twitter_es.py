import json
from tweepy.streaming import StreamListener
from tweepy import OAuthHandler
from tweepy import Stream
from textblob import TextBlob
from elasticsearch import Elasticsearch

consumer_key="1YLGXh2txeA9gOUs1PIik3dZj"
consumer_secret="40ETknVUmHA8hyJqwfHOCkGx3tmbcu4qnPlJD0OgNla6n52d4m"

access_token = "3611451502-wfRzyGm9m8sBhicrzCvRF7gp4AMh3FY8zHAe8NQ"
access_token_secret = "LZ72oT9IIHascBm17B0NLCjcC2u3AOgB3KE5IcfbA2lOF"



es = Elasticsearch([{'host':'localhost', 'port': 9200}])


class TweetStreamListener(StreamListener):
    def __init__(self):
        self.num = 0

    def on_data(self, data):
        tweet_data = json.loads(data)
        #print json.dumps(tweet_data, indent=6)
        if (tweet_data is not None and 'limit' not in tweet_data):
            self.num += 1
            if self.num < 100000:
                if ("user" in tweet_data and "screen_name" in tweet_data["user"] and "profile_image_url" in tweet_data["user"]
                    and "place" in tweet_data and "bounding_box" in tweet_data["place"] and "coordinates" in tweet_data["place"]["bounding_box"]
                    and "text" in tweet_data and "full_name" in tweet_data["place"]):
                    place = tweet_data["place"]["full_name"].split(",");
                    city = None
                    state = None
                    if (len(place) == 2) :
                        city = place[0]
                        state = place[1]
                    elif (len(place) == 1):
                        city = place[0]
                    '''print {"user": tweet_data["user"]["screen_name"],
                    "image_url": tweet_data["user"]["profile_image_url"],
                    "geo":tweet_data["place"]["bounding_box"]["coordinates"],
                    "text" :tweet_data["text"],
                           "City":city,
                           "State": state}'''
                es.index(index="tweet_search",
                         doc_type="tweet_info",
                         body={"user": tweet_data["user"]["screen_name"],
                               "image_url": tweet_data["user"]["profile_image_url"],
                               "geo": tweet_data["place"]["bounding_box"]["coordinates"],
                               "text": tweet_data["text"],
                                "City":city,
                                "State": state})
                return True
            else:
                return False




    def on_error(self, status):
        print status

if __name__ == '__main__':
    listener = TweetStreamListener()
    auth = OAuthHandler(consumer_key, consumer_secret)
    auth.set_access_token(access_token, access_token_secret)
    stream = Stream(auth, listener)
    stream.filter(locations=[-130, 25, -65, 50])



