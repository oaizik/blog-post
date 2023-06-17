import { Routes, Route } from 'react-router-dom';

import { WelcomePage } from '../../pages/welcome-page/welcome-page.component';
import { BlogPage } from '../../pages/blog-page/blog-page.component';
import { PostPage } from '../../pages/post-page/post-page.component';

export const Navigator = () => {

	return (
		<Routes>
			<Route path="/" element={<WelcomePage />} />
			<Route path="/blog" element={<BlogPage />} />
			<Route path="/post/:postId" element={<PostPage />} />
			<Route path="*" element={<WelcomePage />} />
		</Routes>
	)
};
