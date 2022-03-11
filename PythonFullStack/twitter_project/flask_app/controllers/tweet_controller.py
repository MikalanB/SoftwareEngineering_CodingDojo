from flask_app import app
from flask import render_template, request, session, redirect, flash, url_for
from flask_app.models.user import User
# from flask.ext.tweepy import Tweepy

# app.config.setdefault('TWEEPY_CONSUMER_KEY', 'consumer-key-here')
# app.config.setdefault('TWEEPY_CONSUMER_SECRET', 'consumer-secret-here')
# app.config.setdefault('TWEEPY_ACCESS_TOKEN_KEY', '184487032-35DYxU9jWGae0zV1RnULWLdhTPSBYBL1WQQG0pN9')
# app.config.setdefault('TWEEPY_ACCESS_TOKEN_SECRET', 'OZFwxjoIof2TeVHxTQlMNNbD8KWxUeAoIgzKVHoVyMEGu')

# tweepy = Tweepy(app)


# @app.route('/tweets')
# def show_tweets():
#     if "user_id" not in session:
#         return redirect('/')
#     tweets = tweepy.api.public_timeline()
#     return render_template('tweets.html', tweets=tweets)

# @app.route('/say-something')
# def say_something():
#     status = tweepy.api.update_status('Hello, world!')
#     status_link = 'http://twitter.com/#!/Mikalan_143/status/%s' % status.id
#     return render_template('dashboard.html', status_link=status_link)