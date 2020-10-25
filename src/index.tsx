import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.scss';
import 'antd/dist/antd.css';
import * as serviceWorker from './serviceWorker';
import App from './app';
import Splash from "./assets/ui/splash/splash";

ReactDOM.render(
	<Router>
		<Suspense fallback={<Splash />}>
			<App />
		</Suspense>
	</Router>
	, document.getElementById('root'));

serviceWorker.unregister();
