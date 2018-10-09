import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { ScrollSegment, NewsCard } from '@partials';
import { trackScreen } from '@helpers/analytic';
import { CommonService } from '@services';

const pageName = this.pageName = 'news-list';

class NewsListComponent extends Component {
  state = {
    categories: [],
    loaded: false,
    isRefreshing: false,
    category_id: null,
    last_page: null,
    page: 1,
    per_page: 5,
    categoryChange: false,
    news: []
  }

  componentWillMount() {
    trackScreen(pageName);
    CommonService.getNewsCategories().then(async (categories) => {
      this.setState({
        categories: categories.data,
        category_id: categories.data[0].id
      });
      await this.loadNews(true);
      this.setState({ loaded: true });
    });
  }

  handleLoadMore = () => {
    if (this.state.page < this.state.last_page) {
      this.setState({
        page: this.state.page + 1
      }, () => {
        this.loadNews();
      });
    }
  };

  handleRefresh = () => {
    this.setState({
      page: 1
    }, () => {
      this.loadNews();
    });
  }

  childHandler(parameter) {
    this.setState({
      page: 1,
      category_id: parameter,
      categoryChange: true
    }, () => {
      this.loadNews(true);
    });
  }

  loadNews(isInit = false) {
    return new Promise((resolve, reject) => {
      const params = {
        page: this.state.page,
        per_page: this.state.per_page,
        category_id: this.state.category_id
      };
      CommonService.getNews(params).then((news) => {
        this.setState({
          news: this.state.page === 1 ? news.data : [...this.state.news, ...news.data],
          isRefreshing: false,
          categoryChange: false
        });
        if (isInit) {
          this.setState({
            last_page: news.last_page
          });
        }
        resolve(news);
      }).catch((err) => {
        console.log('beunang', err);
        reject(err);
      });
    });
  }

  renderItem(item) {
    return <NewsCard item={item.item} />;
  }

  renderList() {
    if (this.state.categoryChange) {
      console.log('rizki adrian');
      return (
        <View style={{ flex: 14 }}>
          <ActivityIndicator size="large" color="#DC1E2D" />
        </View>
      );
    }
    return (
      <View style={{ flex: 14 }}>
        <FlatList
          data={this.state.news} style={{ borderTopWidth: 1, borderColor: '#ececec' }}
          keyExtractor={i => i.id.toString()}
          renderItem={this.renderItem}
          onEndReached={this.handleLoadMore}
          onEndThreshold={0}
          refreshing={this.state.isRefreshing}
          onRefresh={this.handleRefresh}
        />
      </View>
    );
  }

  render() {
    if (this.state.loaded) {
      return (
        <View style={{ backgroundColor: '#fff', flex: 1 }}>
          <ScrollSegment items={this.state.categories} parentCallback={this.childHandler.bind(this)} />
          {this.renderList()}
        </View>
      );
    }
    return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        <ActivityIndicator size="large" color="#DC1E2D" />
      </View>
    );
  }
}

export default NewsListComponent;
