/**

355. Design Twitter

[Medium]

Design a simplified version of Twitter where users can post tweets, follow/unfollow another user, and is able to see the 10 most recent tweets in the user's news feed.

Implement the Twitter class:

Twitter() Initializes your twitter object.

void postTweet(int userId, int tweetId) Composes a new tweet with ID tweetId by the user userId. Each call to this function will be made with a unique tweetId.

List<Integer> getNewsFeed(int userId) Retrieves the 10 most recent tweet IDs in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user themself. Tweets must be ordered from most recent to least recent.

void follow(int followerId, int followeeId) The user with ID followerId started following the user with ID followeeId.

void unfollow(int followerId, int followeeId) The user with ID followerId started unfollowing the user with ID followeeId.

*/

import { MaxPriorityQueue } from "@datastructures-js/priority-queue";

class Twitter {
  constructor() {
    this.timestamp = 0;
    this.posts = new Map();
    this.followRecord = new Map();
  }

  /**
   * @param {number} userId
   * @param {number} tweetId
   * @return {void}
   */
  postTweet(userId, tweetId) {
    const existingTweets = this.posts.get(userId) ?? [];

    existingTweets.push({ tweetId, timestamp: ++this.timestamp });

    this.posts.set(userId, existingTweets);

    return this;
  }

  /**
   * @param {number} userId
   * @return {number[]}
   */
  getNewsFeed(userId) {
    const q = new MaxPriorityQueue((p) => p.timestamp);

    const followings = new Set(this.followRecord.get(userId) ?? new Set());

    followings.add(userId);

    followings.forEach((following) => {
      const posts = this.posts.get(following) ?? [];

      posts.forEach((p) => {
        q.enqueue(p);
      });
    });

    const feeds = [];

    while (q.size() > 0 && feeds.length < 10) {
      feeds.push(q.dequeue());
    }

    return feeds.map((p) => p.tweetId);
  }

  /**
   * @param {number} followerId
   * @param {number} followeeId
   * @return {void}
   */
  follow(followerId, followeeId) {
    const followings = this.followRecord.get(followerId) ?? new Set();

    followings.add(followeeId);

    this.followRecord.set(followerId, followings);
  }

  /**
   * @param {number} followerId
   * @param {number} followeeId
   * @return {void}
   */
  unfollow(followerId, followeeId) {
    const followings = this.followRecord.get(followerId) ?? new Set();

    followings.delete(followeeId);

    this.followRecord.set(followerId, followings);
  }
}

export const main = async () => {
  const twitter = new Twitter();
  twitter.postTweet(1, 10); // User 1 posts a new tweet with id = 10.
  twitter.postTweet(2, 20); // User 2 posts a new tweet with id = 20.
  console.log(twitter.getNewsFeed(1)); // User 1's news feed should only contain their own tweets -> [10].
  console.log(twitter.getNewsFeed(2)); // User 2's news feed should only contain their own tweets -> [20].
  twitter.follow(1, 2); // User 1 follows user 2.
  console.log(twitter.getNewsFeed(1)); // User 1's news feed should contain both tweets from user 1 and user 2 -> [20, 10].
  console.log(twitter.getNewsFeed(2)); // User 2's news feed should still only contain their own tweets -> [20].
  twitter.unfollow(1, 2); // User 1 follows user 2.
  console.log(twitter.getNewsFeed(1)); // User 1's news feed should only contain their own tweets -> [10].
};
