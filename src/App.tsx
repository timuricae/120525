import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import courseData from './courseData.tsx';
import HomePage from './HomePage.tsx';
import Section from './Section.tsx';
import { Suspense } from 'react';

export const App = () => {

	return (
		<>
			<Router>
				<Suspense fallback={<div>Загрузка...</div>}>
					<Routes>
						<Route path='/' element={<HomePage />}></Route>
						{courseData.map((section) => (
							<Route
								key={section.id}
								path={`/section/${section.id}`}
								element={<Section />}
							>
								{section.lessons.map((lesson) => {
									return (
										<Route
											key={lesson.id}
											path={`lesson/${lesson.id}`}
											element={
												<Suspense fallback={<div>Загрузка...</div>}>
													<lesson.component />
												</Suspense>
											}
										/>
									);
								})}
							</Route>
						))}
					</Routes>

				</Suspense>
			</Router>
		</>
	)
}