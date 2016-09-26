# TwitterSearchMap0601
# updated by dy
#Description:
General purpose search engines, as well as search functions within web sites are key to making navigation easy for users. This project will provide students with a chance to practice: building a web app with a third-party API, using an open-source search engine to build your own search feature, and building a user friendly interface for both search inputs and outputs.
This project will introduce several key skill sets needed when taking on real world challenges including: taking advantage of the power of open-source software and third-party APIs (e.g., Twitter API, Google API, Yelp API), front-end coding in Javascript, and deployment of an app to cloud infrastructure. As demand increases for full stack engineers, every software engineers should expand their skill sets into both the front and back end. This project provides a chance to practice both sides.
In this project, we challenge you to use the Twitter API[1] and ElasticSearch[2] to create a Twitter search feature based on geolocation. Your implementation should be able to stream Tweets real-time from Twitter and index/store those tweets into ElasticSearch. The web application should have a good interface for users to enter search information. Finally, this app needs to be deployed on a cloud-platform.

[Source From](https://www.bittiger.io/microproject/PfjuwSHuGjQJpsF6h)

#Functionality:
- User can input **location** and **a key word** in user interface
- All tweets inside the selected area will be listed in a table
- Only recent 100 tweets showed in the list and sorted by time created
- Search results also show up in a **Google map** with **dropped pins**
- User can click pin in Google map to get **full tweet**


#Time Schedule
| Stage | Start  | End | Goals |
| ------------- | ------------- | ------------- | ------------- |
| 1st Week | 08/29/16  | 09/04/16 | Build up team and create github repository
| 2nd Week | 09/05/16  | 09/11/16 | Set up environment and start front-end|
| 3th Week | 09/12/16  | 09/18/16  | Finish front-end and start back-end |
| 4th Week | 09/19/16  | 09/25/16 | Back-end and connection to twitter API  |
| 5th Week | 09/26/16  | 10/02/16 | Go over whole process and fix bugs |
| 6th Week | 10/03/16  | 10/09/16 | Fix bug and prepare presentation |

#Used Technology
- Front-end: AngularJS
- Back-end: Node.js
- Search Engine: ElasticSearch
- API: Twitter Streaming API

#Resources:
- Elasticsearch中文教材[link](http://es.xiaoleilu.com/010_Intro/00_README.html)
- Elasticsearch tutorial[link](http://joelabrahamsson.com/elasticsearch-101/)
- Twitter Streaming API[link](https://dev.twitter.com/streaming/overview)
- Twitter Search Engine Video[link](https://www.bittiger.io/classpage/CXF82bcv52sn3osEa)
- Previous Project Example[link](https://github.com/BitTigerInst/ElasticSearch)

#Project Information
- category: full stack

#会议记录
-09/11/2016
- 项目设计Document[link](https://docs.google.com/document/d/1T9iq92_rfjaOUy3k12jiGXMbmwLh-Udvub59ASkGh6Y/edit)
- 关于前端开发[link](http://www.1point3acres.com/bbs/thread-104335-1-1.html)
- RESTful API介绍[link](https://www.zhihu.com/question/28557115)
- 关于http[link](http://download.csdn.net/detail/u013998657/9418970) 或上我们的slack，yanran有分享

#License
See the [LICENSE](https://opensource.org/licenses/MIT) file for license rights and limitations (MIT).
