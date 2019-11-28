import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer kRq7OZSmww6zylQa_jJfUw7spPY9MwdHoubL2hjoGYsjh4juLmdRKmCkCBgVv5ZKn-WK3IkiqIJCxCrUlCWBfshvVoXW5zlz6sprIhijjcG7B3KqG0QZoNqu5cvKXXYx'
  }
});
