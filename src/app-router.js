import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MainPage } from './pages/index';
import { AboutPage } from './pages/about';
import { Layout } from './components/common/layout';
import { BlogItemPage } from './pages/blog-item-page';
import { ReduxListPage } from './pages/redux-list';

export const AppRouter = () => {
	return (
		<Router>
			<Layout>
				<Switch>
					<Route exact path='/' component={MainPage} />
					<Route path='/about' component={AboutPage} />
					<Route path='/blog/:id' component={BlogItemPage} />
					<Route path='/redux-list' component={ReduxListPage} />
				</Switch>
			</Layout>
		</Router>
	);
};
