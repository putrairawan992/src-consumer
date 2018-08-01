import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { ScrollSegment, NewsCard } from '@partials';

const exampleNews = require('@images/news-example.png');

const items = [
  {
    id: 1,
    image: exampleNews,
    children:
      'It’s always a great time to get “Back to Cool” and enjoy a picnic with family and friends.'
  },
  {
    id: 2,
    image: exampleNews,
    children:
      'It’s always a great time to get “Back to Cool” and enjoy a picnic with family and friends.'
  },
  {
    id: 3,
    image: exampleNews,
    children:
      'It’s always a great time to get “Back to Cool” and enjoy a picnic with family and friends.'
  },
  {
    id: 4,
    image: exampleNews,
    children:
      'It’s always a great time to get “Back to Cool” and enjoy a picnic with family and friends.'
  },
  {
    id: 5,
    image: exampleNews,
    children:
      'It’s always a great time to get “Back to Cool” and enjoy a picnic with family and friends.'
  },
  {
    id: 6,
    image: exampleNews,
    children:
      'It’s always a great time to get “Back to Cool” and enjoy a picnic with family and friends.'
  },
  {
    id: 7,
    image: exampleNews,
    children:
      'It’s always a great time to get “Back to Cool” and enjoy a picnic with family and friends.'
  },
  {
    id: 8,
    image: exampleNews,
    children:
      'It’s always a great time to get “Back to Cool” and enjoy a picnic with family and friends.'
  },
  {
    id: 9,
    image: exampleNews,
    children:
      'It’s always a great time to get “Back to Cool” and enjoy a picnic with family and friends.'
  },
  {
    id: 10,
    image: exampleNews,
    children:
      'It’s always a great time to get “Back to Cool” and enjoy a picnic with family and friends.'
  }
];

class NewsListComponent extends Component {
  renderItem(item) {
    return <NewsCard item={item.item} />;
  }

  render() {
    return (
      <View style={{ backgroundColor: '#fff' }}>
        <ScrollSegment />
          <FlatList data={items} style={{ borderTopWidth: 1, borderColor: '#ececec' }} contentContainerStyle={{ paddingBottom: 52 }} renderItem={this.renderItem} />
      </View>
    );
  }
}

export default NewsListComponent;
