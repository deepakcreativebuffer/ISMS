import React, { lazy } from 'react';
import {pagesMenu }from "../menu"


const AUTH = {
	PAGE_404: lazy(() => import('../pages/presentation/auth/Page404')),
    LOGIN: lazy(()=>import('../pages/presentation/auth/Login')),
    SIGNUP: lazy(()=>import('../pages/presentation/auth/Signup'))
};

const LANDING = {
	DASHBOARD: lazy(() => import('../pages/presentation/dashboard/DashboardPage')),
};

const PAGE ={
	INSIDENTS: lazy(() => import('../pages/presentation/insidents/Insidents')),

}

export const presentation = [
	/**
	 * Auth Page
	 */
	{
		path: pagesMenu.page404.path,
		element: <AUTH.PAGE_404 />,
	},

	{
		path: pagesMenu.login.path,
		element: <AUTH.LOGIN />,
	},

	{
		path: pagesMenu.signUp.path,
		element: <AUTH.SIGNUP />,
	},

	/**
	 * Dashboard Page
	 */
	{
		path: pagesMenu.dashboard.path,
		element: <LANDING.DASHBOARD />,
	},
	{
		path: pagesMenu.insidents.path,
		element: <PAGE.INSIDENTS />,
	}

]

const contents = [...presentation
];

export default contents;